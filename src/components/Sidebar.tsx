import React, { useState } from 'react';
import { Event, Song } from '../types';
import { Music, Plus, RotateCcw, Calendar, Download, GripVertical, X, ChevronUp, ChevronDown } from 'lucide-react';
import { shiftNote } from '../utils/musicTheory';

interface SidebarProps {
  events: Event[];
  library: Song[];
  activeEventId: string | null;
  isOpen?: boolean;
  onClose?: () => void;
  onSelectEvent: (id: string) => void;
  onMoveSong: (eventId: string, fromIndex: number, toIndex: number) => void;
  onOpenNewSongModal: () => void;
  onResetAllToPresets: () => void;
  onExportBackup: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  events,
  library,
  activeEventId,
  isOpen = false,
  onClose,
  onSelectEvent,
  onMoveSong,
  onOpenNewSongModal,
  onResetAllToPresets,
  onExportBackup
}) => {
  const [draggedSongIdx, setDraggedSongIdx] = useState<number | null>(null);
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);

  const activeEvent = events.find(e => e.id === activeEventId);

  const handleSelectEvent = (id: string) => {
    onSelectEvent(id);
    onClose?.();
  };

  const handleSongClick = (index: number) => {
    const cardEl = document.getElementById(`song-card-${index}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onClose?.();
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.stopPropagation();
    setDraggedSongIdx(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggedSongIdx === null) return;
    setDragOverIdx(index);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOverIdx(null);
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggedSongIdx === null || !activeEvent || draggedSongIdx === targetIndex) {
      setDraggedSongIdx(null);
      setDragOverIdx(null);
      return;
    }
    onMoveSong(activeEvent.id, draggedSongIdx, targetIndex);
    setDraggedSongIdx(null);
    setDragOverIdx(null);
  };

  return (
    <>
      {/* Mobile/Tablet Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] bg-stage-sidebar border-r border-stage-border flex flex-col h-full shrink-0 select-none transform transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-4 border-b border-stage-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-stage-accent flex items-center justify-center text-white shadow">
              <Music className="w-4 h-4" />
            </div>
            <div>
              <h1 className="font-bold text-base tracking-tight text-stage-text">GigSet</h1>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-stage-muted">
                Live Songbook
              </span>
            </div>
          </div>

          {/* Close Button for Navigation Drawer on Mobile */}
          <button
            onClick={onClose}
            aria-label="Close Navigation Drawer"
            className="p-1.5 rounded-lg text-stage-muted hover:text-stage-text hover:bg-stage-hover lg:hidden transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Events & Setlist Outline */}
        <div className="flex-1 overflow-y-auto p-2">
          <div className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-stage-muted">
            Events & Setlists
          </div>
          <div className="space-y-2 mt-1">
            {events.map(evt => {
              const isActive = evt.id === activeEventId;
              return (
                <div
                  key={evt.id}
                  className={`rounded-lg transition-colors border ${
                    isActive
                      ? 'bg-stage-hover/60 border-stage-border shadow-sm'
                      : 'border-transparent hover:bg-stage-hover/30'
                  }`}
                >
                  {/* Event Title Row */}
                  <div
                    onClick={() => handleSelectEvent(evt.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm cursor-pointer ${
                      isActive ? 'text-stage-text font-medium' : 'text-stage-muted hover:text-stage-text'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Calendar className={`w-4 h-4 shrink-0 ${isActive ? 'text-stage-accent' : 'text-stage-muted'}`} />
                      <span className="truncate">{evt.name}</span>
                    </div>

                    <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-stage-card text-stage-muted">
                      {evt.songs.length}
                    </span>
                  </div>

                  {/* Active Event Song Setlist Outline */}
                  {isActive && evt.songs.length > 0 && (
                    <div className="px-2 pb-2.5 pt-1">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-stage-muted px-2 mb-1.5 flex items-center justify-between">
                        <span>Setlist Order</span>
                        <span className="font-normal lowercase">drag or tap to reorder</span>
                      </div>

                      <div className="space-y-1">
                        {evt.songs.map((entry, idx) => {
                          const song = library.find(s => s.id === entry.libraryId);
                          if (!song) return null;
                          const currentKey = shiftNote(song.defaultKey, entry.transpose);
                          const isDragging = draggedSongIdx === idx;
                          const isOver = dragOverIdx === idx && draggedSongIdx !== idx;

                          return (
                            <div
                              key={`${entry.libraryId}-${idx}`}
                              draggable
                              onDragStart={e => handleDragStart(e, idx)}
                              onDragOver={e => handleDragOver(e, idx)}
                              onDragLeave={handleDragLeave}
                              onDrop={e => handleDrop(e, idx)}
                              onClick={() => handleSongClick(idx)}
                              className={`flex items-center justify-between px-2 py-1.5 rounded-md text-xs cursor-pointer transition-all border ${
                                isDragging
                                  ? 'opacity-40 border-dashed border-stage-accent bg-stage-accent/10'
                                  : isOver
                                  ? 'border-t-2 border-t-stage-accent border-stage-border bg-stage-hover'
                                  : 'bg-stage-card/70 border-stage-border/60 hover:border-stage-border hover:bg-stage-card'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 min-w-0">
                                <div
                                  title="Drag to reorder"
                                  className="cursor-grab active:cursor-grabbing text-stage-muted hover:text-stage-text p-0.5"
                                >
                                  <GripVertical className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-[11px] font-mono text-stage-muted w-4 shrink-0">
                                  {idx + 1}.
                                </span>
                                <span className="truncate font-medium text-stage-text">
                                  {song.title}
                                </span>
                                {entry.performer && (
                                  <span className="text-[10px] text-stage-muted truncate max-w-[75px] hidden sm:inline" title={`Performer: ${entry.performer}`}>
                                    ({entry.performer})
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center gap-1 shrink-0 ml-1.5">
                                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-stage-hover text-stage-accent">
                                  {currentKey}
                                </span>

                                {/* Touch-Friendly Reorder Chevrons */}
                                <div className="flex items-center">
                                  <button
                                    type="button"
                                    title="Move song up"
                                    disabled={idx === 0}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onMoveSong(evt.id, idx, idx - 1);
                                    }}
                                    className="p-1 rounded text-stage-muted hover:text-stage-text hover:bg-stage-hover disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-stage-muted transition-colors"
                                  >
                                    <ChevronUp className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    type="button"
                                    title="Move song down"
                                    disabled={idx === evt.songs.length - 1}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onMoveSong(evt.id, idx, idx + 1);
                                    }}
                                    className="p-1 rounded text-stage-muted hover:text-stage-text hover:bg-stage-hover disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-stage-muted transition-colors"
                                  >
                                    <ChevronDown className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Controls */}
        <div className="p-3 border-t border-stage-border space-y-2 bg-stage-sidebar">
          <button
            onClick={() => {
              onOpenNewSongModal();
              onClose?.();
            }}
            className="w-full py-2 px-3 rounded-lg border border-dashed border-stage-border hover:border-stage-accent bg-stage-hover/40 hover:bg-stage-hover text-stage-text text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-stage-accent" />
            <span>Add to Song Library</span>
          </button>

          <button
            onClick={() => {
              onExportBackup();
              onClose?.();
            }}
            title="Download full library and events as JSON to save locally"
            className="w-full py-1.5 px-3 rounded-lg text-stage-muted hover:text-stage-text hover:bg-stage-hover text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-stage-muted" />
            <span>Export Backup (JSON)</span>
          </button>

          <button
            onClick={() => {
              onResetAllToPresets();
              onClose?.();
            }}
            title="Clear local modifications and reload repository presets"
            className="w-full py-1.5 px-3 rounded-lg text-stage-muted hover:text-stage-text hover:bg-stage-hover text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3 h-3 text-stage-muted" />
            <span>Reset All to Presets</span>
          </button>
        </div>
      </aside>
    </>
  );
};

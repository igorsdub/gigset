import React from 'react';
import { Event } from '../types';
import { Music, Plus, RotateCcw, Calendar, Trash2, Download } from 'lucide-react';

interface SidebarProps {
  events: Event[];
  activeEventId: string | null;
  onSelectEvent: (id: string) => void;
  onNewEvent: () => void;
  onDeleteEvent: (id: string) => void;
  onOpenNewSongModal: () => void;
  onResetAllToPresets: () => void;
  onExportBackup: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  events,
  activeEventId,
  onSelectEvent,
  onNewEvent,
  onDeleteEvent,
  onOpenNewSongModal,
  onResetAllToPresets,
  onExportBackup
}) => {
  return (
    <aside className="w-72 bg-stage-sidebar border-r border-stage-border flex flex-col h-full shrink-0 select-none">
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

        {/* New Event */}
        <button
          onClick={onNewEvent}
          title="Create a new event"
          className="flex items-center gap-1 bg-stage-accent hover:opacity-90 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-opacity shadow"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New</span>
        </button>
      </div>

      {/* Events List */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-stage-muted">
          Events
        </div>
        <div className="space-y-1 mt-1">
          {events.map(evt => {
            const isActive = evt.id === activeEventId;
            return (
              <div
                key={evt.id}
                onClick={() => onSelectEvent(evt.id)}
                className={`group flex items-center justify-between px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors ${
                  isActive
                    ? 'bg-stage-hover text-stage-text font-medium border border-stage-border shadow-sm'
                    : 'text-stage-muted hover:text-stage-text hover:bg-stage-hover/60'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Calendar className={`w-4 h-4 shrink-0 ${isActive ? 'text-stage-accent' : 'text-stage-muted'}`} />
                  <span className="truncate">{evt.name}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-stage-card text-stage-muted">
                    {evt.songs.length}
                  </span>
                  {events.length > 1 && (
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        if (window.confirm(`Delete event "${evt.name}"?`)) {
                          onDeleteEvent(evt.id);
                        }
                      }}
                      title="Delete event"
                      className="opacity-0 group-hover:opacity-100 p-1 text-stage-muted hover:text-red-500 rounded transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="p-3 border-t border-stage-border space-y-2 bg-stage-sidebar">
        <button
          onClick={onOpenNewSongModal}
          className="w-full py-2 px-3 rounded-lg border border-dashed border-stage-border hover:border-stage-accent bg-stage-hover/40 hover:bg-stage-hover text-stage-text text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
        >
          <Plus className="w-3.5 h-3.5 text-stage-accent" />
          <span>Add to Song Library</span>
        </button>

        <button
          onClick={onExportBackup}
          title="Download full library and events as JSON to save locally"
          className="w-full py-1.5 px-3 rounded-lg text-stage-muted hover:text-stage-text hover:bg-stage-hover text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <Download className="w-3.5 h-3.5 text-stage-muted" />
          <span>Export Backup (JSON)</span>
        </button>

        <button
          onClick={onResetAllToPresets}
          title="Clear local modifications and reload repository presets"
          className="w-full py-1.5 px-3 rounded-lg text-stage-muted hover:text-stage-text hover:bg-stage-hover text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3 h-3 text-stage-muted" />
          <span>Reset All to Presets</span>
        </button>
      </div>
    </aside>
  );
};

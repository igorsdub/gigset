import React from 'react';
import { Event } from '../types';
import { Music, Plus, RotateCcw, Calendar, Trash2 } from 'lucide-react';

interface SidebarProps {
  events: Event[];
  activeEventId: string | null;
  onSelectEvent: (id: string) => void;
  onNewEvent: () => void;
  onDeleteEvent: (id: string) => void;
  onOpenNewSongModal: () => void;
  onResetAllToPresets: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  events,
  activeEventId,
  onSelectEvent,
  onNewEvent,
  onDeleteEvent,
  onOpenNewSongModal,
  onResetAllToPresets
}) => {
  return (
    <aside className="w-72 bg-stage-sidebar border-r border-stage-border flex flex-col h-full shrink-0">
      {/* Brand Header */}
      <div className="p-4 border-b border-stage-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow">
            <Music className="w-4 h-4" />
          </div>
          <div>
            <h1 className="font-bold text-base tracking-tight text-white">GigSet</h1>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-zinc-400">
              Live Songbook
            </span>
          </div>
        </div>

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
        <div className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400">
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
                    ? 'bg-zinc-800 text-white font-medium border border-zinc-700/80 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Calendar className={`w-4 h-4 shrink-0 ${isActive ? 'text-indigo-400' : 'text-zinc-500'}`} />
                  <span className="truncate">{evt.name}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-zinc-900/80 text-zinc-400">
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
                      className="opacity-0 group-hover:opacity-100 p-1 text-zinc-500 hover:text-red-400 rounded transition-opacity"
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
          className="w-full py-2 px-3 rounded-lg border border-dashed border-zinc-700 hover:border-zinc-500 bg-zinc-800/40 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
        >
          <Plus className="w-3.5 h-3.5 text-indigo-400" />
          <span>Add to Song Library</span>
        </button>

        <button
          onClick={onResetAllToPresets}
          title="Clear local modifications and reload repository presets"
          className="w-full py-1.5 px-3 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3 h-3 text-zinc-400" />
          <span>Reset All to Presets</span>
        </button>
      </div>
    </aside>
  );
};

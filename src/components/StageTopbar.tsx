import React from 'react';
import { Event, ViewMode } from '../types';
import { Menu, Grid, FileText } from 'lucide-react';

interface StageTopbarProps {
  activeEvent: Event | undefined;
  masterViewMode: ViewMode;
  onSetMasterViewMode: (mode: ViewMode) => void;
  onOpenDrawer: () => void;
}

export const StageTopbar: React.FC<StageTopbarProps> = ({
  activeEvent,
  masterViewMode,
  onSetMasterViewMode,
  onOpenDrawer
}) => {
  const isChordView = masterViewMode === 'chord' || masterViewMode === 'grid';

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-3.5 py-2.5 bg-stage-sidebar/95 backdrop-blur border-b border-stage-border lg:hidden shrink-0">
      {/* Left: Drawer Toggle & Event Indicator */}
      <div className="flex items-center gap-2.5 min-w-0">
        <button
          onClick={onOpenDrawer}
          aria-label="Open Navigation Drawer"
          className="p-1.5 rounded-lg bg-stage-hover text-stage-text hover:text-white border border-stage-border transition-colors flex items-center justify-center shrink-0"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="min-w-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="font-semibold text-sm text-stage-text truncate">
              {activeEvent ? activeEvent.name : 'GigSet'}
            </span>
            {activeEvent && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stage-hover text-stage-muted shrink-0">
                {activeEvent.songs.length}
              </span>
            )}
          </div>
          {activeEvent?.venue && (
            <p className="text-[11px] text-stage-muted truncate">
              {activeEvent.venue}
            </p>
          )}
        </div>
      </div>

      {/* Right: Quick View Mode Switcher */}
      <div className="flex items-center bg-stage-hover rounded-lg p-0.5 border border-stage-border shrink-0 ml-2">
        <button
          onClick={() => onSetMasterViewMode('chord')}
          title="Switch to Chord View"
          className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
            isChordView
              ? 'bg-stage-accent text-white shadow-sm'
              : 'text-stage-muted hover:text-stage-text'
          }`}
        >
          <Grid className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Chords</span>
        </button>
        <button
          onClick={() => onSetMasterViewMode('lyrics')}
          title="Switch to Lyrics View"
          className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
            masterViewMode === 'lyrics'
              ? 'bg-stage-accent text-white shadow-sm'
              : 'text-stage-muted hover:text-stage-text'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Lyrics</span>
        </button>
      </div>
    </header>
  );
};

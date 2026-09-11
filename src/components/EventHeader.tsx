import React, { useState, useEffect } from 'react';
import { Event, ViewMode } from '../types';
import { Plus, Grid, FileText, Sun, Moon, MapPin } from 'lucide-react';

interface EventHeaderProps {
  event: Event;
  masterViewMode: ViewMode;
  onSetMasterViewMode: (mode: ViewMode) => void;
  onAddSong: () => void;
}

export const EventHeader: React.FC<EventHeaderProps> = ({
  event,
  masterViewMode,
  onSetMasterViewMode,
  onAddSong
}) => {
  const [wakeLockActive, setWakeLockActive] = useState(false);
  const [wakeLockSentinel, setWakeLockSentinel] = useState<any>(null);

  const isChordView = masterViewMode === 'chord' || masterViewMode === 'grid';

  // Screen wake lock support for stage mode
  const toggleWakeLock = async () => {
    if ('wakeLock' in navigator) {
      if (wakeLockActive && wakeLockSentinel) {
        await wakeLockSentinel.release();
        setWakeLockSentinel(null);
        setWakeLockActive(false);
      } else {
        try {
          const sentinel = await (navigator as any).wakeLock.request('screen');
          setWakeLockSentinel(sentinel);
          setWakeLockActive(true);
          sentinel.addEventListener('release', () => {
            setWakeLockActive(false);
            setWakeLockSentinel(null);
          });
        } catch (err) {
          console.warn('Wake Lock request failed:', err);
        }
      }
    } else {
      alert('Screen Wake Lock is not supported by your browser.');
    }
  };

  useEffect(() => {
    return () => {
      if (wakeLockSentinel) {
        wakeLockSentinel.release();
      }
    };
  }, [wakeLockSentinel]);

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stage-border mb-6">
      <div>
        <div className="flex items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-stage-text tracking-tight">
            {event.name}
          </h2>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-stage-hover text-stage-text">
            {event.songs.length} {event.songs.length === 1 ? 'song' : 'songs'}
          </span>
        </div>
        {(event.venue || event.date) && (
          <div className="flex items-center gap-4 text-xs text-stage-muted mt-1">
            {event.venue && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-stage-muted" />
                {event.venue}
              </span>
            )}
            {event.date && <span>{event.date}</span>}
          </div>
        )}
      </div>

      {/* Action Toolbar */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* Master View Switcher: Chord View vs Lyrics View */}
        <div className="flex items-center bg-stage-hover rounded-lg p-1 border border-stage-border shadow-sm">
          <button
            onClick={() => onSetMasterViewMode('chord')}
            title="Switch all songs to Chord View (form and measures)"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              isChordView
                ? 'bg-stage-accent text-white shadow-sm'
                : 'text-stage-muted hover:text-stage-text'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Chord View</span>
          </button>
          <button
            onClick={() => onSetMasterViewMode('lyrics')}
            title="Switch all songs to Lyrics View (lyrics & chords)"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              masterViewMode === 'lyrics'
                ? 'bg-stage-accent text-white shadow-sm'
                : 'text-stage-muted hover:text-stage-text'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Lyrics View</span>
          </button>
        </div>

        {/* Screen Wake-Lock for stage */}
        <button
          onClick={toggleWakeLock}
          title={wakeLockActive ? 'Screen wake-lock active (keeps screen awake)' : 'Enable screen wake-lock for stage'}
          className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
            wakeLockActive
              ? 'bg-amber-500/20 text-amber-500 border-amber-500/40'
              : 'bg-stage-hover text-stage-muted border-stage-border hover:text-stage-text'
          }`}
        >
          {wakeLockActive ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Add Song to Event */}
        <button
          onClick={onAddSong}
          className="flex items-center gap-1.5 bg-stage-accent hover:opacity-90 text-white px-3.5 py-2 rounded-lg text-xs font-semibold shadow-md transition-opacity"
        >
          <Plus className="w-4 h-4" />
          <span>Add Song</span>
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { Song, SongEntry, ViewMode } from '../types';
import { ChordGridView } from './ChordGridView';
import { LyricsView } from './LyricsView';
import { shiftNote, formatKeyShift } from '../utils/musicTheory';
import { exportSongChordPro } from '../utils/exportUtils';
import { Grid, FileText, ChevronUp, ChevronDown, Trash2, GripVertical, Download } from 'lucide-react';

interface SongCardProps {
  song: Song;
  entry: SongEntry;
  index: number;
  totalSongs: number;
  masterViewMode: ViewMode;
  onShiftKey: (amount: number) => void;
  onMove: (direction: number) => void;
  onRemove: () => void;
  onToggleViewMode: () => void;
  onDragStart: (e: React.DragEvent, index: number) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, index: number) => void;
}

export const SongCard: React.FC<SongCardProps> = ({
  song,
  entry,
  index,
  totalSongs,
  masterViewMode,
  onShiftKey,
  onMove,
  onRemove,
  onToggleViewMode,
  onDragStart,
  onDragOver,
  onDrop
}) => {
  const effectiveViewMode = entry.viewModeOverride || masterViewMode;
  const currentKey = shiftNote(song.defaultKey, entry.transpose);

  return (
    <div
      draggable
      onDragStart={e => onDragStart(e, index)}
      onDragOver={onDragOver}
      onDrop={e => onDrop(e, index)}
      className="bg-stage-card border border-stage-border rounded-xl p-4 sm:p-5 mb-5 shadow-md transition-all duration-150 hover:border-stage-accent/50"
    >
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stage-border pb-3 mb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            title="Drag to reorder"
            className="cursor-grab active:cursor-grabbing text-stage-muted hover:text-stage-text p-1 -ml-1 rounded"
          >
            <GripVertical className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-stage-muted">#{index + 1}</span>
              <h3 className="font-semibold text-lg text-stage-text truncate">{song.title}</h3>
              <span className="text-sm text-stage-muted hidden sm:inline">- {song.artist}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-stage-muted mt-0.5">
              <span>
                Key: <strong className="text-stage-text font-mono">{currentKey}</strong>
                {entry.transpose !== 0 && (
                  <span className="text-stage-muted ml-1">({song.defaultKey})</span>
                )}
              </span>
              <span className="px-1.5 py-0.5 rounded bg-stage-hover text-stage-text font-mono">
                Shift: {formatKeyShift(entry.transpose)}
              </span>
              {song.tempo && <span>{song.tempo} BPM</span>}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* View mode toggle */}
          <button
            onClick={onToggleViewMode}
            title={`Switch to ${effectiveViewMode === 'grid' ? 'Lyrics & Chords' : 'Chord Grid'} view`}
            className="flex items-center gap-1 bg-stage-hover hover:bg-stage-accent hover:text-white text-stage-text px-2.5 py-1.5 rounded-lg text-xs font-medium border border-stage-border transition-colors"
          >
            {effectiveViewMode === 'grid' ? (
              <>
                <FileText className="w-3.5 h-3.5 text-stage-accent" />
                <span className="hidden sm:inline">Lyrics</span>
              </>
            ) : (
              <>
                <Grid className="w-3.5 h-3.5 text-stage-chord" />
                <span className="hidden sm:inline">Grid</span>
              </>
            )}
          </button>

          {/* Key shifts */}
          <div className="flex items-center bg-stage-hover rounded-lg border border-stage-border p-0.5">
            <button
              onClick={() => onShiftKey(-1)}
              title="Transpose key down 1 semitone"
              className="px-2 py-1 text-xs text-stage-text hover:bg-stage-card rounded transition-colors"
            >
              Key -1
            </button>
            <div className="w-[1px] h-3 bg-stage-border"></div>
            <button
              onClick={() => onShiftKey(1)}
              title="Transpose key up 1 semitone"
              className="px-2 py-1 text-xs text-stage-text hover:bg-stage-card rounded transition-colors"
            >
              Key +1
            </button>
          </div>

          {/* Reordering */}
          <div className="flex items-center bg-stage-hover rounded-lg border border-stage-border p-0.5">
            <button
              onClick={() => onMove(-1)}
              disabled={index === 0}
              title="Move song up"
              className="p-1 text-stage-text hover:bg-stage-card rounded disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
            <div className="w-[1px] h-3 bg-stage-border"></div>
            <button
              onClick={() => onMove(1)}
              disabled={index === totalSongs - 1}
              title="Move song down"
              className="p-1 text-stage-text hover:bg-stage-card rounded disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Export .cho */}
          <button
            onClick={() => exportSongChordPro(song)}
            title="Download song as .cho file to commit locally"
            className="p-1.5 text-stage-muted hover:text-stage-text hover:bg-stage-hover rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Remove */}
          <button
            onClick={onRemove}
            title="Remove song from set"
            className="p-1.5 text-stage-muted hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors ml-0.5"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Rendering */}
      <div className="overflow-x-auto">
        {effectiveViewMode === 'grid' ? (
          <ChordGridView content={song.content} transpose={entry.transpose} />
        ) : (
          <LyricsView content={song.content} transpose={entry.transpose} />
        )}
      </div>
    </div>
  );
};

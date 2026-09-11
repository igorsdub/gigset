import React from 'react';
import { Song, SongEntry, ViewMode } from '../types';
import { ChordGridView } from './ChordGridView';
import { LyricsView } from './LyricsView';
import { shiftNote, formatKeyShift } from '../utils/musicTheory';
import { Grid, FileText, ChevronUp, ChevronDown, Trash2, GripVertical } from 'lucide-react';

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
      className="bg-stage-card border border-stage-border rounded-xl p-4 sm:p-5 mb-5 shadow-lg transition-all duration-150 hover:border-zinc-500/50"
    >
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stage-border pb-3 mb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            title="Drag to reorder"
            className="cursor-grab active:cursor-grabbing text-zinc-500 hover:text-zinc-300 p-1 -ml-1 rounded"
          >
            <GripVertical className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-zinc-400">#{index + 1}</span>
              <h3 className="font-semibold text-lg text-white truncate">{song.title}</h3>
              <span className="text-sm text-zinc-400 hidden sm:inline">- {song.artist}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-400 mt-0.5">
              <span>
                Key: <strong className="text-white font-mono">{currentKey}</strong>
                {entry.transpose !== 0 && (
                  <span className="text-zinc-500 ml-1">({song.defaultKey})</span>
                )}
              </span>
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">
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
            className="flex items-center gap-1 bg-zinc-800 hover:bg-stage-accent text-zinc-200 hover:text-white px-2.5 py-1.5 rounded-lg text-xs font-medium border border-zinc-700/60 transition-colors"
          >
            {effectiveViewMode === 'grid' ? (
              <>
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden sm:inline">Show Lyrics</span>
              </>
            ) : (
              <>
                <Grid className="w-3.5 h-3.5 text-sky-400" />
                <span className="hidden sm:inline">Show Grid</span>
              </>
            )}
          </button>

          {/* Key shifts */}
          <div className="flex items-center bg-zinc-800 rounded-lg border border-zinc-700/60 p-0.5">
            <button
              onClick={() => onShiftKey(-1)}
              title="Transpose key down 1 semitone"
              className="px-2 py-1 text-xs text-zinc-300 hover:text-white hover:bg-zinc-700 rounded transition-colors"
            >
              Key -1
            </button>
            <div className="w-[1px] h-3 bg-zinc-700"></div>
            <button
              onClick={() => onShiftKey(1)}
              title="Transpose key up 1 semitone"
              className="px-2 py-1 text-xs text-zinc-300 hover:text-white hover:bg-zinc-700 rounded transition-colors"
            >
              Key +1
            </button>
          </div>

          {/* Reordering */}
          <div className="flex items-center bg-zinc-800 rounded-lg border border-zinc-700/60 p-0.5">
            <button
              onClick={() => onMove(-1)}
              disabled={index === 0}
              title="Move song up"
              className="p-1 text-zinc-300 hover:text-white hover:bg-zinc-700 rounded disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
            <div className="w-[1px] h-3 bg-zinc-700"></div>
            <button
              onClick={() => onMove(1)}
              disabled={index === totalSongs - 1}
              title="Move song down"
              className="p-1 text-zinc-300 hover:text-white hover:bg-zinc-700 rounded disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Remove */}
          <button
            onClick={onRemove}
            title="Remove song from set"
            className="p-1.5 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors ml-1"
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

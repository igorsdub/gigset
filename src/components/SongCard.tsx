import React from 'react';
import { Song, SongEntry, ViewMode } from '../types';
import { ChordView } from './ChordView';
import { LyricsView } from './LyricsView';
import { shiftNote, formatKeyShift } from '../utils/musicTheory';
import { exportSongChordPro } from '../utils/exportUtils';
import { Grid, FileText, Trash2, Download, RotateCcw, ExternalLink } from 'lucide-react';

interface SongCardProps {
  song: Song;
  entry: SongEntry;
  index: number;
  masterViewMode: ViewMode;
  onShiftKey: (amount: number) => void;
  onResetKey: () => void;
  onRemove: () => void;
  onToggleViewMode: () => void;
}

export const SongCard: React.FC<SongCardProps> = ({
  song,
  entry,
  index,
  masterViewMode,
  onShiftKey,
  onResetKey,
  onRemove,
  onToggleViewMode
}) => {
  const effectiveViewMode = entry.viewModeOverride || masterViewMode;
  const isChordView = effectiveViewMode === 'chord' || effectiveViewMode === 'grid';
  const currentKey = shiftNote(song.defaultKey, entry.transpose);
  const isShifted = entry.transpose !== 0;

  return (
    <div
      id={`song-card-${index}`}
      className="bg-stage-card border border-stage-border rounded-xl p-4 sm:p-5 mb-5 shadow-md transition-all duration-150 hover:border-stage-accent/50 scroll-mt-6"
    >
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stage-border pb-3 mb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-stage-muted">#{index + 1}</span>
              <h3 className="font-semibold text-lg text-stage-text truncate">{song.title}</h3>
              <span className="text-sm text-stage-muted hidden sm:inline">- {song.artist}</span>
              {entry.performer && (
                <span className="px-2 py-0.5 rounded-full bg-stage-accent/15 text-stage-accent border border-stage-accent/30 text-xs font-medium">
                  {entry.performer}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 text-xs text-stage-muted mt-0.5 flex-wrap">
              <span>
                Key: <strong className="text-stage-text font-mono">{currentKey}</strong>
                {isShifted && (
                  <span className="text-stage-muted ml-1">({song.defaultKey})</span>
                )}
              </span>
              <span className="px-1.5 py-0.5 rounded bg-stage-hover text-stage-text font-mono">
                Shift: {formatKeyShift(entry.transpose)}
              </span>
              {song.tempo && <span>{song.tempo} BPM</span>}
              {song.referenceUrl && (
                <a
                  href={song.referenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Listen to reference track on YouTube Music"
                  className="inline-flex items-center gap-1 text-stage-accent hover:underline decoration-dotted transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>YouTube Music</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* View mode toggle */}
          <button
            onClick={onToggleViewMode}
            title={`Switch to ${isChordView ? 'Lyrics View' : 'Chord View'}`}
            className="flex items-center gap-1 bg-stage-hover hover:bg-stage-accent hover:text-white text-stage-text px-2.5 py-1.5 rounded-lg text-xs font-medium border border-stage-border transition-colors"
          >
            {isChordView ? (
              <>
                <FileText className="w-3.5 h-3.5 text-stage-accent" />
                <span className="hidden sm:inline">Lyrics</span>
              </>
            ) : (
              <>
                <Grid className="w-3.5 h-3.5 text-stage-chord" />
                <span className="hidden sm:inline">Chords</span>
              </>
            )}
          </button>

          {/* Key shifts & Fixed Reset Key (Option B) */}
          <div className="flex items-center bg-stage-hover rounded-lg border border-stage-border p-0.5">
            <button
              onClick={() => onShiftKey(-1)}
              title="Transpose key down 1 semitone"
              className="px-2 py-1 text-xs text-stage-text hover:bg-stage-card rounded transition-colors font-medium"
            >
              Key -1
            </button>
            <div className="w-[1px] h-3.5 bg-stage-border mx-0.5"></div>
            <button
              onClick={isShifted ? onResetKey : undefined}
              disabled={!isShifted}
              title={
                isShifted
                  ? `Reset key to original preset (${song.defaultKey})`
                  : 'Already in original key'
              }
              className={`flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors font-medium ${
                isShifted
                  ? 'text-amber-400 hover:text-amber-300 hover:bg-stage-card cursor-pointer'
                  : 'text-stage-muted/40 cursor-default'
              }`}
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
            <div className="w-[1px] h-3.5 bg-stage-border mx-0.5"></div>
            <button
              onClick={() => onShiftKey(1)}
              title="Transpose key up 1 semitone"
              className="px-2 py-1 text-xs text-stage-text hover:bg-stage-card rounded transition-colors font-medium"
            >
              Key +1
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
        {isChordView ? (
          <ChordView content={song.content} transpose={entry.transpose} />
        ) : (
          <LyricsView content={song.content} transpose={entry.transpose} />
        )}
      </div>
    </div>
  );
};

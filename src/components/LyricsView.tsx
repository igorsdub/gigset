import React from 'react';
import { parseLyricsView } from '../utils/chordParser';

interface LyricsViewProps {
  content: string;
  transpose: number;
}

export const LyricsView: React.FC<LyricsViewProps> = ({ content, transpose }) => {
  const lines = parseLyricsView(content, transpose);

  return (
    <div className="tab-sheet pt-3 pb-2 text-stage-text font-mono overflow-x-auto select-text">
      {lines.map((line, lIdx) => {
        if (line.isSectionHeader) {
          return (
            <div
              key={lIdx}
              className="text-xs font-sans font-bold uppercase tracking-wider text-stage-accent mt-5 mb-2 pb-1 border-b border-stage-border select-none"
            >
              {line.sectionName}
            </div>
          );
        }

        if (line.isChordOnly) {
          return (
            <div key={lIdx} className="my-1.5 leading-none">
              <div className="text-stage-chord font-bold whitespace-pre tracking-wide text-sm sm:text-base">
                {line.chordLine}
              </div>
            </div>
          );
        }

        // Standard 2-line synchronized tab row (chords strictly on top, lyrics on bottom)
        const hasChords = Boolean(line.chordLine && line.chordLine.trim().length > 0);
        const hasLyrics = Boolean(line.lyricLine && line.lyricLine.trim().length > 0);

        if (!hasChords && !hasLyrics) {
          return <div key={lIdx} className="h-4" />;
        }

        return (
          <div key={lIdx} className="my-2 leading-tight">
            {hasChords && (
              <div className="text-stage-chord font-bold whitespace-pre tracking-normal text-sm sm:text-base select-text">
                {line.chordLine}
              </div>
            )}
            {hasLyrics && (
              <div className="text-stage-text whitespace-pre tracking-normal text-sm sm:text-base select-text opacity-95">
                {line.lyricLine}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

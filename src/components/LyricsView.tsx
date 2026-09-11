import React from 'react';
import { parseLyricsView } from '../utils/chordParser';

interface LyricsViewProps {
  content: string;
  transpose: number;
}

export const LyricsView: React.FC<LyricsViewProps> = ({ content, transpose }) => {
  const lines = parseLyricsView(content, transpose);

  return (
    <div className="tab-sheet pt-4 pb-2 text-zinc-200">
      {lines.map((line, lIdx) => {
        if (line.isSectionHeader) {
          return (
            <div
              key={lIdx}
              className="text-xs font-sans font-bold uppercase tracking-wider text-indigo-400 mt-4 mb-2 pb-1 border-b border-zinc-700/60"
            >
              {line.sectionName}
            </div>
          );
        }

        return (
          <div key={lIdx} className="min-h-[2rem]">
            {line.tokens.map((token, tIdx) => {
              if (token.type === 'chord') {
                return (
                  <span
                    key={tIdx}
                    className="chord-inline"
                    data-chord={token.text}
                  />
                );
              }
              return <span key={tIdx}>{token.text}</span>;
            })}
          </div>
        );
      })}
    </div>
  );
};

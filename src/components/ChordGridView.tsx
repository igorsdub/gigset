import React from 'react';
import { parseChordGrid } from '../utils/chordParser';

interface ChordGridViewProps {
  content: string;
  transpose: number;
}

export const ChordGridView: React.FC<ChordGridViewProps> = ({ content, transpose }) => {
  const sections = parseChordGrid(content, transpose);

  if (sections.length === 0) {
    return <div className="text-gray-400 italic py-4">No chord form detected.</div>;
  }

  return (
    <div className="space-y-6 pt-2 select-none">
      {sections.map((section, sIdx) => {
        // Group measures into rows of 4
        const rows: (typeof section.measures)[] = [];
        for (let i = 0; i < section.measures.length; i += 4) {
          rows.push(section.measures.slice(i, i + 4));
        }

        return (
          <div key={sIdx} className="bg-stage-card/50 rounded-lg p-3 border border-stage-border">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2 px-1">
              {section.name}
            </div>

            <div className="space-y-1">
              {rows.map((row, rIdx) => (
                <div key={rIdx} className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-t-2 border-zinc-600 first:border-t-2">
                  {row.map((measure, mIdx) => (
                    <div
                      key={mIdx}
                      className={`measure-box ${measure.isRepeatStart ? 'repeat-start' : ''} ${
                        measure.isRepeatEnd ? 'repeat-end' : ''
                      }`}
                    >
                      <div className="flex items-center justify-around w-full px-2 gap-1 flex-wrap">
                        {measure.chords.map((chord, cIdx) => (
                          <span
                            key={cIdx}
                            className={`font-mono font-bold tracking-tight ${
                              chord === '%'
                                ? 'text-zinc-500 text-base'
                                : 'text-stage-chord text-lg sm:text-xl'
                            }`}
                          >
                            {chord}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Fill empty cells if row has fewer than 4 measures on desktop */}
                  {Array.from({ length: Math.max(0, 4 - row.length) }).map((_, emptyIdx) => (
                    <div key={`empty-${emptyIdx}`} className="measure-box hidden sm:flex opacity-30">
                      <span className="text-zinc-700 font-mono">-</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

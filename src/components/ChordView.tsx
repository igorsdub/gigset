import React from 'react';
import { parseChordGrid } from '../utils/chordParser';

interface ChordViewProps {
  content: string;
  transpose: number;
}

export const ChordView: React.FC<ChordViewProps> = ({ content, transpose }) => {
  const sections = parseChordGrid(content, transpose);

  if (sections.length === 0) {
    return <div className="text-stage-muted italic py-4">No chord form detected.</div>;
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
          <div key={sIdx} className="bg-stage-card rounded-lg p-3 border border-stage-border shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-stage-accent mb-2 px-1">
              {section.name}
            </div>

            <div className="space-y-1">
              {rows.map((row, rIdx) => (
                <div key={rIdx} className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-t-2 border-stage-border first:border-t-2">
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
                                ? 'text-stage-muted text-base'
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
                      <span className="text-stage-muted font-mono">-</span>
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

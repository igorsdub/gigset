import React, { useState } from 'react';
import { Song } from '../types';
import { X, Music } from 'lucide-react';

interface NewSongModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveSong: (song: Omit<Song, 'id'>) => void;
}

export const NewSongModal: React.FC<NewSongModalProps> = ({ isOpen, onClose, onSaveSong }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [defaultKey, setDefaultKey] = useState('C');
  const [tempo, setTempo] = useState<number | undefined>(undefined);
  const [timeSignature, setTimeSignature] = useState('4/4');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSaveSong({
      title: title.trim(),
      artist: artist.trim() || 'Unknown Artist',
      defaultKey: defaultKey.trim() || 'C',
      tempo: tempo ? Number(tempo) : undefined,
      timeSignature: timeSignature || '4/4',
      content: content.trim()
    });

    // Reset
    setTitle('');
    setArtist('');
    setContent('');
    onClose();
  };

  const insertSampleTemplate = () => {
    setContent(`{section: Verse 1}
| [C]Here is the first line of lyrics | [G]And the second part |
| [Am]Singing through the measures now | [F] / / / |

{section: Chorus}
| [C]All together, [G]hear the sound |
| [Am]Lifting upwards, [F]falling down |`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-stage-card border border-stage-border rounded-xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-stage-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-5 h-5 text-indigo-400" />
            <h3 className="font-semibold text-lg text-white">Add Song to Library</h3>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Fly Me to the Moon"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Artist
              </label>
              <input
                type="text"
                placeholder="e.g. Frank Sinatra"
                value={artist}
                onChange={e => setArtist(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Default Key
              </label>
              <input
                type="text"
                placeholder="e.g. C, Am, Eb"
                value={defaultKey}
                onChange={e => setDefaultKey(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Tempo (BPM)
              </label>
              <input
                type="number"
                placeholder="e.g. 120"
                value={tempo ?? ''}
                onChange={e => setTempo(e.target.value ? Number(e.target.value) : undefined)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Time Signature
              </label>
              <input
                type="text"
                placeholder="4/4"
                value={timeSignature}
                onChange={e => setTimeSignature(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-zinc-300">
                Extended ChordPro Notation (with measure pipes '|')
              </label>
              <button
                type="button"
                onClick={insertSampleTemplate}
                className="text-[11px] text-indigo-400 hover:text-indigo-300"
              >
                Insert Example Template
              </button>
            </div>
            <textarea
              rows={8}
              placeholder="Paste lyrics with [Chord] tags and measure | pipes |..."
              value={content}
              onChange={e => setContent(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-sm font-mono text-zinc-200 focus:outline-none focus:border-indigo-500 leading-relaxed"
            />
            <p className="text-[11px] text-zinc-500 mt-1">
              Tip: Enclose chords in brackets like <code className="text-sky-400">[G]</code>. Use pipes <code className="text-zinc-300">|</code> for measure boundaries to enable the iReal-style Chord Grid.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-2 border-t border-stage-border">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white rounded-lg bg-stage-accent hover:opacity-90 transition-opacity shadow"
            >
              Save to Library
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

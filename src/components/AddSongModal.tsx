import React, { useState } from 'react';
import { Song } from '../types';
import { X, Search, Music, Plus } from 'lucide-react';

interface AddSongModalProps {
  isOpen: boolean;
  library: Song[];
  onClose: () => void;
  onSelectSong: (songId: string) => void;
  onOpenNewSongModal: () => void;
}

export const AddSongModal: React.FC<AddSongModalProps> = ({
  isOpen,
  library,
  onClose,
  onSelectSong,
  onOpenNewSongModal
}) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filtered = library.filter(
    s =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-stage-card border border-stage-border rounded-xl w-full max-w-lg shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-stage-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-5 h-5 text-indigo-400" />
            <h3 className="font-semibold text-lg text-white">Add Song to Set</h3>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-stage-border">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search library by title or artist..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              autoFocus
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-zinc-500 text-sm">
              No matching songs in library.
            </div>
          ) : (
            filtered.map(song => (
              <div
                key={song.id}
                onClick={() => {
                  onSelectSong(song.id);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/80 cursor-pointer border border-transparent hover:border-zinc-700/60 transition-colors"
              >
                <div>
                  <h4 className="font-medium text-white text-sm">{song.title}</h4>
                  <div className="text-xs text-zinc-400 flex items-center gap-2 mt-0.5">
                    <span>{song.artist}</span>
                    <span>•</span>
                    <span className="font-mono">Key: {song.defaultKey}</span>
                  </div>
                </div>
                <button className="flex items-center gap-1 bg-zinc-800 hover:bg-indigo-600 text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-stage-border bg-stage-sidebar flex justify-between items-center text-xs">
          <span className="text-zinc-400">{library.length} songs in library</span>
          <button
            onClick={() => {
              onClose();
              onOpenNewSongModal();
            }}
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            + Create New Song
          </button>
        </div>
      </div>
    </div>
  );
};

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-stage-card border border-stage-border rounded-xl w-full max-w-lg shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-stage-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-5 h-5 text-stage-accent" />
            <h3 className="font-semibold text-lg text-stage-text">Add Song to Set</h3>
          </div>
          <button onClick={onClose} className="text-stage-muted hover:text-stage-text p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-stage-border">
          <div className="relative">
            <Search className="w-4 h-4 text-stage-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search library by title or artist..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              autoFocus
              className="w-full bg-stage-hover border border-stage-border rounded-lg pl-9 pr-4 py-2 text-sm text-stage-text placeholder-stage-muted focus:outline-none focus:border-stage-accent"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-stage-muted text-sm">
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
                className="flex items-center justify-between p-3 rounded-lg hover:bg-stage-hover cursor-pointer border border-transparent hover:border-stage-border transition-colors"
              >
                <div>
                  <h4 className="font-medium text-stage-text text-sm">{song.title}</h4>
                  <div className="text-xs text-stage-muted flex items-center gap-2 mt-0.5">
                    <span>{song.artist}</span>
                    <span>•</span>
                    <span className="font-mono">Key: {song.defaultKey}</span>
                  </div>
                </div>
                <button className="flex items-center gap-1 bg-stage-hover hover:bg-stage-accent text-stage-text hover:text-white px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-stage-border bg-stage-sidebar flex justify-between items-center text-xs">
          <span className="text-stage-muted">{library.length} songs in library</span>
          <button
            onClick={() => {
              onClose();
              onOpenNewSongModal();
            }}
            className="text-stage-accent hover:opacity-80 font-medium"
          >
            + Create New Song
          </button>
        </div>
      </div>
    </div>
  );
};

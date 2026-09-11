import { describe, it, expect } from 'vitest';

describe('Setlist Reordering logic', () => {
  const sampleSongs = [
    { libraryId: 'song-1', transpose: 0 },
    { libraryId: 'song-2', transpose: 1 },
    { libraryId: 'song-3', transpose: -2 },
  ];

  function reorder(songs: typeof sampleSongs, fromIndex: number, toIndex: number) {
    if (toIndex < 0 || toIndex >= songs.length) return songs;
    const updated = [...songs];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    return updated;
  }

  it('moves an item down from index 0 to 1', () => {
    const result = reorder(sampleSongs, 0, 1);
    expect(result.map(s => s.libraryId)).toEqual(['song-2', 'song-1', 'song-3']);
  });

  it('moves an item up from index 2 to 1', () => {
    const result = reorder(sampleSongs, 2, 1);
    expect(result.map(s => s.libraryId)).toEqual(['song-1', 'song-3', 'song-2']);
  });

  it('ignores moving above bounds (index 0 moving up to -1)', () => {
    const result = reorder(sampleSongs, 0, -1);
    expect(result).toBe(sampleSongs);
  });

  it('ignores moving below bounds (last index moving down)', () => {
    const result = reorder(sampleSongs, 2, 3);
    expect(result).toBe(sampleSongs);
  });
});

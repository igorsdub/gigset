import { describe, it, expect } from 'vitest';
import { parseLyricsView, parseChordGrid } from '../chordParser';

describe('Chord Parser Utils', () => {
  const sampleSong = `{title: Test Song}
{artist: Test Artist}

{section: Verse 1}
| [G]Here comes the [D]sun | [Am] / / / |
| [G]It's all [D]right | [C] / / / |

{section: Chorus}
| [C]Sun, [G]sun, [D]sun | [Am]here it comes |`;

  it('parses lyrics view as two-line synchronized tabs with transposed chords above words', () => {
    const lines = parseLyricsView(sampleSong, 2); // G -> A, D -> E, Am -> Bm, C -> D

    // Section header
    const sectionHeader = lines.find(l => l.isSectionHeader);
    expect(sectionHeader).toBeDefined();
    expect(sectionHeader?.sectionName).toBe('Verse 1');

    // First line with lyrics
    const firstLyricLine = lines.find(l => l.lyricLine && l.lyricLine.includes('Here comes the'));
    expect(firstLyricLine).toBeDefined();
    expect(firstLyricLine?.chordLine).toBeDefined();

    // Chords should be transposed
    expect(firstLyricLine?.chordLine).toContain('A');
    expect(firstLyricLine?.chordLine).toContain('E');

    // No measure slashes in the lyric text
    expect(firstLyricLine?.lyricLine).not.toContain('/ / /');
    expect(firstLyricLine?.lyricLine).toContain('Here comes the sun');
  });

  it('parses chord grid with pipe delimiters into structured sections and measures', () => {
    const sections = parseChordGrid(sampleSong, 0);
    expect(sections.length).toBe(2);
    expect(sections[0].name).toBe('Verse 1');
    expect(sections[0].measures.length).toBe(4);
    expect(sections[0].measures[0].chords).toEqual(['G', 'D']);
    expect(sections[0].measures[1].chords).toEqual(['Am']);

    expect(sections[1].name).toBe('Chorus');
    expect(sections[1].measures.length).toBe(2);
    expect(sections[1].measures[0].chords).toEqual(['C', 'G', 'D']);
    expect(sections[1].measures[1].chords).toEqual(['Am']);
  });
});

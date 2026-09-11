import { transposeChord } from './musicTheory';
import { SongSection } from '../types';

export interface LyricToken {
  type: 'chord' | 'text';
  text: string;
}

export interface LyricLine {
  isSectionHeader?: boolean;
  sectionName?: string;
  tokens: LyricToken[];
}

/**
 * Parses extended ChordPro content into structured lines for the Lyrics & Chords view.
 */
export function parseLyricsView(content: string, semitones: number): LyricLine[] {
  const lines = content.split('\n');
  const result: LyricLine[] = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      result.push({ tokens: [{ type: 'text', text: '' }] });
      continue;
    }

    // Directives like {title: ...}, {artist: ...}, {key: ...} - ignore in body
    if (/^\{(title|artist|key|tempo|time):/i.test(line)) {
      continue;
    }

    // Section directives like {section: Verse 1}, {start_of_verse: ...}, {soc}, etc.
    const sectionMatch = line.match(/^\{(?:section|start_of_\w+|comment|c):\s*(.*?)\}/i);
    if (sectionMatch) {
      result.push({
        isSectionHeader: true,
        sectionName: sectionMatch[1] || 'Section',
        tokens: []
      });
      continue;
    }

    // Check for section markers formatted as [Verse 1] or [Chorus]
    const squareSectionMatch = line.match(/^\[(Verse\b.*?|Chorus\b.*?|Bridge\b.*?|Intro\b.*?|Outro\b.*?|Solo\b.*?|[A-D]\s*Section.*?)\]$/i);
    if (squareSectionMatch) {
      result.push({
        isSectionHeader: true,
        sectionName: squareSectionMatch[1],
        tokens: []
      });
      continue;
    }

    // Clean line of measure pipe boundaries for lyric readability, while preserving chords
    // e.g. "| [G]Mama take this [D]badge |" -> "[G]Mama take this [D]badge"
    let cleanedLine = rawLine.replace(/\|\s*\/+\s*/g, '| ').trim();
    if (cleanedLine.startsWith('|')) cleanedLine = cleanedLine.substring(1).trim();
    if (cleanedLine.endsWith('|')) cleanedLine = cleanedLine.slice(0, -1).trim();

    // Parse chords inside brackets and normal text
    const tokens: LyricToken[] = [];
    const regex = /\[(.*?)\]/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(cleanedLine)) !== null) {
      if (match.index > lastIndex) {
        tokens.push({
          type: 'text',
          text: cleanedLine.substring(lastIndex, match.index)
        });
      }

      const chord = match[1].trim();
      if (chord === '/' || chord === '') {
        // Beat slash
        tokens.push({ type: 'text', text: ' / ' });
      } else {
        const transposed = transposeChord(chord, semitones);
        tokens.push({
          type: 'chord',
          text: transposed
        });
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < cleanedLine.length) {
      tokens.push({
        type: 'text',
        text: cleanedLine.substring(lastIndex)
      });
    }

    result.push({ tokens });
  }

  return result;
}

/**
 * Parses extended ChordPro content into structured sections and 4-measure systems for the Chord Grid (iReal Pro) view.
 */
export function parseChordGrid(content: string, semitones: number): SongSection[] {
  const lines = content.split('\n');
  const sections: SongSection[] = [];

  let currentSection: SongSection = {
    name: 'Form',
    measures: []
  };

  let measureCount = 0;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || /^\{(title|artist|key|tempo|time):/i.test(line)) {
      continue;
    }

    // Check for section headers
    const sectionMatch = line.match(/^\{(?:section|start_of_\w+|comment|c):\s*(.*?)\}/i);
    const squareSectionMatch = line.match(/^\[(Verse\b.*?|Chorus\b.*?|Bridge\b.*?|Intro\b.*?|Outro\b.*?|Solo\b.*?|[A-D]\s*Section.*?)\]$/i);

    if (sectionMatch || squareSectionMatch) {
      const sectionName = (sectionMatch ? sectionMatch[1] : squareSectionMatch![1]).trim();
      if (currentSection.measures.length > 0) {
        sections.push(currentSection);
      }
      currentSection = {
        name: sectionName || `Section ${sections.length + 1}`,
        measures: []
      };
      continue;
    }

    // Check for measure pipe delimiters
    if (line.includes('|')) {
      // Split by pipe
      const parts = line.split('|').map(p => p.trim());
      // Discard empty edges if line starts or ends with pipe
      const barParts = parts.filter((part, idx) => {
        if (idx === 0 && !rawLine.trim().startsWith('|') && part) return true;
        if (idx === 0 && rawLine.trim().startsWith('|')) return false;
        if (idx === parts.length - 1 && rawLine.trim().endsWith('|')) return false;
        return true;
      });

      for (const barStr of barParts) {
        if (!barStr && barParts.length === 1) continue;

        // Extract chords inside brackets [G] or bare chords in bar
        const chordMatches = [...barStr.matchAll(/\[(.*?)\]/g)].map(m => m[1].trim());
        let chordsInMeasure: string[] = [];

        if (chordMatches.length > 0) {
          chordsInMeasure = chordMatches
            .filter(c => c !== '/' && c.length > 0)
            .map(c => transposeChord(c, semitones));
        } else {
          // If no brackets, check if words look like chords (e.g. "G", "Cmaj7", "Am")
          const tokens = barStr.split(/\s+/).filter(t => t && t !== '/');
          const detectedChords = tokens.filter(t => /^[A-G][#b]?(m|maj|min|dim|aug|sus|add|[0-9]|\/)*$/i.test(t));
          if (detectedChords.length > 0) {
            chordsInMeasure = detectedChords.map(c => transposeChord(c, semitones));
          }
        }

        measureCount++;
        currentSection.measures.push({
          id: `m_${measureCount}`,
          chords: chordsInMeasure.length > 0 ? chordsInMeasure : ['%'], // % indicates repeat / rest
          isRepeatStart: barStr.startsWith(':'),
          isRepeatEnd: barStr.endsWith(':')
        });
      }
    }
  }

  if (currentSection.measures.length > 0) {
    sections.push(currentSection);
  }

  // If no measures were parsed via pipes, fallback: extract all chords line by line into 4-bar chunks
  if (sections.length === 0 || sections.every(s => s.measures.length === 0)) {
    const fallbackSection: SongSection = { name: 'Chords', measures: [] };
    const allChords = [...content.matchAll(/\[(.*?)\]/g)]
      .map(m => m[1].trim())
      .filter(c => c && c !== '/')
      .map(c => transposeChord(c, semitones));

    for (let i = 0; i < allChords.length; i++) {
      fallbackSection.measures.push({
        id: `m_fb_${i + 1}`,
        chords: [allChords[i]]
      });
    }

    if (fallbackSection.measures.length > 0) {
      sections.push(fallbackSection);
    }
  }

  return sections;
}

import { transposeChord } from './musicTheory';
import { SongSection } from '../types';

export interface TabLine {
  isSectionHeader?: boolean;
  sectionName?: string;
  isChordOnly?: boolean;
  chordLine?: string;
  lyricLine?: string;
}

/**
 * Parses extended ChordPro content into classic two-line synchronized tabs (chords above lyrics)
 * guaranteeing that chords and words never overlap.
 */
export function parseLyricsView(content: string, semitones: number): TabLine[] {
  const lines = content.split('\n');
  const result: TabLine[] = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      result.push({ lyricLine: '' });
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
        sectionName: sectionMatch[1] || 'Section'
      });
      continue;
    }

    // Check for section markers formatted as [Verse 1] or [Chorus]
    const squareSectionMatch = line.match(/^\[(Verse\b.*?|Chorus\b.*?|Bridge\b.*?|Intro\b.*?|Outro\b.*?|Solo\b.*?|[A-D]\s*Section.*?)\]$/i);
    if (squareSectionMatch) {
      result.push({
        isSectionHeader: true,
        sectionName: squareSectionMatch[1]
      });
      continue;
    }

    // Check if the line is purely instrumental / chord progression (no actual lyrics)
    // e.g. "| [A] / / / | [F#m] / / / |" or "| [Cm7] / / / | [F7] / / / |"
    const strippedOfChordsAndMeasures = line
      .replace(/\[(.*?)\]/g, '')
      .replace(/[|/]/g, '')
      .trim();

    if (strippedOfChordsAndMeasures.length === 0) {
      // Pure chord progression line
      const chords = [...line.matchAll(/\[(.*?)\]/g)]
        .map(m => m[1].trim())
        .filter(c => c && c !== '/')
        .map(c => transposeChord(c, semitones));

      if (chords.length > 0) {
        // Space chords evenly across the line
        const spacedChords = chords.map(c => c.padEnd(16, ' ')).join('').trimEnd();
        result.push({
          isChordOnly: true,
          chordLine: spacedChords
        });
      }
      continue;
    }

    // Line contains lyrics and chords: build two-line synchronized tab
    // Strip pipe dividers '|' and lone beat slashes '/ / /' from lyrics lines
    const cleanedLine = line
      .replace(/\|/g, ' ')
      .replace(/(^|\s)(\/\s*)+/g, ' ')
      .trim();

    let chordLine = '';
    let lyricLine = '';

    // Regex to split into chords and text tokens
    const regex = /\[(.*?)\]/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(cleanedLine)) !== null) {
      const textBefore = cleanedLine.substring(lastIndex, match.index);
      if (textBefore.length > 0) {
        lyricLine += textBefore;
      }

      const rawChord = match[1].trim();
      if (rawChord && rawChord !== '/') {
        const chord = transposeChord(rawChord, semitones);

        // Pad chordLine with spaces so it aligns with the start of the current word in lyricLine
        if (chordLine.length < lyricLine.length) {
          chordLine += ' '.repeat(lyricLine.length - chordLine.length);
        }

        // If previous chord was long and extends past current lyric position, pad lyricLine
        if (lyricLine.length < chordLine.length) {
          lyricLine += ' '.repeat(chordLine.length - lyricLine.length);
        }

        chordLine += chord;

        // Ensure at least one space before the next chord can start
        chordLine += ' ';
      }

      lastIndex = regex.lastIndex;
    }

    // Append any trailing text after the last chord
    if (lastIndex < cleanedLine.length) {
      lyricLine += cleanedLine.substring(lastIndex);
    }

    result.push({
      chordLine: chordLine.trimEnd(),
      lyricLine: lyricLine.trimEnd()
    });
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
      const parts = line.split('|').map(p => p.trim());
      const barParts = parts.filter((part, idx) => {
        if (idx === 0 && !rawLine.trim().startsWith('|') && part) return true;
        if (idx === 0 && rawLine.trim().startsWith('|')) return false;
        if (idx === parts.length - 1 && rawLine.trim().endsWith('|')) return false;
        return true;
      });

      for (const barStr of barParts) {
        if (!barStr && barParts.length === 1) continue;

        const chordMatches = [...barStr.matchAll(/\[(.*?)\]/g)].map(m => m[1].trim());
        let chordsInMeasure: string[] = [];

        if (chordMatches.length > 0) {
          chordsInMeasure = chordMatches
            .filter(c => c !== '/' && c.length > 0)
            .map(c => transposeChord(c, semitones));
        } else {
          const tokens = barStr.split(/\s+/).filter(t => t && t !== '/');
          const detectedChords = tokens.filter(t => /^[A-G][#b]?(m|maj|min|dim|aug|sus|add|[0-9]|\/)*$/i.test(t));
          if (detectedChords.length > 0) {
            chordsInMeasure = detectedChords.map(c => transposeChord(c, semitones));
          }
        }

        measureCount++;
        currentSection.measures.push({
          id: `m_${measureCount}`,
          chords: chordsInMeasure.length > 0 ? chordsInMeasure : ['%'],
          isRepeatStart: barStr.startsWith(':'),
          isRepeatEnd: barStr.endsWith(':')
        });
      }
    }
  }

  if (currentSection.measures.length > 0) {
    sections.push(currentSection);
  }

  // Fallback: if no measures were parsed via pipes, extract all chords line by line
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

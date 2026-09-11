const CHROMATIC_SCALE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const FLAT_EQUIVALENTS: Record<string, string> = {
  'Db': 'C#',
  'Eb': 'D#',
  'Fb': 'E',
  'Gb': 'F#',
  'Ab': 'G#',
  'Bb': 'A#',
  'Cb': 'B'
};

export function normalizeNote(note: string): string {
  return FLAT_EQUIVALENTS[note] || note;
}

export function shiftNote(note: string, semitones: number, preferFlats = false): string {
  if (semitones === 0) return note;
  const normalized = normalizeNote(note);
  const index = CHROMATIC_SCALE.indexOf(normalized);
  if (index === -1) return note;

  let newIndex = (index + semitones) % 12;
  if (newIndex < 0) newIndex += 12;

  const resultNote = CHROMATIC_SCALE[newIndex];
  if (preferFlats) {
    const sharpToFlat: Record<string, string> = {
      'C#': 'Db',
      'D#': 'Eb',
      'F#': 'Gb',
      'G#': 'Ab',
      'A#': 'Bb'
    };
    return sharpToFlat[resultNote] || resultNote;
  }
  return resultNote;
}

/**
 * Transposes a chord by the given semitone amount.
 * Correctly handles extensions, qualities, and slash chords (e.g. "D/F#", "Am7b5", "Bbmaj7").
 */
export function transposeChord(chord: string, semitones: number, preferFlats = false): string {
  if (!chord || semitones === 0) return chord;

  // Handle slash chord (e.g. D/F#)
  if (chord.includes('/')) {
    const [baseChord, bassNote] = chord.split('/');
    const transposedBase = transposeSingleChord(baseChord, semitones, preferFlats);
    const transposedBass = shiftNote(bassNote, semitones, preferFlats);
    return `${transposedBase}/${transposedBass}`;
  }

  return transposeSingleChord(chord, semitones, preferFlats);
}

function transposeSingleChord(chord: string, semitones: number, preferFlats = false): string {
  return chord.replace(/^[A-G][#b]?/, match => shiftNote(match, semitones, preferFlats));
}

export function formatKeyShift(semitones: number): string {
  if (semitones === 0) return '0 (Orig)';
  return semitones > 0 ? `+${semitones}` : `${semitones}`;
}

import { describe, it, expect } from 'vitest';
import { shiftNote, transposeChord, formatKeyShift } from '../musicTheory';

describe('Music Theory Utils', () => {
  it('shifts notes up and down correctly', () => {
    expect(shiftNote('C', 2)).toBe('D');
    expect(shiftNote('A', 3)).toBe('C');
    expect(shiftNote('G', -2)).toBe('F');
    expect(shiftNote('E', 1)).toBe('F');
    expect(shiftNote('B', 1)).toBe('C');
  });

  it('normalizes flat notes and shifts accurately', () => {
    expect(shiftNote('Bb', 2)).toBe('C');
    expect(shiftNote('Eb', 2)).toBe('F');
    expect(shiftNote('Db', 1)).toBe('D');
  });

  it('preserves key quality suffixes such as minor keys when shifting notes', () => {
    expect(shiftNote('Gm', 2)).toBe('Am');
    expect(shiftNote('Dm', -2)).toBe('Cm');
    expect(shiftNote('Dm', -1)).toBe('C#m');
    expect(shiftNote('Bm', 1)).toBe('Cm');
  });

  it('transposes complex chords preserving qualities', () => {
    expect(transposeChord('Cmaj7', 2)).toBe('Dmaj7');
    expect(transposeChord('Am7b5', 2)).toBe('Bm7b5');
    expect(transposeChord('G7#9', 1)).toBe('G#7#9');
    expect(transposeChord('F#m', -2)).toBe('Em');
  });

  it('transposes slash chords correctly for both base and bass note', () => {
    expect(transposeChord('D/F#', 2)).toBe('E/G#');
    expect(transposeChord('C/E', 5)).toBe('F/A');
    expect(transposeChord('G/B', -2)).toBe('F/A');
  });

  it('formats key shift badges cleanly', () => {
    expect(formatKeyShift(0)).toBe('0 (Orig)');
    expect(formatKeyShift(2)).toBe('+2');
    expect(formatKeyShift(-3)).toBe('-3');
  });
});

import { describe, it, expect } from 'vitest';
import { PRESET_EVENTS, PRESET_LIBRARY, INITIAL_APP_STATE } from '../presets';
import { shiftNote } from '../../utils/musicTheory';

describe('Activities Fair Preset Event & Songs', () => {
  const activitiesFair = PRESET_EVENTS.find(e => e.name === 'Activities Fair');

  it('contains the Activities Fair event on 2026-09-11', () => {
    expect(activitiesFair).toBeDefined();
    expect(activitiesFair?.date).toBe('2026-09-11');
    expect(INITIAL_APP_STATE.activeEventId).toBe(activitiesFair?.id);
  });

  it('contains all 11 songs in the exact order requested', () => {
    expect(activitiesFair?.songs).toHaveLength(11);
    const expectedTitles = [
      'Sukiyaki',
      'The Lazy Song',
      'idontwannabeyouanymore',
      'From the Start',
      'Odoriko',
      'Hopelessly Devoted to You',
      'Sweet Caroline',
      'Seaside',
      'Plastic Love',
      "I Wan'na Be Like You",
      'Gangnam Style'
    ];

    activitiesFair?.songs.forEach((entry, idx) => {
      const song = PRESET_LIBRARY.find(s => s.id === entry.libraryId);
      expect(song).toBeDefined();
      expect(song?.title).toBe(expectedTitles[idx]);
    });
  });

  it('matches all target keys and performers from the spreadsheet', () => {
    const expectedMappings = [
      { title: 'Sukiyaki', targetKey: 'B', performer: 'Stash' },
      { title: 'The Lazy Song', targetKey: 'A', performer: 'Daehee' },
      { title: 'idontwannabeyouanymore', targetKey: 'G', performer: 'Hannah Sherrod' },
      { title: 'From the Start', targetKey: 'Db', performer: 'Delphy' },
      { title: 'Odoriko', targetKey: 'G', performer: 'Daehee' },
      { title: 'Hopelessly Devoted to You', targetKey: 'A', performer: 'Hannah Sherrod' },
      { title: 'Sweet Caroline', targetKey: 'B', performer: 'Stash' },
      { title: 'Seaside', targetKey: 'D#m', performer: 'Dyon' },
      { title: 'Plastic Love', targetKey: 'Dm', performer: 'Hannah Sherrod' },
      { title: "I Wan'na Be Like You", targetKey: 'C', performer: 'Dyon' },
      { title: 'Gangnam Style', targetKey: 'Bm', performer: 'Daehee' }
    ];

    activitiesFair?.songs.forEach((entry, idx) => {
      const song = PRESET_LIBRARY.find(s => s.id === entry.libraryId)!;
      const effectiveKey = (entry.transpose !== 0 && entry.targetKey)
        ? entry.targetKey
        : shiftNote(song.defaultKey, entry.transpose);
      expect(effectiveKey).toBe(expectedMappings[idx].targetKey);
      expect(entry.performer).toBe(expectedMappings[idx].performer);
    });
  });

  it('includes valid reference URLs for the songs', () => {
    const sukiyaki = PRESET_LIBRARY.find(s => s.title === 'Sukiyaki');
    expect(sukiyaki?.referenceUrl).toContain('tabs.ultimate-guitar.com');

    const laufey = PRESET_LIBRARY.find(s => s.title === 'From the Start');
    expect(laufey?.referenceUrl).toContain('tabs.ultimate-guitar.com');
  });
});

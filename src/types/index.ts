export type ViewMode = 'grid' | 'lyrics';

export interface Song {
  id: string;
  title: string;
  artist: string;
  defaultKey: string;
  tempo?: number;
  timeSignature?: string;
  content: string; // Extended ChordPro with pipe delimiters '|'
}

export interface SongEntry {
  libraryId: string;
  transpose: number; // Semitone offset from song.defaultKey
  viewModeOverride?: ViewMode; // If undefined, inherits masterViewMode
}

export interface Event {
  id: string;
  name: string;
  date?: string;
  venue?: string;
  songs: SongEntry[];
}

export interface AppState {
  library: Song[];
  events: Event[];
  activeEventId: string | null;
  masterViewMode: ViewMode;
}

export interface Measure {
  id: string;
  chords: string[]; // Chords played within this measure (e.g., ['G'], ['Dm7', 'G7'])
  isRepeatStart?: boolean;
  isRepeatEnd?: boolean;
}

export interface SongSection {
  name: string; // e.g., 'Verse', 'Chorus', 'Bridge', '[A]'
  measures: Measure[];
}

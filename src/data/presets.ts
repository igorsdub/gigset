import { Song, Event, AppState } from '../types';

export const PRESET_LIBRARY: Song[] = [
  {
    id: 's1',
    title: 'Stand By Me',
    artist: 'Ben E. King',
    defaultKey: 'A',
    tempo: 118,
    timeSignature: '4/4',
    content: `{title: Stand By Me}
{artist: Ben E. King}
{key: A}

{section: Intro / Form}
| [A] / / / | [A] / / / | [F#m] / / / | [F#m] / / / |
| [D] / / / | [E] / / / | [A] / / / | [A] / / / |

{section: Verse 1}
| When the [A]night has come | and the [F#m]land is dark |
| And the [D]moon is the [E]only light we'll [A]see | [A] / / / |
| No, I [A]won't be afraid, oh, I [F#m]won't be afraid |
| Just as [D]long as you [E]stand, stand by [A]me | [A] / / / |

{section: Chorus}
| So darling, darling, [A]stand by me, oh [F#m]stand by me |
| Oh [D]stand, [E]stand by me, [A]stand by me | [A] / / / |`
  },
  {
    id: 's2',
    title: "Knockin' on Heaven's Door",
    artist: 'Bob Dylan',
    defaultKey: 'G',
    tempo: 68,
    timeSignature: '4/4',
    content: `{title: Knockin' on Heaven's Door}
{artist: Bob Dylan}
{key: G}

{section: Verse 1}
| [G]Mama, take this [D]badge off of [Am]me | [Am] / / / |
| [G]I can't [D]use it any[C]more | [C] / / / |
| [G]It's gettin' [D]dark, too dark to [Am]see | [Am] / / / |
| [G]I feel I'm [D]knockin' on heaven's [C]door | [C] / / / |

{section: Chorus}
| [G]Knock, knock, [D]knockin' on heaven's [Am]door | [Am] / / / |
| [G]Knock, knock, [D]knockin' on heaven's [C]door | [C] / / / |
| [G]Knock, knock, [D]knockin' on heaven's [Am]door | [Am] / / / |
| [G]Knock, knock, [D]knockin' on heaven's [C]door | [C] / / / |`
  },
  {
    id: 's3',
    title: 'Autumn Leaves',
    artist: 'Joseph Kosma / Miles Davis',
    defaultKey: 'Gm',
    tempo: 120,
    timeSignature: '4/4',
    content: `{title: Autumn Leaves}
{artist: Joseph Kosma}
{key: Gm}

{section: [A] Section}
| [Cm7] / / / | [F7] / / / | [Bbmaj7] / / / | [Ebmaj7] / / / |
| [Am7b5] / / / | [D7b9] / / / | [Gm] / / / | [G7] / / / |

{section: [A] Section (Repeat)}
| [Cm7] / / / | [F7] / / / | [Bbmaj7] / / / | [Ebmaj7] / / / |
| [Am7b5] / / / | [D7b9] / / / | [Gm] / / / | [Gm] / / / |

{section: [B] Section}
| [Am7b5] / / / | [D7b9] / / / | [Gm] / / / | [Gm] / / / |
| [Cm7] / / / | [F7] / / / | [Bbmaj7] / / / | [Ebmaj7] / / / |

{section: [C] Section}
| [Am7b5] / / / | [D7b9] / / / | [Gm7] [C7] | [Fm7] [Bb7] |
| [Ebmaj7] / / / | [D7b9] / / / | [Gm] / / / | [Gm] / / / |`
  },
  {
    id: 's4',
    title: "Ain't No Sunshine",
    artist: 'Bill Withers',
    defaultKey: 'Am',
    tempo: 78,
    timeSignature: '4/4',
    content: `{title: Ain't No Sunshine}
{artist: Bill Withers}
{key: Am}

{section: Verse 1}
| Ain't no sunshine when she's [Am]gone | [Em] [G] |
| It's not warm when she's [Am]away | [Em] [G] |
| Ain't no sunshine when she's [Am]gone, and she's always gone too [Em]long |
| Anytime she [Dm7]goes away | [Am] [Em] [G] |`
  }
];

export const PRESET_EVENTS: Event[] = [
  {
    id: 'e1',
    name: 'Acoustic Jam Night',
    date: '2026-09-15',
    venue: 'The Blue Note Lounge',
    songs: [
      { libraryId: 's1', transpose: 0 },
      { libraryId: 's2', transpose: 2 },
      { libraryId: 's4', transpose: 0 }
    ]
  },
  {
    id: 'e2',
    name: 'Jazz Standards Trio',
    date: '2026-09-22',
    venue: 'Village Vanguard',
    songs: [
      { libraryId: 's3', transpose: 0, viewModeOverride: 'grid' },
      { libraryId: 's1', transpose: -2 }
    ]
  }
];

export const INITIAL_APP_STATE: AppState = {
  library: PRESET_LIBRARY,
  events: PRESET_EVENTS,
  activeEventId: 'e1',
  masterViewMode: 'lyrics'
};

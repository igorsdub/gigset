# GigSet Context

GigSet is a static, git-backed web application for musicians to organize songs, build setlists for events, transpose keys on the fly, and toggle between chord-grid forms and lyrics sheets during live performance.

## Language

**Song**:
A canonical musical composition in the central library having a title, default key, artist, time signature, tempo, and song body written in extended ChordPro format.
_Avoid_: Track, tune, chart, file.

**Event**:
A scheduled performance, gig, or rehearsal associated with a date, venue, or name, containing one or more ordered Sets.
_Avoid_: Gig, show, gigset, session (when naming the entity).

**Set**:
An ordered grouping of Song Entries within an Event (for example, "Set 1", "Set 2", "Acoustic Set", "Encore").
_Avoid_: Sub-set, playlist, section.

**Song Entry**:
A reference to a Song placed at an ordered index inside a Set, which can specify event-specific overrides like transposed key, tempo change, or performance cue notes.
_Avoid_: Playlist item, setlist item.

**Chord View**:
A structured, measure-by-measure visualization of harmonic progression and song form (e.g., AABA), highlighting bars, repeats, and rehearsal marks.
_Avoid_: iReal view, box view, grid view, lead sheet.

**Lyrics View**:
A formatted representation presenting lyrics with chords aligned directly above syllables in classic two-line monospace tab layout, avoiding any visual overlap.
_Avoid_: Tab view, chordsheet, guitar tab.

**Stage Mode**:
A high-contrast, distraction-free performance view with screen wake-lock, Bluetooth pedal navigation, quick transposition, and auto-scrolling.
_Avoid_: Performance screen, gig display, live view.

**Measure**:
A unit of musical time bounded by pipe delimiters (`|`) containing chord changes and beats within a song section.
_Avoid_: Barline, cell, chord box.

**Preset**:
The baseline, immutable catalog of Songs and preconfigured Events defined in repository files on the main branch.
_Avoid_: Default, template, seed data.

**Local State**:
The runtime browser state holding ephemeral additions, live key shifts, or setlist reorderings in localStorage.
_Avoid_: Cache, cookie, temporary data.



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

**Chord Grid View**:
A structured, measure-by-measure visualization of harmonic progression and song form (e.g., AABA), highlighting bars, repeats, and rehearsal marks.
_Avoid_: iReal view, box view, lead sheet.

**Lyrics View**:
A formatted representation presenting lyrics with chords positioned above or inline with vocal phrasing.
_Avoid_: Tab view, chordsheet, guitar tab.

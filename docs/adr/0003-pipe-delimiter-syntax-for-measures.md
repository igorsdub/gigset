# Pipe Delimiter Syntax for Measure-Based Parsing

To support both chord-over-lyrics and iReal-style measure grid layouts from a single file, we need an explicit marker for measure boundaries. We decided to use standard pipe delimiters (`|`) embedded within ChordPro lines and section directives. This avoids complex rhythmic guessing, remains completely readable in plain text, and allows the grid renderer to construct deterministic measure blocks regardless of lyric density.

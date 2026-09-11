# Two-Line Monospace Tab Layout for Lyrics View

Inline CSS pseudo-element chord rendering (`::before` on 0-width spans) caused chord names to collide with adjacent lyrics and caused stray measure slashes (`/ / /`) to break readability. We decided to render the Lyrics View using the classic two-line synchronized tab standard (chords line precisely padded with spaces directly above the monospace lyrics line). This completely prevents chord/text collisions, ensures crystal-clear visual alignment across all screen sizes, and matches the proven format used by Ultimate Guitar and tabs.com.

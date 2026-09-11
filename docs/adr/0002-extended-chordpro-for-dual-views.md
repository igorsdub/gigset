# Extended ChordPro as Unified Song Representation

Musicians require both an iReal-style measure chord grid (for rhythm sections and soloing) and a lyrics-with-chords view (for vocalists). We decided to adopt extended ChordPro format (using measure bar dividers and section directives) as the single source of truth for song content rather than maintaining dual files or rigid custom JSON. This preserves human readability in standard text editors, adheres to existing musician conventions, and enables the renderer to deterministically parse both views from one source.

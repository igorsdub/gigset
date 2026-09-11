# 0008. Sidebar Setlist Reordering and Fixed Key Controls

Date: 2026-09-11

## Status

Accepted

## Context

Managing setlist ordering in live performance scenarios was cumbersome using card-level vertical arrows (`ChevronUp`/`ChevronDown`), especially for setlists containing 10 or more songs. Scrolling past multiple large chord grids and lyric sheets to adjust the running order cluttered the primary performance screen. Furthermore, dynamic reset key buttons that appeared and disappeared caused layout jumping in the song card header toolbar.

## Decision

1. **Sidebar Setlist Outline**: We relocated song reordering to a compact sub-list beneath the active Event in the sidebar. Each item contains a 6-dot drag handle (`GripVertical`) for rapid HTML5 drag-and-drop reordering, and clicking an item smoothly scrolls the main canvas to that song card.
2. **Eliminated Card-Level Reordering Controls**: Redundant up/down chevrons and top drag grips were removed from the `SongCard` header.
3. **Fixed-Position Key Transposition Pill**: Transposition controls were standardized into a fixed 3-part button group: `[Key -1] | [↺ Reset] | [Key +1]`. The `Reset` button occupies a permanent center position, remaining visually disabled (`opacity-30 cursor-default`) when `transpose === 0` and becoming actively highlighted and pressable when shifted. This completely eliminates UI layout shifts.
4. **Permanent Event Staging**: Simplified sidebar event management by removing transient creation/deletion buttons in favor of repository-managed presets.

## Consequences

- Faster, cleaner setlist reordering from a single compact view.
- Zero visual jitter when transposing keys on stage.
- Main song cards stay strictly focused on music display and performance parameters.

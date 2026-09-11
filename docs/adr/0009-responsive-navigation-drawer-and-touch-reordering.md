# 0009. Responsive Navigation Drawer and Touch Reordering

Date: 2026-09-11

## Status

Accepted

## Context

GigSet is frequently accessed on mobile phones and portrait tablets mounted on mic or music stands on stage. The previous desktop layout permanently occupied 320px (`w-80`) with a static sidebar, consuming up to 90% of screen width on phones and squashing 4-measure chord progressions into 2-column rows on tablets. Furthermore, native HTML5 drag-and-drop handles (`GripVertical`) in the Setlist Outline failed to work reliably on mobile touchscreens (iOS Safari / Android Chrome) and caused scroll-conflict issues on small touchscreens.

## Decision

1. **Responsive Navigation Drawer**: Converted the sidebar into an off-canvas drawer on viewports below 1024px (`< lg`), retaining full canvas width for portrait tablets and mobile phones on stage. The drawer features a backdrop overlay, smooth sliding transition, dedicated close button, and automatically dismisses when a song or event is selected.
2. **Persistent Sticky Stage Topbar**: Introduced a compact sticky topbar (`lg:hidden`) containing the navigation drawer trigger (hamburger), active event title, song count, and quick master view toggle (`Chord` / `Lyrics`), ensuring navigation and view switching remain accessible without scrolling back to the top during a performance.
3. **Touch-Friendly Setlist Reordering Chevrons**: Added dedicated up/down tap chevrons (`ChevronUp` / `ChevronDown`) to items in the `Setlist Outline` for touch/small screens alongside the desktop drag handle, enabling 100% deterministic, one-tap reordering on stage without touch-drag conflicts.

## Consequences

- Full viewport width available for chord grids and lyric sheets on phones and portrait tablets.
- Fast, reliable setlist reordering on touch devices without gesture ambiguities.
- Desktop and wide landscape displays (`≥ 1024px`) retain the permanent split-screen workspace.

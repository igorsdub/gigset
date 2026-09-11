# Repository Presets and Local Override Lifecycle

We need to balance version-controlled source data in Git with fast, zero-friction adjustments made on stage or at rehearsals. We decided to treat repository data files as immutable Presets bundled into the application, while in-browser edits (transpositions, reordering, draft songs) are written to Local State in localStorage. Explicit "Reset Event" and "Reset All to Presets" controls allow users to safely discard ephemeral live tweaks and restore the authoritative version from the repository main branch at any time.

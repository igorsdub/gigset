# GigSet 🎸 🎼

**GigSet** is a static, git-backed web application built for live gigging musicians. It allows you to organize songs into event setlists, transpose keys on the fly, and instantly switch between an **iReal Pro-style measure chord grid** and a **guitar tabs / lyrics sheet**.

Designed to be hosted on **GitHub Pages** with zero backend infrastructure, full offline reliability, and a clean stage-friendly dark theme.

---

## Features

- 🎼 **Dual View Modes**:
  - **Chord Grid View**: 4-measures-per-row grid of song form (AABA, Verse/Chorus), rehearsal marks, repeats, and clean chord symbols (similar to iReal Pro).
  - **Lyrics & Chords View**: Vocalist-friendly layout with chord badges positioned directly above syllables (similar to guitar tabs).
  - **Master & Per-Card Switching**: Switch the whole setlist at once from the header, or toggle individual song cards independently.
- 🔄 **On-The-Fly Transposition**:
  - Transpose any song up or down semitone-by-semitone (`Key -1` / `Key +1`).
  - Supports complex chords (`maj7`, `m7b5`, `7b9`, `dim7`, `sus4`) and slash chords (`D/F#`, `C/E`).
  - Event-specific key shifts never mutate your canonical song library.
- 📋 **Event & Setlist Organizer**:
  - Create and manage gigs, jam sessions, and rehearsals in the sidebar.
  - Reorder songs effortlessly with mouse/touch drag handles (`⠿`) or mobile-friendly `▲`/`▼` arrow buttons.
  - Quick-add songs from the library with instant search.
- ☀️ **Stage Mode Ergonomics**:
  - One-click **Screen Wake-Lock** to keep your tablet/laptop awake on stage.
  - High-contrast, glare-resistant dark theme with clear measure boundaries.
- 💾 **Repository Presets & Local State Lifecycle**:
  - Canonical library and preset events are version-controlled in the repository.
  - Live adjustments made in the browser are automatically preserved in `localStorage`.
  - **"Reset Event"** and **"Reset All to Presets"** controls let you safely discard ephemeral rehearsal tweaks and restore the authoritative version from Git anytime.
- 🚀 **Zero-Config GitHub Pages Deployment**:
  - Automated GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys the static application on push to `main`.

---

## Notation: Extended ChordPro

GigSet uses standard ChordPro extended with measure pipe delimiters (`|`). This single format enables both measure-by-measure grid extraction and inline lyrics rendering:

```chordpro
{title: Knockin' on Heaven's Door}
{artist: Bob Dylan}
{key: G}

{section: Verse 1}
| [G]Mama, take this [D]badge off of [Am]me | [Am] / / / |
| [G]I can't [D]use it any[C]more | [C] / / / |

{section: Chorus}
| [G]Knock, knock, [D]knockin' on heaven's [Am]door | [Am] / / / |
| [G]Knock, knock, [D]knockin' on heaven's [C]door | [C] / / / |
```

- **Pipes `|`**: Delimit musical measures (4 measures per row in the Chord Grid).
- **Brackets `[G]`**: Embed chords within lyrics or measures.
- **Slashes `/`**: Represent beats inside empty or rhythm-holding measures.
- **Sections**: Denoted with `{section: Name}`, `{start_of_verse}`, or `[Chorus]`.

---

## Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/<your-username>/gigset.git
cd gigset

# Install dependencies
npm install

# Start local development server
npm run dev

# Run automated tests
npm test

# Build production bundle
npm run build
```

---

## Deploying to GitHub Pages

1. Push your repository to GitHub:
   ```bash
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Every commit to `main` will automatically build and deploy the app to:
   `https://<your-username>.github.io/gigset/`

---

## Architecture & Domain Model

- [`CONTEXT.md`](./CONTEXT.md): Canonical domain glossary (*Song*, *Event*, *Set*, *Song Entry*, *Chord Grid View*, *Lyrics View*, *Stage Mode*, *Measure*, *Preset*, *Local State*).
- [`docs/adr/`](./docs/adr/): Architecture Decision Records documenting all major technical and notation choices.

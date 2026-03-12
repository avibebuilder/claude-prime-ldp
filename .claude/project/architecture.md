# Architecture Reference

## Overview

Claude Prime landing page (marketing site) — single-page, static.

- **Framework**: Next.js 16 App Router, React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: JetBrains Mono (monospace only, via `--font-jetbrains-mono` CSS variable)
- **Path alias**: `@/*` maps to `./src/*`

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, JetBrains Mono font
│   ├── page.tsx           # Landing page (composes sections)
│   ├── globals.css        # Tailwind v4 theme + custom utilities
│   ├── site-config.ts     # Site metadata constants
│   ├── sitemap.ts         # SEO
│   └── robots.ts          # SEO
└── components/
    ├── hero-section.tsx
    ├── how-it-works-section.tsx
    ├── stats-banner.tsx
    ├── get-started-section.tsx
    ├── footer.tsx
    └── ... (UI components)
```

## Design System

### Color Tokens

Dark terminal aesthetic with gold accent.

| Token | Value |
|---|---|
| `terminal-gold` | `#e3b341` |
| `terminal-bg` | dark background |
| `terminal-surface` | elevated surface |
| `terminal-border` | border color |
| `terminal-white` | primary text |
| `terminal-text` | body text |
| `terminal-dim` | muted text |

### Glass Tiers

`glass-hero`, `glass-primary`, `glass-secondary`, `glass-tertiary` — each with different blur/opacity/shadow levels.

### CRT Effects

`scanlines`, `noise`, `vignette` — pseudo-element overlays for retro terminal feel.

### Text Glow

- `text-glow-gold` — strong gold glow
- `text-phosphor` — subtle phosphor glow

### Radius Tokens

- `--radius-container: 8px`
- `--radius-inner: 4px`

## Key Patterns

- All components are **Server Components** (static landing page, no client state)
- Sections are composed in `page.tsx`
- Site metadata centralized in `site-config.ts`

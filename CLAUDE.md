# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Claude Prime landing page — a marketing site built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Features a retro terminal/CRT aesthetic with gold accent theming.

## Project References

| File | Content |
|------|---------|
| [architecture.md](.claude/project/architecture.md) | Folder structure, design system tokens, key patterns |
| [commands.md](.claude/project/commands.md) | CLI commands (dev, build, lint, biome) |

## Repository Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, JetBrains Mono font
│   ├── page.tsx           # Landing page (composes section components)
│   ├── globals.css        # Tailwind v4 theme + custom utilities
│   └── site-config.ts     # Site metadata constants
└── components/            # UI components (sections, interactive elements)
biome.json                 # Biome linter/formatter config
```

## Quick Reference

| Resource | Location |
|----------|----------|
| Design tokens | `src/app/globals.css` |
| Site config | `src/app/site-config.ts` |

## Critical Rules

**IMPORTANT:** ALWAYS check `.claude/project/` for project-specific context before implementation.

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.

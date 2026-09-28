# kWh Electric — Claude Design handoff

Everything needed to build the 18-slide kWh Electric investor deck as a Claude Design canvas.

## Start here

Read/upload **`PROMPT.md`** first — it's the actual instructions and links to everything else in
this folder in the order they matter.

## What's in this folder

```
claude-design-handoff/
  README.md                              — this file
  PROMPT.md                              — START HERE. The build instructions.
  narrative-source-slides-1-2-4-18.md    — exact copy + layout spec, 17 of 18 slides
  narrative-slide-03-replacement.md      — slide 3's replacement content (control-plane framing)
  reference-slides/                      — slide-01.png … slide-18.png, the approved renders
  design-system/
    tokens.md                            — locked color/type/spacing/diagram rules
    ui-components/                       — 24 real HTML/CSS components, open any one in a browser
  brand/
    arham.png, sudheer.png, yuvaraju.png — real team portraits, use exactly these
    approved-visual-benchmark.png        — approved aesthetic reference image
  supporting-decks/
    INDEX.md                             — catalog of ~22 prior exploratory decks (optional)
```

## Where the source decks live (not copied into this folder — 23 files, too large)

**As of 2026-08-23, this is the sole authoritative source location for every `.pptx` referenced by
this handoff** (an earlier version of this folder pointed at scattered dated Codex folders —
disregard that, all 23 decks were consolidated into one place):

`/Users/arhamshomefolder/Documents/Codex/2026-08-23/new-chat-2/outputs/kwh-ppts-last-10-days/`

The primary deck is `kwh-electric-investor-deck-control-plane-v2.pptx` inside that folder. Its 18
slides were already extracted as PNGs into `reference-slides/` in this folder, so you shouldn't
need to open the original .pptx — but it's there (along with the other 22 decks — see
`supporting-decks/INDEX.md` for the tier structure) if you want to see any of them directly.

## The live, browsable component library (same content as `design-system/ui-components/`, but
with click-to-view-full-size and category filters)

https://claude.ai/code/artifact/f14850ab-f3e7-4fda-8371-109f12715990

## If you're uploading to Claude Design as file attachments

Priority order if there's a limit on how many files you can attach at once:

1. `PROMPT.md`
2. `design-system/tokens.md`
3. All of `reference-slides/` (18 images — these are what "correct" looks like)
4. All of `design-system/ui-components/` (24 HTML files — these are the actual building blocks)
5. `narrative-source-slides-1-2-4-18.md` + `narrative-slide-03-replacement.md`
6. `brand/` (4 images)
7. `supporting-decks/INDEX.md` — lowest priority, purely optional

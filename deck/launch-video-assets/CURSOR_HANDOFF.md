# Cursor Handoff — kWh Launch Video

**Status:** Prep complete. Cursor's job starts now.
**Canonical folder:** `~/kwhelectric` (this handoff lives in `deck/launch-video-assets/`)
**Read this file, then everything else it points to, before writing anything.**

---

## The pipeline, three stages

1. **✅ Done (Claude Code, 2026-08-28).** Transcribed the real demo recording's audio,
   extracted and cleaned 19 screenshots from the real product across all three portals, built
   a first-pass storyboard mapping every shot to its timestamp and narration.
2. **🔨 Cursor's job, now.** Build out the **full storyline** — a real narrative arc, not just
   the raw demo transcript in order — and build an **HTML demo video**: an HTML page that
   *plays like a video*, walking through the whole story using the real screenshots, in kWh's
   visual language. This is the deliverable Arham reviews and finalizes with you directly.
3. **⏭ After that.** Once the storyline is finalized, everything (final script, shot list,
   assets) gets packaged and handed to **Claude design** (specifically its animation
   capability) to produce the actual final launch video. You are not building that video —
   you are building the HTML version that lets Arham lock the story first. See the packaging
   convention at the bottom of this file.

Do not skip to stage 3 yourself. Stage 2 is the whole job right now.

---

## Everything you need is already here

| What | Where |
|---|---|
| Full transcript, 57 timestamped segments | `deck/launch-video-assets/transcript.json` |
| 19 cropped screenshots, real product UI | `deck/launch-video-assets/*.png` |
| First-pass storyboard (read this first) | `deck/launch-video-storyboard.html` |
| Source recording, 6:37, if you need motion/detail a still can't show | `~/Downloads/kWh Demo Recording.mp4` |
| kWh's UI component/style library | `deck/ui-library.html` |
| A prior real handoff to Claude design, for the packaging convention | `deck/claude-design-handoff/` (see its `PROMPT.md` and `README.md`) |

`launch-video-storyboard.html` is not the deliverable — it's raw material. It follows the
transcript beat-for-beat and says so in its own header ("prep document, not the final video").
Your job is to turn that raw material into an actual story with pacing, not just relay it.

---

## What the demo actually shows, condensed

Three portals, one gateway product, narrated by the founder:

1. **Gateway portal** (`DER Gateway`, edge device UI) — starts empty/offline, ends with live
   telemetry and a discharge event completing in seconds.
2. **Consumer app** (mobile) — customer sign-in, Bluetooth device discovery, naming, certificate
   issuance. No truck roll. Five short beats.
3. **Utility portal** (`Grid Intelligence`) — sign-in, the same asset seen from the grid side,
   asset registry across a full fleet (not just the demo device), creating a dispatch event,
   and the explicit line that this scales to "millions of assets" and "grid services."

The three ways a device connects, stated directly by the founder near the start: a physical
**gateway**, a **licence** on the device's own firmware, or a standard **API** for OEM
integration. That line is close to verbatim in `launch-video-storyboard.html`'s Act 1 — it's
the clearest statement of the offer in the whole recording, keep it close to that wording.

One correction already made: Whisper mis-heard "SunSpec" (the DER protocol) as "suspect"
throughout the raw transcript. Already fixed in the storyboard's narration text — if you go
back to `transcript.json` directly, expect that same error there too.

---

## Visual rules — kWh's locked design system

Follow these for the HTML demo video. They are not optional style preferences, they're a
standing rule Arham has enforced repeatedly across this project:

- **DM Sans only.** No serif, no second typeface.
- **Two type sizes per screen, occasionally three for a genuine title level.** Hierarchy comes
  from weight and spacing, never from stacking font sizes.
- **Sentence case everywhere.** Never all caps, never wide letter-spacing, never a monospace
  font for labels or protocol names.
- **One accent color: green (`#16A34A` family).** Neutral ink/grey otherwise. Don't add a
  second accent hue to distinguish states.
- **Real screenshots only, in the window-chrome treatment already used in `ui-library.html`**
  (rounded window, thin dot bar, quiet border, minimal shadow) — the exact pattern already
  applied to every shot in `launch-video-storyboard.html`. Never invent a UI screen or fake a
  product surface that wasn't actually captured.
- **No boxed icons, no heavy card shadows, no decorative complexity.** Calm and clear over
  dashboard-dense.
- **Background stays white** unless a specific piece explicitly calls for dark.

---

## Two video types, going forward

Arham split the launch video work into two distinct pieces, decided 2026-08-29:

1. **Personal.** A user-experience video — follows Alex through the 16-step journey, more
   human, more felt. Product screens appear, but they're in service of the person, not the
   point of the shot. Built by editing directly on top of the Consumer Flex × Vouch video
   file, not generated from a blank prompt. See "Personal video — the actual plan" below.
2. **Product.** The screen walkthrough — gateway, consumer app, utility portal, the actual UI
   in detail. This is what `launch-video-storyboard.html` and the earlier "Cursor's job" section
   above are about. Built from real screenshots, not generated video.

These are separate deliverables. Don't blend them — the Personal video is not a wrapper around
product screens, and the Product video is not where Alex's day-in-the-life lives.

**⚠️ Design yes, content no — read this before touching the Vouch video.** The Vouch build's
*design* (persona-in-screen technique, live-updating numbers, caption pacing, third-person
present-tense voiceover, warm minimal aesthetic) is confirmed accurate and is the reference to
edit on top of. Its *content* — the thermostat, Walmart, "$160," Vouch as a marketplace,
credit-card vouchers, gift vouchers, the "Consumer Flex, powered by Vouch" line — is a
different company's product and must not appear anywhere in the kWh video, not even as
placeholder text left over from editing on top of the source file. If you're editing the
literal Vouch video/timeline as a base, every word of Vouch-specific copy gets replaced; check
the full script diff against the six-beat list further down before calling a scene done.

## Exposition technique — studied from Consumer Flex × Vouch, 2026-08-29

Arham asked for this to be studied and remembered before writing any Personal-video prompts.
Source: the actual rendered output, not the bundled source (the bundle bundles a generic
animation engine, not the specific scene — the real content only exists once it's rendered).
Studied via `~/cfv-export/consumer-flex-vouch.mp4` (58s, 1920×1080) and its voiceover track
`consumer-flex-vouch-vo.mp3`, transcribed and sampled at 4s intervals.

**The persona.** A single minimal black stick-figure silhouette — not a photo, not a named
character in dialogue, just "she." It appears standing *inside* the product screens themselves
(next to a thermostat app, at a checkout register) rather than as a separate cutaway. Every
scene is captioned in third person, present tense, tightly synced to a voiceover: "She sees the
thermostat," "She pays $20 at the counter," "It's set up at home," "The grid calls, the
thermostat answers." Five to seven words, never more.

**The screen is alive, not a static mockup.** Numbers actually move on camera — the thermostat
ticks 72°→75°, a credit of "+$1.20" appears, a chart fills in live — so the product state is
changing *while the persona's moment is happening*, not shown as a separate "here's the
dashboard" beat.

**Full voiceover script, six beats, verbatim:**

1. "She sees the thermostat at Walmart, $160."
2. "She pays $20 at the counter, Vouch covers the rest, as long as she's enrolled and her card
   is attached to the voucher."
3. "At home it's set up, it connects to the grid, enrolled."
4. "When the grid calls, the thermostat answers, nudging up a few degrees to ease the peak, a
   credit posts automatically."
5. "Vouch is the marketplace — she spends her credits on a voucher she chooses: a home
   maintenance contract, a credit card voucher, a gift voucher, or a curated gift. She hits
   redeem."
6. "A thermostat that pays for itself. Consumer Flex, powered by Vouch."

**Structure that maps directly onto a kWh Personal video:** buy/install → connect → the event
happens automatically, no action from the person → the reward is tangible and immediate → one
closing line naming the product. That is the shape to reuse for Alex's story, not this literal
script — Alex's product is a battery/EV charger/AC dispatch event, not a thermostat rebate.

**One structural difference worth knowing:** this reference has a "two ways it pays off" split
(Case One: credit lands in a card; Case Two: Vouch marketplace credits) shown as parallel
paths after the shared setup. Decide later whether a kWh Personal video needs an equivalent
split (e.g., utility credit vs. a future marketplace) or stays single-path — not decided yet.

**Where this came from, for reference:** `~/consumer-flex-vouch/index.html` (the live,
scrubbable build — same content, playable, not just this static study) and `~/cfv-export/`
(the pipeline: `generate-vo.js` → `capture-frames.js` → `combine.js`, 1,740 frames captured via
Playwright and combined with the generated voiceover into the final MP4). Note this pipeline
produced the actual `consumer-flex-vouch.mp4` — the file now being used directly as the
edit-on-top-of source for the Personal video. See "Personal video — the actual plan" below for
the current method; it has since moved on from generating fresh footage from a blank prompt.

## Personal video — the actual plan, decided 2026-08-29

**Method: edit on top of the Vouch video, not blank-slate generation.** Arham is feeding the
animation tool the actual `~/cfv-export/consumer-flex-vouch.mp4` file as a reference and
asking it to edit directly on top of that video to build the kWh version — reusing its real
timeline, pacing, and screen-comes-alive technique, with kWh's own content substituted scene
by scene. This supersedes the earlier plan of generating an establishing shot from a blank
text prompt (that draft prompt is kept below as a fallback only, in case edit-on-top-of-video
turns out not to be supported by the tool in use).

**Content, Part A — Alex's 16-step journey, told in the Vouch video's design language.**
This is the full sequence already built and verified in `~/kwh-investor-room` (customer
journey, section 06). It is one continuous DERControl event — Alex's battery, EV charger and
air conditioner respond to a demand-flexibility call — told as 16 beats. Reuse this exact
sequence and order; it is not a draft, it is the finalized content:

1. Native interface exposed — Alex's battery presents RS-485, his EV charger Zigbee, his air
   conditioner a vendor cloud API. Nothing changes on the devices themselves.
2. Discovered and connected — the gateway scans the local buses and finds them by name and
   protocol.
3. Registered over MQTT and TLS — each approved asset joins the account, telemetry buffered
   locally.
4. Translated to IEEE 2030.5 — the platform issues a certificate and represents all three as
   standard DERs, whatever they speak underneath.
5. Capability published to the aggregator — what capacity exists, where, what it's permitted
   to do.
6. Capability published to the utility — the same view, filtered to the feeders it cares about.
7. Program commissioned — the utility defines demand flexibility on a constrained feeder: the
   window, the price, the obligation.
8. Assets enrolled — the aggregator enrols Alex's battery and charger. A registry write, not a
   new integration.
9. Event called — 17:00 to 19:00, against the enrolled capacity needed.
10. DERControl event issued — one instruction, the same shape for every device in the program.
11. Translated down per device — RS-485 to the battery, Zigbee to the charger, an API call to
    the air conditioner.
12. Devices respond — the battery discharges, the charger pauses, the AC shifts its setpoint.
    **Alex is not asked to do anything.** This is the beat the Vouch reference nails with "the
    thermostat answers" — keep that same hands-off, automatic feeling here.
13. Measured response returns — each asset measured against its own baseline.
14. Verified performance sent to the aggregator.
15. Verified performance sent to the utility — one measurement settles both sides.
16. Alex is paid — by the aggregator, for what his devices actually delivered. kWh measures and
    verifies; it never holds or moves the money.

**Content, Part B — after the 16 steps, zoom out to network effects and other services.** The
demand-flexibility event Alex just went through is *one example*. Once his personal story
finishes, the video pulls back to show the same infrastructure running at scale, across many
customers, and running more than one service on the same assets. **Finalized 2026-08-29, the
services to name explicitly: asset management, asset securitization and tokenization, and
energy trading** — future services, stated as such, not detailed as a second product demo.
(Forecasting/procurement/disaggregation are also real — they're in the Grid Intelligence
portal's own nav and the source demo's closing line — but they are not the list Arham asked
for here; don't substitute them in.) Close on the network-effect thesis stated plainly: more
gigawatts under management → more services stack onto the same assets → value per asset rises.
That's the flywheel, visualized as a climb, not just narrated.

**The full paste-ready prompt for this — Part A beats, Part B, closing line — is written out
in full at `deck/launch-video-assets/PERSONAL-VIDEO-ANIMATION-PROMPT.md`.** That file is the
one meant to go directly into the animation tool. This section of this handoff is the
background for it, not a duplicate of it — if the two ever disagree, the prompt file is the
current one, since it was written after this section and is what actually shipped.

**Fallback prompt, if edit-on-top-of-video isn't workable and fresh generation is needed
instead.** Persona is still Alex, same details as above. One establishing shot only, matching
the reference's "product quietly present in an ordinary moment" technique — not the full
16-step content, just an opening beat:

```
A calm suburban home exterior at golden-hour evening. A man in his early 30s, wearing a
relaxed weekend outfit — grey t-shirt, dark jeans — walks up his driveway toward the front
door, keys in hand. In the background, softly out of focus, a home battery unit is mounted on
the exterior wall near the garage, its small status light glowing a steady green. An electric
vehicle is parked in the driveway, charging cable connected, a faint light pulsing at the
charge port. As he reaches his door, he pauses, glances back at the driveway with a small,
satisfied smile, then goes inside. Static wide shot, slow and steady, warm natural lighting,
soft golden-hour glow, photorealistic, cinematic but understated. No text overlays, no
dialogue, ambient sound only.
```

## Packaging for Claude design, when the storyline is locked

Follow the same shape as the existing `deck/claude-design-handoff/` folder: a `PROMPT.md`
describing the ask, a `README.md` orienting the reader, source material organized by type
(narrative/script, reference assets, design-system pointers). Build the equivalent for this
launch video once Arham has signed off on your HTML demo video and the storyline it encodes.
Do not build that handoff package before he's approved the story — the whole point of stage 2
is to get the story right before it goes anywhere near final production.

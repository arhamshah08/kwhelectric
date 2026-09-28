# Claude app prompt — animated product sequence for the open DER platform

> Paste everything between the START and END markers into a fresh chat in the Claude app.
> Attach nothing. The prompt is self-contained.
> Expect the first build to take a few minutes. Iterate scene by scene afterwards rather than asking for full rewrites.

---

## START OF PROMPT

Build me a single animated, interactive React artifact that tells the full product sequence of an open-source distributed energy platform. This is a launch asset. It has to be beautiful enough to put on a landing page and clear enough that a developer understands the architecture in ninety seconds without reading documentation.

### What the company does

kWh Electric builds the operating system for distributed energy resources. Solar arrays, batteries, EV chargers, and meters are already installed everywhere, but each one speaks a different protocol, so almost none of them can participate in grid programs. The company ships a palm-sized edge gateway, plus a cloud platform, that translates between whatever a device speaks and whatever the utility speaks.

The critical framing, and the animation must carry it: **IEEE 2030.5 is not the product.** It is one protocol among many. The product is the platform sitting above it. Applications never touch a protocol. They call `device.getSOC()` and `device.setPowerLimit()` and the platform resolves that to Modbus, CAN, OCPP, SunSpec, or a vendor API underneath.

The business model the animation must make visible: the IEEE 2030.5 client and the core SDK are free and open source, forever. Revenue starts when usage scales. Metered on API calls, dispatch events, devices under management, and telemetry retained.

### Technical constraints

1. One self-contained React artifact. No external network requests, no CDN scripts, no remote fonts, no remote images. Everything inline.
2. Style with Tailwind classes. Draw all diagrams as inline SVG.
3. Animate with CSS transitions, CSS keyframes, and React state driven by `requestAnimationFrame` or `setInterval`. Do not depend on an animation library being available. If Recharts is available use it for the telemetry chart, otherwise draw that chart as inline SVG too.
4. Must work on a laptop screen and degrade gracefully on mobile. Wide diagrams scroll inside their own container. The page body never scrolls sideways.
5. Respect `prefers-reduced-motion`. When set, show every scene in its final state with no movement.

### Playback model

A ten-scene sequence, roughly ninety seconds end to end. Controls pinned at the bottom: play and pause, previous and next scene, a scrubber, and a numbered scene rail showing which of the ten you are on. Autoplay on load. Each scene advances automatically but any scene can be jumped to directly. A scene title and a one-line caption sit in a fixed position so they do not jump around as scenes change.

### Design system, use these exact values

Background `#FAFAF8`. Ink `#0E1512`. Secondary text `#4A5A52`. Tertiary `#8A9992`. Hairlines `#E3E7E4`.

Semantic colours, and they are strictly semantic, never decorative:

- **Hollow outline, grey** means a stranded asset. Installed, invisible, earning nothing.
- **Mint** `#E4F4EA` fill with `#1E8B4E` stroke means a connected asset.
- **Honey** `#C8901B` means dispatch, translation, and money. This is the accent and it should be used sparingly enough that it always means something.
- **Indigo** `#EDEAFB` fill with `#4B31C4` stroke means a software layer.

Typography: a clean geometric sans for everything, and a monospace face for labels, protocol names, numerics, and the usage meter. Uppercase, letterspaced, small monospace labels for section headers. Generous whitespace. No drop shadows heavier than a soft two pixels. No gradients except very subtle ones inside a single hue.

The recurring geometric primitive is the **hexagon**. One hexagon is one energy asset. There must be no bees, no honeycomb illustrations, no honey jars, and no insects anywhere in this. The metaphor survives only as geometry and colour.

### The ten scenes

**Scene 01 — Stranded**
A dark, quiet field of hollow grey hexagons, scattered across the canvas, none of them lit. Small labels drift near a few of them: `BESS · Modbus only`, `PV · SunSpec`, `EVSE · OCPP`, `Meter · DNP3`. Nothing is connected to anything.
Caption: `The assets are already installed. None of them can be dispatched.`

**Scene 02 — The gateway arrives**
A single hexagon near the centre gains a small edge-gateway node beside it, drawn as a compact rounded rectangle in ink outline. Two entry paths animate in side by side and then one is chosen: `Physical gateway` or `Software license on existing hardware`. Show both as equal options, because both are real purchase paths.
Caption: `Buy the gateway, or license the software onto hardware you already own.`

**Scene 03 — Discovery**
The gateway emits concentric probe pulses. As each pulse lands, a nearby device is found and a protocol label locks in beside it: `Modbus TCP`, `SunSpec`, `CAN`, `OCPP`, `MQTT`, `Vendor API`. Discovered devices shift from hollow to mint one at a time, with a slight stagger so it reads as a sweep rather than a flash.
Caption: `The gateway finds what is there and learns what it speaks.`

**Scene 04 — The digital twin**
The discovered devices collapse into a single normalised card. Show the unified model as a list of fields that every device now exposes regardless of protocol: `power`, `energy`, `stateOfCharge`, `voltage`, `current`, `limits`, `capabilities`, `controllability`, `health`. Six different protocol badges feed into the one card.
Caption: `Six dialects in. One asset model out.`

**Scene 05 — Utility registration**
A utility node appears at the top of the canvas, labelled `Distribution utility · IEEE 2030.5 server`. The gateway, labelled `IEEE 2030.5 client`, opens a connection upward. A certificate exchange animates along the link and a small lock badge settles on both ends.
Make this explicit on screen, as a caption or annotation: `The platform is not the 2030.5 server. The utility runs the server. The gateway is the client.`
Caption: `The gateway registers, the certificates install, the site becomes eligible.`

**Scene 06 — The stack**
Pull back to the full layered architecture, animating in from the bottom up. Four bands:
- `Physical devices` in mint: battery, solar inverter, EV charger, transformer sensors, meters, flexible loads, thermostats
- `Protocol drivers` in neutral: IEEE 2030.5, SunSpec, Modbus RTU, Modbus TCP, OCPP, CAN, MQTT, DNP3, IEC 61850, vendor APIs
- `Platform` in honey, the widest band and visually the hero: device abstraction layer, asset registry, digital twin, rules engine, scheduler, time series, analytics, fleet management, licensing, billing, marketplace, developer SDK, REST APIs, webhooks
- `Applications` in indigo: battery dispatch, EV smart charging, solar controls, transformer health, demand response, forecasting, carbon, AI agents, marketplace

As the platform band lands, show a small floating code snippet in monospace over it:

```
device.getSOC()
device.setPowerLimit(50)
device.subscribe('telemetry')
```

with a line beneath: `Applications call these. The platform resolves the protocol.`
Caption: `Protocols become interchangeable drivers. Applications become portable.`

**Scene 07 — Install an app**
A compact marketplace panel slides in with four app cards: `Battery Dispatch`, `EV Smart Charging`, `Solar Controls`, `Transformer Health`. `Battery Dispatch` is selected and installs onto the gateway with a short progress animation. Mark two of the other cards as third-party, published by other developers, since the marketplace is part of the model.
Caption: `Install applications the way you install anything else.`

**Scene 08 — Dispatch**
The core scene and it should be the most satisfying moment in the whole piece. Sequence it as a chain, with each step visibly triggering the next rather than everything moving at once:

1. The utility emits a dispatch event. A honey pulse leaves the utility node, labelled `DERControl · 50 kW · 15 min`.
2. The pulse travels down the link labelled `IEEE 2030.5` and reaches the gateway.
3. Inside the gateway, show the translation happening. The 2030.5 payload visibly converts into a native command, labelled `write holding register 40149 = 500`.
4. The command travels down the link labelled `Modbus TCP` into the battery.
5. The battery hexagon turns honey. Its state-of-charge readout starts falling in real time and a power figure climbs to 50 kW.
6. Telemetry begins flowing back up the same path as small ascending particles, and a live line chart starts drawing.
7. A latency badge lands on the link reading `340ms`.

Caption: `Control flows down. Data flows up. One layer carries both.`

**Scene 09 — Metering**
The dashboard fills in and a usage meter becomes the focus. It must clearly separate what is free from what is billed:

```
FREE, FOREVER
  IEEE 2030.5 client          unlimited
  Core SDK, open source       unlimited
  1 gateway, 5 devices        active
  Basic monitoring            active

METERED
  API calls        12,480 / 10,000     over
  Dispatch events     842
  Devices managed      37
  Telemetry retained  8.2 GB
```

Animate the API call counter ticking past the free threshold, at which point the row shifts from mint to honey and a small line appears reading `usage-based billing active`. This transition is the business model, so give it a beat rather than burying it.
Caption: `The protocol client is free. You pay when it scales.`

**Scene 10 — Fleet**
Pull all the way back. The single lit site multiplies across the canvas until the full hexagon field from scene 01 is lit, mostly mint with a scatter of honey for assets under active dispatch. A counter runs up beside it showing gateways, devices, and megawatts under management. Deliberately mirror the composition of scene 01 so the before and after read as the same frame.
Caption: `Everyone else is chasing next year's assets. This switches on the ones already in the ground.`

### Two things to get right

1. **The chain in scene 08 must be legible.** A viewer should be able to point at any moment and say which protocol is carrying the message at that instant. Every link is labelled, the labels are always readable, and nothing moves so fast that the eye loses the packet.

2. **Free versus metered in scene 09 must be unambiguous.** Someone watching should walk away knowing they can run the 2030.5 client at no cost and knowing exactly which axis they get charged on.

### Before you finish

Verify each of these and tell me if any failed:

1. All ten scenes render, autoplay runs cleanly end to end, and every control works.
2. Nothing overflows its container and the page never scrolls horizontally.
3. Colour semantics hold throughout. Hollow is stranded, mint is connected, honey is dispatch or translation or money, indigo is software.
4. No bees, honeycomb, honey jars, or insects appear anywhere.
5. `prefers-reduced-motion` shows final states with no movement.
6. No external requests of any kind.

Build it as one artifact. After it renders, list the three things you would tighten with more time.

## END OF PROMPT

---

## Notes for Arham, not part of the prompt

**Where the name goes.** The prompt says kWh Electric throughout. If you land on Erla, Apika, or whichever name wins, do a find and replace before pasting, or ask Claude to rename it afterwards in one line.

**What to iterate on first.** Scene 08 is the one that sells the product and it is the one most likely to come out muddy on the first build. Budget two or three rounds on that scene alone. Ask for changes scene by scene, since asking for a full rewrite tends to regress the scenes that were already working.

**Two follow-on assets from the same artifact.** Once scene 08 looks right, it stands alone as a landing-page hero loop. Scene 06 stands alone as the architecture diagram for the README of the open-source repo. Ask for each to be extracted as its own smaller artifact rather than rebuilding them.

**One gap in the handoff worth closing before launch.** The document defines the free tier by resource count, one gateway and a small number of devices, but the pricing conversation you described is usage-based on API calls and dispatch. Those are different meters and developers will ask which one actually binds. Scene 09 above shows both, with the resource limits as free-tier gates and the usage counters as the billed axis. Confirm that is the model you want before this animation becomes the thing people quote back at you.

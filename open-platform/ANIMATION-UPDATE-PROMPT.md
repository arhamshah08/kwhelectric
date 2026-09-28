# Update prompt — turn the Mac dashboard flow into a real product

> Use this with the artifact exported as `Mac app dashboard flow.zip`.
>
> If the original Claude chat still exists, paste everything between START and END into that chat. If it does not, upload `Mac app dashboard flow.zip` to a new chat and then paste this prompt.
>
> This prompt deliberately replaces the earlier slideshow and animation direction. The target is now an interactive Mac application prototype, not a narrated presentation inside a Mac frame.

---

## START OF PROMPT

Rebuild the current artifact as a convincing, interactive **native-style Mac application for operating distributed energy resources**.

The current build has useful content and sample data, but its product structure is wrong. It behaves like a ten-slide presentation: a dark theatrical background, `STEP 01 / 10`, explanatory headings outside the active window, global back and restart controls, and a different device frame for each beat. It then places purchase pages, order confirmation, phone setup, product education, and one dashboard at the same hierarchy.

That is not how the finished product should work.

The new artifact must feel like a real operator can open it every morning, find a fault, inspect an asset, connect the gateway to several compatible applications and services, enrol in a relevant DISCOM program, send a dispatch, confirm delivery, and understand usage. Keep the strongest data and technical truths from the existing artifact, but completely replace the slideshow architecture.

---

# 1. The non-negotiable structural change

## Delete the presentation wrapper

Remove all of these completely:

- the dark gradient stage behind the product;
- `STEP X / 10` and all scene labels;
- titles and captions floating above the application;
- global presentation back and restart buttons;
- autoplay, play/pause, scrubber, numbered rail, or timed scene changes;
- the animated demo cursor;
- browser and phone frames appearing as consecutive slides;
- the hexagon lattice as a full-screen background;
- explanatory architecture diagrams masquerading as application pages.

There is no presentation chrome in the finished artifact. The application itself is the artifact.

## Build one persistent Mac app shell

Render a single Mac window that fills most of the viewport:

```txt
preferred window: 1440 × 900
minimum usable size: 1180 × 760
outer viewport inset: 16–24px
sidebar: 224px expanded, 72px collapsed
titlebar / global toolbar: 52px
content toolbar: 52–60px when needed
```

The window scales or reflows within the viewport; it must not be a fixed presentation canvas. Use a quiet solid page ground outside it, not a spotlight or gradient. The app window has proper macOS traffic lights, a restrained warm shadow, and a 12–14px outer radius.

The shell remains mounted while routes change. Only the content region changes. Sidebar selection, filters, table position, and the back stack must persist.

The user is already signed into a seeded **Demo workspace**. If the workspace has no gateway, show the first-run onboarding flow. If it has operating sites, open directly to Overview.

---

# 2. Separate acquisition, onboarding, education, and operations

The existing artifact mixes four different jobs. Give each one the correct home.

## Acquisition is outside the Mac app

The `Buy gateway`, `$349`, checkout, order confirmation, shipping, and software-license purchase pages are website content. They must not appear in the normal Mac application flow.

The onboarding empty state may have two secondary links:

- `Order a kWh Gateway ↗`
- `License on existing hardware ↗`

These links may open a small external-link confirmation or a separate browser preview only after the user clicks them. They are not top-level routes and are never part of the default demo path.

## First-run setup is a Mac app wizard

Pairing, network connection, device discovery, normalisation, and utility registration belong in one in-window setup wizard. Do not switch to an iPhone frame. Do not reproduce the macOS Wi-Fi settings application. The wizard should look like the same kWh application, with the same sidebar hidden and a compact `Setup` titlebar.

## Product education is contextual help

Statements such as “the utility runs the IEEE 2030.5 server and the gateway is the client” are important, but they are not primary navigation pages. Put the explanation behind an `i` popover or a `Learn how registration works` disclosure inside the registration step.

The four-layer architecture stack belongs in documentation or an About/Developer help sheet, not between operational screens.

## Operations live in the persistent app shell

Overview, sites, assets, gateways, dispatch, alerts, compatible apps and services, DISCOM programs, usage, and developer activity are the actual product.

---

# 3. Information architecture

Build this navigation. Use one consistent outline SVG icon family with 1.7–1.8px strokes. No emoji.

```txt
WORKSPACE
  Overview
  Sites
  Assets
  Gateways
  Dispatch
  Events

INSTALLED APPS
  Battery Dispatch
  EV Smart Charging
  Solar Controls
  Transformer Health

PLATFORM
  Marketplace
  Programs & services
  Usage & billing
  Developer

bottom-pinned
  Settings
  Help
```

At the top of the sidebar, show:

- the kWh Electric wordmark;
- workspace switcher: `Vellore Flex Fleet`;
- a small `DEMO` badge so sample numbers are not presented as real customer claims;
- collapse control.

The selected route gets a quiet filled row and a 3px honey indicator. A section can collapse, but never hide the currently selected route.

## Global toolbar

Keep this present on every operational route:

- back and forward controls;
- page title or breadcrumb;
- global search field with `⌘K`;
- environment badge `Production`;
- connection indicator `All systems online` or the current degraded state;
- `Updated 12 sec ago` with a refresh action;
- notification bell with unread count;
- user avatar and menu.

Do not put the company story, scene captions, or demo instructions in this toolbar.

---

# 4. First-run gateway onboarding

If the user selects `Add gateway`, present a focused wizard inside the Mac window. Use a narrow seven-step progress indicator in the title area and Back/Continue controls in a sticky footer. Inputs use visible labels, helper text, inline validation, and actual focus states. Save the draft automatically so the user can leave and resume.

## Step 1 — Site and deployment

Collect:

- site name;
- deployment path: `kWh Gateway` or `Software on existing hardware`.

Explain each choice in one sentence. Do not show a product-commerce page.

## Step 2 — Claim gateway

Allow either:

- scan the QR code using the Mac camera; or
- enter `Serial number` and `Claim code` manually.

Use the existing demo gateway `KWH-GTW-0042`, firmware `3.2.1`. After the user submits, show a brief verifying state followed by:

```txt
Gateway found
KWH-GTW-0042
Ethernet · 1 Gbps
Firmware 3.2.1 · Update available
```

The firmware update is a real secondary action with progress and a completed state.

## Step 3 — Build the site profile

After the gateway is connected, collect the context needed to determine which applications, services, tariffs, and grid programs are actually relevant. Do not ask for all of this before the hardware connection succeeds.

Group the form into progressive sections:

### Location and service territory

- site address, locality, state, and PIN code;
- map position or latitude/longitude, with an explicit `Use this Mac's location` permission action rather than silent collection;
- timezone, auto-suggested from the location but editable;
- DISCOM / distribution utility;
- feeder or substation when known.

### Electricity account and tariff

- consumer / service connection number;
- meter number, prefilled as `METER-11` when the gateway can read it;
- tariff category and tariff code;
- time-of-day or time-of-use billing status;
- sanctioned load or contract demand;
- supply voltage and phase;
- net-metering or export permission and export limit;
- billing cycle.

### Site and operating preferences

- facility type and account-holder type;
- owner, tenant, operator, or aggregator relationship;
- primary goal: `Lower bill`, `Earn grid revenue`, `Backup resilience`, `Reduce emissions`, or `Improve power quality`;
- allowed automation level: `Recommend only`, `Ask before every control`, or `Operate within approved limits`;
- notification and contact preference.

Use this seeded profile in the demo:

```txt
Site                    Ranipet Flex Site
Location                Ranipet, Tamil Nadu · 632401
DISCOM                   Tamil Nadu DISCOM · demo profile
Tariff                   LT Commercial · ToD enabled
Contract demand          100 kW
Connection               415 V · three-phase
Meter                    METER-11
Export permission        Enabled · 200 kW limit
Primary goal             Lower bill + earn grid revenue
Automation               Ask before every control
```

Prefill what the gateway or meter already knows and mark its source, for example `Read from METER-11`, `Detected from network`, or `Entered by user`. Every field has an `Why we need this` explanation. Required and optional fields are visibly different.

Do not send profile data to an app, service provider, utility, or program at this stage. The profile stays in the workspace until the user explicitly connects or enrols.

## Step 4 — Discover devices

Use a proper scan view rather than a list that simply appears by itself:

- `Scan site` primary button;
- scan progress with elapsed time;
- interface filters `Ethernet`, `RS-485`, `CAN`, `Wi-Fi`;
- rows appear as they are discovered;
- each row has device name, manufacturer/model, interface, protocol, address, confidence, and status;
- user can rename, exclude, or resolve a duplicate.

Seed these devices:

```txt
BESS-01   Battery system       Modbus TCP   10.0.12.31:502
SOLAR-04  Solar inverter      SunSpec      10.0.12.44:502
EVSE-02   EV charger          OCPP         evse-02
XFMR-07   Transformer sensor  DNP3         outstation 7
METER-11  Revenue meter       MQTT         meter/11
```

## Step 5 — Review digital twins

This replaces the explanatory “one model, six dialects” slide.

Show a table of the five discovered assets with mapping status. Selecting a row opens a right inspector with:

- identity and tags;
- native driver and endpoint;
- normalised capabilities;
- mapped fields such as `power`, `energy`, `stateOfCharge`, `voltage`, `current`, `limits`, `controllability`, and `health`;
- raw-to-normalised mapping preview;
- validation warnings.

The user must confirm the mappings before continuing. This is the first place the product should visibly prove that different protocols resolve into one asset model.

## Step 6 — Match apps, services, and programs

Combine the site profile from Step 3 with the capabilities discovered in Steps 4 and 5. Show a ranked opportunity screen with three clearly different object types:

- `ON-GATEWAY APP` — software installed on the gateway, such as Battery Dispatch;
- `CLOUD SERVICE` — a connected optimisation, forecasting, maintenance, or billing service;
- `DISCOM PROGRAM` — a tariff, demand-response, managed-charging, export-control, or flexibility program offered for the service territory.

Each result must show:

- `Eligible`, `Likely eligible`, `Action required`, or `Not compatible`;
- provider and object type;
- supported devices and sites;
- specific match reasons;
- missing information or action;
- permissions it will request;
- value type such as savings, incentive, resilience, or compliance;
- `Review`, `Connect`, or `Enrol` action.

Seed these clearly labelled demo opportunities:

```txt
Battery Dispatch          On-gateway app   Eligible
ToD Battery Optimisation  Cloud service    Eligible
Peak Flex Reward          DISCOM program   Likely eligible
Solar Export Guard        Cloud service    Eligible
EV Managed Charging       DISCOM program   Action required
Transformer Health        On-gateway app   Eligible
```

The results should explain themselves. Examples:

```txt
Battery Dispatch · Eligible
Matched because BESS-01 is controllable, exposes SoC and power limits,
and KWH-GTW-0042 supports the required Modbus write capability.

Peak Flex Reward · Likely eligible
Matched because this site is in the selected DISCOM territory, uses an
eligible commercial ToD tariff, has 50 kW of controllable battery capacity,
and has interval metering. Account-holder consent is still required.

EV Managed Charging · Action required
EVSE-02 is compatible, but the tariff profile is missing the EV charging
sub-category required to confirm program eligibility.
```

Let the user select several compatible opportunities, but do not silently install or enrol anything. `Continue` saves the recommendations and moves to registration. A secondary `Decide later` action is allowed.

## Step 7 — Register and finish

Show utility or aggregator registration as an actual configuration form:

- program / utility;
- IEEE 2030.5 server URL;
- device LFDI;
- certificate status;
- capability test;
- registration state.

Run the sequence visibly: `Generating key → Installing certificate → Testing connection → Registered`.

Put the technical clarification in a small info disclosure:

> The utility operates the IEEE 2030.5 server. This gateway connects as the client. IEEE 2030.5 is one driver in the platform, not the platform itself.

The final state says `Site online` and summarises `1 gateway · 5 assets · 5 drivers · utility registration active · 5 matched opportunities`. Show a compact `Recommended next` list for the opportunities selected in Step 6. The primary button is `Open site overview`.

Do not show `0 truck rolls` as if it were a configuration result.

---

# 5. Overview — make the existing dashboard the real home screen

The uploaded reference image and current DISCOM sample data are the basis of this route. Rebuild it at native Mac-app density rather than shrinking it into the bottom of a slide.

## Overview header

```txt
Overview
Vellore Flex Fleet · 12 sites · live
[Last 24 hours ▾] [All feeders ▾] [Add gateway]
```

Use five KPI cards in one row:

1. `DER sites online` — `11 / 12`
2. `Aggregate DER power` — `4.8 MW`
3. `Reactive support` — `1.2 MVAr`
4. `Transformers monitored` — `9`
5. `Active alarms` — `3`

The cards are compact controls, not decorative posters. Clicking a KPI filters the relevant table or navigates to its route. Each card has a tiny comparison or timestamp, such as `+6.2% vs prior day` or `updated 12 sec ago`.

## Main overview layout

Use a responsive 58/42 split:

### Left — DER sites

- small site map with operational dots and a visible legend;
- active vs reactive power chart over 24 hours;
- BESS state of charge and health;
- power factor;
- curtailment requested vs delivered;
- sortable site table with Site, Feeder, Assets, Status, Live kW, Last telemetry.

### Right — Transformers

- transformer loading bar chart with the 100% limit labelled;
- oil and winding temperature over 24 hours;
- reverse-power-flow band for Feeder F2;
- estimated loss-of-life indicator;
- sortable transformer table.

### Full width — Active events

Show the three existing events with severity, affected resource, time, assignee, and status. Clicking a row opens the event inspector; `View all events` navigates to Events with the same filters applied.

Use the current sample data, including DT-07 at 112%, BESS-03 offline, and the Feeder F2 reverse-power-flow warning. Preserve units and timestamps.

## Recommended opportunities

Include a compact operational panel—not a marketing carousel—showing the best three matches for this workspace:

- Battery Dispatch · `Eligible`;
- Peak Flex Reward · `Likely eligible`;
- Solar Export Guard · `Eligible`.

Each row shows its type, the site or assets it applies to, one short reason for the match, and a `Review` action. `View all` navigates to Programs & services. Dismissing a recommendation removes it from Overview but keeps it available in the full directory.

---

# 6. Sites, assets, and digital twins

## Sites route

This is a real fleet inventory, not a collection of cards.

- toolbar with search, status, feeder, program, and asset-type filters;
- segmented Table / Map view;
- sortable columns for site, gateway, utility program, assets, live power, status, and last telemetry;
- bulk actions appear only after selection;
- offline and partially connected states are visibly different.

Clicking a site opens a site detail route with tabs:

```txt
Summary | Assets | Telemetry | Programs | Events | Configuration
```

The Summary tab includes site power, connectivity, today’s energy, current constraints, gateway state, installed apps, connected services, program enrolments, and a short event feed. Programs shows eligible, pending, active, and incompatible opportunities with reasons. Configuration contains the editable location, DISCOM, tariff, service connection, meter, export, and operating-preference profile gathered during onboarding, including the source and last-updated time for every field.

## Assets route

Use a dense inventory table with:

- asset name and type;
- site;
- manufacturer/model;
- protocol driver;
- controllability;
- live power;
- health;
- last telemetry.

Clicking `BESS-01` opens the digital-twin detail. This is a required screen and one of the missing pieces in the current build.

## Digital-twin detail

Header:

```txt
BESS-01 · Ranipet
Battery energy storage · Online · Controllable
[Open controls] [•••]
```

Tabs:

```txt
Summary | Telemetry | Controls | Capabilities | Driver | Events
```

Summary shows SoC, power, available energy, temperature, state of health, operating limits, site, gateway, installed applications, and connected programs/services using this asset. Telemetry has a time-range selector, legend, hover values, and a table/export alternative. Driver exposes `Modbus TCP`, endpoint, register mapping, polling interval, last successful read, and connection diagnostics. Capabilities exposes the normalised model and a `Compatible opportunities` panel derived from it.

`Open controls` opens a right-side sheet, not a new slide.

---

# 7. Gateways

Create a Gateways table with gateway name, site, connectivity, firmware, drivers, attached assets, connected apps/services, registration, and last heartbeat.

Gateway detail tabs:

```txt
Overview | Interfaces | Drivers | Apps & services | Certificates | Logs | Updates
```

The detail must make the edge role credible:

- CPU, memory, storage, uptime, temperature;
- Ethernet / Wi-Fi / RS-485 / CAN interface status;
- running drivers and versions;
- every installed app, connected cloud service, and enrolled DISCOM program using this gateway;
- permissions and control scopes granted to each connection;
- compatibility status and the site/device fields used to determine it;
- control-authority priority when more than one app can command the same device;
- IEEE 2030.5 client certificate and expiry;
- recent translation and telemetry logs;
- restart, update, and download-diagnostics actions with confirmations.

Do not expose destructive actions beside normal controls. Put them under an overflow menu and require confirmation.

---

# 8. Marketplace and installed applications

The current build lists five applications as if they are interchangeable dashboard tabs. Replace that with a real application model.

Installed applications may be pinned in the sidebar, but discovery and installation happen in `Marketplace`.

## Marketplace route

Provide:

- search;
- categories `Dispatch`, `EV`, `Solar`, `Grid`, `Analytics`;
- filters for `Compatible with this site`, `kWh verified`, `Third-party`, supported asset types, tariff, and DISCOM territory;
- a site selector that recomputes compatibility rather than showing the same catalogue to everyone;
- compact app cards with publisher, version, rating/status, required capabilities, price model, compatibility state, a one-line match reason, and Installed/Update state.

Seed:

- Battery Dispatch — kWh Electric;
- EV Smart Charging — kWh Electric;
- Solar Controls — third-party;
- Transformer Health — third-party.

## Installation flow

Clicking Battery Dispatch opens an app detail route with Overview, Permissions, Compatibility, Changelog, and Support. The Compatibility tab must show which site-profile fields, asset capabilities, gateway drivers, and operating limits produced the result. Never show a bare `Compatible` badge with no explanation.

`Install` opens a sheet that requires the user to:

1. review requested permissions;
2. select target sites or gateways;
3. review compatible and incompatible assets;
4. confirm installation.

Then show real progress:

```txt
Downloading package
Verifying signature
Installing on KWH-GTW-0042
Registering webhooks
Ready
```

When complete, the primary action becomes `Open Battery Dispatch`, and the application appears under Installed Apps in the sidebar. This full interaction must work.

---

# 9. Programs, services, and compatibility

Create a `Programs & services` route that makes the gateway's ecosystem role visible without turning it into a presentation diagram.

## Compatibility model

The matching engine evaluates each opportunity against four groups of facts:

```txt
SITE
  location · DISCOM territory · tariff · contract demand · export permission

ASSETS
  device type · capacity · telemetry · controllability · operating limits

GATEWAY
  installed drivers · connectivity · certificate state · firmware · uptime

PROGRAM REQUIREMENTS
  territory · tariff class · minimum capacity · meter interval · control permission
```

Show these as a readable compatibility inspector or matrix. It is operational evidence, not a decorative flowchart.

Every app, service, and program result has one of four states:

- `Eligible` — all required facts are present and pass;
- `Likely eligible` — the known facts pass, but consent or verification remains;
- `Action required` — a field, document, tariff detail, or capability is missing;
- `Not compatible` — show the exact failed requirement and never offer a misleading primary Connect button.

Recalculate results immediately when the site profile, tariff, discovered assets, firmware, or device capabilities change. Show `Eligibility updated just now` and explain what changed.

## Directory layout

Tabs:

```txt
Recommended | Connected | Enrolments | Not compatible
```

Filters:

- site;
- opportunity type;
- DISCOM / provider;
- asset type;
- status;
- goal: savings, revenue, resilience, emissions, or compliance.

Cards or rows show provider, type, affected assets, compatibility status, match score only if it is explainable, required permissions, and next action. Programs and financial values are explicitly marked `Sample program` and `Illustrative estimate` unless verified source data is supplied.

## Program or service detail

The detail route includes:

```txt
Overview | Eligibility | Compatible assets | Data & control access | Activity
```

Eligibility is a checklist with passed, missing, and failed requirements. Compatible assets is a table, not a pile of logos. Data & control access states exactly what will leave the workspace and what commands the provider may request.

## Connect or enrol flow

Use a four-step sheet:

1. **Confirm account** — service connection number and account-holder relationship.
2. **Review eligibility** — all passed requirements and unresolved items.
3. **Grant access** — select data scopes, control scopes, duration, target assets, and notification rules.
4. **Submit** — confirm enrolment or connection and show a durable status.

Example data scopes:

```txt
Site profile
Tariff and meter identifiers
15-minute interval telemetry
Asset capabilities and availability
Dispatch acknowledgements
```

Example control scopes:

```txt
Read only
Recommend dispatch
Request dispatch with approval
Dispatch within ±50 kW and approved hours
```

Use least privilege by default. Control is never granted just because an app is technically compatible. The user can revoke a connection later from either the program detail or the gateway's Apps & services tab.

## Multiple apps and control conflicts

One gateway can connect to and run several apps and services at the same time. Show this explicitly on the gateway Apps & services tab with:

- connection type and provider;
- status and last activity;
- attached sites/assets;
- data scope;
- control scope;
- priority and allowed schedule;
- conflict state.

If Battery Dispatch and Peak Flex Reward can both control BESS-01, show a control-policy sheet before enabling the second connection. The operator chooses priority, reserved capacity, protected time windows, and fallback behaviour. Never let two services silently issue competing commands.

## Connected state

After connection, show a compact live chain in the detail route:

```txt
Peak Flex Reward
→ enrolled · account verified
→ KWH-GTW-0042 connected
→ BESS-01 and METER-11 authorised
→ telemetry healthy · last sync 12 sec ago
→ control requires operator approval
```

This is how the artifact demonstrates that one gateway can serve many compatible applications and programs.

---

# 10. Dispatch — the core operational flow

The most important missing flow is not an architecture animation; it is an operator creating, issuing, and verifying a dispatch.

## Dispatch list

Show tabs:

```txt
Active | Scheduled | Completed | Failed
```

Columns:

- event ID;
- program / source;
- target group;
- requested power;
- delivered power;
- start and duration;
- state;
- success rate.

Primary action: `Create dispatch`.

## Create-dispatch flow

Use a three-step sheet or focused route:

1. **Targets** — select site, asset group, or individual assets; show available capacity and exclusions.
2. **Command** — set direction, power, start time, duration, ramp, and fallback behaviour.
3. **Review** — show affected assets, expected response, constraints, protocol routes, and a clear confirmation.

Use the existing example:

```txt
Target: BESS-01 · Ranipet
Command: discharge at 50 kW
Duration: 15 minutes
```

The final button says `Send dispatch`, not `Continue`.

## Live dispatch detail

After confirmation, navigate to a live event detail route. Make the command path legible as operational telemetry:

```txt
Utility event received
DERControl · 50 kW · 15 min
        ↓ IEEE 2030.5
KWH-GTW-0042 accepted
        ↓ translated in 42 ms
Modbus write · register 40149 = 500
        ↓ Modbus TCP
BESS-01 responding · 49.7 kW
```

Alongside this trace, show:

- requested vs delivered power chart drawing live;
- state of charge;
- event timer;
- asset acknowledgements;
- total end-to-end latency `340 ms`;
- live telemetry returning upward;
- cancel action with confirmation;
- explicit partial-failure and failed-device states.

This screen proves protocol translation through real logs and state, not a marketing diagram. On completion, it becomes a durable event record with exportable logs.

---

# 11. Usage and billing

Create a real `Usage & billing` route. It must clearly separate open-source/free components from metered cloud usage without looking like a presentation slide.

## Header and controls

- billing period selector;
- current plan;
- projected invoice;
- usage-alert threshold;
- CSV export;
- `Manage billing` secondary action.

## Free platform entitlements

Show as a compact entitlement panel:

```txt
IEEE 2030.5 client       Unlimited
Core SDK                 Open source
Local gateway runtime    Active
Basic local monitoring   Active
```

Do not put device-count limits here unless that is the confirmed pricing policy.

## Metered cloud usage

Show a chart and accessible table for:

```txt
API calls               12,480
Dispatch events            842
Devices managed              37
Telemetry retained        8.2 GB
```

Each metric has current usage, unit price or plan allowance, projected month-end value, trend, and alert state. The API row may cross its 10,000-call alert threshold and turn honey, but do not imply that 10,000 is automatically a free-tier billing boundary unless the pricing model confirms it. Label it `Alert threshold exceeded`.

The business model should be understandable from normal account UI: local/open components are free; managed cloud usage is metered.

---

# 12. Events, notifications, and recovery

Create an Events route with severity, type, site, asset, state, assignee, and time filters.

Selecting the DT-07 overload event opens a persistent right inspector with:

- full title and current severity;
- resource and feeder;
- threshold crossed;
- telemetry before and after the event;
- related events;
- acknowledgement state;
- assignee;
- notes;
- actions `Acknowledge`, `Open transformer`, and `Create response`.

After acknowledgement, update the row and notification count immediately and show an Undo toast.

Include believable application states across the prototype:

- loading skeleton;
- empty search result with Clear filters;
- stale telemetry;
- gateway offline;
- permission denied;
- dispatch partially delivered;
- recoverable network error with Retry.

Errors must state both the cause and a recovery action.

---

# 13. Developer route

Because the core SDK and protocol abstraction are part of the product, include a compact Developer route rather than an architecture slide.

Tabs:

```txt
API keys | Webhooks | Activity | SDK
```

Use believable, masked credentials and functional copy/revoke controls. The SDK tab can show:

```js
const battery = await client.assets.get('BESS-01')
await battery.setPowerLimit(50)
battery.subscribe('telemetry', handleReading)
```

Below the snippet, show that the application calls the normalised API while the asset detail reports its current driver as Modbus TCP. Do not make this a full-page company explainer.

---

# 14. Visual system

This is a native-style industrial operations application. It should be quiet, dense, clear, and credible—not cinematic.

## Typography

Use the local macOS system stack for the interface:

```css
-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif
```

Use a local monospace stack only for timestamps, IDs, protocol names, register addresses, logs, and tabular data. Do not request remote fonts.

Recommended scale:

```txt
page title       22px / 600
section title    15px / 600
body             13–14px / 400
table            12.5–13px / 400
label            11px / 600
large metric     25–28px / 650
```

Use tabular numerals for measurements and timestamps.

## Palette

Use the warm kWh hive palette, but adapt it for an application. There is no lattice behind dashboards and no decorative honey wash.

```txt
app canvas       #F5F1E6
sidebar          #ECE5D3
panel            #FFFDF7
panel secondary  #F7F2E5
line             #E2D7BC
line strong      #D4C39B
ink              #15100B
secondary        #4B4433
muted            #7B6F50
honey            #C2932A   dispatch, primary action, money
honey pale       #F3E6BE   selected and warning fills
good             #5F7F2F   connected and healthy
good pale        #E7EED6
critical         #9E2B25
critical pale    #F6DEDA
info             #5546A3   links and neutral information only
```

Honey stays scarce. It indicates dispatch, the primary action, or billed usage. Green means connected or healthy. Red always means fault or destructive action. Never use colour as the only indicator; pair it with text and an icon.

## Surfaces and density

- use 8px spacing increments, with 4px only inside compact controls;
- content gutters 20–24px;
- cards 10–12px radius, not 20–30px floating capsules;
- inputs and table controls 32–36px high;
- one subtle border and one warm elevation scale;
- no glass blur in the main content area;
- no gradients in charts or application backgrounds;
- no oversized empty space;
- no five unrelated card styles on one screen;
- no tiny body text below 12px;
- no emoji or generic coloured circles standing in for real icons.

## Charts and tables

Every chart has:

- title and unit;
- time range;
- visible legend;
- labelled axes where relevant;
- hover or focus values;
- an empty/loading/error state;
- a data-table or export alternative for accessibility.

Use line charts for time series, bars for resource comparison, and maps only for location. Do not use donut charts when a labelled progress bar or large number is clearer.

Tables need sortable headers, hover and selected states, aligned numerics, visible row actions, pagination or result count, and a useful empty state.

---

# 15. Interaction quality

The prototype must actually work. Do not draw dead controls merely to look sophisticated.

Required working interactions:

- sidebar routing and collapse;
- back and forward navigation;
- global search opening with `⌘K`;
- Overview KPI drill-down;
- time-range and feeder filters;
- table sorting and row selection;
- site and asset detail navigation;
- digital-twin tabs;
- event inspector and acknowledgement;
- gateway onboarding from start to finish;
- site-profile completion and eligibility recalculation;
- marketplace app installation from start to finish;
- program/service review, consent, connection, enrolment, and revocation;
- multi-app control-conflict policy setup;
- dispatch creation, confirmation, live progress, cancel, and completion;
- Usage period switching and threshold setting;
- notifications and toast feedback;
- Settings and user menus dismissing with Escape and outside click.

Use 150–250ms transitions for hover, sheets, inspectors, tabs, and navigation. Motion communicates spatial continuity; nothing auto-advances. Use transform and opacity rather than layout-janking animation. Every long operation shows progress, then success or a recoverable error.

Support keyboard navigation, visible focus rings, meaningful ARIA labels, logical focus return after sheets close, and `prefers-reduced-motion`.

---

# 16. Seeded demo paths

The application should open on Overview with operational data already loaded. These are the four paths a reviewer must be able to click through without instructions:

## Path A — investigate and respond

```txt
Overview
→ Active alarms: DT-07 overloaded at 112%
→ Event inspector
→ Open transformer
→ Telemetry
→ Create response
→ Review and send dispatch
→ Live event detail
```

## Path B — install and use an application

```txt
Marketplace
→ Battery Dispatch
→ Review permissions
→ Select Vellore Flex Fleet
→ Install
→ Open Battery Dispatch
→ Create dispatch
```

## Path C — inspect the abstraction and business model

```txt
Assets
→ BESS-01
→ Capabilities and Driver tabs
→ Developer activity
→ Usage & billing
```

## Path D — match and connect several services

```txt
Gateways
→ KWH-GTW-0042
→ Apps & services
→ Complete site profile
→ Programs & services
→ Peak Flex Reward
→ Review eligibility
→ Grant data access and approval-only control
→ Enrol
→ Return to gateway and see the active connection beside Battery Dispatch
```

Do not label these as demo steps in the interface. They should emerge naturally from clear navigation and actions.

---

# 17. Technical constraints

1. Keep it as one self-contained interactive artifact using the existing supported component format.
2. No external requests, remote fonts, remote images, or CDN scripts.
3. Use inline SVG for icons and charts unless the current environment already provides a chart component.
4. Preserve the existing sample data where specified; expand it consistently for tables and details.
5. Keep state in the artifact so actions visibly update counts, rows, statuses, alerts, site-profile completeness, eligibility, connections, enrolments, installation state, and dispatch progress.
6. Compatibility results must recompute from the stored site profile, discovered capabilities, gateway state, and program requirements; do not hard-code unexplained badges.
7. Treat every named program and incentive as sample data unless the user supplies a verified source.
8. Do not place the native app inside a browser frame.
9. Do not place a phone frame inside the native app.
10. Do not use the old fixed 1920 × 1080 stage or timeline model.
11. Respect reduced motion and never require animation to understand state.

---

# Verify before finishing

1. The first thing visible is a real Mac operations app, not a title slide.
2. No `STEP X / 10`, captions, restart button, scene rail, autoplay, or presentation controls remain.
3. Purchase and order-confirmation pages are outside the operational app and absent from the default flow.
4. Onboarding stays inside one consistent Mac wizard and ends at a real site overview.
5. Overview, Sites, Assets, Gateways, Dispatch, Events, Marketplace, Programs & services, Usage, and Developer are reachable from persistent navigation.
6. BESS-01 has a detailed digital twin with capabilities, driver, telemetry, controls, and events.
7. After gateway connection, the site profile collects location, DISCOM, tariff, account, meter, export, and operating-preference details with clear source and consent labels.
8. Compatibility combines the site profile with discovered asset and gateway capabilities, and every recommendation explains why it matched or failed.
9. One gateway visibly supports several on-gateway apps, cloud services, and DISCOM programs with separate permissions and conflict handling.
10. The marketplace install flow works and changes the installed-app state.
11. A program can be reviewed, permissioned, enrolled, monitored, and revoked.
12. A dispatch can be created, confirmed, observed live, cancelled, and completed.
13. Free/open components and metered cloud usage are clear in normal account UI.
14. Tables, charts, filters, errors, empty states, and loading states look operational rather than decorative.
15. No hex lattice, bees, honey jars, insects, or literal hive illustrations appear in the application.
16. No external network requests occur.

Rebuild the existing artifact in place. Do not merely restyle the current ten screens. When it renders, tell me which three routes still feel least like production software and why.

## END OF PROMPT

---

## Notes for Arham, not part of the prompt

The downloaded artifact currently contains ten presentation steps: Buy, Confirm, Unbox, Wi-Fi, Pairing, Discovery, Model, Utility Registration, Success, and Dashboard. Only the middle setup states belong in product onboarding. Buy and Confirm belong on the website; Unbox is physical-world context; the dashboard needs to become the persistent product shell.

The biggest content gaps in the downloaded build are the digital-twin detail, app marketplace installation, compatibility matching, DISCOM program enrolment, multi-service gateway connections, live dispatch execution, usage metering, fleet/site navigation, gateway diagnostics, and event recovery. This update adds each as an actual route and interaction rather than another explanatory slide.

The uploaded dashboard screenshot is materially stronger than the compressed dashboard in the HTML artifact. The Overview section above preserves its two-column DER/transformer hierarchy and alert strip while making every element navigable.

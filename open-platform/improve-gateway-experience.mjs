import { readFile, writeFile } from "node:fs/promises";

const sourcePath = "/Users/arhamshomefolder/Downloads/kWh Gateway Experience.html";
const outputPath = "/Users/arhamshomefolder/kwhelectric/open-platform/kWh Gateway Experience.html";

const source = await readFile(sourcePath, "utf8");
const templateMatch = source.match(/(<script type="__bundler\/template">)([\s\S]*?)(<\/script>)/);
if (!templateMatch) throw new Error("Bundled template not found");

let template = JSON.parse(templateMatch[2]);

function replaceOnce(before, after, label) {
  const first = template.indexOf(before);
  if (first < 0) throw new Error(`Missing transform target: ${label}`);
  if (template.indexOf(before, first + before.length) >= 0) {
    throw new Error(`Transform target is not unique: ${label}`);
  }
  template = template.slice(0, first) + after + template.slice(first + before.length);
}

replaceOnce(
  '<meta name="viewport" content="width=device-width, initial-scale=1">',
  '<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>kWh Gateway Experience</title>',
  "document title",
);

replaceOnce(
  `@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`,
  `@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
.story-stage{position:relative;z-index:10;width:min(1180px,100%);display:flex;align-items:center;justify-content:center;gap:58px;}
.phone-guide{width:360px;flex:0 0 360px;padding:24px;border:1px solid rgba(255,255,255,.14);border-radius:20px;background:rgba(255,255,255,.075);box-shadow:0 18px 70px rgba(0,0,0,.2);backdrop-filter:blur(18px);color:#FAFAF8;}
.phone-guide-kicker{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.14em;color:#77D7B0;font-weight:700;margin-bottom:10px;}
.phone-guide-title{font-size:24px;font-weight:700;letter-spacing:-.02em;line-height:1.15;margin-bottom:10px;}
.phone-guide-body{font-size:14px;line-height:1.55;color:rgba(255,255,255,.66);margin-bottom:16px;}
.phone-guide-point{display:flex;gap:10px;padding:9px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;line-height:1.4;color:rgba(255,255,255,.82);}
.phone-guide-point:before{content:'';width:7px;height:7px;border-radius:50%;background:#C8901B;margin-top:5px;flex:0 0 auto;}
@media(max-width:1080px){.phone-guide{display:none}.story-stage{gap:0}.story-header-caption{max-width:720px!important}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}`,
  "story styles",
);

replaceOnce(
  '<div style="width:1400px;height:864px;border-radius:14px;overflow:hidden;background:#F5F8F6;box-shadow:0 0 0 1px rgba(0,0,0,0.3),0 40px 100px rgba(0,0,0,0.5);display:flex;">',
  '<div style="width:min(1400px,calc(100vw - 48px));height:min(864px,calc(100vh - 48px));min-height:700px;border-radius:14px;overflow:hidden;background:#F5F8F6;box-shadow:0 0 0 1px rgba(0,0,0,0.3),0 40px 100px rgba(0,0,0,0.5);display:flex;">',
  "responsive Mac shell",
);

replaceOnce(
  `<div style="padding:16px 18px 10px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.1em;color:rgba(255,255,255,0.35);">PLATFORM</div>
<div sc-camel-on-click="{{ nav.marketplace.go }}"`,
  `<div style="padding:16px 18px 10px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.1em;color:rgba(255,255,255,0.35);">PLATFORM</div>
<div sc-camel-on-click="{{ nav.ecosystem.go }}" style="display:flex;align-items:center;gap:10px;margin:0 10px;padding:7px 10px;border-radius:8px;cursor:pointer;background:{{ nav.ecosystem.bg }};">
<svg width="15" height="15" sc-camel-view-box="0 0 15 15" style="color:{{ nav.ecosystem.color }};flex-shrink:0;"><circle cx="7.5" cy="7.5" r="1.5" stroke="currentColor" stroke-width="1.3" fill="none"></circle><circle cx="2.3" cy="3" r="1.2" stroke="currentColor" stroke-width="1.2" fill="none"></circle><circle cx="12.7" cy="3" r="1.2" stroke="currentColor" stroke-width="1.2" fill="none"></circle><circle cx="2.3" cy="12" r="1.2" stroke="currentColor" stroke-width="1.2" fill="none"></circle><circle cx="12.7" cy="12" r="1.2" stroke="currentColor" stroke-width="1.2" fill="none"></circle><path d="M3.3 3.8l3 2.5M11.7 3.8l-3 2.5M3.3 11.2l3-2.5M11.7 11.2l-3-2.5" stroke="currentColor" stroke-width="1.1"></path></svg>
<span style="font-size:13px;color:{{ nav.ecosystem.color }};font-weight:{{ nav.ecosystem.weight }};">Connections</span>
</div>
<div sc-camel-on-click="{{ nav.marketplace.go }}"`,
  "connections navigation",
);

replaceOnce(
  '<div style="font-size:14px;color:rgba(255,255,255,0.55);max-width:580px;">{{ currentStepCaption }}</div>',
  '<div class="story-header-caption" style="font-size:14px;color:rgba(255,255,255,0.55);max-width:580px;">{{ currentStepCaption }}</div>',
  "story header class",
);

replaceOnce(
  '<div style="position:relative;z-index:10;display:flex;align-items:center;justify-content:center;">',
  `<div class="story-stage">
<sc-if value="{{ isPhoneStep }}" hint-placeholder-val="{{ false }}">
<aside class="phone-guide">
<div class="phone-guide-kicker">OUTSIDE THE PHONE · WHY THIS MATTERS</div>
<div class="phone-guide-title">{{ guideTitle }}</div>
<div class="phone-guide-body">{{ guideBody }}</div>
<sc-for list="{{ guidePoints }}" as="point" hint-placeholder-count="3">
<div class="phone-guide-point">{{ point }}</div>
</sc-for>
</aside>
</sc-if>`,
  "outside-phone guide",
);

replaceOnce(
  `</x-import>
</sc-if>

<sc-if value="{{ isConfirm }}" hint-placeholder-val="{{ false }}">`,
  `</x-import>
</sc-if>

<sc-if value="{{ isCheckout }}" hint-placeholder-val="{{ false }}">
<x-import component-from-global-scope="ChromeWindow" from="c1e5201c-fc02-4800-94f5-934a7cede637#/browser-window.jsx" tabs="{{ checkoutTabs }}" url="kwhelectric.com/store/checkout" width="1120" height="700" hint-size="1120,700">
<div style="height:100%;box-sizing:border-box;padding:46px 58px;display:grid;grid-template-columns:1.25fr .8fr;gap:42px;background:#FAFAF8;">
<div>
<div style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.13em;color:#8A9992;margin-bottom:8px;">SECURE CHECKOUT</div>
<div style="font-size:26px;font-weight:700;color:#0E1512;margin-bottom:6px;">Purchase for your site</div>
<div style="font-size:12px;line-height:1.5;color:#8A9992;margin-bottom:18px;">The purchaser owns the workspace and can invite an installer or operator without sharing payment access.</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
<div style="padding:13px 14px;border:1px solid #D8DEDA;border-radius:10px;background:#fff;"><div style="font-size:10px;color:#8A9992;margin-bottom:4px;">PURCHASER / ACCOUNT OWNER</div><div style="font-size:14px;color:#0E1512;">Priya Rao · Site owner <span style="font-size:10px;color:#8A9992;">sample</span></div></div>
<div style="padding:13px 14px;border:1px solid #D8DEDA;border-radius:10px;background:#fff;"><div style="font-size:10px;color:#8A9992;margin-bottom:4px;">PURCHASING FOR</div><div style="font-size:14px;color:#0E1512;">Commercial energy site</div></div>
<div style="grid-column:1/-1;padding:13px 14px;border:1px solid #D8DEDA;border-radius:10px;background:#fff;"><div style="font-size:10px;color:#8A9992;margin-bottom:4px;">DELIVER TO</div><div style="font-size:14px;color:#0E1512;">Ranipet Substation A · Tamil Nadu 632401</div></div>
<div style="grid-column:1/-1;padding:13px 14px;border:1px solid #D8DEDA;border-radius:10px;background:#fff;"><div style="font-size:10px;color:#8A9992;margin-bottom:4px;">SETUP ACCESS AFTER DELIVERY</div><div style="font-size:14px;color:#0E1512;">Owner + invited electrician / installer</div></div>
<div style="grid-column:1/-1;padding:13px 14px;border:1px solid #D8DEDA;border-radius:10px;background:#fff;"><div style="font-size:10px;color:#8A9992;margin-bottom:4px;">CARD</div><div style="font-family:'JetBrains Mono',monospace;font-size:14px;color:#0E1512;">•••• •••• •••• 1042</div></div>
<div style="padding:13px 14px;border:1px solid #D8DEDA;border-radius:10px;background:#fff;"><div style="font-size:10px;color:#8A9992;margin-bottom:4px;">EXPIRY</div><div style="font-size:14px;color:#0E1512;">08 / 29</div></div>
<div style="padding:13px 14px;border:1px solid #D8DEDA;border-radius:10px;background:#fff;"><div style="font-size:10px;color:#8A9992;margin-bottom:4px;">SECURITY CODE</div><div style="font-size:14px;color:#0E1512;">•••</div></div>
</div>
<div style="margin-top:14px;font-size:11px;line-height:1.5;color:#8A9992;">Sample checkout. No payment is processed in this prototype.</div>
</div>
<div style="background:#F1F4F2;border:1px solid #E3E7E4;border-radius:16px;padding:22px;height:max-content;">
<div style="display:flex;align-items:center;gap:12px;padding-bottom:16px;border-bottom:1px solid #D8DEDA;">
<div style="width:52px;height:52px;background:#4B31C4;clip-path:polygon(25% 4%,75% 4%,100% 50%,75% 96%,25% 96%,0 50%);"></div>
<div><div style="font-size:14px;font-weight:700;color:#0E1512;">kWh Gateway</div><div style="font-size:11px;color:#8A9992;">Gateway + edge runtime</div></div>
</div>
<div style="display:flex;justify-content:space-between;padding:16px 0 8px;font-size:13px;color:#4A5A52;"><span>Hardware</span><span>$349.00</span></div>
<div style="display:flex;justify-content:space-between;padding:8px 0 16px;font-size:13px;color:#4A5A52;border-bottom:1px solid #D8DEDA;"><span>Shipping</span><span>Included</span></div>
<div style="display:flex;justify-content:space-between;padding:16px 0;font-size:16px;font-weight:700;color:#0E1512;"><span>Total</span><span>$349.00 <small style="font-weight:500;color:#8A9992;">sample</small></span></div>
<div sc-camel-on-click="{{ goNext }}" style="padding:14px;border-radius:11px;text-align:center;background:#C8901B;color:#fff;font-size:14px;font-weight:700;cursor:pointer;">Pay and place order</div>
</div>
</div>
</x-import>
</sc-if>

<sc-if value="{{ isConfirm }}" hint-placeholder-val="{{ false }}">`,
  "checkout scene",
);

replaceOnce(
  `<div style="font-size:15px;color:#4A5A52;max-width:420px;margin-bottom:14px;">Reusable edge infrastructure for whatever energy assets you already have — batteries, solar, EV chargers, transformers.</div>`,
  `<div style="font-size:15px;color:#4A5A52;max-width:440px;margin-bottom:10px;">Reusable edge infrastructure for whatever energy assets you already have — batteries, solar, EV chargers, vehicles, transformers and meters.</div>
<div style="font-size:12px;color:#4B31C4;font-weight:650;margin-bottom:14px;">For site owners, homes, businesses, fleet operators, installers and OEM partners.</div>`,
  "purchase audiences",
);

replaceOnce(
  `<div style="font-size:14px;color:#4A5A52;max-width:380px;">Every unit ships with the edge runtime and IEEE 2030.5 client preloaded, unlimited and free.</div>`,
  `<div style="font-size:14px;color:#4A5A52;max-width:520px;">Purchased by the site owner, delivered to the operating site, and ready to hand off to an invited installer. The purchaser keeps ownership and decides which OEM devices, people and applications may connect.</div>`,
  "purchase handoff",
);

replaceOnce(
  `<div style="padding:12px 14px;border-radius:12px;background:#F1F4F2;"><div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#8A9992;">WORKSPACE</div><div style="font-size:14px;color:#0E1512;">Ranipet Grid Ops</div></div>
<div style="padding:12px 14px;border-radius:12px;background:#F1F4F2;"><div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#8A9992;">SITE NAME</div><div style="font-size:14px;color:#0E1512;">Ranipet Substation A</div></div>`,
  `<div style="padding:10px 12px;border-radius:12px;background:#EDEAFB;border:1px solid #4B31C4;"><div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#4B31C4;">PURCHASER / ACCOUNT OWNER</div><div style="font-size:13px;color:#0E1512;font-weight:650;">Priya Rao · Site owner <span style="font-size:9px;color:#8A9992;">sample</span></div></div>
<div style="padding:10px 12px;border-radius:12px;background:#F1F4F2;"><div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#8A9992;">WORKSPACE · SITE</div><div style="font-size:13px;color:#0E1512;">Ranipet Grid Ops · Substation A</div></div>
<div style="padding:10px 12px;border-radius:12px;background:#F1F4F2;"><div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#8A9992;">SETUP ROLE</div><div style="font-size:13px;color:#0E1512;">Owner + invited installer</div></div>`,
  "purchaser and setup roles",
);

replaceOnce(
  `<sc-if value="{{ isRegistration }}" hint-placeholder-val="{{ false }}">`,
  `<sc-if value="{{ isEcosystemStep }}" hint-placeholder-val="{{ false }}">
<div style="transform:scale(0.82);">
<x-import component-from-global-scope="IOSDevice" from="2754a23a-8123-4463-be2e-f6cf78341ef4#/ios-frame.jsx" title="Gateway ecosystem" hint-size="402,874">
<div style="padding:8px 20px;">
<div style="padding:11px 12px;border-radius:10px;background:#EDEAFB;border:1px solid #4B31C4;margin-bottom:8px;text-align:center;">
<div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#4B31C4;">ONE SHARED EDGE LAYER</div>
<div style="font-size:15px;font-weight:700;color:#0E1512;margin-top:3px;">Many devices → many approved apps</div>
</div>
<sc-for list="{{ ecosystemLinks }}" as="link" hint-placeholder-count="5">
<div style="padding:8px 0;border-bottom:.5px solid #E3E7E4;">
<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
<div style="font-size:12px;font-weight:650;color:#0E1512;">{{ link.device }}</div>
<span style="font-family:'JetBrains Mono',monospace;font-size:8px;padding:3px 6px;border-radius:5px;background:#F1F4F2;color:#4A5A52;">{{ link.adapter }}</span>
</div>
<div style="font-size:9px;line-height:1.4;color:#8A9992;margin-top:3px;">{{ link.apps }}</div>
</div>
</sc-for>
<div style="margin-top:10px;padding:9px 10px;border-radius:9px;background:#FBF1DE;border:1px solid #C8901B;font-size:9px;line-height:1.45;color:#4A5A52;">Purchaser owns the workspace · installer gets scoped setup access · every app receives separate data and control permissions.</div>
<div sc-camel-on-click="{{ goNext }}" style="margin-top:12px;padding:13px;border-radius:11px;text-align:center;background:#0E1512;color:#fff;font-size:14px;font-weight:700;cursor:pointer;">Continue</div>
</div>
</x-import>
</div>
</sc-if>

<sc-if value="{{ isUseMap }}" hint-placeholder-val="{{ false }}">
<div style="transform:scale(0.82);">
<x-import component-from-global-scope="IOSDevice" from="2754a23a-8123-4463-be2e-f6cf78341ef4#/ios-frame.jsx" title="BESS-01 · connected uses" hint-size="402,874">
<div style="padding:8px 20px;">
<div style="padding:11px 12px;border-radius:10px;background:#EDEAFB;border:1px solid #4B31C4;margin-bottom:8px;">
<div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#4B31C4;">ONE PHYSICAL ASSET</div>
<div style="font-size:15px;font-weight:700;color:#0E1512;margin-top:3px;">BESS-01 · Modbus TCP</div>
</div>
<sc-for list="{{ bessUseMap }}" as="use" hint-placeholder-count="7">
<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:.5px solid #E3E7E4;">
<div><div style="font-size:12px;font-weight:650;color:#0E1512;">{{ use.name }}</div><div style="font-size:9px;color:#8A9992;margin-top:2px;">{{ use.detail }}</div></div>
<span style="font-family:'JetBrains Mono',monospace;font-size:8px;padding:3px 6px;border-radius:5px;background:{{ use.bg }};color:{{ use.text }};">{{ use.access }}</span>
</div>
</sc-for>
<div style="margin-top:10px;font-size:10px;line-height:1.45;color:#8A9992;">Shared telemetry does not mean shared control. Every write path still follows permissions and priority.</div>
<div sc-camel-on-click="{{ goNext }}" style="margin-top:12px;padding:13px;border-radius:11px;text-align:center;background:#0E1512;color:#fff;font-size:14px;font-weight:700;cursor:pointer;">Continue</div>
</div>
</x-import>
</div>
</sc-if>

<sc-if value="{{ isRegistration }}" hint-placeholder-val="{{ false }}">`,
  "multi-use scene",
);

replaceOnce(
  `<sc-if value="{{ isMarketplace }}" hint-placeholder-val="{{ false }}">`,
  `<sc-if value="{{ isEcosystemRoute }}" hint-placeholder-val="{{ false }}">
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:12px;">
<sc-for list="{{ ecosystemMetrics }}" as="m" hint-placeholder-count="4">
<div style="background:#fff;border:1px solid #E3E7E4;border-radius:12px;padding:12px 14px;">
<div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#8A9992;margin-bottom:6px;">{{ m.label }}</div>
<div style="font-size:19px;font-weight:700;color:#0E1512;">{{ m.value }}</div>
<div style="font-size:10px;color:#8A9992;margin-top:3px;">{{ m.detail }}</div>
</div>
</sc-for>
</div>
<div style="display:grid;grid-template-columns:.82fr 1.18fr;gap:12px;margin-bottom:12px;">
<div style="background:#fff;border:1px solid #E3E7E4;border-radius:14px;padding:15px;">
<div style="font-size:14px;font-weight:700;color:#0E1512;margin-bottom:3px;">People and organisations</div>
<div style="font-size:11px;color:#8A9992;margin-bottom:8px;">The purchaser owns the workspace; everyone else is invited with a role.</div>
<sc-for list="{{ ecosystemRoles }}" as="r" hint-placeholder-count="5">
<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:7px 0;border-bottom:.5px solid #E3E7E4;">
<div><div style="font-size:11px;font-weight:650;color:#0E1512;">{{ r.role }}</div><div style="font-size:9px;color:#8A9992;margin-top:2px;">{{ r.detail }}</div></div>
<span style="font-family:'JetBrains Mono',monospace;font-size:8px;padding:3px 6px;border-radius:5px;background:{{ r.bg }};color:{{ r.text }};">{{ r.access }}</span>
</div>
</sc-for>
</div>
<div style="background:#fff;border:1px solid #E3E7E4;border-radius:14px;padding:15px;">
<div style="font-size:14px;font-weight:700;color:#0E1512;margin-bottom:3px;">OEM and device adapters</div>
<div style="font-size:11px;color:#8A9992;margin-bottom:8px;">Compatibility is verified per model and driver—never assumed from a logo.</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;">
<sc-for list="{{ ecosystemDevices }}" as="d" hint-placeholder-count="6">
<div style="padding:9px 10px;border-radius:9px;background:#F5F8F6;border:1px solid #E3E7E4;">
<div style="display:flex;align-items:center;justify-content:space-between;gap:6px;"><span style="font-size:11px;font-weight:650;color:#0E1512;">{{ d.name }}</span><span style="font-family:'JetBrains Mono',monospace;font-size:8px;color:#4B31C4;">{{ d.profiles }}</span></div>
<div style="font-size:9px;color:#8A9992;margin-top:3px;">{{ d.drivers }}</div>
<div style="font-size:9px;color:#1E8B4E;margin-top:2px;">{{ d.apps }}</div>
</div>
</sc-for>
</div>
</div>
</div>
<div style="background:#fff;border:1px solid #E3E7E4;border-radius:14px;padding:15px;">
<div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:9px;"><div><div style="font-size:14px;font-weight:700;color:#0E1512;">Several apps can share one device twin</div><div style="font-size:11px;color:#8A9992;margin-top:2px;">Telemetry, control, priority and owner are reviewed independently for every connection.</div></div><span style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#4B31C4;">MANY-TO-MANY</span></div>
<div style="display:flex;padding:0 0 7px;border-bottom:1px solid #E3E7E4;font-family:'JetBrains Mono',monospace;font-size:9px;color:#8A9992;"><div style="width:170px;">APP / SERVICE</div><div style="width:150px;">PROVIDER</div><div style="width:210px;">DEVICES</div><div style="width:130px;">ACCESS</div><div style="flex:1;">APPROVED BY</div></div>
<sc-for list="{{ ecosystemConnections }}" as="c" hint-placeholder-count="6">
<div style="display:flex;align-items:center;padding:7px 0;border-bottom:.5px solid #E3E7E4;font-size:11px;"><div style="width:170px;color:#0E1512;font-weight:650;">{{ c.app }}</div><div style="width:150px;color:#8A9992;">{{ c.provider }}</div><div style="width:210px;color:#4A5A52;">{{ c.devices }}</div><div style="width:130px;"><span style="font-family:'JetBrains Mono',monospace;font-size:8px;padding:3px 6px;border-radius:5px;background:{{ c.bg }};color:{{ c.text }};">{{ c.access }}</span></div><div style="flex:1;color:#4A5A52;">{{ c.owner }}</div></div>
</sc-for>
</div>
</sc-if>

<sc-if value="{{ isMarketplace }}" hint-placeholder-val="{{ false }}">`,
  "connections route",
);

replaceOnce(
  `const STEPS = [
{key:'buy',label:'BUY',title:'Off the shelf',caption:'Any electrician can order it. No truck roll, no custom install.'},
{key:'confirm',label:'DELIVERY',title:'Order confirmed',caption:'Prepared, shipped, delivered. Setup takes about ten minutes.'},
{key:'welcome',label:'WELCOME',title:'Set up your kWh Gateway',caption:'Purchase is already done — this just claims the hardware to your workspace.'},
{key:'claim',label:'CLAIM',title:'Claim the gateway',caption:'Serial verified against the secure element, then a routine firmware update.'},
{key:'connect',label:'CONNECT',title:'Connect the gateway',caption:'Ethernet first, Wi-Fi and LTE as fallback. It keeps working even offline.'},
{key:'site',label:'SITE PROFILE',title:'Build the site profile',caption:'This context is what makes application recommendations relevant later.'},
{key:'discovery',label:'DISCOVERY',title:"Finding what's on site",caption:'The gateway scans Ethernet, RS-485, CAN and Wi-Fi for connected assets.'},
{key:'twins',label:'DIGITAL TWIN',title:'One model, many dialects',caption:'Native devices become normalized digital twins applications can share.'},
{key:'registration',label:'UTILITY',title:'Utility registration',caption:'The utility runs the 2030.5 server. The gateway is the client — one of several supported protocols.'},
{key:'opportunities',label:'OPPORTUNITIES',title:'Compatible applications',caption:'Location, tariff, meter and device data surface several kinds of value — not just grid programs.'},
{key:'complete',label:'DONE',title:'Setup complete',caption:'Everything above is enrolled with your review — nothing connects automatically.'},
{key:'mac',label:'PLATFORM',title:'',caption:''},
];`,
  `const STEPS = [
{key:'buy',label:'BUY',title:'Choose the gateway',caption:'Start with the physical edge layer that connects the assets already on site.'},
{key:'checkout',label:'CHECKOUT',title:'Complete the purchase',caption:'A credible purchase flow comes before setup. Prices remain clearly marked as sample.'},
{key:'confirm',label:'DELIVERY',title:'Order confirmed and delivered',caption:'Prepared, shipped and delivered before phone onboarding begins.'},
{key:'welcome',label:'WELCOME',title:'Set up your kWh Gateway',caption:'Purchase is complete. The phone now claims the hardware to the operating workspace.'},
{key:'claim',label:'CLAIM',title:'Claim the gateway',caption:'Verify the serial, secure element and firmware before the device joins the workspace.'},
{key:'connect',label:'CONNECT',title:'Connect the gateway',caption:'Ethernet first, Wi-Fi and LTE as fallback. Local operations survive a cloud outage.'},
{key:'site',label:'SITE PROFILE',title:'Build the site profile',caption:'Location, DISCOM, tariff and meter context make later recommendations specific.'},
{key:'discovery',label:'DISCOVERY',title:"Find devices from several OEMs",caption:'Scan Ethernet, RS-485, CAN and Wi-Fi for batteries, solar, EV chargers, vehicle sessions, transformers and meters.'},
{key:'twins',label:'DIGITAL TWIN',title:'One model above many OEM dialects',caption:'OEM-specific drivers become normalized digital twins that several applications can safely share.'},
{key:'ecosystem',label:'ECOSYSTEM',title:'One gateway, many devices and apps',caption:'The purchaser owns the connection graph while installers, OEMs and applications receive scoped access.'},
{key:'usemap',label:'MULTIPLE USES',title:'One device, many jobs',caption:'The same BESS supports monitoring, resilience, optimisation, maintenance and optional grid services.'},
{key:'registration',label:'UTILITY',title:'Utility registration',caption:'IEEE 2030.5 is one supported protocol: the utility is the server and the gateway is the client.'},
{key:'opportunities',label:'OPPORTUNITIES',title:'Compatible applications',caption:'Site context and device capabilities surface many kinds of value — not just demand response.'},
{key:'complete',label:'DONE',title:'Setup complete',caption:'The site is ready for Mac operations. Nothing connects without review and permission.'},
{key:'mac',label:'PLATFORM',title:'',caption:''},
];`,
  "story steps",
);

replaceOnce(
  `const BESS_TWIN_FIELDS = ['stateOfCharge','chargeLimit','dischargeLimit','batteryHealth','temperature','availableCapacity'];`,
  `const BESS_TWIN_FIELDS = ['stateOfCharge','chargeLimit','dischargeLimit','batteryHealth','temperature','availableCapacity'];
const ECOSYSTEM_LINKS = [
{device:'Battery + BMS',adapter:'MODBUS / CAN',apps:'Asset Health · Site Resilience · Tariff Optimisation · Dispatch'},
{device:'Solar inverters',adapter:'SUNSPEC',apps:'Solar Guard · Forecasting · Renewable matching'},
{device:'EV charger + sessions',adapter:'OCPP / ISO 15118',apps:'Driver app · Smart Charging · Depot Planner · Demand Cap Guard'},
{device:'Transformer / IED',adapter:'DNP3 / IEC 61850',apps:'Transformer Health · Capacity Planning'},
{device:'Revenue / submeters',adapter:'DLMS / MQTT',apps:'Billing · Tariff Optimisation · Program settlement'},
];
const BESS_USE_MAP = [
{name:'Battery monitoring',detail:'SoC, temperature and health',access:'DATA',...TONE.mint},
{name:'Site resilience',detail:'20% backup reserve protected',access:'POLICY',...TONE.indigo},
{name:'ToD optimisation',detail:'Charge low, discharge at peak',access:'CONTROL',...TONE.honey},
{name:'Solar shifting',detail:'Store surplus generation',access:'CONTROL',...TONE.honey},
{name:'Predictive maintenance',detail:'Detect degradation early',access:'DATA',...TONE.mint},
{name:'Operator control',detail:'Manual commands with review',access:'CONTROL',...TONE.honey},
{name:'Peak Flex Reward',detail:'Optional DISCOM program',access:'OPTIONAL',...TONE.neutral},
];
const PHONE_GUIDES = {
welcome:{title:'The purchaser stays in control',body:'The person or organisation buying the gateway owns the workspace, then invites the people who install and operate it.',points:['Purchaser and account owner are explicit','Installer access is scoped to setup','Operators and OEM support can be invited later']},
claim:{title:'Identity before connectivity',body:'The claim flow proves which physical gateway is joining the workspace before any device data moves.',points:['QR or manual serial and claim code','Secure-element verification','Firmware status is visible']},
connect:{title:'Local-first operation',body:'Cloud services add coordination, but the gateway retains monitoring, policies and approved controls on site.',points:['Ethernet is primary','Wi-Fi and LTE are fallbacks','A cloud outage does not erase local safety']},
site:{title:'Context makes matching useful',body:'Location and commercial context narrow broad compatibility into opportunities that are relevant to this site.',points:['Location and DISCOM territory','Tariff, meter and contract demand','Export permission and automation preference']},
discovery:{title:'Discover several OEM device profiles',body:'The gateway meets the site where it is, matching vendor-specific drivers without forcing one battery, inverter, charger or meter brand.',points:['Battery, solar, EVSE, vehicle, transformer and meter assets','OEM metadata and native protocols remain visible','Compatibility is confirmed per model, not claimed universally']},
twins:{title:'One interface above many OEM drivers',body:'Applications use consistent digital twins while engineers and OEM support can still inspect native addresses, model data and protocol health.',points:['Normalised telemetry and capabilities','Native OEM driver remains available','Several approved apps can reuse each twin']},
ecosystem:{title:'The gateway is the shared connection layer',body:'Devices and applications form a many-to-many network. The purchaser decides who joins it and what each connection can do.',points:['EVs connect through charger sessions and approved APIs','Installers and OEM support get scoped roles','Shared telemetry never implies shared control']},
usemap:{title:'Demand response is one branch',body:'BESS-01 is useful every day for monitoring, resilience, bill optimisation and maintenance—not only occasional grid events.',points:['Data-only apps can safely coexist','Control stays permissioned and prioritised','A reserve remains protected for the site']},
registration:{title:'A protocol, not the product',body:'IEEE 2030.5 can register the site with a utility, while the gateway continues supporting the other drivers and applications.',points:['Utility operates the server','Gateway acts as the client','Other protocols remain first-class']},
opportunities:{title:'Specific recommendations, with reasons',body:'Site context and device capabilities produce explainable matches across operations, optimisation, compliance and programs.',points:['Eligible and action-required states','Missing requirements stay visible','Nothing connects automatically']},
complete:{title:'Move from setup to operations',body:'The phone hands off a configured site—not a demo slideshow—to the persistent Mac workspace.',points:['Several OEM device profiles and digital twins','Multiple compatible applications','Purchaser-approved permissions on every connection']},
};`,
  "multi-use and phone guide data",
);

replaceOnce(
  `const DISCOVERED = [
{name:'BESS-01',protocol:'MODBUS TCP',delay:0},
{name:'SOLAR-04',protocol:'SUNSPEC',delay:0.12},
{name:'SOLAR-09',protocol:'SUNSPEC',delay:0.24},
{name:'EVSE-02',protocol:'OCPP',delay:0.36},
{name:'DT-07',protocol:'DNP3',delay:0.48},
{name:'METER-11',protocol:'MQTT',delay:0.6},
];`,
  `const DISCOVERED = [
{name:'BESS-01',type:'Battery + BMS',oem:'Battery OEM profile · model verified',protocol:'MODBUS / CAN',delay:0},
{name:'SOLAR-04',type:'Solar inverter',oem:'Inverter OEM profile A · verified',protocol:'SUNSPEC',delay:0.08},
{name:'SOLAR-09',type:'Solar inverter',oem:'Inverter OEM profile B · verified',protocol:'SUNSPEC',delay:0.16},
{name:'EVSE-02',type:'EV charger',oem:'Charger OEM profile · verified',protocol:'OCPP',delay:0.24},
{name:'EV-FLEET-01',type:'Vehicle sessions',oem:'Via charger; no direct vehicle control',protocol:'ISO 15118',delay:0.32},
{name:'DT-07',type:'Transformer / IED',oem:'IED profile · verified',protocol:'DNP3',delay:0.4},
{name:'METER-11',type:'Revenue meter',oem:'Meter profile · verified',protocol:'DLMS / MQTT',delay:0.48},
];`,
  "multi-OEM discovery data",
);

replaceOnce(
  `<sc-for list="{{ discovered }}" as="d" hint-placeholder-count="6">
<div style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:0.5px solid #E3E7E4;animation:fadeUp 0.5s ease both;animation-delay:{{ d.delay }}s;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:9px;height:9px;border-radius:50%;background:#1E8B4E;"></div>
<div style="font-size:15px;color:#0E1512;">{{ d.name }}</div>
</div>
<div style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.04em;padding:4px 8px;border-radius:6px;background:#F1F4F2;border:1px solid #E3E7E4;color:#4A5A52;">{{ d.protocol }}</div>
</div>
</sc-for>
<div sc-camel-on-click="{{ goNext }}" style="margin-top:24px;`,
  `<sc-for list="{{ discovered }}" as="d" hint-placeholder-count="7">
<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:9px 0;border-bottom:0.5px solid #E3E7E4;animation:fadeUp 0.35s ease both;animation-delay:{{ d.delay }}s;">
<div style="display:flex;align-items:flex-start;gap:8px;min-width:0;">
<div style="width:8px;height:8px;border-radius:50%;background:#1E8B4E;margin-top:4px;flex:0 0 auto;"></div>
<div><div style="font-size:12px;color:#0E1512;font-weight:650;">{{ d.name }} · {{ d.type }}</div><div style="font-size:9px;color:#8A9992;margin-top:2px;">{{ d.oem }}</div></div>
</div>
<div style="font-family:'JetBrains Mono',monospace;font-size:8px;letter-spacing:0.04em;padding:4px 6px;border-radius:6px;background:#F1F4F2;border:1px solid #E3E7E4;color:#4A5A52;flex:0 0 auto;">{{ d.protocol }}</div>
</div>
</sc-for>
<div sc-camel-on-click="{{ goNext }}" style="margin-top:14px;`,
  "multi-OEM discovery view",
);

replaceOnce(
  `const MARKET_APPS = [`,
  `const ECOSYSTEM_METRICS = [
{label:'PURCHASER / OWNER',value:'1',detail:'Workspace and billing authority'},
{label:'INVITED ROLES',value:'4',detail:'Operator, installer, OEM, utility'},
{label:'OEM / DEVICE PROFILES',value:'7',detail:'Verified per model and driver'},
{label:'CONNECTED APPS',value:'10',detail:'Data and control scoped separately'},
];
const ECOSYSTEM_ROLES = [
{role:'Purchaser / account owner',detail:'Owns workspace, billing and invitations',access:'OWNER',...TONE.indigo},
{role:'Site or home operator',detail:'Runs assets and approves controls',access:'OPERATE',...TONE.mint},
{role:'Electrician / installer',detail:'Claims hardware and maps devices',access:'SETUP',...TONE.honey},
{role:'OEM support',detail:'Diagnostics for approved models only',access:'SUPPORT',...TONE.neutral},
{role:'Utility / program provider',detail:'Receives consented data or dispatch',access:'SCOPED',...TONE.neutral},
];
const ECOSYSTEM_DEVICES = [
{name:'Battery + BMS',profiles:'2 profiles',drivers:'Modbus TCP · CAN',apps:'5 compatible apps'},
{name:'Solar inverter',profiles:'2 profiles',drivers:'SunSpec · Modbus',apps:'3 compatible apps'},
{name:'EV charger',profiles:'1 profile',drivers:'OCPP 1.6 / 2.0.1',apps:'4 compatible apps'},
{name:'Vehicle sessions',profiles:'via EVSE',drivers:'ISO 15118 through charger',apps:'3 compatible apps'},
{name:'Transformer / IED',profiles:'1 profile',drivers:'DNP3 · IEC 61850',apps:'2 compatible apps'},
{name:'Meters',profiles:'1 profile',drivers:'DLMS · MQTT',apps:'5 compatible apps'},
];
const ECOSYSTEM_CONNECTIONS = [
{app:'Asset Health',provider:'kWh Electric',devices:'Battery · solar · transformer · EVSE',access:'READ ONLY',owner:'Site operator',...TONE.mint},
{app:'EV Smart Charging',provider:'Partner app · demo',devices:'EVSE-02 · vehicle sessions · meter',access:'READ + CONTROL',owner:'Fleet operator',...TONE.honey},
{app:'Driver Charging App',provider:'Mobility app · demo',devices:'Own vehicle session only',access:'SESSION DATA',owner:'Driver / fleet',...TONE.indigo},
{app:'Depot Charge Planner',provider:'Fleet app · demo',devices:'EVSE fleet · departures · site limit',access:'READ + CONTROL',owner:'Fleet operator',...TONE.honey},
{app:'Tariff Optimisation',provider:'kWh Electric',devices:'Battery · EVSE · meter · tariff',access:'READ + CONTROL',owner:'Site operator',...TONE.honey},
{app:'OEM Diagnostics',provider:'Approved OEM profile',devices:'Matched OEM model only',access:'DIAGNOSTICS',owner:'Purchaser',...TONE.neutral},
];

const MARKET_APPS = [`,
  "ecosystem data",
);

replaceOnce(
  `const PROGRAM_CARDS = [
{key:'peakflex',name:'Peak Flex Reward',provider:'TANGEDCO',type:'Demand response',state:'Likely eligible',match:'BESS-01 capacity + interval meter',assets:'BESS-01',benefit:'₹18,000/mo (illustrative)',...TONE.neutral},
{key:'vpp',name:'Residential VPP',provider:'kWh Electric',type:'Virtual power plant',state:'Not compatible',match:'Requires residential-class BESS',assets:'None',benefit:'—',...TONE.crit},
{key:'resilience',name:'Site Resilience',provider:'kWh Electric',type:'Backup power',state:'Eligible',match:'BESS-01 reserve + export permission',assets:'BESS-01',benefit:'Outage coverage, no dollar value',...TONE.mint},
];
const ENROLL_STEPS = ['Verify service connection TN-882301','Review eligibility against Peak Flex Reward requirements','Review data access: interval meter, BESS-01 availability','Review control access: BESS-01, lowest priority, operator approval required','Confirm enrolment'];`,
  `const PROGRAM_CARDS = [
{key:'resilience',name:'Site Resilience',provider:'kWh Electric',type:'Backup power policy',state:'Eligible',match:'BESS-01 + protected reserve',assets:'BESS-01',benefit:'Outage coverage · no monetary claim',...TONE.mint},
{key:'tod',name:'ToD Battery Optimisation',provider:'kWh Electric',type:'Tariff service',state:'Eligible',match:'ToD tariff + writable BESS',assets:'BESS-01, METER-11',benefit:'₹12,400/mo (illustrative)',...TONE.mint},
{key:'export',name:'Solar Export Compliance',provider:'TANGEDCO · sample',type:'Compliance service',state:'Action required',match:'Two SunSpec inverters; confirm export limit',assets:'SOLAR-04, SOLAR-09',benefit:'Compliance outcome · no monetary claim',...TONE.honey},
{key:'transformer',name:'Transformer Condition Monitoring',provider:'kWh Electric',type:'Asset health service',state:'Eligible',match:'DT-07 loading + temperature telemetry',assets:'DT-07',benefit:'Maintenance insight · no monetary claim',...TONE.mint},
{key:'peakflex',name:'Peak Flex Reward',provider:'TANGEDCO · sample',type:'Demand response',state:'Likely eligible',match:'BESS-01 capacity + interval meter',assets:'BESS-01',benefit:'₹18,000/mo (illustrative)',...TONE.neutral},
{key:'vpp',name:'Residential VPP',provider:'kWh Electric',type:'Virtual power plant',state:'Not compatible',match:'Requires residential-class BESS',assets:'None',benefit:'—',...TONE.crit},
];`,
  "broader programs and services",
);

replaceOnce(
  `const OPPORTUNITIES = [
{name:'Asset Health',state:'Eligible',reason:'Telemetry available on all 6 devices',...TONE.mint},
{name:'Fleet Forecasting',state:'Eligible',reason:'Interval data + weather feed available',...TONE.mint},
{name:'ToD Battery Optimisation',state:'Eligible',reason:'BESS-01 control + ToD tariff detected',...TONE.mint},
{name:'Solar Export Guard',state:'Action required',reason:'Missing confirmed export limit',...TONE.honey},
{name:'EV Smart Charging',state:'Eligible',reason:'EVSE-02 OCPP driver active',...TONE.mint},
{name:'Peak Flex Reward',state:'Likely eligible',reason:'DISCOM program open in this territory',...TONE.neutral},
];`,
  `const OPPORTUNITIES = [
{name:'Asset Health',state:'Eligible',reason:'Telemetry available across seven device profiles',...TONE.mint},
{name:'Tariff Optimisation',state:'Eligible',reason:'Battery, meter and ToD tariff available',...TONE.mint},
{name:'Solar Export Guard',state:'Action required',reason:'Confirm site export limit first',...TONE.honey},
{name:'EV Smart Charging',state:'Eligible',reason:'EVSE-02 OCPP driver and sessions active',...TONE.mint},
{name:'Depot Charge Planner',state:'Eligible',reason:'Vehicle departure windows can be added',...TONE.mint},
{name:'Driver Charging App',state:'Eligible',reason:'Read-only session and completion access',...TONE.mint},
{name:'Peak Flex Reward',state:'Likely eligible',reason:'Optional sample DISCOM program',...TONE.neutral},
];`,
  "multi-app opportunities",
);

replaceOnce(
  `const NAV_KEYS = ['overview','sites','assets','gateways','dispatch','events','assethealth','forecasting','battery','solar','ev','transformer','marketplace','programs','usage','developer','settings','help'];`,
  `const NAV_KEYS = ['overview','sites','assets','gateways','dispatch','events','assethealth','forecasting','battery','solar','ev','transformer','ecosystem','marketplace','programs','usage','developer','settings','help'];`,
  "connections route navigation key",
);

replaceOnce(
  `marketplace:'Platform / Marketplace', programs:'Platform / Programs & services', usage:'Platform / Usage & billing',`,
  `ecosystem:'Platform / Connections', marketplace:'Platform / Marketplace', programs:'Platform / Programs & services', usage:'Platform / Usage & billing',`,
  "connections route title",
);

replaceOnce(
  `{id:'EVSE-02',type:'EV Charger',site:'Arcot DC',power:'18.4 kWh',stateVal:'Charging',health:'Healthy',driver:'OCPP',telemetry:'1s ago',...TONE.mint},
{id:'DT-07',type:'Transformer'`,
  `{id:'EVSE-02',type:'EV Charger',site:'Arcot DC',power:'18.4 kW',stateVal:'Charging',health:'Healthy',driver:'OCPP',telemetry:'1s ago',...TONE.mint},
{id:'EV-17',type:'EV Session',site:'Arcot DC',power:'62%',stateVal:'Connected',health:'Healthy',driver:'ISO 15118 via EVSE',telemetry:'1s ago',...TONE.indigo},
{id:'DT-07',type:'Transformer'`,
  "EV session asset",
);

replaceOnce(
  `{label:'INTERFACES',value:'ETH, Wi-Fi, RS-485, CAN'},{label:'LAST UPDATE',value:'12 days ago'},{label:'CONNECTED APPS',value:'8'},{label:'LAST HEARTBEAT',value:'4s ago'},`,
  `{label:'INTERFACES',value:'ETH, Wi-Fi, RS-485, CAN'},{label:'LAST UPDATE',value:'12 days ago'},{label:'CONNECTED APPS',value:'10'},{label:'LAST HEARTBEAT',value:'4s ago'},`,
  "connected app count",
);

replaceOnce(
  `{name:'EV Smart Charging',assets:'EVSE-02, EVSE-05, EVSE-11',telemetry:'Session, load',control:'Charger',priority:'—',status:'Active',outcome:'210 kW load managed',...TONE.mint},`,
  `{name:'EV Smart Charging',assets:'EVSE-02, EV-17',telemetry:'Session, load, departure',control:'Charger',priority:'P2',status:'Active',outcome:'Charge window optimised',...TONE.mint},
{name:'Depot Charge Planner',assets:'EVSE fleet, EV sessions',telemetry:'Departures, site limit',control:'Charge schedule',priority:'P1',status:'Active',outcome:'12 departures protected',...TONE.indigo},
{name:'Driver Charging App',assets:'Assigned EV session only',telemetry:'SoC, ETA, completion',control:'None',priority:'—',status:'Active',outcome:'Read-only driver view',...TONE.indigo},`,
  "multiple EV applications",
);

replaceOnce(
  `BESS-01 · SOLAR-04 · SOLAR-09 · EVSE-02 · DT-07 · METER-11`,
  `BESS-01 · SOLAR-04 · SOLAR-09 · EVSE-02 · EV-17 · DT-07 · METER-11`,
  "gateway attached EV session",
);

replaceOnce(
  `The same gateway serves 8 applications from one asset set. Data access and control access are granted independently.`,
  `The same gateway serves 10 applications from one mixed-OEM asset set. Purchaser ownership, app data access and control authority are granted independently.`,
  "gateway multi-app explanation",
);

replaceOnce(
  `<div style="font-size:16px;font-weight:700;color:#0E1512;margin-bottom:4px;">Enrol · Peak Flex Reward</div>`,
  `<div style="font-size:16px;font-weight:700;color:#0E1512;margin-bottom:4px;">Connect · {{ enrollName }}</div>`,
  "dynamic enrollment title",
);

replaceOnce(
  `<div style="font-size:15px;font-weight:700;color:#0E1512;margin-bottom:12px;">Dispatch schedule · 24h</div>`,
  `<div style="font-size:15px;font-weight:700;color:#0E1512;margin-bottom:12px;">Tariff optimisation schedule · 24h</div>`,
  "battery optimisation heading",
);

replaceOnce(
  `step: this.props.startAtMac ? 11 : 0,`,
  `step: this.props.startAtMac ? 14 : 0,`,
  "initial Mac step",
);

replaceOnce(
  `goNext = () => this.setState(s => ({ step: Math.min(s.step + 1, 11) }));`,
  `goNext = () => this.setState(s => ({ step: Math.min(s.step + 1, 14) }));`,
  "next step bound",
);

replaceOnce(
  `const isMac = step === 11;`,
  `const isMac = step === 14;`,
  "Mac step index",
);

replaceOnce(
  `const enrollStepText = ENROLL_STEPS[enrollStep];`,
  `const selectedProgram = PROGRAM_CARDS.find(p => p.key===programEnroll) || PROGRAM_CARDS[0];
const enrollName = selectedProgram.name;
const enrollSteps = [
  'Verify service connection TN-882301 for '+enrollName,
  'Review eligibility and the evidence used for this match',
  'Review least-privilege telemetry access for '+selectedProgram.assets,
  'Review control access, limits, priority and operator approval',
  'Confirm connection and revocation policy',
];
const enrollStepText = enrollSteps[enrollStep];`,
  "dynamic enrollment steps",
);

replaceOnce(
  `showBack: step > 0 && step < 11,
currentStepLabel: S.label, stepNumber: step+1, currentStepTitle: S.title, currentStepCaption: S.caption,
goNext: this.goNext, goBack: this.goBack,
isBuy: step===0, isConfirm: step===1, isWelcome: step===2, isClaim: step===3, isConnect: step===4,
isSiteProfile: step===5, isDiscovery: step===6, isTwins: step===7, isRegistration: step===8, isOpportunities: step===9, isComplete: step===10,
buyTabs: [{title:'kWh Electric — Gateway'}], confirmTabs: [{title:'Order Confirmed'}],`,
  `showBack: step > 0 && step < 14,
currentStepLabel: S.label, stepNumber: step+1, currentStepTitle: S.title, currentStepCaption: S.caption,
goNext: this.goNext, goBack: this.goBack,
isBuy: step===0, isCheckout: step===1, isConfirm: step===2, isWelcome: step===3, isClaim: step===4, isConnect: step===5,
isSiteProfile: step===6, isDiscovery: step===7, isTwins: step===8, isEcosystemStep: step===9, isUseMap: step===10, isRegistration: step===11, isOpportunities: step===12, isComplete: step===13,
isPhoneStep: step>=3 && step<=13, guideTitle: (PHONE_GUIDES[S.key]||{}).title, guideBody: (PHONE_GUIDES[S.key]||{}).body, guidePoints: (PHONE_GUIDES[S.key]||{}).points || [],
buyTabs: [{title:'kWh Electric — Gateway'}], checkoutTabs: [{title:'Secure checkout'}], confirmTabs: [{title:'Order Confirmed'}],`,
  "scene state mapping",
);

replaceOnce(
  `discovered: DISCOVERED, bessTwinFields: BESS_TWIN_FIELDS, opportunities: OPPORTUNITIES,`,
  `discovered: DISCOVERED, bessTwinFields: BESS_TWIN_FIELDS, ecosystemLinks: ECOSYSTEM_LINKS, bessUseMap: BESS_USE_MAP, opportunities: OPPORTUNITIES,`,
  "multi-use view data",
);

replaceOnce(
  `enrollStepNum: enrollStep+1, enrollStepText, enrollShowNext: enrollStep<4, enrollShowConfirm: enrollStep===4,`,
  `enrollStepNum: enrollStep+1, enrollName, enrollStepText, enrollShowNext: enrollStep<4, enrollShowConfirm: enrollStep===4,`,
  "enrollment name binding",
);

replaceOnce(
  `isMarketplace: route==='marketplace', marketCategories: MARKET_CATEGORIES, marketApps,`,
  `isEcosystemRoute: route==='ecosystem', ecosystemMetrics: ECOSYSTEM_METRICS, ecosystemRoles: ECOSYSTEM_ROLES, ecosystemDevices: ECOSYSTEM_DEVICES, ecosystemConnections: ECOSYSTEM_CONNECTIONS,
isMarketplace: route==='marketplace', marketCategories: MARKET_CATEGORIES, marketApps,`,
  "connections route data binding",
);

replaceOnce(
  `{{ currentStepLabel }} · STEP {{ stepNumber }} / 11`,
  `{{ currentStepLabel }} · STEP {{ stepNumber }} / 14`,
  "story step count",
);

const componentScript = template.match(/<script[^>]*data-dc-script[^>]*>([\s\S]*?)<\/script>/);
if (!componentScript) throw new Error("Component script not found after transforms");
new Function(componentScript[1]);

const encodedTemplate = JSON.stringify(template).replaceAll("</", "<\\u002F");
const output = source
  .replace("<title>Bundled Page</title>", "<title>kWh Gateway Experience</title>")
  .replace(templateMatch[0], templateMatch[1] + encodedTemplate + templateMatch[3]);

await writeFile(outputPath, output);
console.log(outputPath);

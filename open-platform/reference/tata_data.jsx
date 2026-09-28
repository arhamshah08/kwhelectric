// data.jsx — brand tokens, participants, and the master BEATS timeline.

const BRAND = {
  bg:    '#FFFFFF',
  panel: '#FFFFFF',
  faint: '#F4F7FB',
  faint2:'#EDF2F9',
  ink:   '#0B1524',
  sub:   '#56657C',
  mut:   '#8A98AD',
  line:  '#E5EAF1',
  lineS: '#D5DEEA',

  tata:     '#2E8BFF',
  tataDeep: '#1565C0',
  teal:     '#2E8BFF',

  kazam:  '#00AD57',
  pulse:  '#00AD57',
  sundae: '#00AD57',
  extra:  '#9AA7BC',

  good: '#00AD57',
  warn: '#FFD166',
  bad:  '#FF433A',

  font:    "'Space Grotesk', 'Poppins', system-ui, sans-serif",
  display: "tenon, 'Space Grotesk', system-ui, sans-serif",
  mono:    "'IBM Plex Mono', ui-monospace, monospace",
};

const PARTICIPANTS = [
  { id:'tata',     tier:'Utility',    name:'Tata Power',         sub:'DISCOM · network provider', color:BRAND.tata,   initials:'TP' },
  { id:'kazam',    tier:'Aggregator', name:'Kazam',              sub:'EV charging · 2,180 meters', color:BRAND.kazam,  initials:'kz' },
  { id:'pulse',    tier:'Aggregator', name:'Pulse Energy',       sub:'C&I cooling · 1,640 meters', color:BRAND.pulse,  initials:'pe' },
  { id:'sundae',   tier:'Aggregator', name:'SundayGrids',        sub:'Solar+storage · 2,480 meters',color:BRAND.sundae, initials:'sg' },
  { id:'customer', tier:'Customer',   name:'Thousands of homes', sub:'EV · battery · AC',         color:BRAND.tata,   initials:'' },
];

const EXTRA_AGG = [
  { id:'volttic', name:'Volttic', initials:'vt' },
  { id:'zeon',    name:'Zeon',    initials:'zn' },
];

const ACTOR_TIER = {
  tata:'Utility', kazam:'Aggregator', pulse:'Aggregator',
  sundae:'Aggregator', aggs:'Aggregator', customer:'Customer', all:'all',
};

// ── Aggregator bid data (shared across pages) ────────────────────────────────
// 8 MW needed, 15 MW available → merit-order clearing
const AGG_BIDS = {
  kazam:  { maxMW: 5, pricePer: 7.20, awardedMW: 3, meters: 2180, color: '#00AD57', settlement: '₹43,200' },
  pulse:  { maxMW: 5, pricePer: 7.40, awardedMW: 2, meters: 1640, color: '#00AD57', settlement: '₹28,800' },
  sundae: { maxMW: 5, pricePer: 7.10, awardedMW: 3, meters: 2480, color: '#00AD57', settlement: '₹42,600' },
};

// ── Master timeline ──────────────────────────────────────────────────────────
const BEATS = [
  { t: 0.0,  type:'context',       page:'context-grid',    actor:'tata',     act:'',
    url:'Zone South · grid operations',
    caption:'' },

  { t: 4.0,  type:'screen',        page:'tata-programs',   actor:'tata',     act:'01 · Post',
    url:'bdr.tatapower.com/programs',
    caption:'' },

  { t: 8.0,  type:'screen',        page:'tata-offer',      actor:'tata',     act:'01 · Post',
    url:'bdr.tatapower.com/flex-offers/new',
    caption:'' },


  { t: 17.0, type:'constellation', page:'net-mesh',        actor:'tata',     act:'02 · Discover',
    url:'beckn-deg://protocol-mesh',
    caption:'' },

  { t: 21.0, type:'screen',        page:'agg-discover',    actor:'aggs',     act:'02 · Discover',
    url:'beckn-deg://discovered',
    caption:'' },

  { t: 26.0, type:'screen',        page:'agg-bid',         actor:'aggs',     act:'03 · Bid',
    url:'beckn-deg://bids',
    caption:'' },

  { t: 31.5, type:'screen',        page:'bid-clearing',    actor:'tata',     act:'03 · Bid',
    url:'bdr.tatapower.com/bid-clearing',
    caption:'' },


  { t: 44.5, type:'screen',        page:'kazam-broadcast', actor:'kazam',    act:'04 · Broadcast',
    url:'app.kazam.in/campaigns',
    caption:'' },

  { t: 48.0, type:'screen',        page:'vc-enrollment',   actor:'customer', act:'04 · Enroll',
    url:'Kazam app · VC',
    caption:'' },

  { t: 58.0, type:'phone',         page:'customer-journey',actor:'customer', act:'05 · Respond',
    url:'Kazam app · Priya M.',
    caption:'' },

  { t: 66.0, type:'constellation', page:'net-customers-fabric',   actor:'customer', act:'05 · Respond',
    url:'beckn-deg://enrolled',
    caption:'' },

  { t: 71.0, type:'screen',        page:'event-live',      actor:'tata',     act:'06 · Deliver',
    url:'bdr.tatapower.com/events/live',
    caption:'' },

  { t: 75.5, type:'phone',         page:'customer-mv',     actor:'customer', act:'07 · Settle',
    url:'Kazam app · reward',
    caption:'' },

  { t: 80.5, type:'screen',        page:'economics-why',   actor:'tata',     act:'08 · Economics',
    url:'CEEW avoided-cost framework',
    caption:'' },

  { t: 85.0, type:'end',           page:'end',             actor:'all', act:'', url:'', caption:'' },
  { t: 88.0, type:'end-stop',      page:null,              actor:'all', act:'', url:'', caption:'' },
];

function getBeatAt(time) {
  for (let i = 0; i < BEATS.length - 1; i++) {
    if (time >= BEATS[i].t && time < BEATS[i + 1].t) {
      const span = BEATS[i + 1].t - BEATS[i].t;
      const progress = span > 0 ? (time - BEATS[i].t) / span : 0;
      return { beat: BEATS[i], index: i, progress, span };
    }
  }
  const last = BEATS[BEATS.length - 2];
  return { beat: last, index: BEATS.length - 2, progress: 1, span: 1 };
}

Object.assign(window, { BRAND, PARTICIPANTS, EXTRA_AGG, ACTOR_TIER, BEATS, getBeatAt, AGG_BIDS });

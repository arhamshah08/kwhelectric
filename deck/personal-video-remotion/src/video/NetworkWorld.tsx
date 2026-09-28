import React from "react";
import {interpolate} from "remotion";
import {Label} from "./Caption";
import {COLORS, FONT, range} from "./theme";

const MiniHouse: React.FC<{highlight?: boolean}> = ({highlight}) => (
  <svg width="104" height="86" viewBox="0 0 104 86" fill="none">
    <path d="M12 39L52 8L92 39V78H12V39Z" fill={highlight ? COLORS.greenPale : COLORS.paper} stroke={highlight ? COLORS.green : COLORS.ink} strokeWidth="4" strokeLinejoin="round" />
    <path d="M4 42L52 4L100 42" stroke={highlight ? COLORS.green : COLORS.ink} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="43" y="51" width="19" height="27" rx="3" fill={highlight ? COLORS.green : COLORS.ink} />
  </svg>
);

const OemIcon: React.FC<{kind: number}> = ({kind}) => (
  <svg width="112" height="86" viewBox="0 0 112 86" fill="none">
    {kind === 0 ? (
      <>
        <rect x="30" y="4" width="52" height="76" rx="12" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="4" />
        <rect x="42" y="20" width="28" height="45" rx="5" fill={COLORS.greenSoft} stroke={COLORS.green} strokeWidth="3" />
      </>
    ) : kind === 1 ? (
      <>
        <rect x="37" y="2" width="38" height="65" rx="10" fill={COLORS.ink} />
        <circle cx="56" cy="48" r="6" fill={COLORS.green} />
        <path d="M75 52C94 54 94 72 104 78" stroke={COLORS.ink} strokeWidth="6" strokeLinecap="round" />
      </>
    ) : (
      <>
        <rect x="8" y="18" width="96" height="42" rx="10" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="4" />
        <path d="M24 40H88M24 50H72" stroke={COLORS.green} strokeWidth="4" strokeLinecap="round" />
      </>
    )}
  </svg>
);

const UtilityIcon: React.FC = () => (
  <svg width="92" height="86" viewBox="0 0 92 86" fill="none">
    <path d="M46 6L18 80M46 6L74 80M30 44H62M23 61H69M12 80H80" stroke={COLORS.ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 28H56" stroke={COLORS.green} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const HOUSES = [
  [240, 430], [470, 360], [700, 470], [910, 330], [1150, 450], [1390, 350], [1320, 600],
];

const COLUMN_Y = [365, 530, 695, 820];
const UTILITY_Y = [363, 543, 723];

export const NetworkWorld: React.FC<{
  frame: number;
  opacity: number;
  columnProgress: number;
}> = ({frame, opacity, columnProgress}) => {
  const fieldProgress = range(frame, 1840, 1990);
  const serviceProgress = range(frame, 2150, 2290);

  return (
    <div style={{position: "absolute", inset: 0, opacity, zIndex: 20}}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
        {/* field feeders become the three-sided network */}
        {HOUSES.map(([x, y], index) => {
          const startX = x + 52;
          const startY = y + 45;
          const endX = interpolate(columnProgress, [0, 1], [1580, 1530]);
          const endY = interpolate(columnProgress, [0, 1], [UTILITY_Y[index % UTILITY_Y.length], COLUMN_Y[index % COLUMN_Y.length]]);
          const visible = Math.max(0, Math.min(1, fieldProgress * 1.4 - index * 0.08));
          return (
            <path
              key={`${x}-${y}`}
              d={`M${startX} ${startY} C ${startX + 130} ${startY}, ${endX - 180} ${endY}, ${endX} ${endY}`}
              stroke={index === 1 ? COLORS.green : COLORS.lineStrong}
              strokeWidth={index === 1 ? 6 : 3}
              strokeLinecap="round"
              opacity={visible * (1 - columnProgress)}
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset={1 - visible}
            />
          );
        })}
        {/* cross-network paths become visible after nodes align */}
        {[365, 530, 695].map((y, index) => (
          <path
            key={y}
            d={`M390 ${y} C 640 ${y}, 690 ${y - 20}, 820 ${y} C 1080 ${y + 10}, 1270 ${y - 20}, 1530 ${y}`}
            stroke={COLORS.green}
            strokeWidth="5"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - Math.max(0, Math.min(1, columnProgress * 1.5 - index * 0.18))}
            opacity={columnProgress}
          />
        ))}
      </svg>

      {/* homes persist from the zoomed-out field into the first column */}
      {HOUSES.map(([x, y], index) => {
        const row = index % 4;
        const tx = interpolate(columnProgress, [0, 1], [x, 240 + (index % 2) * 115]);
        const ty = interpolate(columnProgress, [0, 1], [y, COLUMN_Y[row] - 40]);
        const reveal = Math.max(0, Math.min(1, fieldProgress * 1.6 - index * 0.08));
        return (
          <div
            key={`${x}-${y}`}
            style={{
              position: "absolute",
              left: tx,
              top: ty,
              opacity: reveal,
              scale: interpolate(columnProgress, [0, 1], [1, 0.82]),
            }}
          >
            <MiniHouse highlight={index === 1} />
            {index === 1 ? <Label style={{position: "absolute", left: 10, top: 92, fontWeight: 700}}>Alex</Label> : null}
          </div>
        );
      })}

      {/* column labels */}
      <div style={{position: "absolute", left: 220, top: 248, opacity: columnProgress}}>
        <Label style={{fontWeight: 700}}>End users</Label>
      </div>
      <div style={{position: "absolute", left: 895, top: 248, opacity: columnProgress}}>
        <Label style={{fontWeight: 700}}>OEMs</Label>
      </div>
      <div style={{position: "absolute", left: 1570, top: 248, opacity: columnProgress}}>
        <Label style={{fontWeight: 700}}>Utilities</Label>
      </div>

      {/* OEMs */}
      {["Battery maker", "Charger maker", "HVAC maker"].map((label, index) => (
        <div
          key={label}
          style={{
            position: "absolute",
            left: 864,
            top: 315 + index * 180,
            width: 210,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: Math.max(0, columnProgress * 1.5 - index * 0.12),
            scale: 0.9 + 0.1 * columnProgress,
          }}
        >
          <OemIcon kind={index} />
          <Label style={{fontWeight: 600, textAlign: "center", marginTop: 10}}>{label}</Label>
        </div>
      ))}

      {/* multiple utilities, not a single endpoint */}
      {["Utility north", "Utility central", "Utility south"].map((label, index) => (
        <div
          key={label}
          style={{
            position: "absolute",
            left: 1550,
            top: 320 + index * 180,
            width: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: Math.max(0, fieldProgress * 1.3 - index * 0.12),
          }}
        >
          <UtilityIcon />
          <Label style={{fontWeight: 600, textAlign: "center", marginTop: 8}}>{label}</Label>
        </div>
      ))}

      {/* kWh is a shared connective layer, not a fourth column */}
      <div
        style={{
          position: "absolute",
          left: 634,
          right: 220,
          bottom: 120,
          height: 76,
          borderRadius: 18,
          background: COLORS.paper,
          border: `2px solid ${COLORS.ink}`,
          opacity: columnProgress,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 34px",
        }}
      >
        <Label style={{color: COLORS.ink, fontWeight: 700}}>kWh network</Label>
        <div style={{display: "flex", gap: 30}}>
          {["Demand flexibility", "Asset management", "Securitization and tokenization", "Energy trading"].map((service, index) => (
            <Label
              key={service}
              style={{
                color: COLORS.ink,
                opacity: Math.max(0, Math.min(1, serviceProgress * 1.6 - index * 0.17)),
              }}
            >
              {service}
            </Label>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FlywheelWorld: React.FC<{
  frame: number;
  opacity: number;
}> = ({frame, opacity}) => {
  const draw = range(frame, 2390, 2550);
  const services = range(frame, 2440, 2600);
  const points = [
    [610, 755], [820, 710], [1040, 625], [1280, 490], [1560, 292],
  ];

  return (
    <div style={{position: "absolute", inset: 0, opacity, zIndex: 24}}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
        <path d="M540 790C760 780 930 690 1080 610C1260 512 1378 372 1600 245" stroke={COLORS.line} strokeWidth="14" strokeLinecap="round" />
        <path d="M540 790C760 780 930 690 1080 610C1260 512 1378 372 1600 245" stroke={COLORS.green} strokeWidth="14" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - draw} />
        <path d="M1570 234L1610 238L1595 276" stroke={COLORS.green} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" opacity={draw} />
        {points.map(([x, y], index) => (
          <g key={`${x}-${y}`} opacity={Math.max(0, Math.min(1, draw * 1.45 - index * 0.12))}>
            <circle cx={x} cy={y} r={index === 0 ? 18 : 14 + index * 2} fill={COLORS.paper} stroke={COLORS.green} strokeWidth="6" />
            {index < 4 ? <path d={`M${x - 32} ${y + 46}L${x} ${y + 22}L${x + 32} ${y + 46}V${y + 74}H${x - 32}V${y + 46}Z`} fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="3" /> : null}
          </g>
        ))}
      </svg>

      <div style={{position: "absolute", left: 520, top: 850}}><Label style={{fontWeight: 700}}>More connected capacity</Label></div>
      <div style={{position: "absolute", left: 1040, top: 752, opacity: Math.max(0, services * 1.6)}}><Label style={{fontWeight: 700}}>More services on the same assets</Label></div>
      <div style={{position: "absolute", left: 1450, top: 174, opacity: Math.max(0, services * 1.6 - 0.45)}}><Label style={{fontWeight: 700}}>More value per connection</Label></div>

      {[
        ["Demand flexibility", 870, 590],
        ["Asset management", 1080, 482],
        ["Securitization and tokenization", 1250, 350],
        ["Energy trading", 1430, 248],
      ].map(([label, x, y], index) => (
        <div
          key={String(label)}
          style={{
            position: "absolute",
            left: Number(x),
            top: Number(y),
            padding: "11px 18px",
            borderRadius: 24,
            border: `2px solid ${COLORS.ink}`,
            background: COLORS.paper,
            opacity: Math.max(0, Math.min(1, services * 1.7 - index * 0.18)),
            translate: `0px ${18 * (1 - Math.max(0, Math.min(1, services * 1.7 - index * 0.18)))}px`,
            fontFamily: FONT,
            fontSize: 22,
            fontWeight: 600,
            color: COLORS.ink,
            lineHeight: 1.35,
          }}
        >
          {String(label)}
        </div>
      ))}
    </div>
  );
};

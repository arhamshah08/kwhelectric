import React from "react";
import {Label} from "./Caption";
import {COLORS, FONT, range} from "./theme";

const UtilityIcon = () => (
  <svg width="210" height="190" viewBox="0 0 210 190" fill="none">
    <path d="M105 12L38 176M105 12L172 176M69 89H141M52 132H158M30 176H180" stroke={COLORS.ink} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M81 58H129M93 34H117" stroke={COLORS.green} strokeWidth="6" strokeLinecap="round" />
    <circle cx="105" cy="12" r="8" fill={COLORS.green} />
  </svg>
);

const DashboardRow: React.FC<{label: string; value: string; active?: boolean}> = ({label, value, active}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: 66,
      borderBottom: `1px solid ${COLORS.line}`,
    }}
  >
    <Label>{label}</Label>
    <Label style={{fontWeight: 700, color: COLORS.ink}}>{value}</Label>
    {active ? <div style={{width: 10, height: 10, borderRadius: 99, background: COLORS.green}} /> : null}
  </div>
);

export const UtilityWorld: React.FC<{
  frame: number;
  opacity: number;
  panelProgress: number;
  enrollProgress: number;
  eventProgress: number;
}> = ({frame, opacity, panelProgress, enrollProgress, eventProgress}) => (
  <div style={{position: "absolute", inset: 0, opacity, zIndex: 20}}>
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
      <path d="M864 704C1050 704 1090 636 1220 636C1390 636 1430 560 1542 520" stroke={COLORS.lineStrong} strokeWidth="5" strokeLinecap="round" />
      <path
        d="M864 704C1050 704 1090 636 1220 636C1390 636 1430 560 1542 520"
        stroke={COLORS.green}
        strokeWidth="6"
        strokeLinecap="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset={1 - panelProgress}
      />
      <circle
        cx={1542 - eventProgress * 678}
        cy={520 + eventProgress * 184}
        r="14"
        fill={COLORS.green}
        opacity={eventProgress > 0 && eventProgress < 1 ? 1 : 0}
      />
    </svg>

    <div style={{position: "absolute", right: 96, top: 90, width: 230, textAlign: "center"}}>
      <UtilityIcon />
      <Label style={{fontWeight: 700, textAlign: "center", marginTop: 4}}>Utility network</Label>
    </div>

    <div
      style={{
        position: "absolute",
        right: 112,
        top: 350,
        width: 690,
        height: 490,
        borderRadius: 24,
        background: COLORS.paper,
        border: `2px solid ${COLORS.ink}`,
        boxShadow: "0 24px 70px rgba(17,17,17,.10)",
        padding: "30px 34px",
        opacity: panelProgress,
        scale: 0.92 + 0.08 * panelProgress,
        transformOrigin: "right center",
      }}
    >
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Label style={{fontWeight: 700}}>Connected home</Label>
        <div style={{display: "flex", gap: 10, alignItems: "center"}}>
          <div style={{width: 10, height: 10, borderRadius: 99, background: COLORS.green}} />
          <Label>Live</Label>
        </div>
      </div>
      <div style={{height: 1, background: COLORS.line, margin: "20px 0 6px"}} />
      <DashboardRow label="Connected assets" value="Battery · EV · HVAC" />
      <DashboardRow label="Grid location" value="Alex's feeder" />
      <DashboardRow label="Permitted actions" value="Discharge · pause · shift" />
      <div
        style={{
          marginTop: 24,
          padding: "20px 22px",
          borderRadius: 16,
          background: COLORS.greenPale,
          border: `2px solid ${COLORS.green}`,
        }}
      >
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Label style={{fontWeight: 700}}>Demand flexibility</Label>
          <Label>17:00–19:00</Label>
        </div>
        <div style={{display: "flex", gap: 28, marginTop: 18}}>
          {["Home battery", "EV charger"].map((asset, index) => {
            const enrolled = range(frame, 690 + index * 20, 718 + index * 20) * enrollProgress;
            return (
              <div key={asset} style={{display: "flex", gap: 10, alignItems: "center"}}>
                <div
                  style={{
                    width: 34,
                    height: 20,
                    borderRadius: 12,
                    background: enrolled > 0.5 ? COLORS.green : COLORS.lineStrong,
                    padding: 3,
                  }}
                >
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 99,
                      background: COLORS.paper,
                      translate: `${enrolled * 14}px 0px`,
                    }}
                  />
                </div>
                <Label>{asset}</Label>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    <div
      style={{
        position: "absolute",
        left: 930,
        top: 654,
        padding: "12px 20px",
        borderRadius: 22,
        background: COLORS.ink,
        color: COLORS.paper,
        fontFamily: FONT,
        fontSize: 22,
        fontWeight: 600,
        lineHeight: 1.35,
        opacity: eventProgress > 0.05 && eventProgress < 0.98 ? 1 : 0,
      }}
    >
      Reduce demand
    </div>
  </div>
);

const ResultCard: React.FC<{label: string; left: number; top: number; progress: number}> = ({label, left, top, progress}) => (
  <div
    style={{
      position: "absolute",
      left,
      top,
      width: 270,
      height: 112,
      borderRadius: 18,
      border: `2px solid ${COLORS.ink}`,
      background: COLORS.paper,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: progress,
      scale: 0.92 + progress * 0.08,
    }}
  >
    <Label style={{fontWeight: 700}}>{label}</Label>
  </div>
);

export const VerificationWorld: React.FC<{
  frame: number;
  opacity: number;
  progress: number;
}> = ({frame, opacity, progress}) => {
  const merge = range(frame, 1320, 1400) * progress;
  const duplicate = range(frame, 1400, 1475) * progress;

  return (
    <div style={{position: "absolute", inset: 0, opacity, zIndex: 30}}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
        {[
          "M660 590C820 590 840 520 1010 520",
          "M660 650C820 650 850 620 1010 620",
          "M660 710C820 710 840 720 1010 720",
        ].map((d, index) => (
          <path
            key={d}
            d={d}
            stroke={COLORS.green}
            strokeWidth="5"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - Math.max(0, Math.min(1, merge * 1.35 - index * 0.18))}
          />
        ))}
        <path d="M1270 620C1390 620 1420 500 1520 500" stroke={COLORS.green} strokeWidth="5" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - duplicate} />
        <path d="M1270 620C1390 620 1420 740 1520 740" stroke={COLORS.green} strokeWidth="5" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - duplicate} />
      </svg>

      <div style={{position: "absolute", left: 480, top: 530, width: 230, display: "flex", flexDirection: "column", gap: 26}}>
        {["Battery response", "Charger response", "HVAC response"].map((label) => (
          <Label key={label} style={{fontWeight: 600}}>{label}</Label>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          left: 1008,
          top: 540,
          width: 266,
          height: 164,
          borderRadius: 82,
          border: `3px solid ${COLORS.green}`,
          background: COLORS.greenPale,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          opacity: merge,
          scale: 0.86 + merge * 0.14,
        }}
      >
        <Label style={{fontWeight: 700}}>Verified performance</Label>
      </div>

      <ResultCard label="Aggregator" left={1520} top={444} progress={duplicate} />
      <ResultCard label="Utility" left={1520} top={684} progress={duplicate} />
    </div>
  );
};

export const PaymentFlow: React.FC<{
  frame: number;
  opacity: number;
}> = ({frame, opacity}) => {
  const flow = range(frame, 1590, 1660);
  return (
    <div style={{position: "absolute", inset: 0, opacity, zIndex: 28}}>
      <div
        style={{
          position: "absolute",
          left: 720,
          top: 510,
          width: 300,
          height: 130,
          borderRadius: 22,
          border: `2px solid ${COLORS.ink}`,
          background: COLORS.paper,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Label style={{fontWeight: 700}}>Aggregator</Label>
      </div>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
        <path d="M1020 575C1160 575 1260 500 1440 500" stroke={COLORS.lineStrong} strokeWidth="5" strokeLinecap="round" />
        <path d="M1020 575C1160 575 1260 500 1440 500" stroke={COLORS.green} strokeWidth="6" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - flow} />
        <circle cx={1020 + flow * 420} cy={575 - flow * 75} r="13" fill={COLORS.green} opacity={flow > 0 && flow < 1 ? 1 : 0} />
      </svg>
      <Label style={{position: "absolute", left: 1080, top: 520, fontWeight: 700, opacity: flow}}>Payment</Label>
      <Label style={{position: "absolute", left: 1060, top: 626, width: 350, opacity: flow}}>
        kWh measures and verifies but never handles funds
      </Label>
    </div>
  );
};

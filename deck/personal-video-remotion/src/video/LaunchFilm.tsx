import React from "react";
import {AbsoluteFill, Img, staticFile, useCurrentFrame} from "remotion";
import {FONT} from "./theme";

const INK = "#111111";
const GREEN = "#16A34A";
const RED = "#DC2626";
const WHITE = "#FFFFFF";
const LINE = "rgba(17,17,17,.18)";
const FAINT = "rgba(17,17,17,.06)";
const FPS = 30;

const S = {
  problem: [0, 8],
  connect: [8, 18],
  visible: [18, 27],
  enroll: [27, 36],
  respond: [36, 50],
  verify: [50, 59],
  paid: [59, 66],
  scale: [66, 74],
  network: [74, 82],
  services: [82, 88],
  growth: [88, 91],
  close: [91, 94],
} as const;

const OPENING = {
  empty: [0, 3],
  assets: [3, 6.5],
  disconnected: [6.5, 12],
  connected: [12, 18],
} as const;

const f = (seconds: number) => seconds * FPS;
const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smooth = (value: number) => {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
};
const progress = (frame: number, from: number, to: number) =>
  smooth((frame - f(from)) / f(to - from));
const sceneOpacity = (frame: number, span: readonly [number, number], edge = 0.38) =>
  Math.min(progress(frame, span[0], span[0] + edge), 1 - progress(frame, span[1] - edge, span[1]));

const Text: React.FC<React.PropsWithChildren<{style?: React.CSSProperties}>> = ({children, style}) => (
  <div
    style={{
      color: INK,
      fontFamily: FONT,
      fontSize: 32,
      fontWeight: 500,
      lineHeight: 1.18,
      ...style,
    }}
  >
    {children}
  </div>
);

const Title: React.FC<{frame: number; span: readonly [number, number]; children: React.ReactNode}> = ({frame, span, children}) => {
  const opacity = sceneOpacity(frame, span, 0.3);
  const enter = progress(frame, span[0], span[0] + 0.55);
  return (
    <div
      style={{
        position: "absolute",
        left: 96,
        top: 68,
        width: 1280,
        height: 150,
        color: INK,
        fontFamily: FONT,
        fontSize: 64,
        fontWeight: 600,
        lineHeight: 1.06,
        letterSpacing: "-0.035em",
        opacity,
        transform: `translateY(${18 * (1 - enter)}px)`,
        zIndex: 100,
      }}
    >
      {children}
    </div>
  );
};

const Layer: React.FC<React.PropsWithChildren<{opacity: number; z?: number}>> = ({opacity, z = 10, children}) => (
  <div style={{position: "absolute", inset: 0, opacity, zIndex: z, pointerEvents: "none"}}>{children}</div>
);

const Check: React.FC<{size?: number}> = ({size = 30}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" fill={GREEN} />
    <path d="M9 16.5l4.4 4.4L23.5 10.8" stroke={WHITE} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const pathPoint = (points: Array<[number, number]>, amount: number) => {
  const segments = points.slice(1).map((point, index) => ({
    a: points[index],
    b: point,
    length: Math.abs(point[0] - points[index][0]) + Math.abs(point[1] - points[index][1]),
  }));
  const total = segments.reduce((sum, segment) => sum + segment.length, 0);
  let distance = clamp(amount) * total;
  for (const segment of segments) {
    if (distance <= segment.length) {
      const p = segment.length === 0 ? 0 : distance / segment.length;
      return [
        segment.a[0] + (segment.b[0] - segment.a[0]) * p,
        segment.a[1] + (segment.b[1] - segment.a[1]) * p,
      ] as const;
    }
    distance -= segment.length;
  }
  return points[points.length - 1];
};

const OrthoPath: React.FC<{
  points: Array<[number, number]>;
  color?: string;
  width?: number;
  opacity?: number;
  dashed?: boolean;
}> = ({points, color = GREEN, width = 5, opacity = 1, dashed = false}) => (
  <polyline
    points={points.map((point) => point.join(",")).join(" ")}
    fill="none"
    stroke={color}
    strokeWidth={width}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeDasharray={dashed ? "12 12" : undefined}
    opacity={opacity}
  />
);

const DrawPath: React.FC<{
  points: Array<[number, number]>;
  amount: number;
}> = ({points, amount}) => (
  <polyline
    points={points.map((point) => point.join(",")).join(" ")}
    fill="none"
    stroke={GREEN}
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    pathLength="1"
    strokeDasharray="1"
    strokeDashoffset={1 - amount}
  />
);

const Pulse: React.FC<{points: Array<[number, number]>; amount: number; opacity?: number}> = ({points, amount, opacity = 1}) => {
  const [cx, cy] = pathPoint(points, amount);
  return <circle cx={cx} cy={cy} r="13" fill={GREEN} opacity={opacity} />;
};

const Gateway: React.FC<{x: number; y: number; opacity?: number; scale?: number}> = ({x, y, opacity = 1, scale = 1}) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={opacity}>
    <rect x="0" y="0" width="94" height="136" rx="18" fill={WHITE} stroke={INK} strokeWidth="4" />
    <path d="M47 28v54" stroke={GREEN} strokeWidth="7" strokeLinecap="round" />
    <circle cx="47" cy="105" r="6" fill={GREEN} />
  </g>
);

const UtilityBuilding: React.FC<{x: number; y: number; opacity?: number; label?: string}> = ({x, y, opacity = 1, label = "Utility"}) => (
  <g transform={`translate(${x} ${y})`} opacity={opacity}>
    <path d="M0 52L92 0l92 52" fill="none" stroke={INK} strokeWidth="5" strokeLinejoin="round" />
    <path d="M16 48h152v142H16zM68 190v-54h48v54" fill={WHITE} stroke={INK} strokeWidth="5" />
    {[38, 78, 118, 148].map((cx) => <rect key={cx} x={cx - 10} y="74" width="20" height="22" fill={cx === 118 ? GREEN : WHITE} stroke={INK} strokeWidth="3" />)}
    <text x="92" y="236" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">{label}</text>
  </g>
);

const Substation: React.FC<{x: number; y: number; opacity?: number}> = ({x, y, opacity = 1}) => (
  <g transform={`translate(${x} ${y})`} opacity={opacity}>
    <path d="M18 136V54M144 136V54M0 136h162M18 78h126" stroke={INK} strokeWidth="5" strokeLinecap="round" />
    <rect x="48" y="64" width="66" height="62" fill={WHITE} stroke={INK} strokeWidth="4" />
    <path d="M81 78v34" stroke={GREEN} strokeWidth="6" strokeLinecap="round" />
    <path d="M38 54L54 18M124 54L108 18M54 18h54" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    <text x="81" y="182" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">Substation</text>
  </g>
);

const Pole: React.FC<{x: number; y: number; opacity?: number}> = ({x, y, opacity = 1}) => (
  <g transform={`translate(${x} ${y})`} opacity={opacity}>
    <path d="M42 0v214M8 44h68M17 24h50M17 44l-12 28M67 44l12 28" stroke={INK} strokeWidth="5" strokeLinecap="round" />
  </g>
);

const PersonNode: React.FC<{x: number; y: number; label: string; opacity?: number}> = ({x, y, label, opacity = 1}) => (
  <g transform={`translate(${x} ${y})`} opacity={opacity}>
    <circle cx="58" cy="58" r="56" fill={WHITE} stroke={GREEN} strokeWidth="4" />
    <circle cx="58" cy="43" r="15" fill="none" stroke={INK} strokeWidth="4" />
    <path d="M30 88c6-20 18-30 28-30s22 10 28 30" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    <text x="58" y="154" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">{label}</text>
  </g>
);

const IntermediaryNode: React.FC<{x: number; y: number; label: string; kind: "person" | "link"; opacity: number}> = ({x, y, label, kind, opacity}) => (
  <g transform={`translate(${x} ${y})`} opacity={opacity}>
    <circle cx="0" cy="0" r="34" fill={WHITE} stroke={INK} strokeWidth="4" />
    {kind === "person" ? (
      <>
        <circle cx="0" cy="-9" r="9" fill="none" stroke={INK} strokeWidth="4" />
        <path d="M-17 18c4-13 10-19 17-19s13 6 17 19" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </>
    ) : (
      <>
        <path d="M-17 8l10-10c6-6 14-6 20 0M17-8L7 2c-6 6-14 6-20 0" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <path d="M-8 8L8-8" stroke={GREEN} strokeWidth="4" strokeLinecap="round" />
      </>
    )}
    <text x="0" y="82" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">{label}</text>
  </g>
);

const House: React.FC<{
  frame: number;
  left?: number;
  top?: number;
  scale?: number;
  opacity?: number;
  response?: number;
  connected?: number;
}> = ({frame, left = 286, top = 300, scale = 1, opacity = 1, response = 0, connected = 0}) => {
  const phoneOnTable = frame >= f(S.respond[0]);
  const battery = Math.round(94 - response * 12);
  return (
    <div style={{position: "absolute", left, top, width: 900, height: 640, transform: `scale(${scale})`, transformOrigin: "left top", opacity}}>
      <svg width="900" height="640" viewBox="0 0 900 640" fill="none">
        <path d="M30 588H874" stroke={LINE} strokeWidth="4" strokeLinecap="round" />
        <path d="M106 282L410 94l368 188v302H106V282Z" fill={WHITE} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
        <path d="M76 292L410 82l400 210" stroke={INK} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M474 278V584M650 278V584M106 540H778" stroke={LINE} strokeWidth="4" />

        <rect x="144" y="342" width="180" height="104" fill={WHITE} stroke={INK} strokeWidth="4" />
        <path d="M234 342v104M144 394h180" stroke={LINE} strokeWidth="3" />
        <path d="M160 430c30-28 54-22 75 2 28-28 50-24 76-2" stroke={GREEN} strokeWidth="8" strokeLinecap="round" opacity=".22" />

        <rect x="138" y="292" width="184" height="48" rx="10" fill={WHITE} stroke={INK} strokeWidth="4" />
        <path d="M158 319h106" stroke={response > 0.2 ? GREEN : LINE} strokeWidth="5" strokeLinecap="round" />
        <circle cx="295" cy="309" r="6" fill={GREEN} />
        <text x="230" y="486" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">{Math.round(22 + response * 2)}°C</text>

        <rect x="145" y="470" width="226" height="76" rx="22" fill={WHITE} stroke={INK} strokeWidth="4" />
        <circle cx="245" cy="454" r="21" fill={INK} />
        <path d="M230 477l38 22 24 38M258 493l-12 44M290 536l45 5M246 537l-38 5" stroke={INK} strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="416" cy="560" rx="64" ry="10" fill={FAINT} />
        <path d="M362 522h108l-14 34h-80l-14-34Z" fill={WHITE} stroke={INK} strokeWidth="4" />
        {phoneOnTable ? (
          <g transform="translate(394 504) rotate(8)"><rect width="36" height="60" rx="7" fill={INK} /><rect x="5" y="8" width="26" height="38" rx="3" fill={WHITE} /><circle cx="18" cy="53" r="3" fill={GREEN} /></g>
        ) : (
          <g transform="translate(284 478) rotate(8)"><rect width="30" height="52" rx="7" fill={INK} /><rect x="4" y="7" width="22" height="34" rx="3" fill={WHITE} /><circle cx="15" cy="46" r="3" fill={GREEN} /></g>
        )}

        <rect x="506" y="326" width="110" height="222" rx="15" fill={WHITE} stroke={INK} strokeWidth="4" />
        <rect x="533" y="368" width="56" height="102" rx="9" fill={WHITE} stroke={LINE} strokeWidth="3" />
        <rect x="533" y={368 + (1 - battery / 100) * 102} width="56" height={(battery / 100) * 102} rx="9" fill={GREEN} opacity=".88" />
        <text x="561" y="504" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">{battery}%</text>
        <text x="560" y="582" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">Battery</text>

        <path d="M672 326h90v196h-90zM672 375h90M672 424h90M672 473h90" fill={WHITE} stroke={INK} strokeWidth="4" />
        <rect x="732" y="344" width="34" height="88" rx="9" fill={INK} />
        <circle cx="749" cy="407" r="6" fill={response > 0.35 ? LINE : GREEN} />
        <path d="M749 432c0 34-24 34-42 48" stroke={INK} strokeWidth="6" strokeLinecap="round" />
        <path d="M667 518l22-36h52l30 36" fill={WHITE} stroke={INK} strokeWidth="4" />
        <rect x="648" y="516" width="136" height="45" rx="18" fill={WHITE} stroke={INK} strokeWidth="4" />
        <circle cx="674" cy="565" r="14" fill={INK} /><circle cx="760" cy="565" r="14" fill={INK} />
        <text x="716" y="310" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">EV charger</text>

        <g opacity={connected}>
          <OrthoPath points={[[485, 402], [454, 402], [454, 320], [322, 320]]} />
          <OrthoPath points={[[506, 420], [482, 420]]} />
          <OrthoPath points={[[616, 420], [690, 420], [690, 398], [732, 398]]} />
          <Gateway x={430} y={376} scale={0.62} />
          <text x="458" y="498" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">kWh</text>
        </g>

        <rect x="792" y="368" width="72" height="100" rx="12" fill={WHITE} stroke={INK} strokeWidth="4" />
        <circle cx="828" cy="407" r="22" fill="none" stroke={INK} strokeWidth="4" />
        <path d="M828 407l13-12" stroke={GREEN} strokeWidth="4" strokeLinecap="round" />
        <path d="M864 420h30" stroke={INK} strokeWidth="5" strokeLinecap="round" />

      </svg>
    </div>
  );
};

const Phone: React.FC<{
  frame: number;
  left: number;
  top: number;
  opacity: number;
  payment?: boolean;
}> = ({frame, left, top, opacity, payment = false}) => {
  const rows = [
    ["Home battery", "RS-485"],
    ["EV charger", "Local interface"],
    ["Air conditioner", "Vendor cloud API"],
  ];
  return (
    <div style={{position: "absolute", left, top, width: 330, height: 610, border: `4px solid ${INK}`, borderRadius: 40, background: WHITE, opacity, zIndex: 40, overflow: "hidden"}}>
      <div style={{width: 98, height: 20, borderRadius: 12, background: INK, margin: "13px auto 0"}} />
      <div style={{padding: "30px 24px"}}>
        <Text style={{fontWeight: 700}}>{payment ? "Payment received" : "Devices"}</Text>
        {payment ? (
          <div style={{marginTop: 110, display: "flex", flexDirection: "column", gap: 28}}>
            <Check size={52} />
            <Text style={{fontWeight: 600}}>Verified delivery</Text>
            <Text>Paid by aggregator</Text>
          </div>
        ) : (
          <div style={{marginTop: 24}}>
            {rows.map(([name, protocol], index) => {
              const connected = progress(frame, 9 + index * 2.15, 10.25 + index * 2.15);
              return (
                <div key={name} style={{padding: "17px 0", borderBottom: `2px solid ${LINE}`}}>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10}}>
                    <Text style={{fontWeight: 600}}>{name}</Text>
                    <div style={{opacity: connected}}><Check /></div>
                  </div>
                  <Text style={{marginTop: 8, color: connected > 0.7 ? GREEN : INK}}>{connected > 0.7 ? "Connected" : protocol}</Text>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const UtilityCard: React.FC<{opacity: number; program?: boolean}> = ({opacity, program = false}) => (
  <div style={{position: "absolute", left: 1192, top: 285, width: 594, background: WHITE, borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}`, padding: "24px 0", opacity, zIndex: 35}}>
    <Text style={{fontWeight: 700, marginBottom: 14}}>{program ? "Demand flexibility" : "Illustrative utility view"}</Text>
    {(program ? [
      ["Window", "17:00–19:00"],
      ["Assets", "Battery + EV charger"],
      ["Status", "Enrolled"],
      ["Action", "Dispatch when called"],
    ] : [
      ["Connected assets", "3"],
      ["Available capacity", "15.9 kW"],
      ["Grid location", "Oakline 12"],
      ["Permitted actions", "Discharge · Pause · Setpoint"],
    ]).map(([label, value], index) => (
      <div key={label} style={{display: "grid", gridTemplateColumns: "230px 1fr", gap: 20, padding: "13px 0", borderTop: index === 0 ? `2px solid ${LINE}` : undefined, borderBottom: `2px solid ${LINE}`}}>
        <Text>{label}</Text>
        <Text style={{fontWeight: 600, color: value === "Enrolled" ? GREEN : INK}}>{value}</Text>
      </div>
    ))}
  </div>
);

const GridInfrastructure: React.FC<{frame: number; opacity: number}> = ({frame, opacity}) => {
  const route = [[1110, 723], [1248, 723], [1248, 740], [1450, 740], [1450, 724], [1684, 724]] as Array<[number, number]>;
  const draw = progress(frame, 18.4, 20.5);
  const event = progress(frame, 31, 34.5);
  return (
    <Layer opacity={opacity} z={18}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
        <OrthoPath points={route} color={INK} opacity={0.2} width={5} />
        <OrthoPath points={route} color={GREEN} opacity={draw} width={6} />
        <Pulse points={[...route].reverse()} amount={event} opacity={event > 0 && event < 1 ? 1 : 0} />
        <Pole x={1206} y={515} opacity={draw} />
        <Substation x={1370} y={650} opacity={draw} />
        <UtilityBuilding x={1600} y={565} opacity={draw} />
      </svg>
    </Layer>
  );
};

const OpeningSequence: React.FC<{frame: number}> = ({frame}) => {
  const showAssets = progress(frame, 2.85, 3.45);
  const assetList = sceneOpacity(frame, OPENING.assets, 0.3);
  const disconnected = sceneOpacity(frame, OPENING.disconnected, 0.35);
  const routeOne = progress(frame, 6.85, 8.15);
  const routeTwo = progress(frame, 7.65, 9.15);
  const failedRoute = progress(frame, 8.55, 10.05);
  const connected = sceneOpacity(frame, OPENING.connected, 0.35);
  const internal = progress(frame, 12.25, 13.45);
  const sharedRoute = progress(frame, 13.15, 15.35);
  const exit = 1 - progress(frame, 17.35, 18);
  const batteryPath = [[500, 685], [535, 685], [535, 655], [550, 655]] as Array<[number, number]>;
  const evPath = [[640, 690], [605, 690], [605, 655], [580, 655]] as Array<[number, number]>;
  const hvacPath = [[380, 615], [520, 615], [520, 635], [550, 635]] as Array<[number, number]>;
  const directPath = [[565, 630], [565, 330], [1580, 330], [1580, 630], [1640, 630]] as Array<[number, number]>;
  return (
    <Layer opacity={exit} z={22}>
      <Img
        src={staticFile("assets/opening-empty-house.png")}
        style={{position: "absolute", left: 50, top: 430, width: 1050, opacity: 1 - showAssets}}
      />
      <Img
        src={staticFile("assets/opening-house-with-assets.png")}
        style={{position: "absolute", left: 50, top: 360, width: 1050, opacity: showAssets}}
      />
      <div style={{position: "absolute", left: 1180, top: 330, width: 520, opacity: assetList}}>
        {["Alex", "Air conditioner", "Battery", "EV charger"].map((label, index) => (
          <div key={label} style={{display: "flex", alignItems: "center", gap: 18, marginBottom: 34, opacity: progress(frame, 3.2 + index * 0.65, 3.75 + index * 0.65)}}>
            <div style={{width: 14, height: 14, borderRadius: "50%", background: GREEN}} />
            <Text style={{fontWeight: 600}}>{label}</Text>
          </div>
        ))}
      </div>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
        <g opacity={disconnected}>
          <DrawPath points={[[500, 685], [500, 350], [1100, 350]]} amount={routeOne} />
          <path d="M1176 350H1580V630H1640" fill="none" stroke={GREEN} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - routeOne} opacity=".72" />
          <DrawPath points={[[640, 690], [640, 470], [1230, 470]]} amount={routeTwo} />
          <path d="M1308 470H1580" fill="none" stroke={GREEN} strokeWidth="4" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - routeTwo} opacity=".72" />
          <path d="M380 615V590H1120" fill="none" stroke={RED} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - failedRoute} />
          <path d="M1133 573l34 34M1167 573l-34 34" stroke={RED} strokeWidth="7" strokeLinecap="round" opacity={failedRoute} />
          <IntermediaryNode x={1140} y={350} label="Aggregator" kind="person" opacity={routeOne} />
          <IntermediaryNode x={1270} y={470} label="Connector" kind="link" opacity={routeTwo} />
          <UtilityBuilding x={1640} y={535} opacity={Math.min(routeOne, routeTwo)} />
        </g>
        <g opacity={connected}>
          <rect x="548" y="625" width="38" height="72" rx="12" fill="none" stroke={GREEN} strokeWidth="5" />
          <DrawPath points={batteryPath} amount={internal} />
          <DrawPath points={evPath} amount={internal} />
          <DrawPath points={hvacPath} amount={internal} />
          <DrawPath points={directPath} amount={sharedRoute} />
          <Pulse points={directPath} amount={sharedRoute} opacity={sharedRoute > 0 && sharedRoute < 1 ? 1 : 0} />
          <UtilityBuilding x={1640} y={535} opacity={connected} />
          <text x="565" y="840" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">kWh gateway</text>
        </g>
      </svg>
    </Layer>
  );
};

const Respond: React.FC<{frame: number}> = ({frame}) => {
  const opacity = sceneOpacity(frame, S.respond);
  const state = progress(frame, 38.2, 43.5);
  return (
    <Layer opacity={opacity} z={28}>
      <div style={{position: "absolute", left: 1250, top: 380, width: 470, borderTop: `3px solid ${INK}`, paddingTop: 24}}>
        {["Battery discharging", "EV charging paused", "Setpoint +2°"].map((label, index) => (
          <div key={label} style={{display: "flex", alignItems: "center", gap: 18, padding: "18px 0", borderBottom: `2px solid ${LINE}`, opacity: Math.max(0, state * 1.6 - index * 0.22)}}>
            <Check />
            <Text style={{fontWeight: 600}}>{label}</Text>
          </div>
        ))}
        <Text style={{marginTop: 28}}>Alex does not need to intervene</Text>
      </div>
    </Layer>
  );
};

const Verification: React.FC<{frame: number}> = ({frame}) => {
  const opacity = sceneOpacity(frame, S.verify);
  const merge = progress(frame, 50.7, 53.3);
  const fork = progress(frame, 53.3, 56.6);
  const paths = [
    [[920, 490], [1135, 490], [1135, 590], [1245, 590]],
    [[980, 640], [1165, 640], [1165, 590], [1245, 590]],
    [[900, 760], [1100, 760], [1100, 590], [1245, 590]],
  ] as Array<Array<[number, number]>>;
  return (
    <Layer opacity={opacity} z={32}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
        {paths.map((path, index) => <OrthoPath key={index} points={path} color={GREEN} opacity={Math.max(0, merge * 1.45 - index * 0.2)} />)}
        <OrthoPath points={[[1365, 590], [1470, 590], [1470, 425], [1570, 425]]} color={GREEN} opacity={fork} />
        <OrthoPath points={[[1365, 590], [1470, 590], [1470, 745], [1570, 745]]} color={GREEN} opacity={fork} />
        <Pulse points={[[1365, 590], [1470, 590], [1470, 425], [1570, 425]]} amount={fork} opacity={fork > 0 && fork < 1 ? 1 : 0} />
        <PersonNode x={1570} y={350} label="Aggregator" opacity={fork} />
        <UtilityBuilding x={1578} y={644} opacity={fork} />
      </svg>
      <div style={{position: "absolute", left: 1245, top: 525, width: 250, display: "flex", alignItems: "center", gap: 16, opacity: merge}}>
        <Check size={56} />
        <Text style={{fontWeight: 700}}>Verified performance</Text>
      </div>
    </Layer>
  );
};

const Payment: React.FC<{frame: number}> = ({frame}) => {
  const opacity = sceneOpacity(frame, S.paid);
  const pay = progress(frame, 60.1, 63.4);
  const route = [[1678, 520], [1580, 520], [1580, 660], [1220, 660]] as Array<[number, number]>;
  return (
    <Layer opacity={opacity} z={34}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
        <OrthoPath points={route} color={GREEN} opacity={pay} />
        <Pulse points={route} amount={pay} opacity={pay > 0 && pay < 1 ? 1 : 0} />
        <PersonNode x={1620} y={382} label="Aggregator" />
      </svg>
      <Phone frame={frame} left={1220} top={310} opacity={progress(frame, 60.8, 62.2)} payment />
    </Layer>
  );
};

const MiniHouse: React.FC<{x: number; y: number; highlight?: boolean; scale?: number}> = ({x, y, highlight = false, scale = 1}) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M0 42L48 4l48 38v62H0V42Z" fill={WHITE} stroke={highlight ? GREEN : INK} strokeWidth={highlight ? 5 : 3} strokeLinejoin="round" />
    <path d="M-8 46L48 0l56 46" stroke={highlight ? GREEN : INK} strokeWidth={highlight ? 6 : 4} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M39 104V70h20v34" fill={WHITE} stroke={highlight ? GREEN : INK} strokeWidth="3" />
    <circle cx="81" cy="79" r="6" fill={GREEN} />
  </g>
);

const ScaleWorld: React.FC<{frame: number}> = ({frame}) => {
  const opacity = sceneOpacity(frame, S.scale);
  const reveal = progress(frame, 66.4, 71.4);
  const homes = Array.from({length: 12}, (_, index) => [160 + (index % 4) * 220, 330 + Math.floor(index / 4) * 200] as [number, number]);
  return (
    <Layer opacity={opacity} z={40}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
        {homes.map(([x, y], index) => (
          <g key={index} opacity={Math.max(0, reveal * 1.55 - index * 0.06)}>
            <MiniHouse x={x} y={y} highlight={index === 4} />
            <OrthoPath points={[[x + 96, y + 78], [1050, y + 78], [1050, 630]]} color={index === 4 ? GREEN : INK} opacity={index === 4 ? 0.85 : 0.15} width={index === 4 ? 5 : 3} />
          </g>
        ))}
        <OrthoPath points={[[1050, 630], [1320, 630], [1320, 700], [1600, 700]]} color={GREEN} opacity={reveal} width={6} />
        <Substation x={1240} y={560} opacity={reveal} />
        <UtilityBuilding x={1580} y={536} opacity={reveal} />
      </svg>
      <Text style={{position: "absolute", left: 160, top: 925, color: GREEN, fontWeight: 700, opacity: reveal}}>Alex’s home remains one connected node</Text>
    </Layer>
  );
};

const NetworkWorld: React.FC<{frame: number}> = ({frame}) => {
  const opacity = sceneOpacity(frame, S.network);
  const reveal = progress(frame, 74.4, 78.5);
  const buses = [360, 960, 1560];
  return (
    <Layer opacity={opacity} z={42}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
        {buses.map((x, index) => <OrthoPath key={x} points={[[x, 740], [x, 850]]} color={GREEN} width={5} opacity={Math.max(0, reveal * 1.4 - index * 0.12)} />)}
        <path d="M180 850H1740V930H180Z" fill={WHITE} stroke={GREEN} strokeWidth="5" opacity={reveal} />
        <text x="960" y="903" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="700" opacity={reveal}>kWh communications layer</text>
        {[0, 1, 2].map((index) => (
          <g key={index} transform={`translate(1480 ${320 + index * 165}) scale(.62)`} opacity={Math.max(0, reveal * 1.6 - index * 0.15)}>
            <UtilityBuilding x={0} y={0} label="" />
          </g>
        ))}
      </svg>
      <Text style={{position: "absolute", left: 250, top: 262, fontWeight: 700}}>End users</Text>
      <Text style={{position: "absolute", left: 900, top: 262, fontWeight: 700}}>OEMs</Text>
      <Text style={{position: "absolute", left: 1500, top: 262, fontWeight: 700}}>Utilities</Text>
      {[0, 1, 2].map((index) => <svg key={index} width="120" height="120" viewBox="0 0 120 120" style={{position: "absolute", left: 300, top: 338 + index * 142, opacity: Math.max(0, reveal * 1.6 - index * 0.15)}}><MiniHouse x={10} y={5} highlight={index === 1} /></svg>)}
      {["Battery maker", "EV-charger maker", "HVAC maker"].map((label, index) => (
        <div key={label} style={{position: "absolute", left: 795, top: 338 + index * 150, width: 330, opacity: Math.max(0, reveal * 1.6 - index * 0.15)}}>
          <svg width="100" height="82" viewBox="0 0 100 82" style={{display: "block", margin: "0 auto 8px"}}><rect x="22" y="6" width="56" height="66" rx="12" fill={WHITE} stroke={INK} strokeWidth="4" /><path d="M50 20v34" stroke={GREEN} strokeWidth="6" strokeLinecap="round" /></svg>
          <Text style={{textAlign: "center", fontWeight: 600, whiteSpace: "nowrap"}}>{label}</Text>
        </div>
      ))}
      {[0, 1, 2].map((index) => <Text key={index} style={{position: "absolute", left: 1460, top: 456 + index * 165, width: 200, textAlign: "center", fontWeight: 600, opacity: Math.max(0, reveal * 1.6 - index * 0.15)}}>Utility {index + 1}</Text>)}
    </Layer>
  );
};

const ServicesWorld: React.FC<{frame: number}> = ({frame}) => {
  const opacity = sceneOpacity(frame, S.services);
  const reveal = progress(frame, 82.3, 86.8);
  const services = [
    ["Demand flexibility", "Current"],
    ["Asset management", "Expansion"],
    ["Forecasting and planning", "Expansion"],
    ["Securitization and tokenization", "Future"],
    ["Energy trading", "Future"],
  ];
  return (
    <Layer opacity={opacity} z={44}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
        <path d="M160 836H1760V920H160Z" fill={WHITE} stroke={GREEN} strokeWidth="5" />
        <text x="960" y="890" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="700">kWh communications layer</text>
        {services.map((service, index) => {
          const x = 115 + index * 338;
          const itemOpacity = Math.max(0, reveal * 1.7 - index * 0.16);
          return (
            <g key={service[0]} opacity={itemOpacity}>
              <OrthoPath points={[[x + 95, 760], [x + 95, 836]]} color={GREEN} width={5} />
              <circle cx={x + 95} cy="560" r="62" fill={WHITE} stroke={index === 0 ? GREEN : INK} strokeWidth={index === 0 ? 5 : 3} />
              <path d={`M${x + 61} 560h68M${x + 95} 526v68`} stroke={GREEN} strokeWidth="6" strokeLinecap="round" />
            </g>
          );
        })}
      </svg>
      {services.map((service, index) => (
        <div key={service[0]} style={{position: "absolute", left: 110 + index * 338, top: 642, width: 300, textAlign: "center", opacity: Math.max(0, reveal * 1.7 - index * 0.16)}}>
          <Text style={{fontWeight: 600, minHeight: 76}}>{service[0]}</Text>
          <Text style={{fontWeight: 600, color: index === 0 ? GREEN : INK}}>{service[1]}</Text>
        </div>
      ))}
    </Layer>
  );
};

const GrowthWorld: React.FC<{frame: number}> = ({frame}) => {
  const opacity = sceneOpacity(frame, S.growth, 0.25);
  const draw = progress(frame, 88.15, 90.35);
  const path = "M370 812C610 794 760 735 920 650C1110 552 1285 430 1545 286";
  const labels = [
    ["Demand flexibility", 470, 700],
    ["Asset management", 760, 590],
    ["Securitization and tokenization", 1085, 430],
    ["Energy trading", 1420, 240],
  ] as const;
  return (
    <Layer opacity={opacity} z={46}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" style={{position: "absolute", inset: 0}}>
        <path d="M300 812H1640M300 812V270" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <path d={path} stroke={LINE} strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d={path} stroke={GREEN} strokeWidth="10" fill="none" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - draw} />
        {[470, 830, 1190, 1545].map((x, index) => <g key={x}><circle cx={x} cy={812} r="7" fill={GREEN} /><text x={x} y="866" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">Year {index + 1}</text></g>)}
        {labels.map(([label, x, y], index) => <text key={label} x={x} y={y} textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600" opacity={Math.max(0, draw * 1.55 - index * 0.18)}>{label}</text>)}
        <text x="970" y="960" textAnchor="middle" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">Years</text>
        <text x="160" y="560" textAnchor="middle" transform="rotate(-90 160 560)" fill={INK} fontFamily={FONT} fontSize="32" fontWeight="600">Connected capacity</text>
        <text x="1640" y="922" textAnchor="end" fill={GREEN} fontFamily={FONT} fontSize="32" fontWeight="600">Illustrative network effect</text>
      </svg>
    </Layer>
  );
};

const Close: React.FC<{frame: number}> = ({frame}) => {
  const opacity = sceneOpacity(frame, S.close, 0.22);
  return (
    <Layer opacity={opacity} z={60}>
      <div style={{position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", background: WHITE}}>
        <div style={{fontFamily: FONT, fontSize: 64, fontWeight: 600, lineHeight: 1.06, letterSpacing: "-0.035em", color: INK, textAlign: "center", width: 1280}}>Every energy asset, made visible and dispatchable</div>
        <Text style={{marginTop: 42, fontWeight: 700, color: GREEN}}>kWh Electric</Text>
      </div>
    </Layer>
  );
};

export const LaunchFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const connected = progress(frame, 8.3, 16.5);
  const response = progress(frame, 37.8, 43.5);
  const homeOpacity = 1 - progress(frame, 65.2, 66.6);
  const utilityOpacity = progress(frame, 18, 19.2) * (1 - progress(frame, 35.2, 36.2));

  return (
    <AbsoluteFill style={{background: WHITE, overflow: "hidden"}}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{position: "absolute", inset: 0}}>
        <path d="M96 218H1824" stroke={FAINT} strokeWidth="2" />
      </svg>

      <House frame={frame} opacity={homeOpacity * progress(frame, 17.35, 18)} connected={connected} response={response} />
      <OpeningSequence frame={frame} />
      <GridInfrastructure frame={frame} opacity={utilityOpacity} />
      <UtilityCard opacity={sceneOpacity(frame, S.visible) * progress(frame, 20, 21.3)} />
      <UtilityCard opacity={sceneOpacity(frame, S.enroll) * progress(frame, 27.4, 28.4)} program />
      <Respond frame={frame} />
      <Verification frame={frame} />
      <Payment frame={frame} />
      <ScaleWorld frame={frame} />
      <NetworkWorld frame={frame} />
      <ServicesWorld frame={frame} />
      <GrowthWorld frame={frame} />
      <Close frame={frame} />

      <Title frame={frame} span={OPENING.empty}>An ordinary home starts without flexible assets</Title>
      <Title frame={frame} span={OPENING.assets}>Alex adds an air conditioner, battery and EV charger</Title>
      <Title frame={frame} span={OPENING.disconnected}>Every asset needs a different path—and one cannot connect</Title>
      <Title frame={frame} span={OPENING.connected}>The utility accesses the home through one kWh connection</Title>
      <Title frame={frame} span={S.visible}>His utility can now see what is available</Title>
      <Title frame={frame} span={S.enroll}>Eligible devices join a demand-flexibility program</Title>
      <Title frame={frame} span={S.respond}>His devices respond while Alex carries on</Title>
      <Title frame={frame} span={S.verify}>One verified result reaches both sides</Title>
      <Title frame={frame} span={S.paid}>Alex is paid for what his devices delivered</Title>
      <Title frame={frame} span={S.scale}>The same connection scales across thousands of homes</Title>
      <Title frame={frame} span={S.network}>The network connects end users, OEMs and utilities</Title>
      <Title frame={frame} span={S.services}>The same connected assets support more services over time</Title>
      <Title frame={frame} span={S.growth}>More connected capacity supports more valuable services</Title>
    </AbsoluteFill>
  );
};

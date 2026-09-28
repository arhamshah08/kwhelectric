import React from "react";
import {Label} from "./Caption";
import {COLORS, FONT, range} from "./theme";

const Check = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill={COLORS.green} />
    <path
      d="M7 12.5l3.1 3.1L17.5 8"
      stroke="#fff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PhonePanel: React.FC<{
  frame: number;
  opacity: number;
  payment?: boolean;
}> = ({frame, opacity, payment = false}) => {
  const connected = [range(frame, 70, 100), range(frame, 112, 142), range(frame, 154, 184)];

  return (
    <div
      style={{
        position: "absolute",
        left: 1440,
        top: 230,
        width: 330,
        height: 620,
        border: `3px solid ${COLORS.ink}`,
        borderRadius: 48,
        background: COLORS.paper,
        boxShadow: "0 24px 70px rgba(17,17,17,.12)",
        opacity,
        scale: 0.86 + 0.14 * opacity,
        overflow: "hidden",
        zIndex: 30,
      }}
    >
      <div
        style={{
          width: 112,
          height: 26,
          borderRadius: 18,
          background: COLORS.ink,
          margin: "16px auto 0",
        }}
      />
      <div style={{padding: "46px 30px 30px"}}>
        <Label style={{fontWeight: 700}}>kWh home</Label>
        {payment ? (
          <div
            style={{
              marginTop: 120,
              padding: "28px 24px",
              borderRadius: 22,
              background: COLORS.greenPale,
              border: `2px solid ${COLORS.green}`,
              opacity: range(frame, 1660, 1700),
              translate: `0px ${24 * (1 - range(frame, 1660, 1700))}px`,
            }}
          >
            <div style={{display: "flex", alignItems: "center", gap: 14}}>
              <Check />
              <Label style={{fontWeight: 700}}>Payment received</Label>
            </div>
            <Label style={{marginTop: 18}}>Paid by your aggregator</Label>
          </div>
        ) : (
          <>
            <Label style={{marginTop: 24}}>Connecting nearby devices</Label>
            <div style={{display: "flex", flexDirection: "column", gap: 16, marginTop: 28}}>
              {[
                ["Home battery", "RS-485"],
                ["EV charger", "Zigbee"],
                ["HVAC", "Vendor cloud"],
              ].map(([name, protocol], index) => (
                <div
                  key={name}
                  style={{
                    border: `1px solid ${connected[index] > 0.75 ? COLORS.green : COLORS.line}`,
                    borderRadius: 16,
                    padding: "18px 16px",
                    background: connected[index] > 0.75 ? COLORS.greenPale : COLORS.paper,
                  }}
                >
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Label style={{fontWeight: 600}}>{name}</Label>
                    <div style={{opacity: connected[index]}}><Check /></div>
                  </div>
                  <Label style={{marginTop: 7}}>
                    {connected[index] > 0.75 ? "IEEE 2030.5" : protocol}
                  </Label>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const HomeCutaway: React.FC<{
  left: number;
  top: number;
  scale: number;
  opacity: number;
  connectProgress: number;
  responseProgress: number;
  stateOpacity?: number;
  showLabels?: boolean;
  phoneOnTable?: boolean;
}> = ({
  left,
  top,
  scale,
  opacity,
  connectProgress,
  responseProgress,
  stateOpacity = 1,
  showLabels = true,
  phoneOnTable = false,
}) => {
  const batteryLevel = 0.84 - responseProgress * 0.28;
  const hvacTemp = Math.round(22 + responseProgress * 2);
  const statusOpacity = responseProgress * stateOpacity;
  const assetLabelOpacity = showLabels ? 1 : statusOpacity;
  const draw = (offset: number) => Math.max(0, Math.min(1, connectProgress * 1.5 - offset));

  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: 1080,
        height: 720,
        opacity,
        scale,
        transformOrigin: "center center",
        zIndex: 10,
      }}
    >
      <svg width="1080" height="720" viewBox="0 0 1080 720" fill="none">
        <defs>
          <linearGradient id="home-wall" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#FAF9F5" />
          </linearGradient>
          <linearGradient id="window-light" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#DDF4E6" />
            <stop offset="1" stopColor="#F4FBF6" />
          </linearGradient>
          <filter id="home-shadow" x="-20%" y="-30%" width="150%" height="180%">
            <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#111111" floodOpacity="0.08" />
          </filter>
          <clipPath id="battery-gauge">
            <rect x="625" y="367" width="62" height="112" rx="10" />
          </clipPath>
        </defs>

        <path d="M28 652H1044" stroke={COLORS.lineStrong} strokeWidth="3" strokeLinecap="round" />

        {/* Architectural shell: a warm living room, utility bay and garage in one cutaway. */}
        <g filter="url(#home-shadow)">
          <path
            d="M120 286L486 80L920 286V648H120V286Z"
            fill="url(#home-wall)"
            stroke={COLORS.ink}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M88 300L486 72L952 300"
            stroke={COLORS.ink}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <rect x="122" y="292" width="446" height="354" fill="#FBFAF6" />
        <rect x="570" y="292" width="152" height="354" fill="#F1F8F3" />
        <rect x="724" y="292" width="194" height="354" fill="#F5F6F3" />
        <path d="M570 286V648M723 286V648" stroke={COLORS.lineStrong} strokeWidth="3" />
        <path d="M120 604H920" stroke={COLORS.lineStrong} strokeWidth="3" />

        {/* Living-room architecture and furnishings. */}
        <rect x="160" y="374" width="224" height="118" rx="5" fill="url(#window-light)" stroke={COLORS.ink} strokeWidth="3" />
        <path d="M272 374V492M160 433H384" stroke={COLORS.lineStrong} strokeWidth="3" />
        <path d="M176 466C210 438 244 444 272 468C308 432 344 436 374 460" stroke={COLORS.greenSoft} strokeWidth="12" strokeLinecap="round" />

        <rect x="156" y="318" width="228" height="58" rx="14" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="3" />
        <path d="M178 350H302" stroke={responseProgress > 0.25 ? COLORS.green : COLORS.lineStrong} strokeWidth="5" strokeLinecap="round" />
        <path d="M178 361H276" stroke={responseProgress > 0.25 ? COLORS.green : COLORS.lineStrong} strokeWidth="5" strokeLinecap="round" />
        <circle cx="357" cy="337" r="6" fill={COLORS.green} />
        <text x="330" y="360" textAnchor="middle" fill={COLORS.ink} fontFamily={FONT} fontSize="22" fontWeight="700">
          {hvacTemp}°
        </text>
        <text x="166" y="306" fill={COLORS.ink} fontFamily={FONT} fontSize="22" fontWeight="600" opacity={assetLabelOpacity}>HVAC</text>

        <ellipse cx="327" cy="594" rx="178" ry="35" fill="#EAE8E0" />
        <rect x="176" y="500" width="250" height="100" rx="27" fill="#E7E3D9" stroke={COLORS.ink} strokeWidth="3" />
        <rect x="188" y="478" width="108" height="78" rx="22" fill="#F3F0E8" stroke={COLORS.ink} strokeWidth="3" />
        <rect x="300" y="478" width="114" height="78" rx="22" fill="#F3F0E8" stroke={COLORS.ink} strokeWidth="3" />
        <path d="M190 600V622M412 600V622" stroke={COLORS.ink} strokeWidth="5" strokeLinecap="round" />

        {/* Alex is relaxed and human, not an interface glyph. */}
        <circle cx="320" cy="482" r="24" fill="#D3A27C" stroke={COLORS.ink} strokeWidth="3" />
        <path d="M298 476C300 451 340 450 344 480C331 470 314 470 298 476Z" fill={COLORS.ink} />
        <path d="M314 507C344 500 371 519 374 552L330 568L300 536C298 520 302 511 314 507Z" fill={COLORS.green} stroke={COLORS.ink} strokeWidth="3" strokeLinejoin="round" />
        <path d="M353 526L400 550" stroke="#D3A27C" strokeWidth="14" strokeLinecap="round" />
        <path d="M331 561L379 585L420 585M330 563L294 590L258 590" stroke={COLORS.ink} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />

        <ellipse cx="454" cy="617" rx="64" ry="10" fill="#DAD7CE" />
        <path d="M407 583H500L486 616H421L407 583Z" fill="#C59A6A" stroke={COLORS.ink} strokeWidth="3" strokeLinejoin="round" />
        {phoneOnTable ? (
          <g>
            <rect x="440" y="572" width="25" height="42" rx="6" fill={COLORS.ink} transform="rotate(82 440 572)" />
            <rect x="444" y="576" width="17" height="27" rx="3" fill={COLORS.greenSoft} transform="rotate(82 444 576)" />
            <path d="M394 547H407V564C407 572 394 572 394 564V547Z" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="3" />
          </g>
        ) : (
          <g>
            <rect x="397" y="532" width="27" height="46" rx="6" fill={COLORS.ink} transform="rotate(10 397 532)" />
            <rect x="401" y="538" width="19" height="29" rx="3" fill={COLORS.greenSoft} transform="rotate(10 401 538)" />
          </g>
        )}

        <rect x="486" y="554" width="46" height="54" rx="5" fill="#B98B5B" />
        <path d="M509 554V507" stroke={COLORS.ink} strokeWidth="4" />
        <path d="M509 529C485 510 481 486 497 479C514 484 519 505 509 529ZM509 529C533 510 537 486 521 479C504 484 499 505 509 529Z" fill={COLORS.greenSoft} stroke={COLORS.green} strokeWidth="3" />

        {/* Utility bay with a wall-mounted home battery. */}
        <rect x="600" y="326" width="112" height="270" rx="18" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="3" />
        <rect x="625" y="367" width="62" height="112" rx="10" fill="#E6E8E3" />
        <rect
          x="625"
          y={367 + 112 * (1 - batteryLevel)}
          width="62"
          height={112 * batteryLevel}
          fill={COLORS.green}
          clipPath="url(#battery-gauge)"
        />
        <path d="M644 347H668" stroke={COLORS.green} strokeWidth="5" strokeLinecap="round" />
        <text x="656" y="511" textAnchor="middle" fill={COLORS.ink} fontFamily={FONT} fontSize="22" fontWeight="700">
          {Math.round(batteryLevel * 100)}%
        </text>
        <text x="656" y="548" textAnchor="middle" fill={COLORS.ink} fontFamily={FONT} fontSize="22" fontWeight="600" opacity={assetLabelOpacity}>Home battery</text>
        <rect x="576" y="558" width="140" height="29" rx="14" fill={COLORS.greenPale} stroke={COLORS.green} strokeWidth="2" opacity={statusOpacity} />
        <text x="646" y="580" textAnchor="middle" fill={COLORS.ink} fontFamily={FONT} fontSize="22" fontWeight="600" opacity={statusOpacity}>Discharging</text>

        {/* Garage reads as a garage before the car appears. */}
        <path d="M739 326H903V520H739V326Z" fill="#F0F1ED" stroke={COLORS.lineStrong} strokeWidth="3" />
        <path d="M739 374H903M739 422H903M739 470H903" stroke={COLORS.lineStrong} strokeWidth="3" />
        <text x="750" y="312" fill={COLORS.ink} fontFamily={FONT} fontSize="22" fontWeight="600">Garage</text>

        <rect x="850" y="352" width="54" height="112" rx="13" fill={COLORS.ink} />
        <rect x="861" y="366" width="32" height="25" rx="5" fill="#3B3B3B" />
        <circle cx="877" cy="413" r="7" fill={responseProgress > 0.38 ? COLORS.lineStrong : COLORS.green} />
        <path d="M877 464C878 506 839 514 815 494" stroke={COLORS.ink} strokeWidth="7" strokeLinecap="round" />
        <text x="822" y="342" textAnchor="middle" fill={COLORS.ink} fontFamily={FONT} fontSize="22" fontWeight="600" opacity={assetLabelOpacity}>EV charger</text>
        <rect x="785" y="470" width="120" height="38" rx="19" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="2" opacity={statusOpacity} />
        <text x="845" y="496" textAnchor="middle" fill={COLORS.ink} fontFamily={FONT} fontSize="22" fontWeight="600" opacity={statusOpacity}>Paused</text>

        <g filter="url(#home-shadow)">
          <path d="M758 552L784 514H858L884 552" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="4" strokeLinejoin="round" />
          <rect x="738" y="548" width="164" height="54" rx="21" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="4" />
          <path d="M785 530H852" stroke={COLORS.green} strokeWidth="5" strokeLinecap="round" />
          <path d="M760 568H784M856 568H880" stroke={COLORS.greenSoft} strokeWidth="8" strokeLinecap="round" />
          <circle cx="772" cy="606" r="17" fill={COLORS.ink} />
          <circle cx="868" cy="606" r="17" fill={COLORS.ink} />
        </g>

        {/* Gateway and links are routed behind the equipment, not across labels. */}
        {[
          "M542 404H410V347H384",
          "M624 404H600",
          "M624 414H812V408H850",
        ].map((path, index) => (
          <path
            key={path}
            d={path}
            fill="none"
            stroke={COLORS.green}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - draw(index * 0.2)}
          />
        ))}
        <rect x="518" y="370" width="108" height="68" rx="14" fill={COLORS.ink} />
        <text x="572" y="400" textAnchor="middle" fill={COLORS.paper} fontFamily={FONT} fontSize="22" fontWeight="700">kWh</text>
        <circle cx="572" cy="420" r="6" fill={COLORS.green} />

        {/* Exterior condenser and service meter make the grid edge physically legible. */}
        <rect x="34" y="518" width="90" height="106" rx="14" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="3" />
        <circle cx="79" cy="568" r="29" stroke={COLORS.lineStrong} strokeWidth="4" />
        <path d="M79 541V595M52 568H106M60 549L98 587M98 549L60 587" stroke={COLORS.lineStrong} strokeWidth="3" />
        <path d="M124 570H120V420H156" stroke={COLORS.lineStrong} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="920" y="378" width="76" height="108" rx="13" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="3" />
        <circle cx="958" cy="418" r="23" stroke={COLORS.lineStrong} strokeWidth="3" />
        <path d="M958 418L972 404" stroke={COLORS.green} strokeWidth="4" strokeLinecap="round" />
        <path d="M920 432H626" stroke={COLORS.green} strokeWidth="4" strokeLinecap="round" opacity={connectProgress} />
        <path d="M996 432H1062" stroke={COLORS.green} strokeWidth="5" strokeLinecap="round" opacity={Math.max(0.22, connectProgress)} />
      </svg>
    </div>
  );
};

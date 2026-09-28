import React from "react";
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from "remotion";
import {Caption, Label} from "./Caption";
import {HomeCutaway, PhonePanel} from "./HomeWorld";
import {FlywheelWorld, NetworkWorld} from "./NetworkWorld";
import {PaymentFlow, UtilityWorld, VerificationWorld} from "./UtilityWorld";
import {COLORS, FONT, range} from "./theme";
import {CUES} from "./timing";

const clampedInterpolate = (
  frame: number,
  input: number[],
  output: number[],
) =>
  interpolate(frame, input, output, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.65, 0, 0.35, 1),
  });

const Closing: React.FC<{frame: number; opacity: number}> = ({frame, opacity}) => {
  const mark = range(frame, 2650, 2705);
  const title = range(frame, 2680, 2735);

  return (
    <AbsoluteFill
      style={{
        opacity,
        alignItems: "center",
        justifyContent: "center",
        background: COLORS.paper,
        zIndex: 50,
      }}
    >
      <svg width="210" height="150" viewBox="0 0 210 150" fill="none" style={{opacity: mark}}>
        <path d="M26 98L86 48L146 98V132H26V98Z" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="6" strokeLinejoin="round" />
        <path d="M14 103L86 42L158 103" stroke={COLORS.ink} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M72 119C112 119 134 96 184 24" stroke={COLORS.green} strokeWidth="9" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - mark} />
        <circle cx="184" cy="24" r="9" fill={COLORS.green} />
      </svg>
      <div
        style={{
          width: 1440,
          marginTop: 34,
          color: COLORS.ink,
          fontFamily: FONT,
          fontSize: 64,
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: "-0.035em",
          textAlign: "center",
          opacity: title,
          translate: `0px ${18 * (1 - title)}px`,
        }}
      >
        Every energy asset, made visible and dispatchable
      </div>
      <Label style={{fontWeight: 700, marginTop: 42, opacity: range(frame, 2720, 2760)}}>
        kWh Electric
      </Label>
    </AbsoluteFill>
  );
};

export const AlexJourney: React.FC = () => {
  const frame = useCurrentFrame();

  const utilityOpacity = range(frame, 300, 350) * (1 - range(frame, 810, 870));
  const verificationOpacity = range(frame, 1245, 1295) * (1 - range(frame, 1530, 1575));
  const paymentOpacity = range(frame, 1540, 1590) * (1 - range(frame, 1790, 1840));
  const networkOpacity = range(frame, 1790, 1850) * (1 - range(frame, 2350, 2410));
  const flywheelOpacity = range(frame, 2340, 2400) * (1 - range(frame, 2610, 2655));
  const closeOpacity = range(frame, 2625, 2665);

  const houseLeft = clampedInterpolate(
    frame,
    [0, 280, 355, 760, 850, 1200, 1280, 1520, 1580, 1790, 1860],
    [520, 520, 80, 80, 620, 620, 40, 40, 30, 30, 205],
  );
  const houseTop = clampedInterpolate(
    frame,
    [0, 280, 355, 760, 850, 1200, 1280, 1520, 1580, 1790, 1860],
    [290, 290, 430, 430, 300, 300, 470, 470, 510, 510, 456],
  );
  const houseScale = clampedInterpolate(
    frame,
    [0, 40, 280, 355, 760, 850, 1200, 1280, 1520, 1580, 1790, 1860],
    [1.06, 0.9, 0.9, 0.61, 0.61, 0.96, 0.96, 0.56, 0.56, 0.52, 0.52, 0.095],
  );
  const houseOpacity = 1 - range(frame, 1830, 1900);
  const responseProgress = range(frame, 895, 1110);

  return (
    <AbsoluteFill style={{background: COLORS.paper, overflow: "hidden"}}>
      {/* a quiet spatial grid keeps the composition editorial rather than dashboard-like */}
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{position: "absolute", inset: 0}}>
        <path d="M0 930H1920" stroke={COLORS.surface} strokeWidth="2" />
        <path d="M96 0V1080M1824 0V1080" stroke={COLORS.surface} strokeWidth="2" />
      </svg>

      <HomeCutaway
        left={houseLeft}
        top={houseTop}
        scale={houseScale}
        opacity={houseOpacity}
        connectProgress={range(frame, 35, 240)}
        responseProgress={responseProgress}
        stateOpacity={1 - range(frame, 1200, 1260)}
        showLabels={frame < CUES.visible}
        phoneOnTable={frame >= CUES.respond}
      />

      <PhonePanel
        frame={frame}
        opacity={range(frame, 22, 62) * (1 - range(frame, 270, 325))}
      />

      <UtilityWorld
        frame={frame}
        opacity={utilityOpacity}
        panelProgress={range(frame, 345, 425)}
        enrollProgress={range(frame, 610, 735)}
        eventProgress={range(frame, 735, 825)}
      />

      <VerificationWorld
        frame={frame}
        opacity={verificationOpacity}
        progress={range(frame, 1280, 1490)}
      />

      <PaymentFlow frame={frame} opacity={paymentOpacity} />
      <PhonePanel
        frame={frame}
        payment
        opacity={paymentOpacity * range(frame, 1640, 1685)}
      />

      <NetworkWorld
        frame={frame}
        opacity={networkOpacity}
        columnProgress={range(frame, 2050, 2145)}
      />

      <FlywheelWorld frame={frame} opacity={flywheelOpacity} />

      <Caption from={CUES.connect} to={CUES.visible}>
        Alex connects three devices through one gateway
      </Caption>
      <Caption from={CUES.visible} to={CUES.enroll}>
        His utility can now see what is available
      </Caption>
      <Caption from={CUES.enroll} to={CUES.respond}>
        The utility enrolls his devices automatically
      </Caption>
      <Caption from={CUES.respond} to={CUES.verify}>
        His devices respond while Alex carries on
      </Caption>
      <Caption from={CUES.verify} to={CUES.paid}>
        One verified result reaches both sides
      </Caption>
      <Caption from={CUES.paid} to={CUES.scale}>
        Alex is paid for what his devices delivered
      </Caption>
      <Caption from={CUES.scale} to={CUES.network}>
        The same connection scales across thousands of homes
      </Caption>
      <Caption from={CUES.network} to={CUES.flywheel}>
        The network connects customers, OEMs and utilities
      </Caption>
      <Caption from={CUES.flywheel} to={CUES.close}>
        More connected capacity supports more valuable services
      </Caption>

      <Closing frame={frame} opacity={closeOpacity} />
    </AbsoluteFill>
  );
};

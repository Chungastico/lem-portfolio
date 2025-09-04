"use client";

import Image from "next/image";
import * as React from "react";
import type { CSSProperties } from "react";
import {
  motion,
  useAnimationControls,
  useScroll,
  useMotionValueEvent,
  type Transition,
  type TargetAndTransition,
} from "framer-motion";

// Variables CSS inyectadas al <section>
type HeroCSSVars = CSSProperties &
  Record<
    | "--pf-scale"
    | "--pf-ty"
    | "--pf-tx"
    | "--text-tx"
    | "--name-tx"
    | "--name-ty"
    | "--job-ty"
    | "--border-bg"
    | "--shadow-bg",
    string | number
  >;

// ------------------------------
// CONFIG POR BREAKPOINT
// sm: <640px  | md: 640–1023px | lg: ≥1024px
// ------------------------------
type ViewCfg = {
  PF_SCALE: number;
  PF_TY: string;
  PF_TX: string;
  SHADOW_OPACITY: number;

  NAME_FS: string;
  JOB_FS: string;

  TEXT_TX: string;
  NAME_TX: string;
  NAME_TY: string; // NUEVO: desplazar "Melanie" en Y
  JOB_TY: string;

  BORDER_BG: string;
  SHADOW_BG: string;
};

const CFG: { sm: ViewCfg; md: ViewCfg; lg: ViewCfg } = {
  sm: {
    PF_SCALE: 1,
    PF_TY: "-180px",
    PF_TX: "0px",
    SHADOW_OPACITY: 0.22,

    NAME_FS: "clamp(2.6rem, 6.6vw, 6.2rem)",
    JOB_FS: "clamp(3.2rem, 7.2vw, 6.8rem)",

    TEXT_TX: "10px",
    NAME_TX: "0px",
    NAME_TY: "-50px", // puedes poner "20px" para bajarlo
    JOB_TY: "60px",

    BORDER_BG: "100% 100%",
    SHADOW_BG: "100% 100%",
  },
  md: {
    PF_SCALE: 1.0,
    PF_TY: "-44px",
    PF_TX: "0px",
    SHADOW_OPACITY: 0.22,

    NAME_FS: "clamp(1.2rem, 2.6vw, 2.4rem)",
    JOB_FS: "clamp(1.6rem, 3.6vw, 3.4rem)",

    TEXT_TX: "15px",
    NAME_TX: "0px",
    NAME_TY: "0px",
    JOB_TY: "340px",

    BORDER_BG: "100% 100%",
    SHADOW_BG: "100% 100%",
  },
  lg: {
    PF_SCALE: 1.30,
    PF_TY: "-44px",
    PF_TX: "0px",
    SHADOW_OPACITY: 0.22,

    NAME_FS: "clamp(1.2rem, 2.6vw, 2.4rem)",
    JOB_FS: "clamp(1.6rem, 3.6vw, 3.4rem)",

    TEXT_TX: "-34px",
    NAME_TX: "0px",
    NAME_TY: "0px",
    JOB_TY: "340px",

    BORDER_BG: "100% 100%",
    SHADOW_BG: "100% 100%",
  },
};

function pickBP(width: number): "sm" | "md" | "lg" {
  if (width < 640) return "sm";
  if (width < 1024) return "md";
  return "lg";
}

export default function Hero() {
  const [bp, setBp] = React.useState<"sm" | "md" | "lg">("lg");

  React.useEffect(() => {
    const setFromWindow = () => setBp(pickBP(window.innerWidth));
    setFromWindow();
    window.addEventListener("resize", setFromWindow, { passive: true });
    window.addEventListener("orientationchange", setFromWindow, { passive: true });
    return () => {
      window.removeEventListener("resize", setFromWindow);
      window.removeEventListener("orientationchange", setFromWindow);
    };
  }, []);

  const {
    PF_SCALE,
    PF_TY,
    PF_TX,
    SHADOW_OPACITY,
    NAME_FS,
    JOB_FS,
    TEXT_TX,
    NAME_TX,
    NAME_TY,
    JOB_TY,
    BORDER_BG,
    SHADOW_BG,
  } = CFG[bp];

  const cssVars: HeroCSSVars = {
    "--pf-scale": PF_SCALE,
    "--pf-ty": PF_TY,
    "--pf-tx": PF_TX,
    "--text-tx": TEXT_TX,
    "--name-tx": NAME_TX,
    "--name-ty": NAME_TY,
    "--job-ty": JOB_TY,
    "--border-bg": BORDER_BG,
    "--shadow-bg": SHADOW_BG,
  };

  // Animación direccional con scroll
  const controls = useAnimationControls();
  const { scrollY } = useScroll();

  const MD_RIGHT = 120;
  const MD_LEFT = -100;

  const isMd = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px)").matches;

  const pctToPx = (p: number) =>
    typeof window !== "undefined" ? Math.round(window.innerWidth * p) : 0;

  const TRANSITION: Transition = { type: "spring", stiffness: 120, damping: 18, mass: 0.6 };
  let last = typeof window !== "undefined" ? window.scrollY : 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const dirDown = latest > last;
    last = latest;

    let xTarget: number;
    if (isMd()) {
      xTarget = dirDown ? MD_LEFT : MD_RIGHT;
    } else {
      const RIGHT_SM = pctToPx(0.06);
      const LEFT_SM = pctToPx(-0.06);
      xTarget = dirDown ? LEFT_SM : RIGHT_SM;
    }
    const target: TargetAndTransition = { x: xTarget, transition: TRANSITION };
    controls.start(target);
  });

  return (
    <section
      id="home"
      className="relative isolate overflow-y-hidden overflow-x-clip
                 bg-verde-oscuro text-cafe-claro min-h-[calc(100vh-var(--navbar-h,64px))]"
      style={cssVars}
    >
      {/* Waves */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-24 -bottom-28 -z-20 pointer-events-none select-none bg-no-repeat"
        style={{
          backgroundImage: "url('/hero/bg-waves.svg')",
          backgroundSize: "auto 115%",
          backgroundPosition: "28% 0%",
        }}
      />

      {/* Shadow */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 pointer-events-none select-none transform-gpu origin-center
                   scale-[var(--pf-scale)] translate-x-[var(--pf-tx)] translate-y-[var(--pf-ty)]"
        style={{
          backgroundImage: "url('/hero/Shadow_Portfolio.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "var(--shadow-bg)",
          opacity: SHADOW_OPACITY,
        }}
      />

      {/* Foto */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
        initial={false}
        animate={controls}
      >
        <Image
          src="/Mel.png"
          alt="Retrato de Melanie Menéndez"
          width={800}
          height={980}
          priority
          className="
            absolute right-0
            bottom-[-8px] md:bottom-[-30px]
            h-auto w-[min(95vw,820px)] md:w-[min(65vw,900px)]
            origin-bottom-right scale-[1.15] md:scale-[0.85]
            drop-shadow-[0_20px_56px_rgba(0,0,0,.28)]
          "
        />
      </motion.div>

      {/* Textos */}
      <div className="relative z-20 mx-auto h-[calc(100vh-var(--navbar-h,64px))] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          <div className="relative flex h-full flex-col justify-between py-16 md:py-20">
            <div className="will-change-transform transform-gpu translate-x-[var(--text-tx)]">
              {/* Melanie con desplazamiento X e Y propios */}
              <p
                className="relative z-40 font-body font-bold will-change-transform transform-gpu translate-x-[var(--name-tx)] translate-y-[var(--name-ty)]"
                style={{ fontSize: NAME_FS }}
              >
                Melanie Menéndez
              </p>

              <p
                className="relative z-20 font-body font-semibold tracking-wide pb-6 md:pb-8
                           will-change-transform transform-gpu translate-y-[var(--job-ty)]"
                style={{ fontSize: JOB_FS }}
              >
                Designer
              </p>
            </div>
          </div>

          <div />
        </div>
      </div>

      {/* Border */}
      <div
        aria-hidden
        className="absolute inset-0 z-30 pointer-events-none select-none transform-gpu origin-center
                   scale-[var(--pf-scale)] translate-x-[var(--pf-tx)] translate-y-[var(--pf-ty)]"
        style={{
          backgroundImage: "url('/hero/Border_Portfolio.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "var(--border-bg)",
        }}
      />
    </section>
  );
}

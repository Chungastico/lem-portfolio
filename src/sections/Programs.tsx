"use client";

import Image from "next/image";
import * as React from "react";
import type { CSSProperties } from "react";

/* ─────────────────────────────
   Variables CSS del section
   ───────────────────────────── */
type ProgramsCSSVars = CSSProperties &
  Record<
    | "--title-fs"      // tamaño del título PROGRAMS
    | "--icon-size"     // tamaño de cada logo
    | "--gap-x"         // gap horizontal del grid
    | "--gap-y"         // gap vertical del grid
    | "--wave-pos"      // object-position del wave.svg
    | "--photo-left"    // offsets/escala de la foto izquierda
    | "--photo-bottom"
    | "--photo-scale"
    | "--photo-w",      // ancho render de la foto (px)
    string | number
  >;

/* ─────────────────────────────
   Iconos de programas (usa --icon-size)
   ───────────────────────────── */
type ProgramIconProps = {
  src: string;
  alt: string;
  shape?: "rounded" | "circle";
};
function ProgramIcon({ src, alt, shape = "rounded" }: ProgramIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={160}
      height={160}
      priority
      style={{ width: "var(--icon-size)", height: "var(--icon-size)" }}
      className={shape === "circle" ? "rounded-full" : "rounded-none"}
    />
  );
}

/* ─────────────────────────────
   Foto posicionada (lee variables CSS)
   ───────────────────────────── */
function PositionedPhoto({ src }: { src: string }) {
  return (
    <div
      aria-hidden
      className="absolute z-20 pointer-events-none select-none"
      style={{
        left: "var(--photo-left)",
        bottom: "var(--photo-bottom)",
        transform: "scale(var(--photo-scale))",
        transformOrigin: "bottom left",
      }}
    >
      <Image
        src={src}
        alt=""
        width={800}
        height={1200}
        priority
        style={{ width: "var(--photo-w)", height: "auto" }}
        className="drop-shadow-[0_20px_56px_rgba(0,0,0,.28)]"
      />
    </div>
  );
}

/* ─────────────────────────────
   Config por breakpoint (sm/md/lg)
   Mantiene diseño desktop actual.
   Sólo parametriza.
   ───────────────────────────── */
type ViewCfg = {
  TITLE_FS: string;
  ICON_SIZE: string;
  GAP_X: string;
  GAP_Y: string;
  WAVE_POS: string;

  PHOTO_LEFT: string;   // px (con signo)
  PHOTO_BOTTOM: string; // px (con signo)
  PHOTO_SCALE: number;
  PHOTO_W: string;      // px
};

// sm <640 | md 640–1023 | lg ≥1024
const CFG: { sm: ViewCfg; md: ViewCfg; lg: ViewCfg } = {
  sm: {
    TITLE_FS: "4.5rem",   // ~text-7xl
    ICON_SIZE: "6rem",    // 96px (w-24 h-24)
    GAP_X: "2.5rem",
    GAP_Y: "18rem",
    WAVE_POS: "top",

    PHOTO_LEFT: "-20px",
    PHOTO_BOTTOM: "-80px",
    PHOTO_SCALE: 0.9,
    PHOTO_W: "620px",
  },
  md: {
    TITLE_FS: "6rem",     // ~text-8xl
    ICON_SIZE: "8rem",    // 128px (md:w-32 md:h-32)
    GAP_X: "2.5rem",
    GAP_Y: "3.5rem",
    WAVE_POS: "top",

    PHOTO_LEFT: "-80px",
    PHOTO_BOTTOM: "-80px",
    PHOTO_SCALE: 0.9,
    PHOTO_W: "680px",
  },
  lg: {
    TITLE_FS: "8rem",     // ~text-9xl
    ICON_SIZE: "9rem",    // 144px (lg:w-36 lg:h-36)
    GAP_X: "2.5rem",
    GAP_Y: "4rem",
    WAVE_POS: "top",

    PHOTO_LEFT: "-80px",
    PHOTO_BOTTOM: "-80px",
    PHOTO_SCALE: 0.9,
    PHOTO_W: "740px",
  },
};

/* Helper breakpoint */
function pickBP(w: number): "sm" | "md" | "lg" {
  if (w < 640) return "sm";
  if (w < 1024) return "md";
  return "lg";
}

export default function Programs() {
  const [bp, setBp] = React.useState<"sm" | "md" | "lg">("lg");

  React.useEffect(() => {
    const update = () => setBp(pickBP(window.innerWidth));
    update();
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("orientationchange", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const {
    TITLE_FS, ICON_SIZE, GAP_X, GAP_Y, WAVE_POS,
    PHOTO_LEFT, PHOTO_BOTTOM, PHOTO_SCALE, PHOTO_W,
  } = CFG[bp];

  const cssVars: ProgramsCSSVars = {
    "--title-fs": TITLE_FS,
    "--icon-size": ICON_SIZE,
    "--gap-x": GAP_X,
    "--gap-y": GAP_Y,
    "--wave-pos": WAVE_POS,
    "--photo-left": PHOTO_LEFT,
    "--photo-bottom": PHOTO_BOTTOM,
    "--photo-scale": PHOTO_SCALE,
    "--photo-w": PHOTO_W,
  };

  return (
    <section
      id="programs"
      className="relative isolate h-screen py-16 md:py-24 text-cafe-claro overflow-hidden"
      aria-labelledby="programs-heading"
      style={cssVars}
    >
      {/* Fondo wave: mantiene centro, recorta laterales si hace falta */}
      <Image
        src="/programs/wave.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "var(--wave-pos)" }}
        className="pointer-events-none select-none -z-10"
      />

      {/* Foto izquierda controlada por variables */}
      <PositionedPhoto src="/programs/MelPrograms.png" />

      {/* Lado derecho */}
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 h-full">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          <div />

          <div className="flex flex-col justify-center items-start md:-translate-x-8 lg:-translate-x-16">
            {/* Título controlado por --title-fs */}
            <h2
              id="programs-heading"
              className="heading-condensed leading-none tracking-wide text-left"
              style={{ fontSize: "var(--title-fs)" }}
            >
              PROGRAMS
            </h2>

            {/* Grid de logos con gaps y tamaño variables */}
            <div
              className="mt-10 md:mt-14 lg:mt-16 grid grid-cols-3 place-items-center"
              style={{
                columnGap: "var(--gap-x)",
                rowGap: "var(--gap-y)",
              }}
            >
              <ProgramIcon src="/logo/ai.svg" alt="Adobe Illustrator" />
              <ProgramIcon src="/logo/ps.svg" alt="Adobe Photoshop" />
              <ProgramIcon src="/logo/canva.svg" alt="Canva" shape="circle" />
              <ProgramIcon src="/logo/capcut.svg" alt="CapCut" />
              <ProgramIcon src="/logo/lr.svg" alt="Adobe Lightroom" />
              <ProgramIcon src="/logo/figma.svg" alt="Figma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

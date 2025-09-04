"use client";

import Image from "next/image";
import * as React from "react";
import type { CSSProperties } from "react";

/* ─────────────────────────────
   Variables CSS del section
   ───────────────────────────── */
type ProgramsCSSVars = CSSProperties &
  Record<
    | "--title-fs"        // tamaño del título PROGRAMS
    | "--title-ty"        // desplazamiento vertical del título (px)
    | "--icon-size"       // tamaño de cada logo
    | "--gap-x"           // gap horizontal del grid
    | "--gap-y"           // gap vertical del grid
    | "--wave-pos"        // object-position del wave.svg
    | "--photo-left"      // offsets/escala de la foto izquierda
    | "--photo-bottom"
    | "--photo-scale"
    | "--photo-w"         // ancho render de la foto (px)
    | "--icon-col1-ty"    // desplazamiento vertical columna 1
    | "--icon-col2-ty"    // desplazamiento vertical columna 2
    | "--icon-col3-ty",   // desplazamiento vertical columna 3
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
   ───────────────────────────── */
type ViewCfg = {
  TITLE_FS: string;
  TITLE_TY: string;   // px
  ICON_SIZE: string;
  GAP_X: string;
  GAP_Y: string;
  WAVE_POS: string;

  PHOTO_LEFT: string;   // px (con signo)
  PHOTO_BOTTOM: string; // px (con signo)
  PHOTO_SCALE: number;
  PHOTO_W: string;      // px

  ICON_COL1_TY: string; // px
  ICON_COL2_TY: string; // px
  ICON_COL3_TY: string; // px
};

// sm <640 | md 640–1023 | lg ≥1024
const CFG: { sm: ViewCfg; md: ViewCfg; lg: ViewCfg } = {
  sm: {
    TITLE_FS: "6rem",
    TITLE_TY: "-200px", // sube el título en móvil
    ICON_SIZE: "6rem",
    GAP_X: "2.5rem",
    GAP_Y: "0rem",
    WAVE_POS: "top",

    PHOTO_LEFT: "0px",
    PHOTO_BOTTOM: "-80px",
    PHOTO_SCALE: 0.8,
    PHOTO_W: "620px",

    ICON_COL1_TY: "-240px",
    ICON_COL2_TY: "-240px",
    ICON_COL3_TY: "-240px",
  },
  md: {
    TITLE_FS: "6rem",
    TITLE_TY: "0px",
    ICON_SIZE: "8rem",
    GAP_X: "2.5rem",
    GAP_Y: "3.5rem",
    WAVE_POS: "top",

    PHOTO_LEFT: "-80px",
    PHOTO_BOTTOM: "-80px",
    PHOTO_SCALE: 0.9,
    PHOTO_W: "680px",

    ICON_COL1_TY: "0px",
    ICON_COL2_TY: "0px",
    ICON_COL3_TY: "0px",
  },
  lg: {
    TITLE_FS: "8rem",
    TITLE_TY: "0px",
    ICON_SIZE: "9rem",
    GAP_X: "2.5rem",
    GAP_Y: "4rem",
    WAVE_POS: "top",

    PHOTO_LEFT: "-80px",
    PHOTO_BOTTOM: "-80px",
    PHOTO_SCALE: 0.9,
    PHOTO_W: "740px",

    ICON_COL1_TY: "0px",
    ICON_COL2_TY: "0px",
    ICON_COL3_TY: "0px",
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
    TITLE_FS, TITLE_TY, ICON_SIZE, GAP_X, GAP_Y, WAVE_POS,
    PHOTO_LEFT, PHOTO_BOTTOM, PHOTO_SCALE, PHOTO_W,
    ICON_COL1_TY, ICON_COL2_TY, ICON_COL3_TY,
  } = CFG[bp];

  const cssVars: ProgramsCSSVars = {
    "--title-fs": TITLE_FS,
    "--title-ty": TITLE_TY,
    "--icon-size": ICON_SIZE,
    "--gap-x": GAP_X,
    "--gap-y": GAP_Y,
    "--wave-pos": WAVE_POS,
    "--photo-left": PHOTO_LEFT,
    "--photo-bottom": PHOTO_BOTTOM,
    "--photo-scale": PHOTO_SCALE,
    "--photo-w": PHOTO_W,
    "--icon-col1-ty": ICON_COL1_TY,
    "--icon-col2-ty": ICON_COL2_TY,
    "--icon-col3-ty": ICON_COL3_TY,
  };

  return (
    <section
      id="programs"
      className="relative isolate h-screen py-16 md:py-24 text-cafe-claro overflow-hidden"
      aria-labelledby="programs-heading"
      style={cssVars}
    >
      {/* Fondo wave */}
      <Image
        src="/programs/wave.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "var(--wave-pos)" }}
        className="pointer-events-none select-none -z-10"
      />

      {/* Foto izquierda */}
      <PositionedPhoto src="/programs/MelPrograms.png" />

      {/* Lado derecho */}
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 h-full">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          <div />

          <div className="flex flex-col justify-center items-start md:-translate-x-8 lg:-translate-x-16">
            {/* Título controlado por --title-fs y --title-ty */}
            <h2
              id="programs-heading"
              className="heading-condensed leading-none tracking-wide text-left will-change-transform"
              style={{
                fontSize: "var(--title-fs)",
                transform: "translateY(var(--title-ty))",
              }}
            >
              PROGRAMS
            </h2>

            {/* Columnas parametrizadas con offsets independientes */}
            <div
              className="mt-10 md:mt-14 lg:mt-16 grid grid-cols-3"
              style={{ columnGap: "var(--gap-x)", rowGap: "var(--gap-y)" }}
            >
              {/* Columna 1 */}
              <div
                className="flex flex-col items-center"
                style={{ transform: "translateY(var(--icon-col1-ty))" }}
              >
                <ProgramIcon src="/logo/ai.svg" alt="Adobe Illustrator" />
                <div className="h-12" />
                <ProgramIcon src="/logo/capcut.svg" alt="CapCut" />
              </div>

              {/* Columna 2 */}
              <div
                className="flex flex-col items-center"
                style={{ transform: "translateY(var(--icon-col2-ty))" }}
              >
                <ProgramIcon src="/logo/ps.svg" alt="Adobe Photoshop" />
                <div className="h-12" />
                <ProgramIcon src="/logo/lr.svg" alt="Adobe Lightroom" />
              </div>

              {/* Columna 3 */}
              <div
                className="flex flex-col items-center"
                style={{ transform: "translateY(var(--icon-col3-ty))" }}
              >
                <ProgramIcon src="/logo/canva.svg" alt="Canva" shape="circle" />
                <div className="h-12" />
                <ProgramIcon src="/logo/figma.svg" alt="Figma" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

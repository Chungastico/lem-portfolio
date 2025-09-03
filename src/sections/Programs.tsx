"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

/* Offsets y escala en px */
type ImgVars = CSSProperties & Record<
  "--img-top" | "--img-right" | "--img-bottom" | "--img-left" | "--img-scale",
  string | number
>;

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
      className={[
        "w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36",
        shape === "circle" ? "rounded-full" : "rounded-none",
      ].join(" ")}
      priority
    />
  );
}

function PositionedPhoto({
  src,
  vars,
  width = 620,
  height = 900,
}: {
  src: string;
  vars: { top?: number; right?: number; bottom?: number; left?: number; scale?: number };
  width?: number;
  height?: number;
}) {
  const css: ImgVars = {
    "--img-top": vars.top !== undefined ? `${vars.top}px` : "auto",
    "--img-right": vars.right !== undefined ? `${vars.right}px` : "auto",
    "--img-bottom": vars.bottom !== undefined ? `${vars.bottom}px` : "auto",
    "--img-left": vars.left !== undefined ? `${vars.left}px` : "auto",
    "--img-scale": vars.scale ?? 1,
  };

  return (
    <div
      aria-hidden
      className="absolute z-20 pointer-events-none select-none"
      style={{
        ...css,
        top: "var(--img-top)",
        right: "var(--img-right)",
        bottom: "var(--img-bottom)",
        left: "var(--img-left)",
        transform: "scale(var(--img-scale))",
        transformOrigin: "bottom left",
      }}
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        priority
        className="w-[620px] md:w-[680px] lg:w-[740px] h-auto drop-shadow-[0_20px_56px_rgba(0,0,0,.28)]"
      />
    </div>
  );
}

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative isolate h-screen py-16 md:py-24 text-cafe-claro overflow-hidden"
      aria-labelledby="programs-heading"
    >
      {/* Fondo wave */}
      <Image
        src="/programs/wave.svg"
        alt=""
        fill
        priority
        className="object-cover object-top pointer-events-none select-none -z-10"
        sizes="100vw"
      />

      {/* Foto izquierda */}
      <PositionedPhoto
        src="/programs/MelPrograms.png"
        vars={{ left: -80, bottom: -80, scale: 0.9 }}
      />

      {/* Lado derecho */}
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 h-full">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          <div />

          <div className="flex flex-col justify-center items-start md:-translate-x-8 lg:-translate-x-16">
            {/* Título más grande que los logos */}
            <h2
              id="programs-heading"
              className="
                heading-condensed
                text-7xl md:text-8xl lg:text-9xl
                leading-none tracking-wide
                text-left
              "
            >
              PROGRAMS
            </h2>

            {/* Logos más abajo */}
            <div
              className="
                mt-10 md:mt-14 lg:mt-16
                grid grid-cols-3 gap-x-10 gap-y-12
                place-items-center
              "
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

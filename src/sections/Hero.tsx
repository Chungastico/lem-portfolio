import Image from "next/image";
import type { CSSProperties } from "react";

export default function Hero() {
  // ⚙️ Ajustes rápidos
  const PF_SCALE = 1.30;
  const PF_TY = "-50px";
  const PF_TX = "0px";
  const SHADOW_OPACITY = 0.22;

  // Tamaños de texto
  const NAME_FS = "clamp(1.2rem, 2.6vw, 2.0rem)";
  const JOB_FS = "clamp(1.6rem, 3.6vw, 2.8rem)";

  // Posicionamiento de los textos
  const TEXT_TX = "-34px";
  const JOB_TY = "28px";

  // ✅ Variables CSS tipadas (sin any)
  const cssVars: CSSProperties = {
    ["--pf-scale" as any]: PF_SCALE, // <- si aquí te marca, usa la versión de abajo
    ["--pf-ty" as any]: PF_TY,
    ["--pf-tx" as any]: PF_TX,
    ["--text-tx" as any]: TEXT_TX,
    ["--job-ty" as any]: JOB_TY,
  };

  // --- Si tu TS/React types sí aceptan index signature, usa ESTA versión mejor:
  // const cssVars: CSSProperties = {
  //   "--pf-scale": PF_SCALE,
  //   "--pf-ty": PF_TY,
  //   "--pf-tx": PF_TX,
  //   "--text-tx": TEXT_TX,
  //   "--job-ty": JOB_TY,
  // };

  return (
    <section
      id="home"
      className="relative isolate overflow-y-hidden bg-verde-oscuro text-cafe-claro min-h-[calc(100svh-var(--navbar-h))]"
      style={cssVars}
    >
      {/* 0) Waves al fondo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[url('/hero/bg-waves.svg')] bg-no-repeat bg-cover bg-[position:28%_2%] pointer-events-none select-none"
      />

      {/* 1) Shadow PORTFOLIO */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-[url('/hero/Shadow_Portfolio.svg')] bg-no-repeat bg-center bg-[length:100%_100%] pointer-events-none select-none transform-gpu origin-center scale-[var(--pf-scale)] translate-x-[var(--pf-tx)] translate-y-[var(--pf-ty)]"
        style={{ opacity: SHADOW_OPACITY }}
      />

      {/* FOTO (anclada al section) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 overflow-x-visible">
        <Image
          src="/Mel.png"
          alt="Retrato de Melanie Menéndez"
          width={800}
          height={980}
          priority
          className="
            absolute right-[clamp(12px,2vw,24px)]
            bottom-[-8px] md:bottom-[-30px] md:right-[-80px]
            h-auto w-[min(95vw,820px)] md:w-[min(65vw,900px)]
            origin-bottom-right scale-[1.15] md:scale-[0.9]
            drop-shadow-[0_20px_56px_rgba(0,0,0,.28)]
          "
        />
      </div>

      {/* CONTENIDO (textos) */}
      <div className="relative z-20 mx-auto h-[calc(100svh-var(--navbar-h))] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          <div className="relative flex h-full flex-col justify-between py-16 md:py-20">
            {/* Nombre */}
            <p
              className="relative z-40 font-body font-bold will-change-transform transform-gpu translate-x-[var(--text-tx)]"
              style={{ fontSize: NAME_FS }}
            >
              Melanie Menéndez
            </p>

            {/* Job (abajo) */}
            <p
              className="relative z-20 font-body font-semibold tracking-wide pb-6 md:pb-8 will-change-transform transform-gpu translate-x-[var(--text-tx)] translate-y-[var(--job-ty)]"
              style={{ fontSize: JOB_FS }}
            >
              Graphic Designer
            </p>
          </div>
          <div />
        </div>
      </div>

      {/* 2) Border PORTFOLIO */}
      <div
        aria-hidden
        className="absolute inset-0 z-30 bg-[url('/hero/Border_Portfolio.svg')] bg-no-repeat bg-center bg-[length:100%_100%] pointer-events-none select-none transform-gpu origin-center scale-[var(--pf-scale)] translate-x-[var(--pf-tx)] translate-y-[var(--pf-ty)]"
      />

      <div className="absolute top-0 left-0 w-full" style={{ height: "var(--navbar-h)" }} />
    </section>
  );
}

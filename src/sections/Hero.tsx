import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative isolate overflow-hidden
        bg-[--color-verde-oscuro]
        text-[--color-cafe-claro]
        min-h-[calc(100svh-var(--navbar-h))]
      "
    >
      {/* Fondo ondas */}
      <div
        aria-hidden
        className="
          absolute inset-0 -z-10
          bg-[url('/hero/bg-waves.svg')] bg-no-repeat bg-cover
          bg-[position:28%_2%]
          pointer-events-none select-none
        "
      />

      {/* PORTFOLIO (delante de la foto, debajo del nombre y encima del job title) */}
      <svg
        viewBox="0 0 1440 800"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 hidden md:block"
      >
        <text
          x="56"
          y="420"
          style={{ fontFamily: 'League Gothic, var(--font-heading)' }}
          fontSize="350"
          letterSpacing="8"
          fill="var(--color-cafe-claro)"
          fillOpacity="0.18"
          stroke="var(--color-cafe-claro)"
          strokeOpacity="0.60"
          strokeWidth="8"
        >
          PORTFOLIO
        </text>
      </svg>

      {/* Contenido */}
      <div className="relative z-20 mx-auto h-full min-h-[calc(100svh-var(--navbar-h))] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          {/* Columna izquierda */}
          <div className="relative flex h-full flex-col justify-between py-16 md:py-20">
            {/* 1) Nombre ENCIMA del SVG */}
            <p className="relative z-40 font-body text-cream text-[clamp(1.05rem,2.2vw,1.6rem)]">
              Melanie Menéndez
            </p>

            {/* 3) Job title DEBAJO del SVG */}
            <p className="relative z-20 font-body font-semibold text-cream tracking-wide
                           text-[clamp(1.5rem,3.4vw,2.5rem)] pb-8 md:pb-12">
              Graphic Designer
            </p>
          </div>

          {/* Columna derecha: foto (igual que tenías) */}
          <div className="relative h-full">
            <Image
              src="/Mel.png"
              alt="Retrato de Melanie Menéndez"
              width={620}
              height={760}
              priority
              className="
                absolute right-[clamp(12px,3.5vw,32px)] bottom-[-8px] md:bottom-[-85px]
                z-20 h-auto
                w-[min(76vw,560px)]
                md:w-[min(47vw,600px)]
                drop-shadow-[0_18px_48px_rgba(0,0,0,.24)]
              "
            />
          </div>
        </div>
      </div>

      {/* separador del navbar (si es sticky/fixed) */}
      <div className="absolute top-0 left-0 w-full" style={{ height: 'var(--navbar-h)' }} />
    </section>
  );
}

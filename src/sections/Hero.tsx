import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative isolate overflow-hidden
        text-[--color-cafe-claro]
        bg-[--color-verde-oscuro]
        min-h-[calc(100svh-var(--navbar-h))]
      "
    >
      {/* Fondo ondas */}
      <div
        aria-hidden
        className="
          absolute inset-0 -z-10
          bg-[url('/hero/bg-waves.svg')] bg-no-repeat bg-cover
          bg-[position:32%_0%]
          pointer-events-none select-none
        "
      />

      {/* PORTFOLIO (trazo + relleno con transparencia) */}
      <svg
        viewBox="0 0 1440 800"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 hidden md:block"
      >
        <text
          x="60"
          y="450"
          style={{ fontFamily: 'League Gothic, var(--font-heading)' }}
          fontSize="350"
          letterSpacing="8"
          fill="var(--color-cafe-claro)"
          fillOpacity="0.18"
          stroke="var(--color-cafe-claro)"
          strokeOpacity="0.65"
          strokeWidth="8"
        >
          PORTFOLIO
        </text>
      </svg>

      {/* Contenido */}
      <div className="relative z-20 mx-auto h-full min-h-[calc(100svh-var(--navbar-h))] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          {/* Columna izquierda */}
          <div className="flex h-full flex-col justify-between py-16 md:py-20">
            {/* 1) Melanie Menéndez (café claro) */}
            <p className="font-body text-[clamp(1.05rem,2.2vw,1.6rem)] text-[--color-cafe-claro]">
              Melanie Menéndez
            </p>

            {/* 3) Graphic Designer (café claro, abajo) */}
            <p className="font-body font-semibold text-[clamp(1.4rem,3.1vw,2.4rem)] tracking-wide pb-8 md:pb-12 text-[--color-cafe-claro]">
              Graphic Designer
            </p>
          </div>

          {/* Columna derecha: foto más abajo */}
          <div className="relative h-full">
            <Image
              src="/Mel.png"
              alt="Retrato de Melanie Menéndez"
              width={620}
              height={760}
              priority
              className="
                absolute -bottom-3 md:-bottom-85 
                right-[clamp(12px,3.5vw,32px)] z-20
                h-auto w-[min(72vw,520px)] md:w-[min(42vw,520px)]
                drop-shadow-[0_10px_34px_rgba(0,0,0,.28)]
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

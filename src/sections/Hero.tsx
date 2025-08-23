"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import {
    motion,
    useAnimationControls,
    useScroll,
    useMotionValueEvent,
    type Transition,
    type TargetAndTransition,
} from "framer-motion";

// Tipamos las variables CSS que vamos a inyectar
type HeroCSSVars = CSSProperties & Record<
    "--pf-scale" | "--pf-ty" | "--pf-tx" | "--text-tx" | "--job-ty",
    string | number
>;

export default function Hero() {
    // ⚙️ Ajustes rápidos (diseño)
    const PF_SCALE = 1.30;        // tamaño del PORTFOLIO (Shadow + Border)
    const PF_TY = "-25px";        // mover PORTFOLIO vertical
    const PF_TX = "0px";          // mover PORTFOLIO horizontal (0 = centrado)
    const SHADOW_OPACITY = 0.22;  // 0..1 → más transparente = menor valor

    // Tamaños de texto
    const NAME_FS = "clamp(1.2rem, 2.6vw, 2.4rem)";
    const JOB_FS  = "clamp(1.6rem, 3.6vw, 3.4rem)";

    // Posicionamiento de los textos
    const TEXT_TX = "22px";       // ⬅️➡️ mover bloque de textos (negativo = izquierda)
    const JOB_TY  = "320px";      // ⬇️ mover “Graphic Designer” (sin reflow)

    // ✅ Variables CSS tipadas (sin any)
    const cssVars: HeroCSSVars = {
        "--pf-scale": PF_SCALE,
        "--pf-ty": PF_TY,
        "--pf-tx": PF_TX,
        "--text-tx": TEXT_TX,
        "--job-ty": JOB_TY,
    };

    // ─────────────────────────────────────────────────────────────────────────────
    // 🎬 ANIMACIÓN DIRECCIONAL CON SCROLL (invertida: bajar ⇒ izquierda, subir ⇒ derecha)
    const controls = useAnimationControls();
    const { scrollY } = useScroll();

    // Destinos en desktop (px)
    const MD_RIGHT = 120;   // subir  → derecha
    const MD_LEFT  = -100;  // bajar  → izquierda

    // Helpers
    const isMd = () =>
        typeof window !== "undefined" &&
        window.matchMedia("(min-width: 768px)").matches;

    const pctToPx = (p: number) =>
        typeof window !== "undefined" ? Math.round(window.innerWidth * p) : 0;

    // Spring suave (tipado correcto)
    const TRANSITION: Transition = { type: "spring", stiffness: 120, damping: 18, mass: 0.6 };

    // Detectar dirección de scroll
    let last = typeof window !== "undefined" ? window.scrollY : 0;

    useMotionValueEvent(scrollY, "change", (latest) => {
        const dirDown = latest > last;  // true si baja
        last = latest;

        let xTarget: number;

        if (isMd()) {
            // ⬇️ bajar => izquierda | ⬆️ subir => derecha (INVERTIDO)
            xTarget = dirDown ? MD_LEFT : MD_RIGHT;
        } else {
            // Mobile: usa ~6% del viewport convertidos a px
            const RIGHT_SM = pctToPx(0.06);   // subir → derecha
            const LEFT_SM  = pctToPx(-0.06);  // bajar → izquierda
            xTarget = dirDown ? LEFT_SM : RIGHT_SM;
        }

        const target: TargetAndTransition = { x: xTarget, transition: TRANSITION };
        controls.start(target);
    });
    // ─────────────────────────────────────────────────────────────────────────────

    return (
        <section
            id="home"
            className="relative isolate overflow-y-hidden overflow-x-clip
                       bg-verde-oscuro text-cafe-claro min-h-[calc(100svh-var(--navbar-h))]"
            style={cssVars}
        >
            {/* 0) Waves al fondo (bleed para evitar corte) */}
            <div
                aria-hidden
                className="
                    absolute inset-x-0 -top-24 -bottom-28
                    -z-20 pointer-events-none select-none
                    bg-[url('/hero/bg-waves.svg')]
                    bg-no-repeat
                    bg-[length:115%_115%]
                    bg-[position:28%_0%]
                "
            />

            {/* 1) Shadow PORTFOLIO */}
            <div
                aria-hidden
                className="absolute inset-0 z-10 bg-[url('/hero/Shadow_Portfolio.svg')] bg-no-repeat bg-center bg-[length:100%_100%]
                           pointer-events-none select-none transform-gpu origin-center
                           scale-[var(--pf-scale)] translate-x-[var(--pf-tx)] translate-y-[var(--pf-ty)]"
                style={{ opacity: SHADOW_OPACITY }}
            />

            {/* FOTO: motion.div mantiene pos inicial (x:0) y anima según dirección */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
                initial={{ x: 0 }}
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
                        origin-bottom-right scale-[1.15] md:scale-[0.75]
                        drop-shadow-[0_20px_56px_rgba(0,0,0,.28)]
                    "
                />
            </motion.div>

            {/* CONTENIDO (textos) */}
            <div className="relative z-20 mx-auto h-[calc(100svh-var(--navbar-h))] max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid h-full grid-cols-1 md:grid-cols-2">
                    <div className="relative flex h-full flex-col justify-between py-16 md:py-20">
                        <div className="will-change-transform transform-gpu translate-x-[var(--text-tx)]">
                            <p className="relative z-40 font-body font-bold" style={{ fontSize: NAME_FS }}>
                                Melanie Menéndez
                            </p>

                            <p
                                className="relative z-20 font-body font-semibold tracking-wide pb-6 md:pb-8
                                           will-change-transform transform-gpu translate-y-[var(--job-ty)]"
                                style={{ fontSize: JOB_FS }}
                            >
                                Graphic Designer
                            </p>
                        </div>
                    </div>

                    <div />
                </div>
            </div>

            {/* 2) Border PORTFOLIO (encima de la foto) */}
            <div
                aria-hidden
                className="absolute inset-0 z-30 bg-[url('/hero/Border_Portfolio.svg')] bg-no-repeat bg-center bg-[length:100%_100%]
                           pointer-events-none select-none transform-gpu origin-center
                           scale-[var(--pf-scale)] translate-x-[var(--pf-tx)] translate-y-[var(--pf-ty)]"
            />

            <div className="absolute top-0 left-0 w-full" style={{ height: "var(--navbar-h)" }} />
        </section>
    );
}

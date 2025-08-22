"use client";
import { motion } from "framer-motion";

export default function AboutMeLine() {
    const items = Array.from({ length: 10 }, () => "About me");
    const doubled = [...items, ...items]; // duplicamos para loop continuo

    return (
        <section className="relative overflow-hidden bg-cafe-claro py-2">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }} // mueve solo la mitad (porque duplicamos)
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                }}
            >
                {doubled.map((text, i) => (
                    <span
                        key={i}
                        className="mx-8 text-xl font-bold text-verde-oscuro"
                    >
                        {text}
                    </span>
                ))}
            </motion.div>
        </section>
    );
}

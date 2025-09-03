"use client";
import { motion } from "framer-motion";

type Props = {
    text: string; // palabra a repetir
};

export default function AboutMeLine({ text }: Props) {
    const items = Array.from({ length: 10 }, () => text);
    const doubled = [...items, ...items]; // duplicamos para loop continuo

    return (
        <section className="relative overflow-hidden bg-cafe-claro py-2">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                }}
            >
                {doubled.map((word, i) => (
                    <span
                        key={i}
                        className="mx-4 text-3xl font-bold text-verde-oscuro font-body"
                    >
                        {word}
                    </span>
                ))}
            </motion.div>
        </section>
    );
}

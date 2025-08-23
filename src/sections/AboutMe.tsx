// app/(site)/about/AboutMeSection.tsx
// Indentación: 4 espacios

import React from "react";
import { getAboutMeData } from "@/lib/aboutMe";
import type { EducationItem, ExperienceItem } from "@/data/AboutMe";

export default async function AboutMeSection() {
    const { education, experience, skills, achievements } = await getAboutMeData();

    return (
        <section
            id="about"
            className="
                relative isolate
                min-h-[80svh]
                py-16 md:py-24
                text-[#ffeecf]
                overflow-hidden
            "
            aria-labelledby="about-heading"
        >
            {/* Fondo sólido + waves.svg */}
            <div
                aria-hidden
                className="absolute inset-0"
                style={{
                    backgroundColor: "#578685",
                    backgroundImage: "url('/about_me/waves.svg')", // public/about_me/waves.svg
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div aria-hidden className="absolute inset-0 bg-[#002b2b]/20 mix-blend-multiply" />

            <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
                <h2 id="about-heading" className="sr-only">
                    About Me
                </h2>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
                    {/* Columna izquierda */}
                    <div className="space-y-12">
                        <SectionBlock title="EDUCATION">
                            <EducationList items={education} />
                        </SectionBlock>

                        <SectionBlock title="EXPERIENCE">
                            <ExperienceList items={experience} />
                        </SectionBlock>
                    </div>

                    {/* Columna derecha */}
                    <div className="space-y-12">
                        <SectionBlock title="SKILLS">
                            <ul className="space-y-2 text-sm/6 opacity-95">
                                {skills.map((s, idx) => (
                                    <li key={idx} className="flex gap-2">
                                        <span
                                            className="mt-[7px] h-[6px] w-[6px] flex-none rounded-full"
                                            style={{ backgroundColor: "#a4b3a4" }}
                                            aria-hidden
                                        />
                                        <span>{s}</span>
                                    </li>
                                ))}
                            </ul>
                        </SectionBlock>

                        <SectionBlock title="ACHIEVEMENTS">
                            <ul className="space-y-2 text-sm/6 opacity-95">
                                {achievements.map((a, idx) => (
                                    <li key={idx}>{a}</li>
                                ))}
                            </ul>
                        </SectionBlock>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SectionBlock({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section>
            <h3
                className="
                    mb-4
                    font-heading
                    tracking-wide
                    text-[clamp(1.6rem,3.2vw,2.25rem)]
                "
                style={{ color: "#ffeecf" }}
            >
                {title}
            </h3>

            <div className="rounded-2xl bg-white/0 ring-1 ring-white/10 p-4 md:p-5">
                {children}
            </div>
        </section>
    );
}

function EducationList({ items }: { items: EducationItem[] }) {
    return (
        <ul className="space-y-6">
            {items.map((item, idx) => (
                <li key={idx} className="leading-snug">
                    <p className="font-semibold tracking-wide">{item.school}</p>
                    <p className="text-sm/6 opacity-90">{item.detail}</p>
                </li>
            ))}
        </ul>
    );
}

function ExperienceList({ items }: { items: ExperienceItem[] }) {
    return (
        <>
            {items.map((exp, idx) => (
                <div key={idx} className="mb-7 last:mb-0">
                    <p className="font-semibold tracking-wide">{exp.title}</p>
                    <ul className="mt-2 list-disc pl-5 text-sm/6 opacity-95">
                        {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}

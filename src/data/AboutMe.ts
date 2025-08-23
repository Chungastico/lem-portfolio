export type EducationItem = {
    school: string;
    detail: string;
};

export type ExperienceItem = {
    title: string;
    bullets: string[];
};

export type AboutMeData = {
    education: EducationItem[];
    experience: ExperienceItem[];
    skills: string[];
    achievements: string[];
};

export const aboutMeData: AboutMeData = {
    education: [
        {
            school: "MÓNICA HERRERA SCHOOL",
            detail: "Bachelor's Degree in Strategic Design (2024 – present)",
        },
        {
            school: "AVANZA INFINITE EDUCATION",
            detail: "Specialty in Multimedia Graphic Design (2025)",
        },
    ],
    experience: [
        {
            title: "Freelance & Academic Projects (2022 – Present)",
            bullets: [
                "Brand & Visual Identity",
                "Logo creation",
                "Social media",
                "Photography",
            ],
        },
    ],
    skills: [
        "Visual identity & branding systems",
        "Social media design & product visuals",
        "Typography & layout design",
        "Strategic thinking & creativity",
        "Fast learner, responsible & open to feedback",
        "Time management and multitasking",
    ],
    achievements: [
        "Finalist at El Salvador & Japan artistry contest (2025)",
    ],
};

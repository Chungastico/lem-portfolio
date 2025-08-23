

import { aboutMeData, type AboutMeData } from "@/data/AboutMe";

export async function getAboutMeData(): Promise<AboutMeData> {
    return aboutMeData;
}

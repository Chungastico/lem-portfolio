// app/fonts.ts
import localFont from "next/font/local";

export const avenir = localFont({
    src: [
        { path: "/fonts/avenir/Avenir Light.ttf",   weight: "300", style: "normal" },
        { path: "/fonts/avenir/Avenir Book.ttf",    weight: "450", style: "normal" },
        { path: "/fonts/avenir/Avenir Regular.ttf", weight: "400", style: "normal" },
        { path: "/fonts/avenir/Avenir Heavy.ttf",   weight: "800", style: "normal" },
        { path: "/fonts/avenir/Avenir Black.ttf",   weight: "900", style: "normal" }
    ],
    variable: "--font-body",
    display: "swap"
});

// League Gothic – tres familias locales
export const leagueGothic = localFont({
    src: [{ path: "/fonts/league-gothic/LeagueGothic-Regular.ttf", weight: "400", style: "normal" }],
    variable: "--font-heading",
    display: "swap"
});

export const leagueGothicSemi = localFont({
    src: [{ path: "/fonts/league-gothic/LeagueGothic_SemiCondensed-Regular.ttf", weight: "400", style: "normal" }],
    variable: "--font-heading-semi",
    display: "swap"
});

export const leagueGothicCond = localFont({
    src: [{ path: "/fonts/league-gothic/LeagueGothic_Condensed-Regular.ttf", weight: "400", style: "normal" }],
    variable: "--font-heading-condensed",
    display: "swap"
});

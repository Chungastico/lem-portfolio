// app/layout.tsx
import "./globals.css";
import { avenir, leagueGothic, leagueGothicSemi, leagueGothicCond } from "./fonts";

export const metadata = { title: "Portafolio Melanie", description: "Portfolio" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body
                className={[
                    avenir.variable,
                    leagueGothic.variable,
                    leagueGothicSemi.variable,
                    leagueGothicCond.variable,
                    "antialiased"
                ].join(" ")}
            >
                {children}
            </body>
        </html>
    );
}

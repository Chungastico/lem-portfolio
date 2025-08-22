// app/layout.tsx
import './globals.css';
import { avenir, leagueGothic } from './fonts';

export const metadata = {
    title: 'Portafolio Melanie',
    description: 'Portfolio'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className={`${avenir.variable} ${leagueGothic.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}

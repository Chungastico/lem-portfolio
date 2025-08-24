// app/fonts.ts
import localFont from 'next/font/local';
import { League_Gothic } from 'next/font/google';

export const avenir = localFont({
    src: [
        { path: '/fonts/avenir/Avenir Light.ttf',   weight: '300', style: 'normal' },
        { path: '/fonts/avenir/Avenir Book.ttf',    weight: '400', style: 'normal' },
        { path: '/fonts/avenir/Avenir Heavy.ttf',   weight: '800', style: 'normal' },
        { path: '/fonts/avenir/Avenir Black.ttf',   weight: '900', style: 'normal' }
    ],
    variable: '--font-body',
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'Arial', 'sans-serif'],
    adjustFontFallback: 'Arial'  
});


export const leagueGothic = League_Gothic({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap',
    preload: true
});

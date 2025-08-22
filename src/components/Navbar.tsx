'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Logo from '@/components/Logo'; // tu componente inline

export default function Navbar() {
    const lastY = useRef(0);
    const [hidden, setHidden] = useState(false);

    // 👇 estado para hover del logo
    const [hoverLogo, setHoverLogo] = useState(false);
    const baseColor  = '#578685'; // verde oscuro
    const hoverColor = '#a4b3a4'; // verde suave

    useEffect(() => {
        lastY.current = window.scrollY;
        const onScroll = () => {
            const y = window.scrollY;
            setHidden(y > lastY.current && y > 80);
            lastY.current = y;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`navbar ${hidden ? 'navbar--hidden' : ''}`}>
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                        aria-label="Inicio"
                        onMouseEnter={() => setHoverLogo(true)}
                        onMouseLeave={() => setHoverLogo(false)}
                        onFocus={() => setHoverLogo(true)}     // accesibilidad teclado
                        onBlur={() => setHoverLogo(false)}
                    >
                        <Logo
                            className="h-8 w-8"
                            style={{
                                color: hoverLogo ? hoverColor : baseColor,
                                transition: 'color 220ms ease'
                            }}
                        />
                    </Link>
                </div>

                <ul className="hidden md:flex items-center gap-8 font-body font-bold">
                    <li><Link href="#home" className="hover:underline underline-offset-4">Home</Link></li>
                    <li><Link href="#about" className="hover:underline underline-offset-4">About me</Link></li>
                    <li><Link href="#programs" className="hover:underline underline-offset-4">Programs</Link></li>
                    <li><Link href="#services" className="hover:underline underline-offset-4">Services</Link></li>
                    <li><Link href="#contact" className="hover:underline underline-offset-4">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

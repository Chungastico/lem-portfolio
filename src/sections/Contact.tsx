// app/contact/page.tsx
// Indentación: 4 espacios
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Contact | Lem Creation",
};

export default function ContactPage() {
    return (
        <section
            id="contact"
            className="
                relative isolate
                h-screen
                px-6 md:px-12
                py-16 md:py-24
                text-[#fff2db]
                overflow-hidden
                flex flex-col justify-center
            "
            aria-labelledby="contact-heading"
        >
            {/* Fondo sólido + wave.svg */}
            <div
                aria-hidden
                className="absolute inset-0"
                style={{
                    backgroundColor: "#4c7c79", // teal de base
                    backgroundImage: "url('/contact/wave.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="relative z-10 max-w-6xl w-full mx-auto">
                <h1
                    id="contact-heading"
                    className="text-5xl md:text-7xl font-extrabold tracking-tight"
                >
                    CONTACT ME
                </h1>

                <div className="mt-10 grid gap-10 md:gap-12 md:grid-cols-2 items-start">
                    {/* Columna izquierda */}
                    <div className="space-y-8">
                        {/* Email */}
                        <ContactRow
                            icon={
                                <Image
                                    src="/logo/mail.svg"
                                    alt="Email"
                                    width={40}
                                    height={40}
                                    className="h-8 w-8 md:h-10 md:w-10"
                                />
                            }
                            label={
                                <Link
                                    href="mailto:lem.crs.design@gmail.com"
                                    className="hover:underline focus:underline"
                                >
                                    lem.crs.design@gmail.com
                                </Link>
                            }
                        />

                        {/* Instagram */}
                        <ContactRow
                            icon={
                                <Image
                                    src="/logo/instagram.svg"
                                    alt="Instagram"
                                    width={40}
                                    height={40}
                                    className="h-8 w-8 md:h-10 md:w-10"
                                />
                            }
                            label={
                                <div className="space-y-1">
                                    <Link
                                        href="https://instagram.com/lem_creation.s"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block hover:underline focus:underline"
                                    >
                                        @lem_creation.s
                                    </Link>
                                    <Link
                                        href="https://instagram.com/m_menendez14"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block hover:underline focus:underline"
                                    >
                                        @m_menendez14
                                    </Link>
                                </div>
                            }
                        />
                    </div>

                    {/* Columna derecha */}
                    <div className="space-y-8">
                        {/* WhatsApp */}
                        <ContactRow
                            icon={
                                <Image
                                    src="/logo/whatsapp.svg"
                                    alt="WhatsApp"
                                    width={40}
                                    height={40}
                                    className="h-8 w-8 md:h-10 md:w-10"
                                />
                            }
                            label={
                                <Link
                                    href="https://wa.me/50370933901"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline focus:underline"
                                >
                                    +503 7093&nbsp;–&nbsp;3901
                                </Link>
                            }
                        />

                        {/* LinkedIn */}
                        <ContactRow
                            icon={
                                <Image
                                    src="/logo/linkedin.svg"
                                    alt="LinkedIn"
                                    width={40}
                                    height={40}
                                    className="h-8 w-8 md:h-10 md:w-10"
                                />
                            }
                            label={
                                <Link
                                    href="https://www.linkedin.com/in/melanie-menendez"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline focus:underline"
                                >
                                    Melanie Menendez
                                </Link>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactRow({
    icon,
    label,
}: {
    icon: React.ReactNode;
    label: React.ReactNode;
}) {
    return (
        <div className="flex items-center gap-4 md:gap-6">
            <span className="inline-flex">{icon}</span>
            <div className="text-xl md:text-2xl font-medium leading-tight">
                {label}
            </div>
        </div>
    );
}

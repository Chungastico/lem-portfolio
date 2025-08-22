export default function Footer() {
    return (
        <footer className="bg-verde-oscuro text-cafe-claro">
            <div className="container mx-auto flex items-center justify-between px-4 py-6">
                <p className="text-sm">
                    © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
                </p>

                {/* Logo a la derecha */}
                <a href="#inicio">
                    <img
                        src="/images/logo.svg"
                        alt="Logo"
                        className="h-8 w-auto"
                    />
                </a>
            </div>
        </footer>
    );
}

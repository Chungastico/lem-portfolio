type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "outline";
};

export default function Button({
    className = "",
    variant = "primary",
    ...props
}: Props) {
    const base =
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm transition";
    const styles =
        variant === "primary"
            ? "bg-verde-oscuro text-cafe-claro hover:bg-verde-suave"
            : "border border-verde-oscuro text-verde-oscuro hover:bg-cafe-claro";
    return <button className={`${base} ${styles} ${className}`} {...props} />;
}

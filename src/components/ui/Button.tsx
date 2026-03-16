import Link from "next/link";

type ButtonVariant = "solid" | "outline" | "whatsapp";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  solid:
    "bg-sand text-navy hover:bg-sand-dark",
  outline:
    "bg-transparent border-2 border-white text-white hover:bg-white/10",
  whatsapp:
    "bg-whatsapp text-white hover:brightness-110",
};

export default function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer";

  const props = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

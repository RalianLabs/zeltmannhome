interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {label && <p className="label mb-3">{label}</p>}
      <h2
        className={`font-serif text-3xl md:text-4xl font-bold ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

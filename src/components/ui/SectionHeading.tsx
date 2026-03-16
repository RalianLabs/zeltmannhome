interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

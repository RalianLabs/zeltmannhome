import Image from "next/image";
import { nerjaIntro, nerjaSections, datosPracticos } from "@/data/nerja";

export default function NerjaContent() {
  return (
    <>
      {/* Intro */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">
            {nerjaIntro.subtitle}
          </h2>
          <p className="text-muted text-base md:text-lg leading-loose mb-6">
            {nerjaIntro.description}
          </p>
          <p className="text-muted text-base md:text-lg leading-loose">
            {nerjaIntro.secondParagraph}
          </p>
        </div>
      </section>

      {/* Content sections */}
      {nerjaSections.map((section, i) => (
        <section
          key={section.id}
          className={`section-padding ${i % 2 === 0 ? "bg-cream" : ""}`}
        >
          <div className="max-w-wide mx-auto px-6">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
                  i % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Text */}
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <p className="label mb-3">{section.subtitle}</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                  {section.title}
                </h2>
                <p className="text-muted text-base leading-loose mb-6">
                  {section.description}
                </p>

                {/* Detail list */}
                {section.details && section.details.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {section.details.map((detail, j) => (
                      <li key={j} className="flex gap-3 text-sm text-navy/80">
                        <span className="text-sand mt-0.5 shrink-0">&#9679;</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tip callout */}
                {section.tips && (
                  <div className="bg-sand/10 border border-sand/20 rounded-xl px-5 py-4">
                    <p className="text-sm text-navy/80">
                      <span className="font-semibold text-navy">Consejo:</span>{" "}
                      {section.tips}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Datos prácticos */}
      <section className="section-padding bg-cream">
        <div className="max-w-wide mx-auto px-6">
          <div className="text-center mb-12">
            <p className="label mb-3">{datosPracticos.subtitle}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              {datosPracticos.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {datosPracticos.sections.map((section) => (
              <div
                key={section.title}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand/10"
              >
                <h3 className="font-serif text-xl font-bold text-navy mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-navy/80">
                      <span className="text-sand mt-0.5 shrink-0">&#9679;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

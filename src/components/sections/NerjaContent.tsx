import Image from "next/image";
import { nerjaIntro, nerjaSections } from "@/data/nerja";

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
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
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
                <p className="text-muted text-base leading-loose">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading
          title="Preguntas frecuentes"
          subtitle="Todo lo que necesitas saber antes de reservar"
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-bg rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-semibold text-navy text-sm hover:bg-sand/10 transition-colors list-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg
                  className="w-5 h-5 text-muted shrink-0 ml-4 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-muted text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SITE } from "@/data/site";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(SITE.defaultWhatsappMessage)}`;

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 bg-navy text-white text-center"
    >
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          ¿Listo para tu escapada a Nerja?
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Reserva directamente por WhatsApp y obtén el mejor precio. Sin
          intermediarios, trato directo y personal.
        </p>
        <Button href={whatsappHref} variant="whatsapp" external className="text-base px-8 py-3">
          Reservar por WhatsApp
        </Button>
      </div>
    </section>
  );
}

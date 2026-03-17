import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones — ZeltmannHome Nerja",
  description:
    "Condiciones generales de contratación para el alquiler vacacional de ZeltmannHome en Nerja, Málaga. Conforme a la LAU, Real Decreto 28/2016 y normativa vigente.",
  openGraph: {
    title: "Términos y Condiciones — ZeltmannHome Nerja",
    description:
      "Condiciones generales de contratación del alquiler vacacional en Nerja.",
  },
};

export default function TerminosPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-16 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sand text-sm font-semibold tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Condiciones generales de contratación del alquiler vacacional
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-muted text-sm mb-12">
            Última actualización: marzo de 2025. Versión 1.0.
          </p>

          {/* 1. Identificación del titular */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              1. Identificación del titular
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa al usuario de los datos del titular:
            </p>
            <ul className="space-y-2 text-navy/80 leading-loose">
              <li><span className="font-semibold text-navy">Titular:</span> Mike Zeltmann</li>
              <li><span className="font-semibold text-navy">Nombre comercial:</span> ZeltmannHome</li>
              <li><span className="font-semibold text-navy">Dirección:</span> {SITE.address}</li>
              <li><span className="font-semibold text-navy">Teléfono / WhatsApp:</span> +{SITE.whatsappNumber}</li>
              <li><span className="font-semibold text-navy">Actividad:</span> Alquiler de viviendas con fines turísticos en la Comunidad Autónoma de Andalucía</li>
            </ul>
          </div>

          {/* 2. Objeto del contrato */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              2. Objeto del contrato
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Las presentes condiciones regulan la cesión temporal de uso de viviendas con fines turísticos (en adelante, &ldquo;el alojamiento&rdquo;) ubicadas en Nerja, Málaga, conforme a lo establecido en el Real Decreto-ley 7/2019 y el Decreto 28/2016 de la Junta de Andalucía por el que se regulan las viviendas con fines turísticos.
            </p>
            <p className="text-navy/80 leading-loose">
              Los contratos de alquiler turístico quedan expresamente excluidos del ámbito de aplicación de la Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos (LAU), al tratarse de cesiones de uso realizadas con finalidad turística, cumpliendo los requisitos del artículo 5.e) de dicha ley.
            </p>
          </div>

          {/* 3. Proceso de reserva */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              3. Proceso de reserva y confirmación
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              La reserva podrá realizarse a través de las plataformas autorizadas (Airbnb, Booking.com) o directamente mediante WhatsApp o correo electrónico con el titular.
            </p>
            <p className="text-navy/80 leading-loose mb-4">
              La reserva quedará confirmada una vez el huésped reciba la confirmación escrita por parte de ZeltmannHome, que incluirá los detalles del alojamiento, fechas, precio total y normas de la casa.
            </p>
            <p className="text-navy/80 leading-loose">
              Para reservas directas, el huésped deberá facilitar nombre completo, documento de identidad o pasaporte, número de personas, y aceptar expresamente las presentes condiciones antes de que la reserva sea efectiva.
            </p>
          </div>

          {/* 4. Precios y pago */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              4. Precios y forma de pago
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Los precios indicados son por noche y para la capacidad máxima del alojamiento seleccionado. Los precios incluyen todos los impuestos aplicables. Se informará de cualquier cargo adicional (limpieza, tasas turísticas) antes de la confirmación de la reserva.
            </p>
            <p className="text-navy/80 leading-loose mb-4">
              Para reservas directas, el pago se realizará mediante transferencia bancaria, Bizum o plataforma de pago seguro indicada por el titular. Para reservas a través de Airbnb o Booking.com, se aplicarán las condiciones de pago de cada plataforma.
            </p>
            <p className="text-navy/80 leading-loose">
              ZeltmannHome se reserva el derecho a requerir el pago del importe total en el momento de la reserva o, como máximo, 7 días antes de la fecha de entrada.
            </p>
          </div>

          {/* 5. Política de cancelación */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              5. Política de cancelación
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Para reservas directas con ZeltmannHome se aplica la siguiente política:
            </p>
            <div className="bg-cream rounded-xl p-6 space-y-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <p className="text-navy/80 leading-loose">
                  <span className="font-semibold text-navy">Cancelación gratuita:</span> hasta 14 días antes de la fecha de entrada. Se reembolsará el importe íntegro abonado.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <p className="text-navy/80 leading-loose">
                  <span className="font-semibold text-navy">Cancelación parcial:</span> entre 14 y 3 días antes de la fecha de entrada. Se retendrá el 50% del importe total de la reserva.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <p className="text-navy/80 leading-loose">
                  <span className="font-semibold text-navy">No-show o cancelación tardía:</span> cancelaciones con menos de 3 días de antelación o no presentación. Se retendrá el 100% del importe total.
                </p>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Para reservas realizadas a través de Airbnb o Booking.com, se aplicará la política de cancelación vigente en cada plataforma en el momento de la reserva.
            </p>
          </div>

          {/* 6. Check-in / Check-out */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              6. Check-in y check-out
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Los horarios estándar son los siguientes:
            </p>
            <div className="bg-cream rounded-xl p-6 space-y-3 mb-4">
              <div className="flex justify-between items-center border-b border-navy/10 pb-3">
                <span className="font-semibold text-navy">Check-in</span>
                <span className="text-navy/80">A partir de las 15:00 h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-navy">Check-out</span>
                <span className="text-navy/80">Antes de las 11:00 h</span>
              </div>
            </div>
            <p className="text-navy/80 leading-loose">
              Se podrán acordar horarios flexibles con antelación, siempre sujetos a disponibilidad y sin coste adicional garantizado. El huésped deberá comunicar su hora de llegada con al menos 24 horas de antelación para organizar la entrega de llaves.
            </p>
          </div>

          {/* 7. Obligaciones del huésped */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              7. Obligaciones del huésped
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              El huésped se compromete a:
            </p>
            <ul className="space-y-3 text-navy/80 leading-loose">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>Respetar la capacidad máxima del alojamiento indicada en la reserva. No se permitirá la estancia de más personas de las contratadas sin autorización previa.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>Mantener el alojamiento en buen estado y realizar un uso adecuado de las instalaciones, mobiliario y equipamiento.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>No fumar dentro del alojamiento. En caso de incumplimiento se aplicará un cargo por limpieza adicional de 150 €.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>Respetar las normas de convivencia del edificio y comunidad de vecinos: silencio entre las 22:00 y las 08:00 h, no realizar actividades que perturben el descanso de los vecinos.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>No se admiten animales de compañía salvo acuerdo previo y expreso por escrito con el titular.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>Comunicar inmediatamente al titular cualquier desperfecto o avería producida durante la estancia.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>No realizar subarriendos ni ceder el uso del alojamiento a terceras personas no incluidas en la reserva.</span>
              </li>
            </ul>
          </div>

          {/* 8. Fianza */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              8. Fianza y depósito de seguridad
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Para reservas directas, el titular podrá solicitar una fianza o depósito de seguridad de entre 150 € y 300 € en concepto de garantía por posibles daños o incidencias. Dicho importe será reembolsado íntegramente en los 3 días hábiles siguientes al check-out, siempre que el alojamiento se entregue en las mismas condiciones en que fue recibido.
            </p>
            <p className="text-navy/80 leading-loose">
              El titular documentará el estado del alojamiento mediante fotografías antes y después de cada estancia. En caso de daños, el coste de reparación o reposición será descontado del depósito. Si los daños superaran el importe del depósito, el huésped responderá por el exceso conforme a la legislación vigente.
            </p>
          </div>

          {/* 9. Responsabilidad del propietario */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              9. Responsabilidad del propietario
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              ZeltmannHome garantiza que el alojamiento cumple con los requisitos exigidos por el Decreto 28/2016 de la Junta de Andalucía para viviendas con fines turísticos, incluyendo condiciones de habitabilidad, equipamiento y seguridad.
            </p>
            <p className="text-navy/80 leading-loose mb-4">
              El titular no será responsable de los daños que pudieran sufrir los huéspedes o sus pertenencias como consecuencia del uso indebido de las instalaciones, negligencia o incumplimiento de las normas del alojamiento.
            </p>
            <p className="text-navy/80 leading-loose">
              En caso de que, por causas ajenas a la voluntad del titular (fuerza mayor, desastres naturales, reformas urgentes del edificio, etc.), no fuera posible prestar el servicio contratado, el titular reembolsará íntegramente el importe abonado, sin que el huésped pueda reclamar indemnización adicional alguna.
            </p>
          </div>

          {/* 10. Protección de datos */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              10. Protección de datos
            </h2>
            <p className="text-navy/80 leading-loose">
              Los datos personales facilitados por el huésped serán tratados conforme a lo establecido en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD). Para más información, consulte nuestra{" "}
              <Link href="/legal/privacidad" className="text-navy font-semibold underline underline-offset-2 hover:text-gold transition-colors">
                Política de Privacidad
              </Link>
              .
            </p>
          </div>

          {/* 11. Resolución de conflictos */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              11. Resolución de conflictos
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Ante cualquier reclamación o incidencia, el huésped deberá dirigirse en primer lugar al titular de ZeltmannHome a través de los medios de contacto indicados, con el objetivo de alcanzar una solución amistosa.
            </p>
            <p className="text-navy/80 leading-loose mb-4">
              Conforme a lo establecido en el Reglamento (UE) n.º 524/2013, se informa al consumidor de la existencia de la Plataforma de Resolución de Litigios en Línea de la Comisión Europea, accesible en{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy font-semibold underline underline-offset-2 hover:text-gold transition-colors"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <p className="text-navy/80 leading-loose">
              El huésped también podrá acudir a las Oficinas Municipales de Información al Consumidor (OMIC) del Ayuntamiento de Nerja o a la Junta Arbitral de Consumo de Andalucía para la resolución extrajudicial de conflictos.
            </p>
          </div>

          {/* 12. Legislación aplicable */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              12. Legislación aplicable y jurisdicción
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Las presentes condiciones se rigen por la legislación española vigente, en particular:
            </p>
            <ul className="space-y-2 text-navy/80 leading-loose mb-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>Real Decreto Legislativo 1/2007 (Ley General para la Defensa de los Consumidores y Usuarios)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información (LSSI-CE)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>Decreto 28/2016 de la Junta de Andalucía sobre viviendas con fines turísticos</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>Código Civil español</span>
              </li>
            </ul>
            <p className="text-navy/80 leading-loose">
              Para la resolución de cualquier controversia que pudiera derivarse de la interpretación o cumplimiento de estas condiciones, las partes, con renuncia a cualquier otro fuero que pudiera corresponderles, se someten expresamente a la jurisdicción de los Juzgados y Tribunales de Nerja o, en su defecto, de Málaga.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-cream rounded-2xl p-8 text-center mt-16">
            <p className="font-serif text-xl font-bold text-navy mb-2">
              ¿Tienes alguna pregunta?
            </p>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Estamos disponibles por WhatsApp para resolver cualquier duda sobre estas condiciones o tu reserva.
            </p>
            <Link
              href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hola, tengo una pregunta sobre los términos y condiciones.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-sand text-navy font-semibold text-sm hover:bg-sand-dark transition-colors duration-300"
            >
              Contactar por WhatsApp
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

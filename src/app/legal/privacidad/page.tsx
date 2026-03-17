import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de Privacidad — ZeltmannHome Nerja",
  description:
    "Política de privacidad de ZeltmannHome conforme al RGPD y la LOPDGDD. Información sobre el tratamiento de tus datos personales en el alquiler vacacional de Nerja.",
  openGraph: {
    title: "Política de Privacidad — ZeltmannHome Nerja",
    description:
      "Cómo tratamos tus datos personales en ZeltmannHome, conforme al RGPD y la LOPDGDD.",
  },
};

export default function PrivacidadPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-16 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sand text-sm font-semibold tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Política de Privacidad
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Información sobre el tratamiento de tus datos personales
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-muted text-sm mb-12">
            Última actualización: marzo de 2025. Conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
          </p>

          {/* 1. Responsable */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              1. Responsable del tratamiento
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              De conformidad con el artículo 13 del RGPD, le informamos que el responsable del tratamiento de sus datos personales es:
            </p>
            <div className="bg-cream rounded-xl p-6 space-y-2 text-navy/80">
              <p><span className="font-semibold text-navy">Responsable:</span> Mike Zeltmann</p>
              <p><span className="font-semibold text-navy">Nombre comercial:</span> ZeltmannHome</p>
              <p><span className="font-semibold text-navy">Dirección:</span> {SITE.address}</p>
              <p><span className="font-semibold text-navy">Teléfono / WhatsApp:</span> +{SITE.whatsappNumber}</p>
            </div>
          </div>

          {/* 2. Datos recopilados */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              2. Datos personales que recopilamos
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              En función de la interacción que tenga con ZeltmannHome, podemos recopilar los siguientes datos personales:
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-navy mb-2">Datos de reserva e identificación:</p>
                <ul className="space-y-2 text-navy/80 leading-loose pl-4">
                  <li>— Nombre y apellidos</li>
                  <li>— Documento nacional de identidad o pasaporte</li>
                  <li>— Dirección de correo electrónico</li>
                  <li>— Número de teléfono</li>
                  <li>— Fechas de entrada y salida</li>
                  <li>— Número de huéspedes</li>
                  <li>— Datos de pago (gestionados de forma segura por la plataforma de pago)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-navy mb-2">Datos de navegación:</p>
                <ul className="space-y-2 text-navy/80 leading-loose pl-4">
                  <li>— Dirección IP</li>
                  <li>— Tipo de navegador y dispositivo</li>
                  <li>— Páginas visitadas y tiempo de permanencia</li>
                  <li>— Datos de cookies (según su configuración)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Finalidad */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              3. Finalidad del tratamiento
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Sus datos personales son tratados para las siguientes finalidades:
            </p>
            <ul className="space-y-3 text-navy/80 leading-loose">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span><span className="font-semibold text-navy">Gestión de reservas:</span> tramitar, confirmar y gestionar las reservas de alojamiento, incluyendo el check-in, check-out y comunicación durante la estancia.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span><span className="font-semibold text-navy">Cumplimiento legal:</span> comunicar los datos de los huéspedes a las autoridades policiales en cumplimiento del Real Decreto 933/2021 sobre registro de viajeros.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span><span className="font-semibold text-navy">Gestión de pagos:</span> procesar y registrar los pagos correspondientes a las reservas.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span><span className="font-semibold text-navy">Comunicación:</span> responder a consultas y solicitudes de información sobre los alojamientos.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span><span className="font-semibold text-navy">Mejora del servicio:</span> análisis estadístico anónimo del uso del sitio web para mejorar la experiencia de usuario.</span>
              </li>
            </ul>
          </div>

          {/* 4. Base legal */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              4. Base legal del tratamiento
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              El tratamiento de sus datos se ampara en las siguientes bases legales del artículo 6 del RGPD:
            </p>
            <div className="space-y-4">
              <div className="bg-cream rounded-xl p-5">
                <p className="font-semibold text-navy mb-1">Ejecución de un contrato (art. 6.1.b RGPD)</p>
                <p className="text-navy/80 text-sm leading-relaxed">Tratamiento necesario para la gestión, confirmación y ejecución del contrato de alquiler vacacional.</p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <p className="font-semibold text-navy mb-1">Obligación legal (art. 6.1.c RGPD)</p>
                <p className="text-navy/80 text-sm leading-relaxed">Cumplimiento de las obligaciones legales de registro de viajeros y conservación de datos fiscales.</p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <p className="font-semibold text-navy mb-1">Interés legítimo (art. 6.1.f RGPD)</p>
                <p className="text-navy/80 text-sm leading-relaxed">Análisis anónimo del tráfico web para mejorar el servicio y la experiencia de usuario.</p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <p className="font-semibold text-navy mb-1">Consentimiento (art. 6.1.a RGPD)</p>
                <p className="text-navy/80 text-sm leading-relaxed">Para el uso de cookies no esenciales y el envío de comunicaciones comerciales, cuando el usuario lo haya solicitado expresamente.</p>
              </div>
            </div>
          </div>

          {/* 5. Destinatarios */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              5. Destinatarios y encargados del tratamiento
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Sus datos podrán ser comunicados a los siguientes destinatarios:
            </p>
            <ul className="space-y-4 text-navy/80 leading-loose">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span><span className="font-semibold text-navy">Autoridades policiales:</span> en cumplimiento del Real Decreto 933/2021, los datos de los viajeros serán comunicados a las Fuerzas y Cuerpos de Seguridad del Estado.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span><span className="font-semibold text-navy">Smoobu (channel manager):</span> plataforma de gestión de reservas y channel manager utilizada para sincronizar disponibilidad y reservas entre distintos canales. Proveedor con sede en Alemania, conforme al RGPD.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span><span className="font-semibold text-navy">Airbnb y Booking.com:</span> plataformas de reserva externas a través de las cuales puede realizarse la reserva. El tratamiento de datos en dichas plataformas se rige por sus propias políticas de privacidad.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span><span className="font-semibold text-navy">Administración tributaria:</span> datos necesarios para el cumplimiento de las obligaciones fiscales derivadas de la actividad de alquiler vacacional.</span>
              </li>
            </ul>
            <p className="text-navy/80 leading-loose mt-4">
              No se realizarán otras cesiones de datos a terceros salvo obligación legal expresa.
            </p>
          </div>

          {/* 6. Plazos de conservación */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              6. Plazos de conservación
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Los datos personales serán conservados durante los siguientes plazos:
            </p>
            <div className="space-y-3">
              <div className="bg-cream rounded-xl p-5">
                <p className="font-semibold text-navy mb-1">Datos de reserva y contrato</p>
                <p className="text-navy/80 text-sm leading-relaxed">5 años desde la finalización de la relación contractual, conforme al Código Civil y la legislación fiscal.</p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <p className="font-semibold text-navy mb-1">Datos de registro de viajeros</p>
                <p className="text-navy/80 text-sm leading-relaxed">3 años, conforme al Real Decreto 933/2021.</p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <p className="font-semibold text-navy mb-1">Datos de navegación y cookies analíticas</p>
                <p className="text-navy/80 text-sm leading-relaxed">13 meses desde su recopilación, según las directrices de la AEPD.</p>
              </div>
            </div>
          </div>

          {/* 7. Derechos del usuario */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              7. Derechos del usuario
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              En virtud de los artículos 15 a 22 del RGPD, usted tiene derecho a:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                { right: "Acceso", desc: "Conocer qué datos suyos tratamos y cómo." },
                { right: "Rectificación", desc: "Corregir datos inexactos o incompletos." },
                { right: "Supresión", desc: "Solicitar la eliminación de sus datos cuando ya no sean necesarios." },
                { right: "Oposición", desc: "Oponerse al tratamiento basado en interés legítimo." },
                { right: "Limitación", desc: "Restringir el tratamiento en determinadas circunstancias." },
                { right: "Portabilidad", desc: "Recibir sus datos en formato estructurado y legible." },
              ].map(({ right, desc }) => (
                <div key={right} className="bg-cream rounded-xl p-4">
                  <p className="font-semibold text-navy text-sm mb-1">{right}</p>
                  <p className="text-navy/70 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-navy/80 leading-loose mb-4">
              Para ejercer cualquiera de estos derechos, puede contactar con nosotros a través de WhatsApp (+{SITE.whatsappNumber}) indicando el derecho que desea ejercitar y adjuntando copia de su documento de identidad.
            </p>
            <p className="text-navy/80 leading-loose">
              Si considera que el tratamiento de sus datos no es conforme a la normativa, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy font-semibold underline underline-offset-2 hover:text-gold transition-colors"
              >
                www.aepd.es
              </a>
              .
            </p>
          </div>

          {/* 8. Cookies */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              8. Cookies
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Este sitio web utiliza cookies propias y de terceros. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita una página web.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-cream rounded-xl p-5">
                <p className="font-semibold text-navy mb-1">Cookies técnicas o esenciales</p>
                <p className="text-navy/80 text-sm leading-relaxed">Necesarias para el funcionamiento del sitio web. No requieren consentimiento del usuario. Se utilizan para mantener la sesión y las preferencias de navegación.</p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <p className="font-semibold text-navy mb-1">Cookies analíticas</p>
                <p className="text-navy/80 text-sm leading-relaxed">Permiten medir el número de visitas y el comportamiento de los usuarios de forma anónima y agregada, para mejorar el servicio. Requieren su consentimiento previo.</p>
              </div>
            </div>
            <p className="text-navy/80 leading-loose">
              Puede configurar su navegador para rechazar las cookies o ser avisado cuando se instalen. Tenga en cuenta que deshabilitar ciertas cookies puede afectar al funcionamiento del sitio web.
            </p>
          </div>

          {/* 9. Transferencias internacionales */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              9. Transferencias internacionales de datos
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo (EEE). En tales casos, nos aseguramos de que dichas transferencias se realicen con las garantías adecuadas:
            </p>
            <ul className="space-y-3 text-navy/80 leading-loose">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>Mediante decisiones de adecuación de la Comisión Europea (países con nivel de protección equivalente al europeo).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>Mediante cláusulas contractuales tipo aprobadas por la Comisión Europea.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sand mt-2.5 shrink-0" />
                <span>En el caso de Airbnb y Booking.com, mediante sus propios marcos de cumplimiento normativo del RGPD.</span>
              </li>
            </ul>
          </div>

          {/* 10. Contacto */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              10. Contacto y modificaciones
            </h2>
            <p className="text-navy/80 leading-loose mb-4">
              Para cualquier consulta relacionada con esta política de privacidad o para ejercer sus derechos, puede contactar con nosotros:
            </p>
            <div className="bg-cream rounded-xl p-6 space-y-2 text-navy/80 mb-4">
              <p><span className="font-semibold text-navy">Titular:</span> Mike Zeltmann — ZeltmannHome</p>
              <p><span className="font-semibold text-navy">WhatsApp:</span> +{SITE.whatsappNumber}</p>
              <p><span className="font-semibold text-navy">Dirección:</span> {SITE.address}</p>
            </div>
            <p className="text-navy/80 leading-loose">
              ZeltmannHome se reserva el derecho a modificar la presente política de privacidad para adaptarla a novedades legislativas o jurisprudenciales. Cualquier cambio relevante será comunicado a los usuarios con antelación razonable.
            </p>
          </div>

          {/* Legal link */}
          <div className="pt-8 border-t border-navy/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-muted text-sm">
              Ver también:{" "}
              <Link href="/legal/terminos" className="text-navy font-semibold underline underline-offset-2 hover:text-gold transition-colors">
                Términos y Condiciones
              </Link>
            </p>
            <Link
              href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hola, tengo una pregunta sobre la política de privacidad.")}`}
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

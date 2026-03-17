import { NerjaSection } from "@/types";

export const nerjaIntro = {
  title: "Descubre Nerja",
  subtitle: "El secreto mejor guardado de la Costa del Sol",
  description:
    "Nerja es un pueblo costero en el extremo oriental de la provincia de Málaga, donde los acantilados se funden con el Mediterráneo y las calles blancas guardan siglos de historia. Lejos del turismo masificado de otras zonas de la Costa del Sol, Nerja conserva su autenticidad: pescadores que siguen faenando al amanecer, chiringuitos donde los espetos se asan como hace generaciones y miradores que quitan el aliento.",
  secondParagraph:
    "Con más de 320 días de sol al año, playas de aguas cristalinas y una gastronomía que celebra el mar y la huerta, Nerja es el destino perfecto para quienes buscan la esencia del sur de España. Desde el emblemático Balcón de Europa hasta las calas escondidas de Maro, cada rincón invita a quedarse un poco más.",
};

export const nerjaSections: NerjaSection[] = [
  {
    id: "playas",
    title: "Playas y calas",
    subtitle: "Aguas cristalinas y rincones escondidos",
    description:
      "Las playas de Nerja son de las más bonitas de Andalucía. Desde la popular Playa de Burriana, con sus chiringuitos y deportes acuáticos, hasta las calas vírgenes de Maro, accesibles solo a pie o en kayak. Calahonda, al pie del Balcón de Europa, es la estampa más fotografiada del pueblo. Aguas turquesas, arena dorada y acantilados que enmarcan paisajes de postal.",
    image: {
      src: "/images/nerja/playa-burriana.webp",
      alt: "Playa de Burriana en Nerja con aguas cristalinas",
    },
    details: [
      "Playa de Burriana — la más grande y equipada, ideal para familias. Chiringuitos, kayak y snorkel.",
      "Calahonda — pequeña cala al pie del Balcón de Europa. La más icónica de Nerja.",
      "Calas de Maro — calas vírgenes en el Paraje Natural. Acceso a pie (30 min) o en kayak.",
      "Playa de Cantarriján — playa nudista/mixta entre Nerja y La Herradura. Agua cristalina.",
      "Playa del Playazo — amplia y familiar, perfecta para paseos al atardecer.",
    ],
    tips: "Llega antes de las 11h en verano para encontrar sitio en Calahonda y Maro. Burriana tiene espacio todo el día.",
  },
  {
    id: "gastronomia",
    title: "Gastronomía",
    subtitle: "Sabores del Mediterráneo",
    description:
      "La cocina de Nerja es pura Costa del Sol: pescaíto frito recién sacado del mar, espetos de sardinas asados en barcas sobre la arena, gazpacho y ajoblanco para combatir el calor, y vinos dulces de la Axarquía para brindar al atardecer. Los chiringuitos frente al mar y los restaurantes del centro ofrecen una experiencia gastronómica que va mucho más allá del típico menú turístico.",
    image: {
      src: "/images/nerja/gastronomia.webp",
      alt: "Gastronomía típica de Nerja: espetos y pescado fresco",
    },
    details: [
      "Chiringuito Ayo — el rey de la paella gigante en Playa de Burriana. Institución desde 1970.",
      "Restaurante Oliva — cocina mediterránea con toques creativos en el centro.",
      "Marisquería La Marina — mariscos y fritura de pescado junto a Calahonda.",
      "El Pulguilla — tapas tradicionales y ambiente local. Imprescindible para espetos.",
      "Bakus — terraza con vistas al mar, ideal para cena al atardecer.",
    ],
    tips: "Reserva con antelación en verano, especialmente para cenas con vistas. Los chiringuitos no suelen aceptar reservas: ve temprano.",
  },
  {
    id: "cultura",
    title: "Cultura y miradores",
    subtitle: "Historia viva frente al mar",
    description:
      "El Balcón de Europa es el corazón de Nerja: un mirador espectacular sobre el Mediterráneo desde el que, en días claros, se divisa la costa africana. Pero Nerja es mucho más: la Cueva de Nerja alberga pinturas rupestres de más de 40.000 años, las calles del casco antiguo conservan la arquitectura morisca, y la iglesia de El Salvador vigila el pueblo desde el siglo XVII. Arte, historia y vistas de ensueño.",
    image: {
      src: "/images/nerja/cultura.webp",
      alt: "Balcón de Europa, el mirador más emblemático de Nerja",
    },
    details: [
      "Balcón de Europa — el mirador más famoso de la Costa del Sol. Vistas 180° al Mediterráneo.",
      "Cueva de Nerja — cavernas prehistóricas con estalactitas gigantes. Patrimonio de la Humanidad (candidata UNESCO).",
      "Iglesia de El Salvador — templo mudéjar del s. XVII con torre campanario y frescos.",
      "Museo de Nerja — historia local desde la prehistoria hasta hoy, junto al Balcón de Europa.",
      "Casco antiguo — calles empedradas, buganvillas y plazuelas con terrazas donde parar a tomar algo.",
    ],
    tips: "Compra las entradas a la Cueva de Nerja online para evitar colas. La visita dura 45 min y la temperatura interior es de 19°C todo el año.",
  },
  {
    id: "naturaleza",
    title: "Naturaleza y senderismo",
    subtitle: "Acantilados, ríos y sierras",
    description:
      "El Paraje Natural de los Acantilados de Maro-Cerro Gordo es un paraíso protegido de calas, cascadas y biodiversidad marina. La ruta del Río Chíllar te lleva por un cañón de agua cristalina entre paredes de roca, y la Sierra de Almijara ofrece senderos con vistas que abarcan desde Granada hasta el mar. Naturaleza en estado puro, a minutos de tu apartamento.",
    image: {
      src: "/images/nerja/naturaleza.webp",
      alt: "Acantilados de Maro-Cerro Gordo en Nerja",
    },
    details: [
      "Río Chíllar — ruta acuática (14 km ida y vuelta) por un cañón espectacular. Nivel fácil-medio.",
      "Acantilados de Maro-Cerro Gordo — sendero costero con calas escondidas y vistas increíbles.",
      "Sierra de Almijara — rutas de montaña con vistas al mar y a Sierra Nevada.",
      "Cascada de Maro — pequeña cascada que cae al mar, visible desde kayak o sendero.",
    ],
    tips: "Para el Río Chíllar lleva escarpines o zapatillas de agua, protector solar y mínimo 2L de agua. En verano empieza antes de las 9h. Requiere permiso gratuito de la Junta de Andalucía en temporada alta.",
  },
  {
    id: "excursiones",
    title: "Excursiones desde Nerja",
    subtitle: "Pueblos blancos, ciudades y montañas",
    description:
      "Nerja es una base perfecta para explorar el sur de España. A menos de una hora tienes pueblos blancos de postal, ciudades monumentales y paisajes que quitan el aliento. Desde la mágica Frigiliana hasta la majestuosa Granada, cada excursión merece el viaje.",
    image: {
      src: "/images/nerja/pueblo.webp",
      alt: "Vista de un pueblo blanco cerca de Nerja",
    },
    details: [
      "Frigiliana (10 min) — elegido el pueblo más bonito de España. Calles morunas, artesanía y vistas al mar.",
      "Granada (1h 15min) — la Alhambra, el Albaicín y tapas gratuitas. Imprescindible.",
      "Málaga (1h) — Museo Picasso, centro histórico renovado y gastronomía de nivel.",
      "Cómpeta (30 min) — pueblo de montaña famoso por su vino moscatel y fiestas populares.",
      "Cueva del Tesoro en Rincón de la Victoria (45 min) — una de las tres cuevas marinas visitables del mundo.",
    ],
    tips: "Para la Alhambra, compra entradas con semanas de antelación en la web oficial. El bus ALSA conecta Nerja con Granada y Málaga varias veces al día.",
  },
];

export const datosPracticos = {
  title: "Datos prácticos",
  subtitle: "Todo lo que necesitas saber",
  sections: [
    {
      title: "Cómo llegar",
      items: [
        "Aeropuerto de Málaga (AGP) — el más cercano, a 65 km / 50 min en coche.",
        "Bus ALSA desde Málaga — línea directa, ~1h 15min, varias frecuencias diarias.",
        "Coche de alquiler — la opción más cómoda para explorar la zona. Carretera A-7 costera.",
        "Transfer privado — desde 60€ aproximadamente. Consulta a tu anfitrión.",
      ],
    },
    {
      title: "Moverse por Nerja",
      items: [
        "A pie — el centro es compacto y peatonal. Todo a 10-15 min caminando.",
        "Parking — zona azul en el centro (0.80€/h). Parking gratuito en calles periféricas.",
        "Taxi — parada en Plaza de España. Telf: 952 52 05 37.",
        "Bus urbano — línea que conecta el centro con Burriana y zonas residenciales.",
      ],
    },
    {
      title: "Servicios útiles",
      items: [
        "Supermercados — Mercadona (Ctra. Nacional), Lidl, Día y Coviran en el centro.",
        "Farmacia de guardia — consulta el turno en farmaciadeguardia.com o en cualquier farmacia.",
        "Centro de salud — C/ Antonio Millón. Urgencias: 902 505 061.",
        "Correos — C/ Pintada, junto al centro.",
      ],
    },
    {
      title: "Clima y temporadas",
      items: [
        "Temperatura media anual: 19°C. Veranos de 28-34°C, inviernos de 12-18°C.",
        "Temporada alta: julio-agosto. Mucha gente pero mejor clima de playa.",
        "Mejor época: mayo-junio y septiembre-octubre. Buen tiempo, menos turistas, precios mejores.",
        "Lluvia: muy escasa. Los meses más lluviosos son noviembre y diciembre.",
      ],
    },
  ],
};

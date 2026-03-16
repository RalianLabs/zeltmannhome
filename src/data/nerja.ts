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
  },
];

import { Property } from "@/types";

export const florence: Property = {
  id: "florence",
  slug: "florence",
  name: "Casa Florence",
  tagline: "Céntrica en Nerja",
  description:
    "Apartamento acogedor y luminoso en Nerja, situado en una zona tranquila y de fácil acceso, a pocos pasos de playas, calas escondidas y los miradores más bonitos de la Costa del Sol.",
  longDescription:
    "Casa Florence es un apartamento cuidadosamente decorado que combina el encanto mediterráneo con todas las comodidades modernas. Situado en una calle tranquila del centro de Nerja, te permite llegar a pie a las mejores playas, restaurantes y al emblemático Balcón de Europa en pocos minutos. Ideal para parejas y familias pequeñas que buscan una estancia auténtica, lejos del turismo masivo pero cerca de todo.",
  capacity: 6,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  amenities: [
    { name: "Cocina equipada", icon: "kitchen" },
    { name: "WiFi de alta velocidad", icon: "wifi" },
    { name: "TV de pantalla plana", icon: "tv" },
    { name: "Lavadora", icon: "washer" },
    { name: "Aire acondicionado", icon: "ac" },
    { name: "Ropa de cama premium", icon: "bed" },
    { name: "Toallas incluidas", icon: "towel" },
    { name: "Secador de pelo", icon: "hairdryer" },
  ],
  images: [
    {
      src: "/images/properties/florence/hero.webp",
      alt: "Interior luminoso de Casa Florence en Nerja",
    },
  ],
  airbnbUrl: "https://es.airbnb.com/rooms/1492273417273197297",
  whatsappMessage:
    "Hola, me gustaría reservar Casa Florence en Nerja. ¿Qué disponibilidad tenéis?",
  coordinates: { lat: 36.7437, lng: -3.8638 },
  host: "Mike",
  reviewHighlight: {
    text: "Todo genial, Mike muy agradable y atento. El apartamento está en una ubicación perfecta, a pocos minutos andando de todo. Muy limpio y con todo lo necesario. Repetiremos seguro.",
    author: "Huésped verificado",
    rating: 5,
  },
};

export const isolde: Property = {
  id: "isolde",
  slug: "isolde",
  name: "Casa Isolde",
  tagline: "Tu refugio en Nerja",
  description:
    "Segundo apartamento de la familia Zeltmann en Nerja. Cómodo, bien situado y con todo lo necesario para unas vacaciones perfectas en la Costa del Sol.",
  longDescription:
    "Casa Isolde es nuestro segundo hogar en Nerja, pensado para quienes buscan tranquilidad sin renunciar a estar cerca de todo. Un espacio cómodo y funcional donde sentirte como en casa mientras disfrutas del mejor clima de Europa y la magia de la Costa del Sol oriental.",
  capacity: null,
  bedrooms: null,
  beds: null,
  bathrooms: null,
  amenities: [],
  images: [
    {
      src: "/images/properties/isolde/hero.webp",
      alt: "Casa Isolde en Nerja",
    },
  ],
  airbnbUrl: "https://es.airbnb.com/rooms/1438473117240724145",
  whatsappMessage:
    "Hola, me gustaría reservar Casa Isolde en Nerja. ¿Qué disponibilidad tenéis?",
  coordinates: null,
  host: null,
};

export const properties: Property[] = [florence, isolde];

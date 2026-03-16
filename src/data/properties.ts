import { Property } from "@/types";

export const florence: Property = {
  id: "florence",
  name: "Casa Florence",
  tagline: "Céntrica en Nerja",
  description:
    "Apartamento acogedor y luminoso en Nerja, situado en una zona tranquila y de fácil acceso, a pocos pasos de playas, calas escondidas y los miradores más bonitos de la Costa del Sol.",
  capacity: 6,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  amenities: ["Cocina", "Wifi", "TV", "Lavadora", "Aire acondicionado"],
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
    text: "Todo genial, Mike muy agradable y atento. El apartamento está en una ubicación perfecta.",
    author: "Huésped verificado",
  },
};

export const isolde: Property = {
  id: "isolde",
  name: "Casa Isolde",
  tagline: "Tu refugio en Nerja",
  description:
    "Segundo apartamento de la familia Zeltmann en Nerja. Cómodo, bien situado y con todo lo necesario para unas vacaciones perfectas en la Costa del Sol.",
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

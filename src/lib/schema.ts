import { Property } from "@/types";

export function generateVacationRentalSchema(property: Property) {
  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: `${property.name} — ${property.tagline}`,
    description: property.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nerja",
      addressRegion: "Málaga",
      addressCountry: "ES",
    },
    ...(property.coordinates && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: property.coordinates.lat,
        longitude: property.coordinates.lng,
      },
    }),
    ...(property.capacity && {
      occupancy: {
        "@type": "QuantitativeValue",
        value: property.capacity,
      },
    }),
    ...(property.bedrooms && { numberOfBedrooms: property.bedrooms }),
    ...(property.bathrooms && { numberOfBathroomsTotal: property.bathrooms }),
    ...(property.amenities.length > 0 && {
      amenityFeature: property.amenities.map((a) => ({
        "@type": "LocationFeatureSpecification",
        name: a,
      })),
    }),
    image: property.images.map((img) => img.src),
    url: property.airbnbUrl,
  };
}

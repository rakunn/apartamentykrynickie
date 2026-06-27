import { apartments } from "@/app/apartmentData";

const SITE_URL = "https://apartamentykrynickie.pl";

const toAbsoluteUrl = (path: string) => `${SITE_URL}${path}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Apartamenty Krynickie",
      url: SITE_URL,
      image: apartments.map((apartment) => toAbsoluteUrl(apartment.mainImage)),
      description:
        "Apartamenty Krynickie oferują dwa całoroczne apartamenty w centrum Krynicy Zdroju: Magnolia i Storczyk.",
      telephone: ["+48502512418", "+48600006550"],
      email: "lawenda.krynicka@gmail.com",
      priceRange: "Kontakt w sprawie ceny",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Cicha 14/8B1 oraz ul. Cicha 18/5B",
        addressLocality: "Krynica-Zdrój",
        addressCountry: "PL",
      },
      makesOffer: apartments.map((apartment) => ({
        "@type": "Offer",
        url: `${SITE_URL}/${apartment.slug}`,
        name: `Wynajem - ${apartment.name}`,
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Accommodation",
          name: apartment.name,
          description: apartment.seoDescription,
          image: toAbsoluteUrl(apartment.mainImage),
          address: {
            "@type": "PostalAddress",
            streetAddress: apartment.addressLines[1],
            addressLocality: "Krynica-Zdrój",
            addressCountry: "PL",
          },
        },
      })),
    },
    ...apartments.flatMap((apartment) =>
      apartment.galleryImages.slice(0, 3).map((image, index) => ({
        "@type": "ImageObject",
        "@id": `${SITE_URL}/${apartment.slug}#image-${index + 1}`,
        contentUrl: toAbsoluteUrl(image.original),
        caption: image.originalAlt,
        width: image.originalWidth,
        height: image.originalHeight,
      })),
    ),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Gdzie znajdują się apartamenty?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Apartament Magnolia znajduje się przy ulicy Cichej 14/8B1, a Apartament Storczyk przy ulicy Cichej 18/5B w centrum Krynicy Zdroju.",
          },
        },
        {
          "@type": "Question",
          name: "Czy przy apartamentach jest parking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak, goście obu apartamentów mają zapewnione bezpłatne miejsce parkingowe.",
          },
        },
        {
          "@type": "Question",
          name: "Ile osób może nocować w apartamentach?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Apartament Magnolia jest przygotowany dla 4-5 osób, a Apartament Storczyk dla 2-4 osób.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Apartamenty Krynickie",
          item: SITE_URL,
        },
        ...apartments.map((apartment, index) => ({
          "@type": "ListItem",
          position: index + 2,
          name: apartment.name,
          item: `${SITE_URL}/${apartment.slug}`,
        })),
      ],
    },
  ],
};

export const StructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
    }}
  />
);

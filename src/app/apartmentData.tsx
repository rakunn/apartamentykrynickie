import type { ReactNode } from "react";
import type { ReactImageGalleryItem } from "react-image-gallery";
import magnoliaConfig from "@/app/magnoliaConfig";
import storczykConfig from "@/app/storczykConfig";

export interface ApartmentData {
  slug: "magnolia" | "storczyk";
  name: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  descriptionLines: string[];
  addressLines: string[];
  capacityLabel: string;
  areaLabel: string;
  mainImage: string;
  figureAlt: string;
  galleryImages: readonly ReactImageGalleryItem[];
  amenitiesItems: { label: string; Icon: ReactNode }[];
}

export const apartments: ApartmentData[] = [
  {
    slug: "magnolia",
    name: "Apartament Magnolia",
    title:
      "Apartament dwupokojowy Magnolia 41 m² dla 4-5 osób przy ulicy Cichej 14/8B1",
    seoTitle: "Apartament Magnolia w Krynicy Zdroju",
    seoDescription:
      "Dwupokojowy Apartament Magnolia w centrum Krynicy Zdroju: 41 m², 4-5 osób, parking, winda, balkon, klimatyzacja i pełne wyposażenie.",
    descriptionLines: [
      "Drodzy Goście. Witamy serdecznie. Zapraszamy do naszych całorocznych i nowocześnie urządzonych Apartamentów w samym Centrum Krynicy Zdrój. Stąd tylko kilka minut do Pijalni Głównej czy stoku narciarskiego.",
      "Apartament dwupokojowy Magnolia wyposażony jest we wszystko co potrzeba aby miło spędzić czas w pięknym Uzdrowisku. W apartamencie znajdziecie Państwo funkcjonalną łazienkę z prysznicem, w pełni wyposażony aneks kuchenny, dwa telewizory oraz dostęp do internetu. Dodatkowo znajduje się tam rozkładany fotel dla piątej osoby, łóżeczko dla dziecka oraz biureczko do pracy zdalnej.",
      "Naszym gościom zapewniamy bezpłatne miejsce parkingowe, a w budynku dostępna jest również winda.",
    ],
    addressLines: ["Krynica Zdrój", "ul. Cicha 14/8B1"],
    capacityLabel: "4-5 osób",
    areaLabel: "41m²",
    mainImage: "/magnolia/2.webp",
    figureAlt: "Salon w Apartamencie Magnolia w centrum Krynicy Zdroju",
    galleryImages: magnoliaConfig.photos,
    amenitiesItems: magnoliaConfig.amenities,
  },
  {
    slug: "storczyk",
    name: "Apartament Storczyk",
    title:
      "Apartament jednopokojowy Storczyk 28 m² dla 2-4 osób przy ulicy Cichej 18/5B",
    seoTitle: "Apartament Storczyk w Krynicy Zdroju",
    seoDescription:
      "Jednopokojowy Apartament Storczyk w centrum Krynicy Zdroju: 28 m², 2-4 osoby, parking, winda, internet i w pełni wyposażony aneks kuchenny.",
    descriptionLines: [
      "Drodzy Goście. Witamy serdecznie. Zapraszamy do naszych całorocznych i nowocześnie urządzonych Apartamentów w samym Centrum Krynicy Zdrój. Stąd tylko kilka minut do Pijalni Głównej czy stoku narciarskiego.",
      "Apartament typu studio Storczyk wyposażony jest we wszystko co potrzeba aby miło spędzić czas w pięknym Uzdrowisku. W tym jednopokojowym apartamencie znajdziecie Państwo funkcjonalną łazienkę z prysznicem, w pełni wyposażony aneks kuchenny, telewizor oraz dostęp do internetu. Dodatkowo znajduje się tam rozkładana sofa dla kolejnych 2 osób oraz łóżeczko dla dziecka.",
      "Naszym gościom zapewniamy bezpłatne miejsce parkingowe, a w budynku dostępna jest również winda.",
    ],
    addressLines: ["Krynica Zdrój", "ul. Cicha 18/5B"],
    capacityLabel: "2-4 osób",
    areaLabel: "28m²",
    mainImage: "/storczyk/4.webp",
    figureAlt: "Pokój dzienny w Apartamencie Storczyk w centrum Krynicy Zdroju",
    galleryImages: storczykConfig.photos,
    amenitiesItems: storczykConfig.amenities,
  },
];

export const apartmentsBySlug = apartments.reduce(
  (bySlug, apartment) => ({
    ...bySlug,
    [apartment.slug]: apartment,
  }),
  {} as Record<ApartmentData["slug"], ApartmentData>,
);

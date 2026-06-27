import type { Metadata } from "next";
import { apartmentsBySlug } from "@/app/apartmentData";
import { ApartmentRoutePage } from "@/app/components/ApartmentRoutePage";

const apartment = apartmentsBySlug.magnolia;

export const metadata: Metadata = {
  title: apartment.seoTitle,
  description: apartment.seoDescription,
  alternates: {
    canonical: "/magnolia",
  },
  openGraph: {
    title: apartment.seoTitle,
    description: apartment.seoDescription,
    url: "https://apartamentykrynickie.pl/magnolia",
    siteName: "Apartamenty Krynickie",
    images: [
      {
        url: apartment.mainImage,
        width: 1200,
        height: 630,
        alt: apartment.figureAlt,
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: apartment.seoTitle,
    description: apartment.seoDescription,
    images: [apartment.mainImage],
  },
};

export default function MagnoliaPage() {
  return <ApartmentRoutePage apartment={apartment} />;
}

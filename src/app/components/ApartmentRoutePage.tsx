import Link from "next/link";
import type { ApartmentData } from "@/app/apartmentData";
import { About } from "@/app/components/About";
import { ApartamentLayout } from "@/app/components/ApartamentLayout";
import { FooterAddress } from "@/app/components/FooterAddress";
import { StructuredData } from "@/app/components/StructuredData";
import { ThreeHeroImages } from "@/app/components/ThreeHeroImages";

export const ApartmentRoutePage = ({
  apartment,
}: {
  apartment: ApartmentData;
}) => (
  <div>
    <StructuredData />
    <ThreeHeroImages />

    <nav className="flex gap-8 justify-center bg-primary text-white">
      <Link className="p-4" href="/">
        Strona główna
      </Link>
      <Link className="p-4" href="/#contact">
        Kontakt
      </Link>
    </nav>

    <main className="max-w-[1024px] mx-auto pt-6">
      <ApartamentLayout
        htmlId={apartment.slug}
        title={apartment.title}
        descriptionLines={apartment.descriptionLines}
        galleryImages={apartment.galleryImages}
        amenitiesItems={apartment.amenitiesItems}
        addressLines={apartment.addressLines}
      />
      <About />
    </main>

    <footer className="bg-primary text-white" id="contact">
      <FooterAddress />
    </footer>
  </div>
);

import { ApartamentLayout } from "@/app/components/ApartamentLayout";
import { MainFigure } from "@/app/components/MainFigure";
import { ThreeHeroImages } from "@/app/components/ThreeHeroImages";
import { About } from "@/app/components/About";
import { FooterAddress } from "@/app/components/FooterAddress";
import { NavigationButton } from "@/app/components/NavigationButton";
import { StructuredData } from "@/app/components/StructuredData";
import { apartments } from "@/app/apartmentData";

export default function Home() {
  return (
    <div>
      <StructuredData />
      <ThreeHeroImages />

      <nav className="flex gap-12 justify-center bg-primary">
        <NavigationButton htmlElementId="about" label="O nas" />
        <NavigationButton htmlElementId="contact" label="Kontakt" />
      </nav>

      <main className="max-w-[1024px] mx-auto pt-6">
        <div className="grid gap-8 px-8 md:grid-cols-2">
          {apartments.map((apartment) => (
            <MainFigure
              key={apartment.slug}
              imgSrc={apartment.mainImage}
              altText={apartment.figureAlt}
              topLabel={<p>{apartment.name.replace("Apartament ", "")}</p>}
              lowerLabel={
                <>
                  <p>{apartment.capacityLabel}</p>
                  <p>{apartment.areaLabel}</p>
                </>
              }
              htmlId={apartment.slug}
              priority={true}
            />
          ))}
        </div>
        {apartments.map((apartment) => (
          <ApartamentLayout
            key={apartment.slug}
            htmlId={apartment.slug}
            title={apartment.title}
            descriptionLines={apartment.descriptionLines}
            galleryImages={apartment.galleryImages}
            amenitiesItems={apartment.amenitiesItems}
            addressLines={apartment.addressLines}
          />
        ))}
        <About />
      </main>

      <footer className="bg-primary text-white" id="contact">
        <FooterAddress />
      </footer>
    </div>
  );
}

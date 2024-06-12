import React from "react";
import { ApartamentLayout } from "@/app/components/ApartamentLayout";
import { MainFigure } from "@/app/components/MainFigure";
import { ThreeHeroImages } from "@/app/components/ThreeHeroImages";
import { About } from "@/app/components/About";
import { FooterAddress } from "@/app/components/FooterAddress";
import magnolia from "@/app/magnoliaConfig";
import storczyk from "@/app/storczykConfig";
import { scrollTo } from "@/app/helpers/scrollTo";
import { NavigationButton } from "@/app/components/NavigationButton";

export default function Home() {
  return (
    <div>
      <ThreeHeroImages />

      <nav className="flex gap-12 justify-center bg-primary">
        <NavigationButton htmlElementId="about" label="O nas" />
        <NavigationButton htmlElementId="contact" label="Kontakt" />
      </nav>

      <main className="max-w-[1024px] mx-auto pt-6">
        <div className="md:flex gap-8 justify-between px-8">
          <MainFigure
            imgSrc="/magnolia/2.jpg"
            topLabel={<p>Magnolia</p>}
            lowerLabel={
              <>
                <p>4-5 osób</p>
                <p>41m&#178;</p>
              </>
            }
            htmlId="magnolia"
          />
          <MainFigure
            imgSrc="/storczyk/4.jpg"
            topLabel={<p>Storczyk</p>}
            lowerLabel={
              <>
                <p>2-4 osób</p>
                <p>28m&#178;</p>
              </>
            }
            htmlId="storczyk"
          />
        </div>
        <ApartamentLayout
          htmlId="magnolia"
          title="Apartament dwupokojowy Magnolia 41 m dla 4-5 osób przy ulicy Cichej 14/8B1"
          descriptionLines={[
            "Drodzy Goście. Witamy serdecznie. Zapraszamy do naszych całorocznych i nowocześnie urządzonych Apartamentów w samym Centrum Krynicy Zdrój. Stąd tylko kilka minut do Pijalni Głównej czy stoku narciarskiego.",
            "Apartament dwupokojowy Magnolia wyposażony jest we wszystko co potrzeba aby miło spędzić czas w pięknym Uzdrowisku.  W apartamencie znajdziecie Państwo funkcjonalną łazienkę z prysznicem, w pełni wyposażony aneks kuchenny, dwa telewizory oraz dostęp do  internetu. Dodatkowo znajduje się tam rozkładany fotel dla piątej osoby, łóżeczko dla dziecka oraz biureczko do pracy zdalnej.",
            "Naszym gościom zapewniamy bezpłatne miejsce parkingowe, a w budynku dostępna jest również winda\n",
          ]}
          galleryImages={magnolia.photos}
          amenitiesItems={magnolia.amenities}
          addressLines={["Krynica Zdrój", "ul. Cicha 14/ 8B1"]}
        />
        <ApartamentLayout
          htmlId="storczyk"
          title="Apartament jednopokojowy Storczyk 28 m dla 2-4 osób przy ulicy Cichej 18/5B"
          descriptionLines={[
            "Drodzy Goście. Witamy serdecznie. Zapraszamy do naszych całorocznych i nowocześnie urządzonych Apartamentów w samym Centrum Krynicy Zdrój. Stąd tylko kilka minut do Pijalni Głównej czy stoku narciarskiego.",
            "Apartament  typu studio Storczyk wyposażony jest we wszystko co potrzeba aby miło spędzić czas w pięknym Uzdrowisku.  W tym jednopokojowym apartamencie znajdziecie Państwo funkcjonalną łazienkę z prysznicem, w pełni wyposażony aneks kuchenny, telewizor oraz dostęp do internetu. Dodatkowo znajduje się tam rozkładana sofa dla kolejnych 2 osób oraz łóżeczko dla dziecka.",
            "Naszym gościom zapewniamy bezpłatne miejsce parkingowe, a w budynku dostępna jest również winda",
          ]}
          galleryImages={storczyk.photos}
          amenitiesItems={storczyk.amenities}
          addressLines={["Krynica Zdrój", "ul. Cicha 18/5B"]}
        />
        <About />
      </main>

      <footer className="bg-primary text-white" id="contact">
        <FooterAddress />
      </footer>
    </div>
  );
}

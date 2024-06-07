import React from "react";
import { ApartamentLayout } from "@/app/components/ApartamentLayout";
import { MainFigure } from "@/app/components/MainFigure";

export default function Home() {
  return (
    <main className="max-w-[1024px] mx-auto">
      <nav className="bg-white flex gap-2 justify-center">
        <button className="p-2 text-primary">O nas</button>
        <button className="p-2 text-primary">Kontakt</button>
      </nav>
      <div className="flex gap-8 justify-between px-8">
        <MainFigure
          imgSrc="/magnolia/1.jpg"
          topLabel={<p>Magnolia</p>}
          lowerLabel={
            <>
              <p>2-4 osób</p>
              <p>28m2</p>
            </>
          }
        />
        <MainFigure
          imgSrc="/storczyk/1.jpg"
          topLabel={<p>Storczyk</p>}
          lowerLabel={
            <>
              <p>2-4 osób</p>
              <p>28m2</p>
            </>
          }
        />
      </div>
      <ApartamentLayout
        title="Apartament dwupokojowy Magnolia 41 m dla 4-5 osób przy ulicy Cichej ( Centrum Krynicy)"
        descriptionLines={[
          "Drodzy Goście. Witamy serdecznie. Zapraszamy do naszych całorocznych i nowocześnie urządzonych Apartamentów w samym Centrum Krynicy Zdrój. Stąd tylko kilka minut do Pijalni Głównej czy stoku narciarskiego.",
          "Apartament dwupokojowy Magnolia wyposażony jest we wszystko co potrzeba aby miło spędzić czas w pięknym Uzdrowisku.  W apartamencie znajdziecie Państwo funkcjonalną łazienkę z prysznicem, w pełni wyposażony aneks kuchenny, dwa telewizory oraz dostęp do  internetu. Dodatkowo znajduje się tam rozkładany fotel dla piątej osoby, łóżeczko dla dziecka oraz biureczko do pracy zdalnej.",
          "Naszym gościom zapewniamy bezpłatne miejsce parkingowe, a w budynku dostępna jest również winda\n",
        ]}
        galleryImages={[
          { original: "/magnolia/1.jpg", thumbnail: "/magnolia/1.jpg" },
          { original: "/magnolia/2.jpg", thumbnail: "/magnolia/2.jpg" },
          { original: "/magnolia/3.jpg", thumbnail: "/magnolia/3.jpg" },
          { original: "/magnolia/4.jpg", thumbnail: "/magnolia/4.jpg" },
          { original: "/magnolia/5.jpg", thumbnail: "/magnolia/5.jpg" },
          { original: "/magnolia/6.jpg", thumbnail: "/magnolia/6.jpg" },
          { original: "/magnolia/7.jpg", thumbnail: "/magnolia/7.jpg" },
          { original: "/magnolia/8.jpg", thumbnail: "/magnolia/8.jpg" },
          { original: "/magnolia/9.jpg", thumbnail: "/magnolia/9.jpg" },
          { original: "/magnolia/10.jpg", thumbnail: "/magnolia/10.jpg" },
          { original: "/magnolia/11.jpg", thumbnail: "/magnolia/11.jpg" },
          { original: "/magnolia/12.jpg", thumbnail: "/magnolia/12.jpg" },
          { original: "/magnolia/13.jpg", thumbnail: "/magnolia/13.jpg" },
          { original: "/magnolia/14.jpg", thumbnail: "/magnolia/14.jpg" },
        ]}
      />
      <ApartamentLayout
        title="Apartament jednopokojowy Storczyk 28 m dla 2-4 osób przy ulicy Cichej 18/5B"
        descriptionLines={[
          "Drodzy Goście. Witamy serdecznie. Zapraszamy do naszych całorocznych i nowocześnie urządzonych Apartamentów w samym Centrum Krynicy Zdrój. Stąd tylko kilka minut do Pijalni Głównej czy stoku narciarskiego.",
          "Apartament  typu studio Storczyk wyposażony jest we wszystko co potrzeba aby miło spędzić czas w pięknym Uzdrowisku.  W tym jednopokojowym apartamencie znajdziecie Państwo funkcjonalną łazienkę z prysznicem, w pełni wyposażony aneks kuchenny, telewizor oraz dostęp do internetu. Dodatkowo znajduje się tam rozkładana sofa dla kolejnych 2 osób oraz łóżeczko dla dziecka.",
          "Naszym gościom zapewniamy bezpłatne miejsce parkingowe, a w budynku dostępna jest również winda",
        ]}
        galleryImages={[
          { original: "/storczyk/1.jpg", thumbnail: "/storczyk/1.jpg" },
          { original: "/storczyk/2.jpg", thumbnail: "/storczyk/2.jpg" },
          { original: "/storczyk/3.jpg", thumbnail: "/storczyk/3.jpg" },
          { original: "/storczyk/4.jpg", thumbnail: "/storczyk/4.jpg" },
          { original: "/storczyk/5.jpg", thumbnail: "/storczyk/5.jpg" },
          { original: "/storczyk/6.jpg", thumbnail: "/storczyk/6.jpg" },
          { original: "/storczyk/7.jpg", thumbnail: "/storczyk/7.jpg" },
          { original: "/storczyk/8.jpg", thumbnail: "/storczyk/8.jpg" },
          { original: "/storczyk/9.jpg", thumbnail: "/storczyk/9.jpg" },
          { original: "/storczyk/10.jpg", thumbnail: "/storczyk/10.jpg" },
          { original: "/storczyk/11.jpg", thumbnail: "/storczyk/11.jpg" },
          { original: "/storczyk/12.jpg", thumbnail: "/storczyk/12.jpg" },
          { original: "/storczyk/13.jpg", thumbnail: "/storczyk/13.jpg" },
          { original: "/storczyk/14.jpg", thumbnail: "/storczyk/14.jpg" },
          { original: "/storczyk/15.jpg", thumbnail: "/storczyk/15.jpg" },
        ]}
      />
    </main>
  );
}

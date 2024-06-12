import { MainFigure } from "@/app/components/MainFigure";
import React from "react";
import Image from "next/image";
import { LineDecoration } from "@/app/components/LineDecoration";

export const About = () => {
  return (
    <section className="px-8 py-2 md:py-12 text-gray-700" id="about">
      <h2 className="md:text-2xl mb-2 text-primary">
        O nas. Zapraszamy naszych gości do Krynicy Zdrój oraz do Krynicy
        Morskiej
      </h2>
      <LineDecoration className="mb-6" />
      <div className="md:flex gap-12 mb-4">
        <div className="flex flex-col gap-4 flex-[3_0_0] text-justify ">
          <p>
            W Krynicy Morskiej posiadamy w ofercie apartament w kompleksie
            Nautikka Park.
          </p>

          <p>
            Apartament znajduje się w jednej z najlepszych lokalizacji w Krynicy
            Morskiej w prestiżowym kompleksie Nautikka Park. Obiekt
            zlokalizowany jest zaledwie w odległości 250 m od głównej plaży, do
            której prowadzi szeroki deptak.
          </p>

          <p>
            Dojście do centrum zajmuje zaledwie 10min a tam znajdują się liczne
            restauracje oraz sklepy. Oferujemy w pełni wyposażony apartament
            wraz z miejscem parkingowym. W obiekcie znajduje się winda, plac
            zabaw dla dzieci, siłownia oraz Kids Klub.
          </p>
        </div>
        <div className="w-full aspect-video flex-[2_0_0] my-12 md:my-0">
          <a
            className="block w-full h-full cursor-pointer relative hover:scale-105 duration-500 transition-transform"
            href="https://www.lawendakrynicka.pl"
          >
            <Image
              src="https://www.lawendakrynicka.pl/exterior2.aeed3751.jpg"
              alt="kliknij aby przejść do Lawendy"
              fill
              className="object-cover md:object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="text-[10px] absolute bottom-1 left-1/2 -translate-x-1/2 text-primary bg-white rounded-md px-2 py-1 text-center whitespace-nowrap">
              Przeniesienie na stronę Lawendy
            </div>
          </a>
        </div>
      </div>
      <div className="md:flex gap-12">
        <div className="md:flex flex-[4_0_0] gap-4">
          <MainFigure
            imgSrc="/magnolia/2.jpg"
            topLabel={<p className="text-sm">Magnolia</p>}
            lowerLabel={
              <>
                <p className="text-sm whitespace-nowrap">4-5 osób</p>
                <p className="text-sm">41m&#178;</p>
              </>
            }
            htmlId="magnolia"
          />
          <MainFigure
            imgSrc="/storczyk/4.jpg"
            topLabel={<p className="text-sm">Storczyk</p>}
            lowerLabel={
              <>
                <p className="text-sm whitespace-nowrap">2-4 osób</p>
                <p className="text-sm">28m&#178;</p>
              </>
            }
            htmlId="storczyk"
          />
        </div>
        <div className="flex flex-col gap-4 flex-[4_0_0] text-justify md:mt-4 mb-4 max-md:mb-0">
          <p>
            W Krynicy Zdrój posiadamy w ofercie apartamenty przy ulicy Cichej.
            Krynica to dynamicznie rozwijające się uzdrowisku z licznymi
            atrakcjami jak Góra Parkowa, Jaworzyna Krynicka czy też Pijalnia
            Główna. Apartamenty znajdują się nowym kompleksie przy ulicy Cichej.
            Do każdego apartamentu przynależy miejsce parkingowe w garażu
            podziemny. Przygotowaliśmy nasze Apartament z myślą o dużych i
            małych gościach oraz też tych, którzy muszą pracować zdalnie.
          </p>
          <p>Zapraszamy Państwa i życzymy udanego pobytu!</p>
        </div>
      </div>
    </section>
  );
};

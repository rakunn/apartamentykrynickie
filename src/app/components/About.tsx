import { MainFigure } from "@/app/components/MainFigure";
import React from "react";
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
        <div className="w-full flex-[2_0_0] my-12 md:my-0">
          <a
            className="flex min-h-56 w-full flex-col justify-between rounded-lg border border-primary/40 bg-primary/10 p-6 text-primary shadow-md transition-transform duration-500 hover:scale-105"
            href="https://www.lawendakrynicka.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm uppercase">Krynica Morska</span>
            <span className="text-2xl font-medium">Lawenda Krynicka</span>
            <span className="text-sm">Zobacz apartament nad morzem</span>
          </a>
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="grid gap-6 sm:grid-cols-2">
          <MainFigure
            imgSrc="/magnolia/2.webp"
            altText="Salon w Apartamencie Magnolia w Krynicy Zdroju"
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
            imgSrc="/storczyk/4.webp"
            altText="Pokój dzienny w Apartamencie Storczyk w Krynicy Zdroju"
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
        <div className="flex min-w-0 flex-col gap-4 text-justify lg:mt-4">
          <p>
            W Krynicy Zdrój posiadamy w ofercie apartamenty przy ulicy Cichej.
            Krynica to dynamicznie rozwijające się uzdrowisku z licznymi
            atrakcjami jak Góra Parkowa, Jaworzyna Krynicka czy też Pijalnia
            Główna. Apartamenty znajdują się nowym kompleksie przy ulicy Cichej.
            Do każdego apartamentu przynależy miejsce parkingowe w garażu
            podziemnym. Przygotowaliśmy nasze Apartament z myślą o dużych i
            małych gościach oraz też tych, którzy muszą pracować zdalnie.
          </p>
          <p>Zapraszamy Państwa i życzymy udanego pobytu!</p>
        </div>
      </div>
    </section>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faElevator, faWifi } from "@fortawesome/free-solid-svg-icons";
import { DryerIcon } from "@/icons/dryerIcon";
import { RefrigeratorIcon } from "@/icons/refrigeratorIcon";
import { faShower } from "@fortawesome/free-solid-svg-icons/faShower";
import { TowelIcon } from "@/icons/towelIcon";
import { KitchenIcon } from "@/icons/kitchenIcon";
import { BalconyIcon } from "@/icons/balconyIcon";
import { IronIcon } from "@/icons/ironIcon";
import { KettleIcon } from "@/icons/KettleIcon";
import { faSquareParking } from "@fortawesome/free-solid-svg-icons/faSquareParking";
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons/faPeopleRoof";
import { DishwasherIcon } from "@/icons/dishwasherIcon";
import { faTv } from "@fortawesome/free-solid-svg-icons/faTv";
import { faDog } from "@fortawesome/free-solid-svg-icons/faDog";
import { WashingMachineIcon } from "@/icons/washingMachineIcon";
import React from "react";

const photoDetails = [
  [
    "/storczyk/1.webp",
    1400,
    961,
    "Apartament Storczyk w Krynicy Zdroju - pokój dzienny",
  ],
  [
    "/storczyk/2.webp",
    1400,
    1050,
    "Apartament Storczyk w Krynicy Zdroju - część wypoczynkowa",
  ],
  [
    "/storczyk/3.webp",
    1400,
    1050,
    "Apartament Storczyk w Krynicy Zdroju - sofa i telewizor",
  ],
  [
    "/storczyk/4.webp",
    1400,
    1050,
    "Apartament Storczyk w Krynicy Zdroju - studio z aneksem kuchennym",
  ],
  [
    "/storczyk/5.webp",
    1400,
    1050,
    "Apartament Storczyk w Krynicy Zdroju - wyposażony aneks kuchenny",
  ],
  [
    "/storczyk/6.webp",
    1400,
    1050,
    "Apartament Storczyk w Krynicy Zdroju - strefa spania",
  ],
  [
    "/storczyk/7.webp",
    1400,
    1050,
    "Apartament Storczyk w Krynicy Zdroju - widok pokoju",
  ],
  [
    "/storczyk/8.webp",
    1050,
    1400,
    "Apartament Storczyk w Krynicy Zdroju - łazienka z prysznicem",
  ],
  [
    "/storczyk/9.webp",
    1050,
    1400,
    "Apartament Storczyk w Krynicy Zdroju - wyposażenie łazienki",
  ],
  [
    "/storczyk/10.webp",
    1400,
    1050,
    "Apartament Storczyk w Krynicy Zdroju - balkon",
  ],
  [
    "/storczyk/11.webp",
    1050,
    1400,
    "Apartament Storczyk w Krynicy Zdroju - przedpokój",
  ],
  [
    "/storczyk/12.webp",
    1050,
    1400,
    "Apartament Storczyk w Krynicy Zdroju - szafa i przechowywanie",
  ],
  [
    "/storczyk/13.webp",
    1050,
    1400,
    "Apartament Storczyk w Krynicy Zdroju - wejście do apartamentu",
  ],
  [
    "/storczyk/14.webp",
    1400,
    1050,
    "Apartament Storczyk w Krynicy Zdroju - detal wyposażenia",
  ],
  [
    "/storczyk/15.webp",
    1400,
    1050,
    "Apartament Storczyk w Krynicy Zdroju - dodatkowy widok pokoju",
  ],
] as const;

const photos = photoDetails.map(
  ([original, originalWidth, originalHeight, alt]) => ({
    original,
    thumbnail: original,
    loading: "lazy" as const,
    thumbnailLoading: "lazy" as const,
    originalWidth,
    originalHeight,
    originalAlt: alt,
    thumbnailAlt: alt,
  }),
);

const amenities = [
  {
    label: "Winda",
    Icon: <FontAwesomeIcon width={20} icon={faElevator} color="#e4b471" />,
  },
  {
    label: "Suszarka",
    Icon: <DryerIcon color="#e4b471" />,
  },
  {
    label: "Lodówka",
    Icon: <RefrigeratorIcon color="#e4b471" />,
  },
  {
    label: "Prysznic",
    Icon: <FontAwesomeIcon width={20} icon={faShower} color="#e4b471" />,
  },
  {
    label: "Ręczniki",
    Icon: <TowelIcon color="#e4b471" />,
  },
  {
    label: "Aneks kuchenny",
    Icon: <KitchenIcon color="#e4b471" />,
  },
  {
    label: "Balkon",
    Icon: <BalconyIcon color="#e4b471" />,
  },
  {
    label: "Żelazko",
    Icon: <IronIcon color="#e4b471" />,
  },
  {
    label: "Czajnik",
    Icon: <KettleIcon color="#e4b471" />,
  },
  {
    label: "Parking",
    Icon: <FontAwesomeIcon width={20} icon={faSquareParking} color="#e4b471" />,
  },
  {
    label: "2-4 os.",
    Icon: <FontAwesomeIcon width={20} icon={faPeopleRoof} color="#e4b471" />,
  },
  {
    label: "Zmywarka",
    Icon: <DishwasherIcon color="#e4b471" />,
  },
  {
    label: "Meble balkonowe",
    Icon: <BalconyIcon color="#e4b471" />,
  },
  {
    label: "TV",
    Icon: <FontAwesomeIcon width={20} icon={faTv} color="#e4b471" />,
  },
  {
    label: "Balkon/Taras",
    Icon: <BalconyIcon color="#e4b471" />,
  },
  {
    label: "Piętro 1",
    Icon: <FontAwesomeIcon width={20} icon={faElevator} color="#e4b471" />,
  },
  {
    label: "Akceptacja zwięrząt",
    Icon: <FontAwesomeIcon width={20} icon={faDog} color="#e4b471" />,
  },
  {
    label: "Internet",
    Icon: <FontAwesomeIcon width={20} icon={faWifi} color="#e4b471" />,
  },
  {
    label: "Płyta kuchenna",
    Icon: <KitchenIcon color="#e4b471" />,
  },
  {
    label: "Pralka",
    Icon: <WashingMachineIcon color="#e4b471" />,
  },
];

const storczyk = {
  amenities,
  photos,
};

export default storczyk;

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

const photos = [
  {
    original: "/storczyk/1.webp",
    thumbnail: "/storczyk/1.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/2.webp",
    thumbnail: "/storczyk/2.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/3.webp",
    thumbnail: "/storczyk/3.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/4.webp",
    thumbnail: "/storczyk/4.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/5.webp",
    thumbnail: "/storczyk/5.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/6.webp",
    thumbnail: "/storczyk/6.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/7.webp",
    thumbnail: "/storczyk/7.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/8.webp",
    thumbnail: "/storczyk/8.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/9.webp",
    thumbnail: "/storczyk/9.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/10.webp",
    thumbnail: "/storczyk/10.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/11.webp",
    thumbnail: "/storczyk/11.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/12.webp",
    thumbnail: "/storczyk/12.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/13.webp",
    thumbnail: "/storczyk/13.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/14.webp",
    thumbnail: "/storczyk/14.webp",
    loading: "lazy",
  },
  {
    original: "/storczyk/15.webp",
    thumbnail: "/storczyk/15.webp",
    loading: "lazy",
  },
];

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

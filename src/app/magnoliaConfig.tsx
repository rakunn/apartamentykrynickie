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
    label: "4-5 os.",
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

const magnolia = {
  amenities,
  photos,
};

export default magnolia;

import Image from "next/image";
import React from "react";

interface MainFigureProps {
  imgSrc: string;
  topLabel: string | React.ReactNode;
  lowerLabel: string | React.ReactNode;
}

export const MainFigure = ({
  imgSrc,
  topLabel,
  lowerLabel,
}: MainFigureProps) => {
  return (
    <figure className="relative w-full mt-[23px] aspect-video rounded-xl">
      <Image
        src={imgSrc}
        alt="logo"
        fill
        className="shadow-md aspect-video rounded-lg"
        style={{
          objectFit: "cover",
        }}
      />
      {topLabel ? (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center rounded-md text-lg border border-gray-200 font-medium bg-white p-2 shadow-xl px-4">
          {topLabel}
        </div>
      ) : null}
      {lowerLabel ? (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white text-sm p-2 w-[33%] text-center rounded-md shadow-xl">
          {lowerLabel}
        </div>
      ) : null}
    </figure>
  );
};

import Image from "next/image";
import React from "react";
import { ClickableScroller } from "@/app/components/ClickableScroller";

interface MainFigureProps {
  imgSrc: string;
  topLabel: string | React.ReactNode;
  lowerLabel: string | React.ReactNode;
  htmlId: string;
  priority: boolean;
}

export const MainFigure = ({
  imgSrc,
  topLabel,
  lowerLabel,
  htmlId,
  priority = false,
}: MainFigureProps) => {
  return (
    <ClickableScroller
      className="relative w-full mt-[23px] aspect-video rounded-xl mb-12 md:mb-0 cursor-pointer transition-transform duration-500 hover:scale-105"
      htmlId={htmlId}
    >
      <figure className="">
        <Image
          src={imgSrc}
          alt="logo"
          fill
          className="shadow-md aspect-video rounded-lg"
          style={{
            objectFit: "cover",
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        {topLabel ? (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-fit text-center rounded-md text-lg border border-gray-200 font-medium bg-white p-2 shadow-xl px-4 text-gray-700">
            {topLabel}
          </div>
        ) : null}
        {lowerLabel ? (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white text-sm p-2 min-w-fit md:w-[33%] text-center rounded-md shadow-xl text-gray-700">
            {lowerLabel}
          </div>
        ) : null}
      </figure>
    </ClickableScroller>
  );
};

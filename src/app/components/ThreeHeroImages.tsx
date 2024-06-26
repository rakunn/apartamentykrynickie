import Image from "next/image";

export const ThreeHeroImages = () => {
  return (
    <div className="relative">
      <div className="h-[33vh] flex">
        <div className="relative flex-[1_0_0]">
          <Image
            src="/magnolia/2.webp"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="relative flex-[1_0_0]">
          <Image
            src="/magnolia/1.webp"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="relative flex-[1_0_0]">
          <Image
            src="/storczyk/6.webp"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>
      <h1 className="absolute text-nowrap p-4 md:text-3xl bg-white text-primary w-fit bottom-4 left-1/2 -translate-x-1/2 rounded-lg shadow-xl">
        Apartamenty w centrum Krynicy Zdrój
      </h1>
    </div>
  );
};

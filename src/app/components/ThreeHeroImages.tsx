import Image from "next/image";

export const ThreeHeroImages = () => {
  return (
    <div className="relative">
      <div className="h-[33vh] flex">
        <div className="relative flex-[1_0_0]">
          <Image src="/magnolia/2.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative flex-[1_0_0]">
          <Image src="/magnolia/1.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative flex-[1_0_0]">
          <Image src="/storczyk/6.jpg" alt="" fill className="object-cover" />
        </div>
      </div>
      <h1 className="absolute text-nowrap p-4 text-3xl bg-white text-primary w-fit bottom-4 left-1/2 -translate-x-1/2 rounded-lg shadow-xl">
        Prywatne apartamenty przy ulicy Cichej w Krynicy Zdrój
      </h1>
    </div>
  );
};

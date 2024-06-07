import { Gallery } from "@/app/components/Gallery";
import Amenities from "@/app/components/Amenities";
import { Address } from "@/app/components/Address";

interface ApartamentLayoutProps {
  descriptionLines: string[];
  galleryImages: { original: string; thumbnail: string }[];
  title: string;
}

export const ApartamentLayout = ({
  descriptionLines,
  galleryImages,
  title,
}: ApartamentLayoutProps) => {
  return (
    <div className="px-8 py-12">
      <h2 className="text-2xl mb-8 text-primary">{title}</h2>
      <div className="flex flex-col gap-12">
        <div className="flex gap-12">
          <div className="flex flex-col gap-4 flex-[4_0_0]">
            {descriptionLines.map((line, i) => (
              <p key={i} className="text-justify text-gray-700">
                {line}
              </p>
            ))}
          </div>
          <div className="flex-[3_0_0]">
            <Gallery images={galleryImages} />
          </div>
        </div>
        <div className="flex gap-12 items-stretch">
          <div className="flex-4">
            <Amenities />
          </div>
          <div className="flex-2">
            <Address />
          </div>
        </div>
      </div>
    </div>
  );
};

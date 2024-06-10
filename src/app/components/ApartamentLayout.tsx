import { Gallery } from "@/app/components/Gallery";
import Amenities from "@/app/components/Amenities";
import { Address } from "@/app/components/Address";
import { LineDecoration } from "@/app/components/LineDecoration";

interface ApartamentLayoutProps {
  descriptionLines: string[];
  galleryImages: { original: string; thumbnail: string }[];
  title: string;
  amenitiesItems: { label: string; Icon: React.ReactNode }[];
  addressLines: string[];
}

export const ApartamentLayout = ({
  descriptionLines,
  galleryImages,
  title,
  amenitiesItems,
  addressLines,
}: ApartamentLayoutProps) => {
  return (
    <div className="px-8 py-12">
      <h2 className="text-2xl text-primary">{title}</h2>
      <LineDecoration className="mt-2 mb-6" />
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
            <Amenities items={amenitiesItems} />
          </div>
          <div className="flex-2">
            <Address addressLines={addressLines} />
          </div>
        </div>
      </div>
    </div>
  );
};

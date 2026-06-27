"use client";

import dynamic from "next/dynamic";
import type { ReactImageGalleryItem } from "react-image-gallery";

const Gallery = dynamic(
  () => import("@/app/components/Gallery").then((module) => module.Gallery),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-video w-full rounded-lg bg-gray-100" />
    ),
  },
);

export const LazyGallery = ({
  images,
}: {
  images: readonly ReactImageGalleryItem[];
}) => <Gallery images={images} />;

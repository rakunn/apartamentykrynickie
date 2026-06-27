"use client";

import ImageGallery from "react-image-gallery";
import type { ReactImageGalleryItem } from "react-image-gallery";

export const Gallery = ({
  images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ],
}: {
  images?: readonly ReactImageGalleryItem[];
}) => {
  return (
    <ImageGallery
      lazyLoad
      showThumbnails={false}
      showPlayButton={false}
      showFullscreenButton={false}
      items={images}
    />
  );
};

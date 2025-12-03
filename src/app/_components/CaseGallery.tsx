"use client";

import { useState } from "react";
import BrowserFrame from "./BrowserFrame";
import PhoneFrame from "./PhoneFrame";
import GalleryLightbox from "./GalleryLightbox";

export interface GalleryItem {
  kind: "phone" | "browser";
  src: string;
  alt: string;
}

interface CaseGalleryProps {
  items: GalleryItem[];
}

export default function CaseGallery({ items }: CaseGalleryProps) {
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const handleImageClick = (item: GalleryItem) => {
    setLightboxImage(item);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleImageClick(item)}
          >
            {item.kind === "browser" ? (
              <BrowserFrame
                src={item.src}
                alt={item.alt}
                sizes="(min-width:1024px) 33vw, 100vw"
              />
            ) : (
              <PhoneFrame
                src={item.src}
                alt={item.alt}
                sizes="(min-width:1024px) 33vw, 100vw"
              />
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <GalleryLightbox
          isOpen={!!lightboxImage}
          onClose={closeLightbox}
          src={lightboxImage.src}
          alt={lightboxImage.alt}
        />
      )}
    </>
  );
}

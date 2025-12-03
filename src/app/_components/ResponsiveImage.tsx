import Image from "next/image";
import clsx from "clsx";

type Props = {
  src: string;
  alt: string;
  aspect?: string;     // e.g. "aspect-[16/10]". If omitted, no forced ratio.
  contain?: boolean;   // true for UI screenshots (keeps sharp edges)
  sizes?: string;      // Next.js sizes
  className?: string;
  priority?: boolean;
  quality?: number;    // default 92–95 for crisp UI
};

export default function ResponsiveImage({
  src,
  alt,
  aspect,
  contain = false,
  sizes = "(min-width:1280px) 900px, 100vw",
  className,
  priority = false,
  quality = 95,
}: Props) {
  return (
    <div className={clsx(
      "relative w-full overflow-hidden rounded-2xl",
      aspect,
      className
    )}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        className={clsx(
          "object-cover",
          "will-change-transform"
        )}
        // Optimize for crisp rendering:
        style={{ 
          imageRendering: "high-quality"
        }}
        priority={priority}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </div>
  );
}

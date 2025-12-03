import Image from "next/image";
import clsx from "clsx";

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

export default function PhoneFrame({
  src,
  alt,
  className,
  sizes = "160px",
}: PhoneFrameProps) {
  return (
    <div className={clsx(
      "relative w-full aspect-[9/16] rounded-[2rem] border border-black/10 bg-white shadow-sm overflow-hidden p-2",
      className
    )}>
      {/* Notch */}
      <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-300/80 z-10" />
      
      {/* Inner screen */}
      <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={90}
          className="object-cover"
          style={{ imageRendering: "high-quality" }}
        />
      </div>
    </div>
  );
}

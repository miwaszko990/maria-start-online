import Image from "next/image";
import clsx from "clsx";

export function BrowserFrame({
  src,
  alt,
  className,
  sizes = "(min-width:1024px) 33vw, 100vw",
}: { src: string; alt: string; className?: string; sizes?: string }) {
  return (
    <div className={clsx(
      "relative w-full rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden",
      "aspect-[16/10]",
      className
    )}>
      {/* top chrome */}
      <div className="absolute inset-x-0 top-0 h-8 bg-slate-100/80 border-b border-black/10">
        <div className="flex items-center gap-1 pl-3 pt-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
      </div>
      <Image 
        src={src} 
        alt={alt} 
        fill 
        sizes={sizes} 
        className="object-cover pt-8" 
        quality={95}
        style={{ imageRendering: "high-quality" }}
      />
    </div>
  );
}

export function PhoneFrame({
  src,
  alt,
  className,
}: { src: string; alt: string; className?: string }) {
  return (
    <div className={clsx(
      "relative rounded-[1.6rem] border border-black/10 bg-white shadow-sm overflow-hidden",
      "w-32 sm:w-36 md:w-40 aspect-[9/19]",
      className
    )}>
      <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-300/80" />
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover" 
        sizes="160px"
        quality={95}
        style={{ imageRendering: "high-quality" }}
      />
    </div>
  );
}
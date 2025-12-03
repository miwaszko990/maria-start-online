import Image from "next/image";
import clsx from "clsx";

interface BrowserFrameProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

export default function BrowserFrame({
  src,
  alt,
  className,
  sizes = "(min-width:1024px) 33vw, 100vw",
}: BrowserFrameProps) {
  return (
    <div className={clsx(
      "relative w-full aspect-[3/2] rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden",
      className
    )}>
      {/* Browser top bar */}
      <div className="absolute inset-x-0 top-0 h-8 bg-slate-100/80 border-b border-black/10 z-10">
        <div className="flex items-center gap-1 pl-3 pt-3">
          {/* Traffic light dots */}
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          
          {/* Address bar stub */}
          <div className="ml-3 h-4 bg-white/60 rounded-sm flex-1 max-w-48 border border-black/10">
            <div className="h-full bg-slate-200/60 rounded-sm m-0.5" />
          </div>
        </div>
      </div>
      
      {/* Image content */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={90}
        className="object-cover pt-8"
        style={{ imageRendering: "high-quality" }}
      />
    </div>
  );
}

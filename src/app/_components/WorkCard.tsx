"use client";

import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/app/_data/work";

export default function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className="group block rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-black/5 transition-all motion-safe:transition-all"
      aria-label={`Studium przypadku: ${work.title}`}
    >
      {/* Image area with 16:9 aspect ratio */}
      <div className="aspect-[16/9] relative overflow-visible">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-radial from-indigo-100/60 via-transparent to-transparent blur-2xl" />
        
        {/* Browser frame */}
        <div className="rounded-2xl bg-white border border-black/10 shadow-md p-3 md:p-4 h-[92%] w-[92%] mx-auto mt-[4%]">
          {/* Browser chrome */}
          <div className="flex items-center gap-1 mb-3">
            <div className="h-2 w-2 rounded-full bg-rose-400" />
            <div className="h-2 w-2 rounded-full bg-amber-300" />
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          
          {/* Screenshot */}
          <div className="rounded-lg overflow-hidden h-full bg-slate-50">
            <Image
              src={work.cover}
              alt={`${work.title} — desktop`}
              fill
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              className="object-contain p-2"
              quality={90}
              style={{ imageRendering: "high-quality" }}
            />
          </div>
        </div>
      </div>

      {/* Text footer */}
      <div className="px-4 pb-4 pt-3">
        <div className="font-semibold text-slate-900">{work.title}</div>
        <div className="text-sm text-slate-600 mt-1 line-clamp-2">{work.subtitle}</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {work.tags.map(t => (
            <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
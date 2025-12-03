"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TimelineLightbox from "./TimelineLightbox";

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface CaseTimelineProps {
  steps: TimelineStep[];
}

export default function CaseTimeline({ steps }: CaseTimelineProps) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200" />
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-slate-400" />
                </div>
              </div>

              {/* Content card */}
              <div className={`flex-1 ${
                index % 2 === 0 ? "sm:text-right" : "sm:text-left"
              }`}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/70 backdrop-blur rounded-2xl border border-black/10 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  {/* Small mockup image */}
                  <div 
                    className={`cursor-pointer ${
                      index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                    }`}
                    onClick={() => openLightbox(step.image, step.alt)}
                  >
                    <div className="relative w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 border border-black/10 shadow-sm hover:shadow-md transition-shadow">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        sizes="(min-width:1024px) 40vw, 90vw"
                        className="object-contain p-2"
                        quality={90}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <TimelineLightbox
          isOpen={!!lightboxImage}
          onClose={closeLightbox}
          src={lightboxImage.src}
          alt={lightboxImage.alt}
        />
      )}
    </>
  );
}

"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export default function GalleryLightbox({
  isOpen,
  onClose,
  src,
  alt,
}: GalleryLightboxProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 rounded-full bg-black/20 p-2 text-white hover:bg-black/30 transition-colors"
                  aria-label="Zamknij podgląd"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Image container */}
                <div className="relative w-full aspect-[16/10] bg-slate-50">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width:1024px) 80vw, 95vw"
                    quality={95}
                    className="object-contain"
                    priority
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

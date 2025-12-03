"use client";

import { Check, Circle } from "lucide-react";
import FeatureRequestForm from "./FeatureRequestForm";

export default function FeatureAddonSection() {
  const processSteps = [
    {
      title: "Opisz potrzebę",
      description: "prześlij krótki opis i screen"
    },
    {
      title: "Szybka wycena",
      description: "odeślę zakres i termin (zwykle 1–3 dni)"
    },
    {
      title: "Realizacja",
      description: "po zaliczce 50% wdrożenie i testy"
    }
  ];

  const exampleFeatures = [
    "Custom stopka lub header",
    "Kalendarz rezerwacji na product page",
    "Sekcja opinii klientów / FAQ",
    "Integracja newslettera (Klaviyo / Mailchimp)",
    "IG feed / social proof",
    "Usprawnienia checkoutu / mini-koszyk",
    "Blog preview / karta kolekcji",
    "Inne – opisz, co potrzebujesz"
  ];

  return (
    <section className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-2">
            Masz już stronę, ale chcesz dodać coś nowego?
          </h2>
          <p className="text-sm text-gray-500">
            Feature na życzenie – od 500 zł. Dokładna wycena po krótkiej rozmowie.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Two stacked cards */}
          <div className="space-y-4">
            {/* Process Steps Card */}
            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-5 sm:p-6">
              <h3 className="text-base font-medium text-gray-900 mb-4">
                3 kroki do nowej funkcjonalności
              </h3>
              <div className="space-y-3">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-medium">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{step.title}</h4>
                      <p className="text-sm text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Example Features Card */}
            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-5 sm:p-6">
              <h3 className="text-base font-medium text-gray-900 mb-4">
                Przykładowe funkcjonalności
              </h3>
              <ul className="space-y-2">
                {exampleFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Circle className="w-3 h-3 text-gray-400 fill-current flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div>
            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-5 sm:p-6">
              <FeatureRequestForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

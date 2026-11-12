"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["top", "eksperymenty", "demo", "pakiet", "proces", "cennik", "kontakt"] as const;
type SectionId = (typeof SECTIONS)[number];

const STEPS: { id: SectionId; n: string; label: string }[] = [
  { id: "eksperymenty", n: "01", label: "Realizacje" },
  { id: "demo", n: "02", label: "Demo" },
  { id: "pakiet", n: "03", label: "Co dostajesz" },
  { id: "proces", n: "04", label: "3 dni" },
  { id: "cennik", n: "05", label: "Cennik" },
];

const NEXT: Partial<Record<SectionId, { id: string; label: string }>> = {
  eksperymenty: { id: "demo", label: "DEMO NA ŻYWO" },
  demo: { id: "pakiet", label: "CO DOSTAJESZ" },
  pakiet: { id: "proces", label: "JAK TO WYGLĄDA" },
  proces: { id: "cennik", label: "CENNIK" },
  cennik: { id: "kontakt", label: "KONTAKT" },
};

function useActiveSection() {
  const [active, setActive] = useState<SectionId>("top");
  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

export function StepNav() {
  const active = useActiveSection();
  const activeIdx = SECTIONS.indexOf(active);
  return (
    <nav className="steps mono" aria-label="Sekcje strony">
      {STEPS.map((s) => {
        const idx = SECTIONS.indexOf(s.id);
        const state = idx < activeIdx ? "done" : idx === activeIdx ? "on" : "next";
        const mark = state === "done" ? "✓" : state === "on" ? "●" : "○";
        return (
          <a key={s.id} href={`#${s.id}`} data-state={state} aria-current={state === "on" ? "step" : undefined}>
            <span aria-hidden="true">{mark}</span> {s.n} {s.label}
          </a>
        );
      })}
      <a href="#kontakt" className="btn btn--dark" data-state="cta">
        Wyślij swoją markę →
      </a>
    </nav>
  );
}

export function FloatingCta() {
  const active = useActiveSection();
  if (active === "top" || active === "kontakt") return null;
  const next = NEXT[active];
  return (
    <div className="float mono">
      {next && (
        <a href={`#${next.id}`} className="btn btn--next">
          ↓ DALEJ: {next.label}
        </a>
      )}
      <a href="#kontakt" className="btn btn--dark">
        Napisz do nas →
      </a>
    </div>
  );
}

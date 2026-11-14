"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["top", "eksperymenty", "demo", "pakiet", "cennik", "kontakt"] as const;
type SectionId = (typeof SECTIONS)[number];

const LINKS: { id: SectionId; label: string }[] = [
  { id: "eksperymenty", label: "Realizacje" },
  { id: "demo", label: "Dodatki" },
  { id: "pakiet", label: "Co dostajesz" },
  { id: "cennik", label: "Cennik" },
];

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
  return (
    <nav className="steps" aria-label="Sekcje strony">
      {LINKS.map((s) => (
        <a key={s.id} href={`#${s.id}`} data-state={s.id === active ? "on" : undefined} aria-current={s.id === active ? "true" : undefined}>
          {s.label}
        </a>
      ))}
      <a href="#kontakt" className="btn btn--dark" data-state="cta">
        Zapytaj o sklep
      </a>
    </nav>
  );
}

export function FloatingCta() {
  const active = useActiveSection();
  if (active === "top" || active === "kontakt") return null;
  return (
    <div className="float">
      <a href="#kontakt" className="btn btn--dark">
        Zapytaj o sklep
      </a>
    </div>
  );
}

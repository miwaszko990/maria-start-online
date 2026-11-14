"use client";

import Image from "next/image";
import { useState } from "react";

type Project = {
  code: string;
  name: string;
  status: string;
  url: string;
  question: string;
  specs: [string, string][];
  desktop?: { src: string; alt: string };
  phones: { src: string; alt: string; bg: string }[];
};

const PROJECTS: Project[] = [
  {
    code: "laroue",
    name: "La Roue",
    status: "Działający sklep",
    url: "larouebrand.com",
    question:
      "Sklep marki odzieżowej dla wysokich kobiet. Zrobiliśmy wszystko: projekt, produkty, płatności i start sprzedaży. Zakupy na telefonie są proste od wyboru rozmiaru po płatność.",
    specs: [
      ["Branża", "Odzież dla wysokich kobiet"],
      ["Platforma", "Shopify"],
      ["Zakres", "Cały sklep, od projektu po start sprzedaży"],
      [
        "Funkcje",
        "Tabela wymiarów, powiadom o dostępności, program punktów, newsletter z −5%, nowości i bestsellery, Instagram na stronie",
      ],
    ],
    desktop: { src: "/work/laroue-heroo.png", alt: "Strona główna sklepu La Roue" },
    phones: [{ src: "/work/laroue-nowosci.jpg", alt: "Bestsellery w sklepie La Roue na telefonie", bg: "#f3f3f3" }],
  },
  {
    code: "kumo",
    name: "Kumo Matcha",
    status: "Sklep demo, działa na żywo",
    url: "v0fi10-uy.myshopify.com",
    question: "Pełny sklep dla wymyślonej marki matchy, zrobiony, żeby pokazać, co potrafimy na Shopify. Możesz w nim klikać jak klient: złożyć zestaw z rabatem i dodać produkty do koszyka.",
    specs: [
      ["Branża", "Herbata i akcesoria"],
      ["Platforma", "Shopify"],
      ["Funkcje", "Konfigurator zestawu, warianty gramatury, pasek zaufania"],
    ],
    phones: [
      { src: "/work/kumo-hero.jpg", alt: "Strona główna Kumo Matcha na telefonie", bg: "#efefeb" },
      { src: "/work/kumo-zestaw.jpg", alt: "Konfigurator zestawu Kumo Matcha", bg: "#efefeb" },
      { src: "/work/kumo-karta.jpg", alt: "Karta produktu Kumo Matcha", bg: "#efefeb" },
    ],
  },
];

export default function ProjectSwitcher() {
  const [i, setI] = useState(0);
  const p = PROJECTS[i];
  const phoneW = p.desktop ? "clamp(78px, 20vw, 170px)" : "clamp(92px, 26vw, 210px)";

  return (
    <div className="switcher rv" id="eksperymenty">
      <div className="tabs" role="tablist" aria-label="Realizacje">
        {PROJECTS.map((x, idx) => (
          <button
            key={x.code}
            role="tab"
            aria-selected={idx === i}
            aria-controls="exp-panel"
            className="tab"
            onClick={() => setI(idx)}
          >
            <span className="tab__code">{x.status}</span>
            <span className="tab__name">{x.name}</span>
          </button>
        ))}
      </div>

      <div className="switcher__body" id="exp-panel" role="tabpanel">
        <div className="switcher__stage" key={p.code}>
          {p.desktop && (
            <div className="browser stage-anim">
              <div className="browser__bar">
                <span className="browser__dot" />
                <span className="browser__dot" />
                <span className="browser__dot" />
                <span className="browser__url mono">{p.url}</span>
              </div>
              <Image src={p.desktop.src} alt={p.desktop.alt} width={1280} height={752} sizes="(max-width: 900px) 100vw, 640px" priority={i === 0} />
            </div>
          )}
          {p.phones.map((ph, k) => (
            <div
              key={ph.src}
              className="phone stage-anim"
              style={{
                width: phoneW,
                flexShrink: 0,
                animationDelay: `${0.08 * (k + 1)}s`,
                                ...(p.desktop ? { marginLeft: "clamp(-60px, -6vw, -24px)", position: "relative" } : {}),
              }}
            >
              <div className="phone__screen" style={{ background: ph.bg }}>
                <div className="phone__status mono" aria-hidden="true">
                  <span>9:41</span>
                </div>
                <Image src={ph.src} alt={ph.alt} width={660} height={1344} sizes="210px" />
              </div>
            </div>
          ))}
        </div>

        <div className="switcher__info">
          <p className="kicker" style={{ margin: 0 }}>
            {p.status}
          </p>
          <h3 className="switcher__name">{p.name}</h3>
          <p className="lead" style={{ fontSize: 17 }}>
            {p.question}
          </p>
          <dl className="specs">
            {p.specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          {p.url && (
            <a href={`https://${p.url}`} target="_blank" rel="noopener" className="link-arrow">
              {p.code === "laroue" ? "Otwórz larouebrand.com ↗" : "Otwórz sklep demo ↗"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

const MAIL = "hello@online-lab.pl";

const PLANS = [
  {
    tab: "Start · wizytówka",
    kicker: "Pakiet Start",
    price: "750 zł",
    time: "Gotowa w 2 dni",
    lead: "Prosta strona, dzięki której klienci znajdą Cię w internecie i łatwo się skontaktują.",
    items: [
      "Jedna przewijana strona, do 5 sekcji",
      "Dopracowana pod telefon",
      "Formularz kontaktowy i linki do social mediów",
      "Może sprzedawać e-book, kurs albo bilety",
    ],
    cta: "Zapytaj o stronę",
    subject: "Pakiet Start",
  },
  {
    tab: "Pro · sklep internetowy",
    kicker: "Pakiet Pro",
    price: "1499 zł",
    time: "Gotowy w 3 dni",
    lead: "Twój własny sklep, gotowy do przyjmowania zamówień od pierwszego dnia.",
    items: [
      "Do 10 produktów, koszyk i płatność",
      "BLIK, karta i szybki przelew",
      "Newsletter do zbierania maili klientów",
      "Uruchomienie pod Twoim adresem www",
      "Instrukcja wideo, jak obsługiwać sklep",
    ],
    cta: "Zapytaj o sklep",
    subject: "Pakiet Pro",
  },
  {
    tab: "Nowa funkcja",
    kicker: "Masz już sklep lub stronę",
    price: "od 500 zł",
    time: "Wycena w 1–3 dni",
    lead: "Dokładamy to, czego brakuje w Twoim obecnym sklepie, na przykład konfigurator zestawu z demo powyżej.",
    items: [
      "Konfigurator zestawu z rabatem",
      "Kalendarz rezerwacji przy produkcie lub usłudze",
      "Sekcja opinii klientów lub FAQ",
      "Zdjęcia z Instagrama na stronie",
      "Wygodniejszy koszyk i płatność",
    ],
    cta: "Opisz, czego potrzebujesz",
    subject: "Nowa funkcja",
  },
];

export default function PricingTabs() {
  const [i, setI] = useState(1);
  const p = PLANS[i];
  return (
    <div className="pricing rv">
      <div className="tabs" role="tablist" aria-label="Pakiety">
        {PLANS.map((x, idx) => (
          <button key={x.tab} role="tab" aria-selected={idx === i} className="tab" onClick={() => setI(idx)}>
            <span className="tab__name" style={{ fontSize: 16 }}>
              {x.tab}
            </span>
          </button>
        ))}
      </div>
      <div className="pricing__body" role="tabpanel" key={p.kicker}>
        <div className="pricing__left stage-anim">
          <p className="kicker" style={{ margin: 0 }}>
            {p.kicker}
          </p>
          <p className="pricing__price">{p.price}</p>
          <p className="pricing__time">{p.time}</p>
          <p className="lead">{p.lead}</p>
        </div>
        <div className="pricing__right stage-anim">
          <ul className="pricing__list">
            {p.items.map((it) => (
              <li key={it}>
                <span aria-hidden="true">✓</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
          <a className="btn btn--dark" href={`mailto:${MAIL}?subject=${encodeURIComponent(p.subject)}`}>
            {p.cta}
          </a>
        </div>
      </div>
    </div>
  );
}

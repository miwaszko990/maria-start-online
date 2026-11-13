"use client";

import Image from "next/image";
import { useState } from "react";

const ITEMS = [
  { id: "cer", name: "Ceremonial", kind: "Matcha · 30 g", price: 89, img: "/demo/ceremonial.jpg" },
  { id: "daily", name: "Daily", kind: "Matcha · 50 g", price: 69, img: "/demo/daily.jpg" },
  { id: "chawan", name: "Chawan", kind: "Miska", price: 149, img: "/demo/chawan.jpg" },
  { id: "chasen", name: "Chasen", kind: "Trzepaczka", price: 79, img: "/demo/chasen.jpg" },
  { id: "chashaku", name: "Chashaku", kind: "Łyżeczka", price: 29, img: "/demo/chashaku.jpg" },
  { id: "kuse", name: "Kusenaoshi", kind: "Stojak", price: 39, img: "/demo/kusenaoshi.jpg" },
];

const zl = (n: number) =>
  n
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " zł";

const rateFor = (c: number) => (c >= 5 ? 0.2 : c >= 3 ? 0.15 : c >= 2 ? 0.1 : 0);
const produkt = (n: number) => (n === 1 ? "produkt" : n < 5 ? "produkty" : "produktów");

function hint(c: number) {
  if (c >= 5) return "Masz maksymalny rabat −20%";
  if (c >= 3) return `Dodaj jeszcze ${5 - c} ${produkt(5 - c)}, a rabat wzrośnie do −20%`;
  if (c === 2) return "Dodaj jeszcze 1 produkt, a rabat wzrośnie do −15%";
  return `Dodaj ${2 - c} ${produkt(2 - c)}, żeby dostać −10%`;
}

const NOTES = [
  ["Dodaje jednym kliknięciem", "Produkty są obok siebie, nie trzeba przechodzić między stronami."],
  ["Widzi, ile brakuje do rabatu", "Podpowiedź i pasek zachęcają, żeby dorzucić jeszcze jedną rzecz."],
  ["Rabat liczy się sam", "Cena w koszyku zmienia się od razu. Ty nic nie przeliczasz."],
];

export default function BundleDemo() {
  const [picked, setPicked] = useState<string[]>(["cer", "chasen"]);
  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const count = picked.length;
  const sum = ITEMS.filter((x) => picked.includes(x.id)).reduce((a, x) => a + x.price, 0);
  const rate = rateFor(count);
  const total = sum * (1 - rate);

  return (
    <div className="bdemo rv">
      <div className="bdemo__stage">
        <p className="bdemo__try mono" aria-hidden="true">
          ↓ KLIKNIJ PRODUKTY W TELEFONIE
        </p>
        <div className="phone bdemo__phone">
          <div className="phone__screen kumo">
            <div className="phone__status mono" aria-hidden="true">
              <span>9:41</span>
            </div>
            <div className="kumo__bar">
              <span aria-hidden="true">☰</span>
              <span className="kumo__logo">KUMO MATCHA</span>
              <span className="kumo__cart" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 8h14l-1 12H6L5 8Z" />
                  <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                </svg>
                <b>{count}</b>
              </span>
            </div>
            <div className="kumo__body">
              <p className="kumo__kicker">ZESTAW KUMO</p>
              <p className="kumo__h">
                Im więcej w koszyku, <em>tym mniej płacisz.</em>
              </p>
              <ul className="kumo__list">
                {ITEMS.map((it) => {
                  const on = picked.includes(it.id);
                  return (
                    <li key={it.id}>
                      <button className="kumo__item" aria-pressed={on} onClick={() => toggle(it.id)}>
                        <Image src={it.img} alt="" width={120} height={120} />
                        <span className="kumo__txt">
                          <span className="kumo__name">{it.name}</span>
                          <span className="kumo__kind">{it.kind}</span>
                        </span>
                        <span className="kumo__price">{it.price} zł</span>
                        <span className="kumo__add" aria-hidden="true">
                          {on ? "✓" : "+"}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="kumo__sticky" aria-live="polite">
              <p className="kumo__hint">{hint(count)}</p>
              <div className="kumo__track">
                <div className="kumo__fill" style={{ width: `${Math.min(count / 5, 1) * 100}%` }} />
              </div>
              <div className="kumo__sum">
                <span>
                  Twój zestaw · {count} {produkt(count)}
                  <br />
                  <strong>{zl(total)}</strong>
                  {rate > 0 && <s>{zl(sum)}</s>}
                </span>
                <span className="kumo__cta">{rate > 0 ? `−${Math.round(rate * 100)}%` : "Do koszyka"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bdemo__notes">
        <p className="kicker mono" style={{ margin: 0 }}>
          CO WIDZI TWOJA KLIENTKA
        </p>
        <ol>
          {NOTES.map(([t, d], i) => (
            <li key={t}>
              <span className="mono bdemo__n">0{i + 1}</span>
              <span>
                <strong>{t}</strong>
                <br />
                {d}
              </span>
            </li>
          ))}
        </ol>
        <p className="bdemo__tiers mono">2 PRODUKTY −10% · 3 PRODUKTY −15% · 5 PRODUKTÓW −20%</p>
        <a className="btn btn--dark" href="mailto:hello@online-lab.pl?subject=Zestaw%20z%20rabatem%20w%20moim%20sklepie">
          Chcę to w moim sklepie →
        </a>
      </div>
    </div>
  );
}

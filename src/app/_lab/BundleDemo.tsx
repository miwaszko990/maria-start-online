"use client";

import { useState } from "react";

const ITEMS = [
  { id: "cer", name: "Ceremonial", kind: "MATCHA · 30 G", price: 89 },
  { id: "daily", name: "Daily", kind: "MATCHA · 50 G", price: 69 },
  { id: "chawan", name: "Chawan", kind: "MISKA", price: 149 },
  { id: "chasen", name: "Chasen", kind: "TRZEPACZKA", price: 79 },
  { id: "chashaku", name: "Chashaku", kind: "ŁYŻECZKA", price: 29 },
  { id: "kuse", name: "Kusenaoshi", kind: "STOJAK", price: 39 },
];

const zl = (n: number) =>
  n
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " zł";

const rateFor = (c: number) => (c >= 5 ? 0.2 : c >= 3 ? 0.15 : c >= 2 ? 0.1 : 0);
const produkt = (n: number) => (n === 1 ? "produkt" : n < 5 ? "produkty" : "produktów");

function hint(c: number) {
  if (c >= 5) return "Masz maksymalny rabat −20%.";
  if (c >= 3) return `Dodaj jeszcze ${5 - c} ${produkt(5 - c)}, żeby mieć −20%.`;
  if (c === 2) return "Dodaj jeszcze 1 produkt, żeby mieć −15%.";
  return `Wybierz ${2 - c} ${produkt(2 - c)}, żeby dostać pierwszy rabat.`;
}

export default function BundleDemo() {
  const [picked, setPicked] = useState<string[]>(["cer", "chasen"]);
  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const count = picked.length;
  const sum = ITEMS.filter((x) => picked.includes(x.id)).reduce((a, x) => a + x.price, 0);
  const rate = rateFor(count);
  const off = sum * rate;

  return (
    <div className="demo rv">
      <div className="demo__grid">
        {ITEMS.map((it) => {
          const on = picked.includes(it.id);
          return (
            <button key={it.id} className="pick" aria-pressed={on} onClick={() => toggle(it.id)}>
              <span className="pick__kind mono">{it.kind}</span>
              <span className="pick__name">{it.name}</span>
              <span className="pick__row mono">
                <span>{it.price} zł</span>
                <span aria-hidden="true">{on ? "✓ W ZESTAWIE" : "+ DODAJ"}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="demo__sum" aria-live="polite">
        <div>
          <div className="demo__tiers mono">
            <span>2 SZT. −10%</span>
            <span>3 SZT. −15%</span>
            <span>5 SZT. −20%</span>
          </div>
          <div className="demo__track">
            <div className="demo__bar" style={{ width: `${Math.min(count / 5, 1) * 100}%` }} />
          </div>
        </div>
        <p className="demo__hint">{hint(count)}</p>
        <dl className="demo__lines mono">
          <div>
            <dt>Produkty ({count})</dt>
            <dd>{zl(sum)}</dd>
          </div>
          <div>
            <dt>Rabat za zestaw {rate ? `−${Math.round(rate * 100)}%` : ""}</dt>
            <dd>{off ? `−${zl(off)}` : "—"}</dd>
          </div>
        </dl>
        <div className="demo__total">
          <span className="mono" style={{ fontSize: 12 }}>
            RAZEM
          </span>
          <strong>{zl(sum - off)}</strong>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

const zl = (n: number) =>
  n
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " zł";

const produkt = (n: number) => (n === 1 ? "produkt" : n < 5 ? "produkty" : "produktów");

function Bag({ count }: { count: number }) {
  return (
    <span className="kumo__cart" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 8h14l-1 12H6L5 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
      <b>{count}</b>
    </span>
  );
}

/* ---------- 1. Zestaw z rabatem (Kumo) ---------- */

const KUMO = [
  { id: "cer", name: "Ceremonial", kind: "Matcha · 30 g", price: 89, img: "/demo/ceremonial.jpg" },
  { id: "daily", name: "Daily", kind: "Matcha · 50 g", price: 69, img: "/demo/daily.jpg" },
  { id: "chawan", name: "Chawan", kind: "Miska", price: 149, img: "/demo/chawan.jpg" },
  { id: "chasen", name: "Chasen", kind: "Trzepaczka", price: 79, img: "/demo/chasen.jpg" },
  { id: "chashaku", name: "Chashaku", kind: "Łyżeczka", price: 29, img: "/demo/chashaku.jpg" },
  { id: "kuse", name: "Kusenaoshi", kind: "Stojak", price: 39, img: "/demo/kusenaoshi.jpg" },
];

const rateFor = (c: number) => (c >= 5 ? 0.2 : c >= 3 ? 0.15 : c >= 2 ? 0.1 : 0);

function bundleHint(c: number) {
  if (c >= 5) return "Masz maksymalny rabat −20%";
  if (c >= 3) return `Dodaj jeszcze ${5 - c} ${produkt(5 - c)}, a rabat wzrośnie do −20%`;
  if (c === 2) return "Dodaj jeszcze 1 produkt, a rabat wzrośnie do −15%";
  return `Dodaj ${2 - c} ${produkt(2 - c)}, żeby dostać −10%`;
}

function KumoScreen() {
  const [picked, setPicked] = useState<string[]>(["cer", "chasen"]);
  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const count = picked.length;
  const sum = KUMO.filter((x) => picked.includes(x.id)).reduce((a, x) => a + x.price, 0);
  const rate = rateFor(count);
  const total = sum * (1 - rate);

  return (
    <div className="phone__screen kumo">
      <div className="phone__status mono" aria-hidden="true">
        <span>9:41</span>
      </div>
      <div className="kumo__bar">
        <span aria-hidden="true">☰</span>
        <span className="kumo__logo">KUMO MATCHA</span>
        <Bag count={count} />
      </div>
      <div className="kumo__body">
        <p className="kumo__kicker">ZESTAW KUMO</p>
        <p className="kumo__h">
          Im więcej w koszyku, <em>tym mniej płacisz.</em>
        </p>
        <ul className="kumo__list">
          {KUMO.map((it) => {
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
        <p className="kumo__hint">{bundleHint(count)}</p>
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
  );
}

/* ---------- 2. Koszyk z „pasuje do” ---------- */

const CLOTHES = [
  { id: "top", name: "Bluzka w paski", variant: "Rozmiar M", price: 189, img: "/demo/cart/top-p.jpg" },
  { id: "jeans", name: "Jeansy wide leg", variant: "Rozmiar M", price: 259, img: "/demo/cart/jeans-p.jpg" },
  { id: "shoes", name: "Czółenka slingback", variant: "Rozmiar 38", price: 229, img: "/demo/cart/shoes-p.jpg" },
  { id: "bag", name: "Torba ze skóry", variant: "Szara", price: 349, img: "/demo/cart/bag-p.jpg" },
];
const FREE_SHIP = 499;
const GIFT = 799;
const SHIP = 14.99;

function cartHint(sum: number) {
  if (sum >= GIFT) return "Masz darmową dostawę i prezent: torbę bawełnianą gratis";
  if (sum >= FREE_SHIP) return `Darmowa dostawa jest Twoja. Brakuje ${zl(GIFT - sum)} do prezentu`;
  return `Brakuje ${zl(FREE_SHIP - sum)} do darmowej dostawy`;
}

function CartScreen() {
  const [inCart, setInCart] = useState<string[]>(["top", "jeans"]);
  const items = CLOTHES.filter((x) => inCart.includes(x.id));
  const recs = CLOTHES.filter((x) => !inCart.includes(x.id));
  const sum = items.reduce((a, x) => a + x.price, 0);
  const ship = sum >= FREE_SHIP || sum === 0 ? 0 : SHIP;
  const gift = sum >= GIFT;
  const count = items.length + (gift ? 1 : 0);

  return (
    <div className="phone__screen kumo cart">
      <div className="phone__status mono" aria-hidden="true">
        <span>9:41</span>
      </div>
      <div className="cart__page" aria-hidden="true">
        <div className="kumo__bar">
          <span>☰</span>
          <span className="cart__logo">OKRA STUDIO</span>
          <Bag count={count} />
        </div>
        <Image src="/demo/cart/look.jpg" alt="" width={600} height={750} className="cart__look" />
        <p className="cart__pagetitle">Bluzka w paski oversize</p>
      </div>
      <div className="cart__scrim" aria-hidden="true" />
      <div className="cart__drawer">
      <div className="kumo__bar">
        <span className="cart__title">Twój koszyk ({count})</span>
        <span className="cart__close" aria-hidden="true">
          ✕
        </span>
      </div>

      <div className="cart__progress" aria-live="polite">
        <p className="kumo__hint">{cartHint(sum)}</p>
        <div className="cart__track">
          <div className="cart__fill" style={{ width: `${Math.min(sum / GIFT, 1) * 100}%` }} />
          <span className="cart__mark" style={{ left: `${(FREE_SHIP / GIFT) * 100}%` }} />
        </div>
        <div className="cart__marks mono">
          <span>DOSTAWA 0 ZŁ</span>
          <span>PREZENT</span>
        </div>
      </div>

      <div className="kumo__body cart__body">
        <ul className="cart__list">
          {items.map((it) => (
            <li key={it.id} className="cart__item">
              <Image src={it.img} alt="" width={120} height={120} />
              <span className="kumo__txt">
                <span className="cart__name">{it.name}</span>
                <span className="kumo__kind">{it.variant}</span>
                <button className="cart__remove" onClick={() => setInCart((c) => c.filter((x) => x !== it.id))}>
                  Usuń
                </button>
              </span>
              <span className="kumo__price">{it.price} zł</span>
            </li>
          ))}
          {gift && (
            <li className="cart__item cart__gift">
              <span className="cart__giftimg" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="55%" height="55%" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M5 9h14l-1.2 11H6.2L5 9Z" />
                  <path d="M9 9V7a3 3 0 0 1 6 0v2" />
                </svg>
              </span>
              <span className="kumo__txt">
                <span className="cart__name">Torba bawełniana</span>
                <span className="kumo__kind">Prezent</span>
              </span>
              <span className="kumo__price">
                <s>39 zł</s> 0 zł
              </span>
            </li>
          )}
          {items.length === 0 && <li className="cart__empty">Koszyk jest pusty. Dodaj coś z propozycji poniżej.</li>}
        </ul>

        {recs.length > 0 && (
          <>
            <p className="kumo__kicker cart__kicker">PASUJE DO</p>
            <div className="cart__recs">
              {recs.map((it) => (
                <button key={it.id} className="cart__rec" onClick={() => setInCart((c) => [...c, it.id])}>
                  <Image src={it.img} alt="" width={120} height={120} />
                  <span className="cart__name">{it.name}</span>
                  <span className="cart__recrow">
                    <span>{it.price} zł</span>
                    <span className="cart__plus">+ Dodaj</span>
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="cart__foot">
        <div className="cart__line">
          <span>Produkty</span>
          <span>{zl(sum)}</span>
        </div>
        <div className="cart__line">
          <span>Dostawa InPost</span>
          <span>{ship ? zl(ship) : "Gratis"}</span>
        </div>
        <div className="cart__pay">Do kasy · {zl(sum + ship)}</div>
      </div>
      </div>
    </div>
  );
}

/* ---------- Zakładki ---------- */

const TABS = [
  {
    id: "zestaw",
    label: "Zestaw z rabatem",
    hint: "Kliknij produkty w telefonie",
    notes: [
      ["Dodaje jednym kliknięciem", "Produkty są obok siebie, nie trzeba przechodzić między stronami."],
      ["Widzi, ile brakuje do rabatu", "Podpowiedź i pasek zachęcają, żeby dorzucić jeszcze jedną rzecz."],
      ["Rabat liczy się sam", "Cena w koszyku zmienia się od razu. Ty nic nie przeliczasz."],
    ],
    tiers: "2 produkty −10%, 3 produkty −15%, 5 produktów −20%",
    subject: "Zestaw z rabatem w moim sklepie",
  },
  {
    id: "koszyk",
    label: "Koszyk z „pasuje do”",
    hint: "Dodaj coś z „pasuje do”",
    notes: [
      ["Widzi, ile brakuje do darmowej dostawy", "Pasek rośnie z każdym produktem, więc łatwiej dorzucić jeszcze jedną rzecz."],
      ["Dostaje propozycje „pasuje do”", "Produkty dobrane do tego, co już jest w koszyku, dodawane jednym kliknięciem."],
      ["Odblokowuje prezent", "Od ustalonej kwoty gratis sam trafia do koszyka."],
    ],
    tiers: "Darmowa dostawa od 499 zł, prezent od 799 zł",
    subject: "Koszyk z pasuje do w moim sklepie",
  },
];

export default function BundleDemo() {
  const [tab, setTab] = useState(0);
  const t = TABS[tab];

  return (
    <div className="bdemo-wrap rv">
      <div className="tabs bdemo__tabs" role="tablist" aria-label="Przykłady funkcji">
        {TABS.map((x, i) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={i === tab}
            aria-controls="demo-panel"
            className="tab"
            onClick={() => setTab(i)}
          >
            <span className="tab__name">{x.label}</span>
          </button>
        ))}
      </div>
      <div className="bdemo" id="demo-panel" role="tabpanel">
        <div className="bdemo__stage">
          <p className="bdemo__try" aria-hidden="true">
            {t.hint}
          </p>
          <div className="phone bdemo__phone" key={t.id}>
            {t.id === "zestaw" ? <KumoScreen /> : <CartScreen />}
          </div>
          <p className="bdemo__note">{t.id === "zestaw" ? "Sklep koncepcyjny Kumo Matcha" : "Sklep przykładowy, zdjęcia poglądowe"}</p>
        </div>

        <div className="bdemo__notes">
          <p className="kicker" style={{ margin: 0 }}>
            Co widzi Twój klient
          </p>
          <ol>
            {t.notes.map(([title, d], i) => (
              <li key={title}>
                <span className="bdemo__n">{i + 1}</span>
                <span>
                  <strong>{title}</strong>
                  <br />
                  {d}
                </span>
              </li>
            ))}
          </ol>
          <p className="bdemo__tiers">{t.tiers}</p>
          <a className="btn btn--dark" href={`mailto:hello@online-lab.pl?subject=${encodeURIComponent(t.subject)}`}>
            Chcę to w moim sklepie
          </a>
        </div>
      </div>
    </div>
  );
}

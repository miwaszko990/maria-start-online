import ProjectSwitcher from "./_lab/ProjectSwitcher";
import BundleDemo from "./_lab/BundleDemo";
import PricingTabs from "./_lab/PricingTabs";
import { StepNav, FloatingCta } from "./_lab/StepNav";

const MAIL = "hello@online-lab.pl";

const SPEC: [string, string][] = [
  ["SKLEP", "Projekt pod Twoje zdjęcia i styl, do 6 podstron, do 10 produktów na start"],
  ["TELEFON", "Projektowany najpierw pod telefon, szybko się ładuje"],
  ["PŁATNOŚCI", "BLIK, karta i szybki przelew (Przelewy24, Stripe)"],
  ["NEWSLETTER", "Okienko zapisu i automatyczny e-mail powitalny (Klaviyo lub Mailchimp)"],
  ["STATYSTYKI", "Skąd przychodzą klienci i co kupują, także z reklam na Instagramie"],
  ["GOOGLE", "Podstawowe ustawienia, żeby Google znalazł sklep"],
  ["PO STARCIE", "Wideo, jak samodzielnie obsługiwać sklep"],
];

const FAQ: [string, string][] = [
  [
    "Naprawdę 3 dni?",
    "Tak, 3 dni od otrzymania kompletu materiałów. Jedyne, na co nie mamy wpływu, to weryfikacja konta u operatora płatności. Zgłaszamy ją od razu, żeby zdążyła na start.",
  ],
  [
    "Co muszę przygotować?",
    "Logo, zdjęcia produktów i kilka zdań o marce. Jeśli czegoś brakuje, pomożemy to przygotować.",
  ],
  [
    "Jak wygląda płatność?",
    "Bez zaliczki. Płacisz dopiero, gdy sklep jest gotowy i go zaakceptujesz.",
  ],
  [
    "Czy sama zmienię teksty i produkty?",
    "Tak. Pokażemy Ci, jak to robić. Większe zmiany możesz zlecić nam osobno.",
  ],
  [
    "Kto zajmie się domeną?",
    "My. Pomożemy kupić adres strony i wszystko podłączymy. Masz już domenę? Podepniemy sklep pod nią.",
  ],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://online-lab.pl/#studio",
      name: "Online Lab",
      url: "https://online-lab.pl",
      email: MAIL,
      description:
        "Projektowanie sklepów internetowych na Shopify dla marek odzieżowych, beauty i lifestyle. Sklep gotowy w 3 dni.",
      areaServed: "PL",
      inLanguage: "pl",
      priceRange: "750–1499 zł",
      makesOffer: [
        { "@type": "Offer", name: "Pakiet Start · strona wizytówka", price: "750", priceCurrency: "PLN" },
        { "@type": "Offer", name: "Pakiet Pro · sklep internetowy", price: "1499", priceCurrency: "PLN" },
        { "@type": "Offer", name: "Nowa funkcja w sklepie", price: "500", priceCurrency: "PLN" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

function Thread({ to, label }: { to: string; label: string }) {
  return (
    <div className="wrap">
      <a className="thread" href={`#${to}`}>
        <span className="thread__line" aria-hidden="true" />
        <span className="thread__label mono">↓ DALEJ: {label}</span>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="status mono">
        <div className="wrap">
          <span>
            <span className="dot-ok">●</span> STATUS: PRZYJMUJEMY PROJEKTY
          </span>
          <span>CZAS REALIZACJI: 3 DNI</span>
          <span>PAKIET PRO: 1499 ZŁ</span>
          <span>LIVE: LAROUEBRAND.COM</span>
        </div>
      </div>

      <header className="nav">
        <div className="wrap">
          <a href="#top" className="brand">
            <span className="brand__name mono">Online Lab_</span>
            <span className="brand__tag mono">[ studio sklepów ]</span>
          </a>
          <StepNav />
        </div>
        <div className="progress" aria-hidden="true" />
      </header>

      <main>
        <section className="hero wrap" id="top">
          <p className="kicker mono in">PROJEKTOWANIE SKLEPÓW INTERNETOWYCH · SHOPIFY</p>
          <div className="hero__row">
            <h1 className="h1 in">
              Sklep dla Twojej marki. Gotowy w 3 dni<span className="blink">_</span>
            </h1>
            <div className="hero__side in d2">
              <p className="lead">
                Projektujemy, budujemy i uruchamiamy sklepy internetowe dla nowych marek i tych, które wyrosły
                z Instagrama. BLIK, newsletter i statystyki w pakiecie.
              </p>
              <div className="hero__btns">
                <a href="#kontakt" className="btn btn--dark">
                  Wyślij swoją markę →
                </a>
                <a href="#demo" className="btn btn--ghost">
                  Zobacz demo
                </a>
              </div>
            </div>
          </div>
          <ProjectSwitcher />
        </section>

        <Thread to="demo" label="DEMO NA ŻYWO" />

        <section className="section wrap" id="demo">
          <div className="section__head">
            <div>
              <p className="kicker mono">DEMO NA ŻYWO · ZE SKLEPU KUMO MATCHA</p>
              <h2 className="h2 rv">Klientka sama składa większy koszyk.</h2>
            </div>
            <p className="lead rv">
              Konfigurator zestawu z rabatem za więcej produktów. Klient sam składa większy koszyk, a rabat liczy
              się automatycznie. Takie rozwiązanie możemy dodać do Twojego sklepu.
            </p>
          </div>
          <BundleDemo />
        </section>

        <Thread to="pakiet" label="CO DOSTAJESZ" />

        <section className="section wrap" id="pakiet">
          <div className="spec">
            <div className="spec__intro">
              <p className="kicker mono">SPECYFIKACJA · PAKIET PRO</p>
              <h2 className="h2 rv">Co dokładnie dostajesz.</h2>
            </div>
            <dl className="spec__list">
              {SPEC.map(([k, v]) => (
                <div key={k} className="rv">
                  <dt className="mono">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Thread to="proces" label="JAK TO WYGLĄDA" />

        <section className="section wrap days" id="proces">
          <div className="days__rule wipe" aria-hidden="true" />
          <div className="section__head" style={{ marginBottom: 0 }}>
            <div>
              <p className="kicker mono">PROCES</p>
              <h2 className="h2 h2--lg rv">
                Wysyłasz materiały. Po <span className="pop" style={{ color: "var(--accent)", display: "inline-block" }}>3 dniach</span> sklep jest gotowy.
              </h2>
            </div>
            <p className="lead rv">
              Logo, zdjęcia i kilka zdań o marce. Od tego momentu liczymy 3 dni do gotowego sklepu.
            </p>
          </div>
          <p className="note mono">
            * AKTYWACJA PŁATNOŚCI ZALEŻY OD OPERATORA (WERYFIKACJA KONTA). ZGŁASZAMY JĄ OD RAZU, ŻEBY NIE CZEKAĆ.
          </p>
        </section>

        <Thread to="cennik" label="CENNIK" />

        <section className="section wrap" id="cennik">
          <div className="section__head">
            <div>
              <p className="kicker mono">CENNIK</p>
              <h2 className="h2 rv">Wybierz, czego potrzebujesz.</h2>
            </div>
            <p className="mono" style={{ margin: 0, fontSize: 12, color: "var(--mute)", textAlign: "right" }}>
              STAŁA CENA · PŁATNOŚĆ PO AKCEPTACJI
            </p>
          </div>
          <PricingTabs />
        </section>

        <section className="section wrap" id="faq" style={{ paddingTop: 120 }}>
          <div className="faq">
            <h2 className="h2">Pytania.</h2>
            <div className="faq__list">
              {FAQ.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <span className="tog mono" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="contact" id="kontakt">
        <div className="wrap">
          <p className="contact__status mono">
            <span className="dot-ok">●</span> PRZYJMUJEMY PROJEKTY · ODPOWIADAMY W 24 H
          </p>
          <h2 className="h2">Masz markę albo pomysł na nią? Pokaż nam.</h2>
          <div className="contact__row">
            <p>
              Wyślij link do profilu albo opisz pomysł w kilku zdaniach. Odpiszemy, jak mógłby wyglądać Twój sklep
              i który pakiet pasuje.
            </p>
            <div className="contact__cta">
              <a className="btn btn--light" href={`mailto:${MAIL}?subject=Moja%20marka`}>
                Napisz do nas →
              </a>
              <a className="mail mono" href={`mailto:${MAIL}`}>
                {MAIL}
              </a>
            </div>
          </div>
          <div className="footer mono">
            <span>© 2026 ONLINE LAB · PROJEKTOWANIE I BUDOWA SKLEPÓW INTERNETOWYCH NA SHOPIFY</span>
            <nav aria-label="Dokumenty">
              <a href="#">POLITYKA PRYWATNOŚCI</a>
              <a href="#">REGULAMIN</a>
            </nav>
          </div>
        </div>
      </footer>

      <FloatingCta />
    </>
  );
}

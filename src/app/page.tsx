import ProjectSwitcher from "./_lab/ProjectSwitcher";
import BundleDemo from "./_lab/BundleDemo";
import PricingTabs from "./_lab/PricingTabs";
import { StepNav, FloatingCta } from "./_lab/StepNav";

const MAIL = "hello@online-lab.pl";

const SPEC: [string, string][] = [
  ["Projekt", "Pod Twoje zdjęcia i styl marki. Do 6 podstron i 10 produktów na start"],
  ["Telefon", "Projektujemy najpierw pod telefon, bo tam kupuje większość klientów"],
  ["Płatności", "BLIK, karta i szybki przelew przez Przelewy24 albo Stripe"],
  ["Newsletter", "Okienko zapisu i automatyczny mail powitalny w Klaviyo lub Mailchimp"],
  ["Statystyki", "Widzisz, skąd przychodzą klienci i co kupują, także z reklam na Instagramie"],
  ["Google", "Podstawowe ustawienia, żeby sklep dało się znaleźć w wyszukiwarce"],
  ["Po starcie", "Nagranie, jak samodzielnie dodawać produkty i zmieniać teksty"],
];

const FAQ: [string, string][] = [
  [
    "Naprawdę 3 dni?",
    "Tak, 3 dni od otrzymania kompletu materiałów. Jedyne, na co nie mamy wpływu, to weryfikacja konta u operatora płatności. Zgłaszamy ją od razu, żeby zdążyła na start.",
  ],
  [
    "Co trzeba przygotować?",
    "Logo, zdjęcia produktów i kilka zdań o marce. Jeśli czegoś brakuje, pomożemy to przygotować.",
  ],
  [
    "Jak wygląda płatność?",
    "Bez zaliczki. Płacisz dopiero, gdy sklep jest gotowy i go zaakceptujesz.",
  ],
  [
    "Czy mogę sam(a) zmieniać teksty i produkty?",
    "Tak. Pokazujemy, jak to robić, i zostawiamy nagranie. Większe zmiany możesz zlecić nam osobno.",
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

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="nav">
        <div className="wrap">
          <a href="#top" className="brand">
            <span className="brand__name">Online Lab</span>
          </a>
          <StepNav />
        </div>
        <div className="progress" aria-hidden="true" />
      </header>

      <main>
        <section className="hero wrap" id="top">
          <p className="kicker in">Sklepy na Shopify dla marek odzieżowych, beauty i lifestyle</p>
          <div className="hero__row">
            <h1 className="h1 in">Sklep dla Twojej marki, gotowy w&nbsp;3&nbsp;dni</h1>
            <div className="hero__side in d2">
              <p className="lead">
                Dla nowych marek i dla tych, które chcą odświeżyć obecny sklep. Stała cena, BLIK i newsletter
                w pakiecie. <strong>Płacisz dopiero, kiedy zaakceptujesz gotowy sklep.</strong>
              </p>
              <div className="hero__btns">
                <a href="#kontakt" className="btn btn--dark">
                  Zapytaj o sklep
                </a>
                <a href="#eksperymenty" className="btn btn--ghost">
                  Zobacz realizacje
                </a>
              </div>
            </div>
          </div>
          <ProjectSwitcher />
        </section>

        <section className="section wrap" id="demo">
          <div className="section__head">
            <div>
              <h2 className="h2 rv">Dodatki, które podnoszą wartość koszyka</h2>
            </div>
            <p className="lead rv">
              To działające wersje, możesz w nie klikać. Każdy z tych dodatków zrobimy w nowym sklepie albo
              dołożymy do tego, który już masz.
            </p>
          </div>
          <BundleDemo />
        </section>

        <section className="section wrap" id="pakiet">
          <div className="spec">
            <div className="spec__intro">
              <h2 className="h2 rv">Co jest w sklepie za 1499&nbsp;zł</h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Jedna cena ustalona na początku. Nic nie dochodzi w trakcie.
              </p>
            </div>
            <dl className="spec__list">
              {SPEC.map(([k, v]) => (
                <div key={k} className="rv">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section wrap" id="cennik">
          <div className="section__head">
            <div>
              <h2 className="h2 rv">Cennik</h2>
            </div>
            <p className="lead rv">Stała cena, bez zaliczki. Płacisz po akceptacji gotowej pracy.</p>
          </div>
          <PricingTabs />
        </section>

        <section className="section wrap" id="faq">
          <div className="faq">
            <h2 className="h2">Częste pytania</h2>
            <div className="faq__list">
              {FAQ.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <span className="tog" aria-hidden="true">
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
          <h2 className="h2">Masz markę albo pomysł na nią? Pokaż nam.</h2>
          <div className="contact__row">
            <p>
              Wyślij link do Instagrama albo opisz pomysł w kilku zdaniach. W ciągu doby odpiszemy, jak mógłby wyglądać
              Twój sklep i który pakiet pasuje.
            </p>
            <div className="contact__cta">
              <a className="btn btn--light" href={`mailto:${MAIL}?subject=Moja%20marka`}>
                Napisz do nas
              </a>
              <a className="mail" href={`mailto:${MAIL}`}>
                {MAIL}
              </a>
            </div>
          </div>
          <div className="footer">
            <span>© 2026 Online Lab · sklepy internetowe na Shopify</span>
            <nav aria-label="Dokumenty">
              <a href="#">Polityka prywatności</a>
              <a href="#">Regulamin</a>
            </nav>
          </div>
        </div>
      </footer>

      <FloatingCta />
    </>
  );
}

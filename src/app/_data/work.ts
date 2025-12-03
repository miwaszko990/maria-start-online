export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  bullets: string[];   // 3–4 key things we did
  tags: string[];
  cover: string;       // desktop image (public/)
  coverMobile: string; // mobile image (public/)
  extra?: string;      // additional desktop image (e.g. footer or rewards)
  href?: string;       // live link (optional)
  gallery?: { src: string; label?: string }[]; // <- add this
};

export const works: Work[] = [
  {
    slug: "laroue-shopify",
    title: "La ROUE — Sklep, który sprzedaje więcej dzięki lojalności.",
    subtitle: "Kompletny sklep Shopify z autorskim programem punktowym i dopracowanym UX mobilnym. Efekt: wyższa konwersja i powracający klienci.",
    bullets: [
      "Spersonalizowany, dynamiczny nagłówek (sticky header).",
      "Program lojalnościowy — Punkty i nagrody.",
      "Personalizowana stopka z integracją Instagrama",
      "Dopasowany nagłówek hero według życzenia klienta"],
    tags: ["Shopify", "Custom UX", "Loyalty", "SEO"],
    cover: "/work/laroue-rewards.png",
    coverMobile: "/work/laroue-mobile.jpg",
    extra: "/work/laroue-footer.png",
    href: "https://larouebrand.com"
  },
  {
    slug: "lumo-landing",
    title: "Lumo — Platforma łącząca marki z twórcami podróżującymi po świecie.",
    subtitle: "Landing page zaprojektowany w Next.js jako część MVP aplikacji Lumo Travel Connect. Efekt: profesjonalna prezentacja startupu i skuteczne pozyskanie pierwszych użytkowników.",
    bullets: [
      "Minimalistyczna, zorientowana na konwersję strona landing",
      "Jasne pozycjonowanie marki i copywriting", 
      "Responsywna, przyjazna SEO implementacja"
    ],
    tags: ["Next.js", "Marketplace", "UX"],
    cover: "/work/lumo-hero.png",
    coverMobile: "/work/lumo-hero.png",
    extra: "/work/lumo-stats.png",
    href: "https://lumocreators.com/pl"
  },
  {
    slug: "worldtok-landing",
    title: "WorldTok — Strona, która przyciąga globalnych klientów.",
    subtitle: "Projekt w Webflow podkreślający międzynarodowy zasięg marki i jej wiarygodność. Efekt: spójny wizerunek, większe zaufanie i gotowość do ekspansji zagranicznej.",
    bullets: [
      "Sekcja otwierająca, która od razu buduje zaufanie i przyciąga klientów.",
      "Jasno pokazujemy, dlaczego warto Ci zaufać.",
      "Przejrzysty proces krok po kroku, poparty realnymi wynikami marek z wielu krajów.",
      "Wyrazisty design, który wyróżnia Twoją markę na tle konkurencji."
    ],
    tags: ["Webflow", "Design", "Strona Landing"],
    cover: "/work/worldtok-hero.png",       // hero
    coverMobile: "/work/worldtok-steps.png",// process
    extra: "/work/worldtok-proof.png",      // social proof
    gallery: [
      { src: "/work/worldtok-usp.png", label: "Korzyści — Upraszczamy" }
    ]
  }
];

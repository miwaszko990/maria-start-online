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
    title: "La ROUE — sklep z programem punktów dla stałych klientek.",
    subtitle: "Kompletny sklep na Shopify dla marki odzieżowej. Klientki zbierają punkty za zakupy, a sklep jest dopracowany pod zakupy na telefonie.",
    bullets: [
      "Menu, które zostaje na górze ekranu podczas przewijania.",
      "Program lojalnościowy: punkty i nagrody za zakupy.",
      "Stopka ze zdjęciami prosto z Instagrama marki.",
      "Duże zdjęcie powitalne zaprojektowane pod markę."],
    tags: ["Shopify", "Program lojalnościowy", "Wersja na telefon"],
    cover: "/work/laroue-rewards.png",
    coverMobile: "/work/laroue-mobile.jpg",
    extra: "/work/laroue-footer.png",
    href: "https://larouebrand.com"
  },
  {
    slug: "lumo-landing",
    title: "Lumo — Platforma łącząca marki z twórcami podróżującymi po świecie.",
    subtitle: "Strona startowa nowej aplikacji Lumo Travel Connect. Jej zadanie: jasno wytłumaczyć, czym jest aplikacja, i zachęcić pierwszych użytkowników do zapisu.",
    bullets: [
      "Prosta strona prowadząca do jednego celu: zapisu.",
      "Teksty, które w kilka sekund mówią, co to jest i dla kogo.", 
      "Działa na telefonie i komputerze, przygotowana pod Google."
    ],
    tags: ["Strona startowa", "Aplikacja", "Projekt"],
    cover: "/work/lumo-hero.png",
    coverMobile: "/work/lumo-hero.png",
    extra: "/work/lumo-stats.png",
    href: "https://lumocreators.com/pl"
  },
  {
    slug: "worldtok-landing",
    title: "WorldTok — strona dla firmy działającej na wielu rynkach.",
    subtitle: "Strona zbudowana w Webflow, która pokazuje międzynarodowy zasięg marki i buduje zaufanie klientów z różnych krajów.",
    bullets: [
      "Pierwszy ekran, który od razu mówi, czym zajmuje się firma.",
      "Sekcja z dowodami: wyniki i opinie klientów.",
      "Proces współpracy rozpisany krok po kroku.",
      "Wyrazisty wygląd, który odróżnia markę od konkurencji."
    ],
    tags: ["Webflow", "Projekt", "Strona firmowa"],
    cover: "/work/worldtok-hero.png",       // hero
    coverMobile: "/work/worldtok-steps.png",// process
    extra: "/work/worldtok-proof.png",      // social proof
    gallery: [
      { src: "/work/worldtok-usp.png", label: "Korzyści — Upraszczamy" }
    ]
  }
];

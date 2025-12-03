import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqItems = [
    {
      id: "duration",
      question: "Ile to trwa?",
      answer: "Zależnie od pakietu: Start 3–5 dni, Pro ok. 8 dni. Zaczynamy po otrzymaniu zaliczki i materiałów (logo, teksty, zdjęcia)."
    },
    {
      id: "materials",
      question: "Co muszę przygotować?",
      answer: "Logo, krótkie teksty do sekcji, zdjęcia/brand assets oraz dostęp do domeny. Jeśli nie masz materiałów, pomożemy je przygotować."
    },
    {
      id: "payment",
      question: "Jak wygląda płatność?",
      answer: "Na start pobieramy zaliczkę 50% (przez link do płatności). Reszta po akceptacji projektu, przed publikacją."
    },
    {
      id: "revisions",
      question: "Czy są poprawki w cenie?",
      answer: "Tak. Pakiet Start – 1 runda drobnych zmian, Pro – 2 rundy poprawek. Większe zmiany wycenimy osobno."
    },
    {
      id: "mobile",
      question: "Czy strona będzie działać na telefonie?",
      answer: "Tak, projektujemy mobile-first. Strona będzie wyglądać i działać świetnie na telefonach, tabletach i desktopie."
    },
    {
      id: "hosting",
      question: "Domena i hosting – kto się tym zajmuje?",
      answer: "Możemy to skonfigurować za Ciebie (w ramach pakietu). Jeśli masz już hosting/domenę – podłączymy wszystko pod istniejące zasoby."
    },
    {
      id: "payments-newsletter",
      question: "Płatności i newsletter w sklepie (Pro)?",
      answer: "Wdrażamy Stripe/Przelewy24/BLIK oraz integrację newslettera (Klaviyo/Mailchimp). Po wdrożeniu dostaniesz krótki mini-tutorial."
    },
    {
      id: "seo-analytics",
      question: "SEO i analityka",
      answer: "Ustawimy podstawowe SEO (title/description, meta, ALT) i podłączymy Google Analytics/Tag Manager, abyś widział/a statystyki."
    },
    {
      id: "editing",
      question: "Czy mogę samodzielnie edytować treści?",
      answer: "Tak. Przy prostych zmianach pokażemy, jak je robić. Przy rozbudowie/nowych sekcjach możesz zlecić nam prace godzinowo."
    },
    {
      id: "invoice-warranty",
      question: "Faktura i gwarancja",
      answer: "Wystawiamy fakturę. Przez 14 dni od publikacji usuwamy ewentualne błędy bez kosztów (nie dotyczy zmian funkcjonalnych)."
    },
    {
      id: "post-deposit",
      question: "Co dzieje się po wpłacie zaliczki?",
      answer: "Otrzymasz e-mail z formularzem, w którym podasz szczegóły projektu i prześlesz wszystkie materiały, które masz (logo, zdjęcia, teksty). Dzięki temu możemy zacząć prace sprawnie i bez zbędnych pytań."
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            FAQ
          </h2>
        </div>
        
        <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="border-b border-black/10 last:border-b-0"
              >
                <AccordionTrigger 
                  className="text-left font-medium text-slate-900 hover:text-slate-700 py-4 [&[data-state=open]]:text-slate-900"
                  aria-controls={`faq-${item.id}`}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-slate-700 leading-relaxed pb-4"
                  id={`faq-${item.id}`}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

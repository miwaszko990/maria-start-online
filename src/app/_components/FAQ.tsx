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
      answer: "Zależnie od pakietu: Start 3–5 dni, Pro ok. 8 dni. Zaczynamy, gdy dostaniemy zaliczkę i materiały (logo, teksty, zdjęcia)."
    },
    {
      id: "materials",
      question: "Co muszę przygotować?",
      answer: "Logo, zdjęcia produktów, kilka zdań o marce i ofercie oraz dostęp do adresu strony (domeny), jeśli już go masz. Jeśli czegoś brakuje, pomożemy to przygotować."
    },
    {
      id: "payment",
      question: "Jak wygląda płatność?",
      answer: "Na start płacisz 50% zaliczki przez link do płatności. Resztę po akceptacji projektu, przed uruchomieniem strony."
    },
    {
      id: "revisions",
      question: "Czy są poprawki w cenie?",
      answer: "Tak. Pakiet Start – 1 runda drobnych zmian, Pro – 2 rundy poprawek. Większe zmiany wyceniamy osobno."
    },
    {
      id: "mobile",
      question: "Czy strona będzie działać na telefonie?",
      answer: "Tak. Projektujemy najpierw pod telefon, potem pod komputer. Strona działa dobrze na telefonie, tablecie i komputerze."
    },
    {
      id: "hosting",
      question: "Kto zajmie się adresem strony (domeną)?",
      answer: "My. Pomożemy kupić adres strony (domenę) i wszystko podłączymy w ramach pakietu. Jeśli masz już domenę, podepniemy sklep pod nią."
    },
    {
      id: "payments-newsletter",
      question: "Czy w sklepie będą płatności i newsletter?",
      answer: "Tak. Podłączamy płatności BLIK-iem, kartą i szybkim przelewem (Przelewy24 lub Stripe) oraz newsletter (Klaviyo lub Mailchimp). Na koniec dostajesz krótką instrukcję wideo."
    },
    {
      id: "seo-analytics",
      question: "Czy klienci znajdą mnie w Google? Czy zobaczę statystyki?",
      answer: "Ustawiamy podstawy, dzięki którym Google może znaleźć i dobrze opisać Twój sklep. Podłączamy też statystyki: zobaczysz, ile osób odwiedza stronę, skąd przychodzą i co kupują."
    },
    {
      id: "editing",
      question: "Czy mogę samodzielnie edytować treści?",
      answer: "Tak. Pokażemy Ci, jak samodzielnie zmieniać teksty, zdjęcia i produkty. Większe zmiany, np. nowe sekcje, możesz zlecić nam osobno."
    },
    {
      id: "invoice-warranty",
      question: "Czy dostanę fakturę? Co jeśli coś przestanie działać?",
      answer: "Tak, wystawiamy fakturę. Przez 14 dni od uruchomienia bezpłatnie naprawiamy błędy. Nie dotyczy to nowych funkcji ani zmian zakresu."
    },
    {
      id: "post-deposit",
      question: "Co dzieje się po wpłacie zaliczki?",
      answer: "Otrzymasz e-mail z formularzem, w którym podasz szczegóły projektu i prześlesz wszystkie materiały, które masz (logo, zdjęcia, teksty). Dzięki temu możemy zacząć od razu, bez zbędnych pytań."
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

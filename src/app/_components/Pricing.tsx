"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Loader2 } from "lucide-react";
import { useState } from "react";

interface PricingCardProps {
  title: string;
  price: string;
  emoji: string;
  valueLine: string;
  checklist: string[];
  timeText: string;
  ctaText: string;
  ctaAriaLabel: string;
  packageType: 'start' | 'pro';
  amount: number;
}

function PricingCard({
  title,
  price,
  emoji,
  valueLine,
  checklist,
  timeText,
  ctaText,
  ctaAriaLabel,
  packageType,
  amount,
}: PricingCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageType,
          amount,
          packageName: title,
        }),
      });

      const { sessionId } = await response.json();
      
      // Redirect to Stripe Checkout
      const stripe = await (await import('@stripe/stripe-js')).loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      
      if (!stripe) {
        console.error('Stripe failed to load');
        return;
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error('Error redirecting to checkout:', error);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Card className="flex flex-col h-full rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
      <CardHeader className="pb-4">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <div className="text-2xl font-bold text-slate-900 mb-2">
          {emoji} {price}
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">{valueLine}</p>
      </CardHeader>
      
      <CardContent className="flex-1 pb-6">
        <ul className="space-y-3" role="list">
          {checklist.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-[18px] h-[18px] text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 flex items-center gap-2 text-slate-500">
          <Clock className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm">{timeText}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 mt-auto">
        <div className="w-full space-y-2">
          <Button 
            onClick={handleCheckout}
            disabled={isLoading}
            className="w-full bg-black text-white hover:bg-black/90 transition-colors"
            aria-label={ctaAriaLabel}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Przekierowywanie...
              </>
            ) : (
              ctaText
            )}
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            💡 Po wpłacie zaliczki otrzymasz na e-mail formularz, w którym opiszesz szczegóły projektu i prześlesz materiały (logo, zdjęcia, teksty).
          </p>
          <p className="text-xs text-slate-500 text-center">
            Stała cena, zero ukrytych kosztów.
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function Pricing() {
  const startPackage: PricingCardProps = {
    title: "Pakiet Start – Wizytówka / Landing",
    price: "750 zł",
    emoji: "💰",
    valueLine: "Prosta strona, która daje Ci widoczność online i pierwszych klientów.",
    checklist: [
      "1 strona typu one-page (do 5 sekcji: oferta, opinie, kontakt, mapa/IG feed)",
      "Mobile-first (świetny wygląd na telefonach)",
      "Formularz kontaktowy / integracja z social media",
      "Możliwość stworzenia landing page do sprzedaży ebooka, kursu lub eventu"
    ],
    timeText: "⏱ Realizacja: 3–5 dni",
    ctaText: "Zamów – wpłać zaliczkę 375 zł",
    ctaAriaLabel: "Zamów pakiet Start",
    packageType: "start",
    amount: 375
  };

  const proPackage: PricingCardProps = {
    title: "Pakiet Pro – Sklep Online",
    price: "1499 zł",
    emoji: "💰",
    valueLine: "Gotowy sklep internetowy, który zaczyna sprzedawać od pierwszego dnia.",
    checklist: [
      "Sklep do 10 produktów (koszyk + checkout)",
      "Płatności online (Stripe / Przelewy24 / BLIK)",
      "Newsletter (Klaviyo / Mailchimp)",
      "Wdrożenie na domenie + konfiguracja hostingu",
      "2 rundy poprawek w cenie",
      "Mini-tutorial obsługi sklepu"
    ],
    timeText: "⏱ Realizacja: 8 dni",
    ctaText: "Zamów – wpłać zaliczkę 749,50 zł",
    ctaAriaLabel: "Zamów pakiet Pro",
    packageType: "pro",
    amount: 749.50
  };

  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Cennik
          </h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <PricingCard {...startPackage} />
          <PricingCard {...proPackage} />
        </div>
      </div>
    </section>
  );
}

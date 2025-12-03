"use client";
import Navbar from "./_components/Navbar";
import Section from "./_components/Section";
import WorkSection from "./_components/WorkSection";
import Pricing from "./_components/Pricing";
import FeatureAddonSection from "./_components/FeatureAddonSection";
import FAQ from "./_components/FAQ";
import ContactSection from "./_components/Contact";
import SiteFooter from "./_components/SiteFooter";
import { motion } from "framer-motion";
import { Check, Store, Settings, Zap, Rocket, Smartphone, Shield, Upload, FileText, MonitorSmartphone, CreditCard, Mail, Search, Info } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <Section id="hero" className="py-28 sm:py-32 text-center">
        <motion.div 
          initial={{opacity:0, y:8}} 
          animate={{opacity:1, y:0}} 
          transition={{duration:0.35, ease:"easeOut"}}
        >
          <h1 className="h1-clamp mb-6">
            Gotowy sklep online w 8 dni — od projektu do sprzedaży.
          </h1>
          <p className="copy-lg mb-8 max-w-2xl mx-auto">
            Strona, płatności, Klaviyo, Instagram Shop i analityka w jednym spójnym systemie. Bez chaosu, bez stresu, gotowe do zarabiania.
          </p>
          <div className="flex justify-center gap-4 mb-10">
            <a
              id="primary-cta"
              href="mailto:hello@online-lab.com?subject=Konsultacja%2015%20min"
              className="btn btn-primary"
              aria-label="Schedule a consultation"
            >
              Umów konsultację
            </a>
            <a
              id="secondary-cta"
              href="#price"
              className="btn btn-ghost"
              aria-label="See what you get"
            >
              Zobacz co dostajesz
            </a>
          </div>
          <div className="flex justify-center gap-5 flex-wrap text-sm text-slate-500">
            <span>8 dni</span>
            <span>Mobile-first</span>
            <span>Stripe / BLIK</span>
            <span>Klaviyo</span>
            <span>SEO + Analytics</span>
          </div>
        </motion.div>
      </Section>

      {/* Mini-badges Section */}
      <Section className="py-10">
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-4 text-center font-medium text-slate-800 flex items-center justify-center gap-2">
            <Rocket className="w-4 h-4" /> Start w 8 dni
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-4 text-center font-medium text-slate-800 flex items-center justify-center gap-2">
            <Smartphone className="w-4 h-4" /> Mobile-focused
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-4 text-center font-medium text-slate-800 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" /> Stała cena, jasny proces
          </div>
        </div>
      </Section>

      {/* What you get Section */}
      <Section id="package" className="py-24 sm:py-28">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-4">
              <Store className="w-5 h-5 text-slate-500 shrink-0" /> Sklep / Strona
            </div>
            <ul className="space-y-2 text-slate-700 leading-relaxed">
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-slate-500 shrink-0 mt-0.5"/><span>Shopify, Webflow i inne - Projekt i implementacja</span></li>
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-slate-500 shrink-0 mt-0.5"/><span>Do 6 podstron (strona główna, oferta/produkt, o nas, cennik, kontakt, koszyk*)</span></li>
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-slate-500 shrink-0 mt-0.5"/><span>Prędkość i wyniki Core Web Vitals</span></li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">*Checkout w zależności od wybranej platformy.</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-md hover:shadow-lg transition-shadow"> 
            <div className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-4"> 
              <Settings className="w-5 h-5 text-slate-500 shrink-0" /> Integracje 
            </div> 
            <ul className="space-y-2 text-slate-700 leading-relaxed"> 
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-slate-500 shrink-0 mt-0.5"/><span>Płatności: Stripe / Przelewy24 / BLIK</span></li> 
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-slate-500 shrink-0 mt-0.5"/><span>Klaviyo: pop-up, newsletter, email powitalny</span></li> 
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-slate-500 shrink-0 mt-0.5"/><span>Google Analytics 4 + Meta Pixel</span></li> 
            </ul> 
          </div> 

          {/* Card 3 */} 
          <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-md hover:shadow-lg transition-shadow"> 
            <div className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-4"> 
              <Zap className="w-5 h-5 text-slate-500 shrink-0" /> Gotowe na rozwój 
            </div> 
            <ul className="space-y-2 text-slate-700 leading-relaxed"> 
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-slate-500 shrink-0 mt-0.5"/><span>Mini-SEO (tytuł, meta, nagłówki, indeksacja)</span></li> 
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-slate-500 shrink-0 mt-0.5"/><span>Instagram Shop / katalog produktów (opcjonalnie)</span></li>
              <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-slate-500 shrink-0 mt-0.5"/><span>10-minutowy tutorial wideo + lista startowa</span></li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" className="py-24 sm:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">Proces</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Wystartuj w 8 dni</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Jasny proces krok po kroku — bez spotkań, bez stresu. Wystarczy, że wyślesz materiały (logo, zdjęcia, opis oferty), a resztą zajmiemy się my.
          </p>
        </div>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.06 } }
          }}
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.2 }} 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { day: "Dzień 1", title: "Start projektu", desc: "Otrzymujesz checklistę i formularz. Przesyłasz logo, zdjęcia i opis oferty.", icon: Upload, iconClass: "w-5 h-5 text-indigo-500" },
            { day: "Dzień 2", title: "Struktura i treści", desc: "Tworzymy układ strony i krótkie teksty sprzedażowe.", icon: FileText, iconClass: "w-5 h-5 text-emerald-500" },
            { day: "Dni 3–4", title: "Design i wdrożenie", desc: "Projektujemy i kodujemy stronę, skupiając się na mobilnym wyglądzie i sprzedaży.", icon: MonitorSmartphone, iconClass: "w-5 h-5 text-sky-500" },
            { day: "Dzień 5", title: "Płatności i wysyłka", desc: "Konfiguracja płatności (Stripe, Przelewy24, BLIK) i maili transakcyjnych.", icon: CreditCard, iconClass: "w-5 h-5 text-rose-500" },
            { day: "Dzień 6", title: "Klaviyo", desc: "Automatyzacje: pop-up, newsletter, e-mail powitalny.", icon: Mail, iconClass: "w-5 h-5 text-purple-500" },
            { day: "Dzień 7", title: "SEO + Analityka", desc: "Wdrożenie GA4, Meta Pixel i podstawowe SEO.", icon: Search, iconClass: "w-5 h-5 text-amber-500" },
            { day: "Dzień 8", title: "Testy i uruchomienie", desc: "Ostateczna kontrola, tutorial i start sprzedaży.", icon: Rocket, iconClass: "w-5 h-5 text-blue-500" },
            { day: "📝 Uwaga", title: "Materiały od Ciebie", desc: "8 dni liczymy od momentu otrzymania wszystkich materiałów. Jeśli potrzebujesz pomocy przy przygotowaniu – pomożemy Ci krok po kroku.", icon: Info, iconClass: "w-5 h-5 text-slate-500" }, 
          ].map((s, i) => {
            const IconComponent = s.icon;
            return (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
                }}
                className="rounded-2xl border border-black/10 bg-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow"
              > 
                <div className="text-sm text-slate-500 font-mono mb-2">{s.day}</div> 
                <div className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-3">
                  <IconComponent className={s.iconClass} /> {s.title}
                </div> 
                <p className="text-slate-700 text-sm leading-relaxed">{s.desc}</p> 
              </motion.div> 
            );
          })} 
        </motion.div>
      </Section>

      {/* Portfolio Section */}
      <WorkSection />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Feature Addon Section */}
      <FeatureAddonSection />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <SiteFooter />
    </>
  );
}

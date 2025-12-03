import Link from "next/link";
import Image from "next/image";
import Section from "@/app/_components/Section";
import CaseGallery from "@/app/_components/CaseGallery";
import CaseTimeline from "@/app/_components/CaseTimeline";
import { works } from "@/app/_data/work";

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = works.find(w => w.slug === slug);
  if (!work) return <Section className="py-24"><p>Studium przypadku nie zostało znalezione.</p></Section>;

  return (
    <Section className="py-20 sm:py-24">
      <div className="text-center mb-12">
        <div className="text-[11px] sm:text-xs uppercase tracking-widest text-slate-500 mb-2">Study case</div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{work.title}</h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">{work.subtitle}</p>
        <div className="mt-4 flex justify-center flex-wrap gap-2">
          {work.tags.map(t => (
            <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/" className="inline-flex items-center rounded-full border px-4 py-2 text-sm hover:bg-slate-50 transition-colors">Wróć</Link>
          {work.href && (
            <a href={work.href} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm hover:opacity-90 transition-opacity">
              Zobacz na żywo
            </a>
          )}
        </div>
      </div>

{(work.slug === "laroue-shopify" || work.slug === "lumo-landing" || work.slug === "worldtok-landing") ? (
        /* Timeline layout for La ROUE, Lumo, and WorldTok */
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Timeline (left) */}
          <div className="space-y-8">
            <CaseTimeline
              steps={work.slug === "laroue-shopify" ? [
                {
                  id: "sticky-header",
                  title: "Spersonalizowany, dynamiczny nagłówek",
                  description: "Sticky header, który podczas scrollowania zmienia kolor i styl. Płynne przejścia, lepsze UX i profesjonalny wygląd na wszystkich urządzeniach.",
                  image: work.coverMobile,
                  alt: `${work.title} — Dynamiczny nagłówek`
                },
                {
                  id: "rewards-club",
                  title: "Klub lojalnościowy — Punkty i działania",
                  description: "Zbudowaliśmy kompletny system lojalnościowy z siatką punktów i nagrodami. Motywuje klientów do powrotu i zaangażowania.",
                  image: "/work/laroue-rewards.png",
                  alt: `${work.title} — Siatka klubu lojalnościowego`
                },
                {
                  id: "custom-footer",
                  title: "Niestandardowa stopka + Instagram",
                  description: "Zapisy na newsletter, linki zoptymalizowane pod SEO i karuzela Instagram. W pełni personalizowana sekcja stopki po markę.",
                  image: "/work/laroue-footer.png",
                  alt: `${work.title} — Niestandardowa stopka z Instagramem`
                },
                {
                  id: "custom-hero",
                  title: "Dopasowany nagłówek według życzenia klienta",
                  description: "Zaprojektowaliśmy i wdrożyliśmy unikalny nagłówek strony głównej zgodnie z wizją marki. Spójny z brandingiem, przyciągający wzrok i idealnie komponujący się z całą stroną.",
                  image: "/work/laroue-heroo.png",
                  alt: `${work.title} — Niestandardowy nagłówek hero`
                }
              ] : work.slug === "lumo-landing" ? [
                {
                  id: "hero-section",
                  title: "Sekcja Hero — Globalny przekaz",
                  description: "Globalny zasięg z jasnym pozycjonowaniem marki i wezwaniem do działania.",
                  image: "/work/lumo-hero.png",
                  alt: `${work.title} — Sekcja Hero`
                },
                {
                  id: "stats-discovery",
                  title: "Statystyki i Odkrywanie",
                  description: "Wiarygodność marketplace z profilami twórców i dowodami społeczności.",
                  image: "/work/lumo-stats.png",
                  alt: `${work.title} — Statystyki i odkrywanie`
                },
                {
                  id: "creators-benefits",
                  title: "Dla Twórców — Korzyści",
                  description: "Prosta, zorientowana na korzyści sekcja wyjaśniająca jak twórcy zarabiają.",
                  image: "/work/lumo-creators.png",
                  alt: `${work.title} — Korzyści dla twórców`
                }
              ] : [
                {
                  id: "hero-section",
                  title: "Pierwsze wrażenie, które sprzedaje",
                  description: "Sekcja otwierająca, która od razu buduje zaufanie i przyciąga klientów.",
                  image: "/work/worldtok-hero.png",
                  alt: `${work.title} — Pierwsze wrażenie`
                },
                {
                  id: "usp-section",
                  title: "Co zyskujesz",
                  description: "Jasno pokazujemy, dlaczego warto Ci zaufać.",
                  image: "/work/worldtok-usp.png",
                  alt: `${work.title} — Co zyskujesz`
                },
                {
                  id: "process-proof",
                  title: "Jak to działa w praktyce",
                  description: "Przejrzysty proces krok po kroku, poparty realnymi wynikami marek z wielu krajów.",
                  image: "/work/worldtok-steps.png",
                  alt: `${work.title} — Jak to działa`
                },
                {
                  id: "social-proof",
                  title: "Sprawdzone efekty na wielu rynkach",
                  description: "Wyrazisty design, który wyróżnia Twoją markę na tle konkurencji.",
                  image: "/work/worldtok-proof.png",
                  alt: `${work.title} — Sprawdzone efekty`
                }
              ]}
            />
          </div>

          {/* sticky summary */}
          <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-black/10 bg-white/80 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">Co dostarczyliśmy</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-6 text-sm leading-relaxed">
              {work.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              {work.tags.map(t => (
                <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <div className="flex gap-2">
              <Link href="/" className="inline-flex items-center rounded-full border px-4 py-2 text-sm hover:bg-slate-50 transition-colors">Wróć</Link>
              {work.href && (
                <a href={work.href} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm hover:opacity-90 transition-opacity">
                  Zobacz na żywo
                </a>
              )}
            </div>
          </aside>
        </div>
      ) : (
        /* Default gallery layout for other cases */
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* gallery (left) */}
          <div className="space-y-8">
            <CaseGallery
              items={[
                { kind: "browser", src: work.cover, alt: `${work.title} — Rewards grid` },
                { kind: "phone", src: work.coverMobile, alt: `${work.title} — Product list mobile` },
                ...(work.extra ? [{ kind: "browser" as const, src: work.extra, alt: `${work.title} — Custom footer` }] : [])
              ]}
            />
            
            {work.gallery?.length ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {work.gallery.map((g, i) => (
                  <div
                    key={i}
                    className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm"
                  >
                    <Image
                      src={g.src}
                      alt={g.label ? `${work.title} — ${g.label}` : `${work.title} — extra ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* sticky summary */}
          <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-black/10 bg-white/80 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">Co dostarczyliśmy</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-6 text-sm leading-relaxed">
              {work.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              {work.tags.map(t => (
                <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <div className="flex gap-2">
              <Link href="/" className="inline-flex items-center rounded-full border px-4 py-2 text-sm hover:bg-slate-50 transition-colors">Wróć</Link>
              {work.href && (
                <a href={work.href} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm hover:opacity-90 transition-opacity">
                  Zobacz na żywo
                </a>
              )}
            </div>
          </aside>
        </div>
      )}
    </Section>
  );
}

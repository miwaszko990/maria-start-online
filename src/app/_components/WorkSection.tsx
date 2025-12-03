import Section from "./Section";
import WorkCard from "./WorkCard";
import { works } from "@/app/_data/work";

export default function WorkSection() {
  return (
    <Section id="work" className="py-24 sm:py-28">
      <div className="text-center mb-12">
        <div className="text-[11px] sm:text-xs uppercase tracking-widest text-slate-500 mb-2">Portfolio</div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Wybrane realizacje</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
          Sklepy i strony, które sprzedają. Zobacz, jak pomagamy markom zwiększać sprzedaż, lojalność i rozpoznawalność.
        </p>
      </div>
      <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
        {works.map((w) => (
          <WorkCard key={w.slug} work={w} />
        ))}
      </div>
    </Section>
  );
}

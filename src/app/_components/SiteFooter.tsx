import Link from "next/link";
import { Mail } from "lucide-react";

export default function SiteFooter() {
  const navigationLinks = [
    { href: "#package", label: "Pakiet" },
    { href: "#process", label: "Proces" },
    { href: "#work", label: "Portfolio" },
    { href: "#pricing", label: "Cennik" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <footer className="bg-[#f9fafb] border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl text-slate-900 hover:text-slate-700 transition-colors inline-block">
              Online Lab
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tworzymy sklepy Shopify i strony landing, które naprawdę sprzedają. Kompletny system sprzedażowy gotowy w 8 dni.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">
              Nawigacja
            </h3>
            <nav className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors hover:translate-x-1 transform duration-200 inline-block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:hello@online-lab.com"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors group"
              >
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                <span>hello@online-lab.com</span>
              </a>
              <p className="text-xs text-slate-500 pt-2">
                Zwykle odpowiadamy w 24 godziny
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar / Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2024 Online Lab. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
              >
                Polityka prywatności
              </a>
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
              >
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

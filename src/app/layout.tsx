import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import "./lab.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "Projektowanie sklepów internetowych na Shopify · gotowe w 3 dni | Online Lab";
const description =
  "Projektujemy, budujemy i uruchamiamy sklepy internetowe dla nowych marek i tych, które wyrosły z Instagrama. BLIK, newsletter i statystyki w pakiecie. Sklep gotowy w 3 dni, stała cena.";

export const metadata: Metadata = {
  metadataBase: new URL("https://online-lab.pl"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://online-lab.pl",
    siteName: "Online Lab",
    title,
    description,
    images: [{ url: "/work/laroue-heroo.png", width: 1200, height: 630, alt: "Sklep La Roue zaprojektowany przez Online Lab" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/work/laroue-heroo.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${plexSans.variable} ${plexMono.variable} lab antialiased`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

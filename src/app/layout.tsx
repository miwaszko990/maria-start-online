import type { Metadata } from "next";
import { Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import "./lab.css";

const grotesk = Schibsted_Grotesk({
  variable: "--font-plex-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
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
  "Sklepy na Shopify dla marek odzieżowych, beauty i lifestyle. Gotowe w 3 dni, stała cena 1499 zł, płatność dopiero po akceptacji. BLIK, newsletter i statystyki w pakiecie.";

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
      <body className={`${grotesk.variable} ${plexMono.variable} lab antialiased`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

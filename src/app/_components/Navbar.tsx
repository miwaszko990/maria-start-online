"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() { 
const [open, setOpen] = useState(false); 

// close the menu when expanding the window
useEffect(() => {
const onResize = () => { if (window.innerWidth >= 640) setOpen(false); };
window.addEventListener("resize", onResize);
return () => window.removeEventListener("resize", onResize);
}, []);

const nav = [
{ href: "#package", label: "Pakiet" },
{ href: "#process", label: "Proces" },
{ href: "#work", label: "Portfolio" },
{ href: "#price", label: "Cennik" },
{ href: "#faq", label: "FAQ" },
{ href: "#contact", label: "Kontakt" },
];

return ( 
<div className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60"> 
<div className="flex items-center justify-between py-4 px-6"> 
{/* Logo - Left */}
<Link href="/" className="font-semibold text-lg tracking-tight hover:opacity-80 transition"> 
Online Lab 
</Link> 

{/* Desktop nav - Center/Right */}
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground hover:text-foreground transition"> 
{nav.map((item) => ( 
<a key={item.href} href={item.href} className="hover:text-foreground transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded-md px-2 py-1"> 
{item.label} 
</a> 
))} 
</div>

{/* CTA Button - Far Right */}
<div className="hidden md:block">
<Button asChild>
<a href="mailto:hello@startonlinelab.com?subject=Konsultacja%2015%20min">
Umów konsultację
</a>
</Button>
</div>

{/* Mobile toggle */} 
<button 
aria-label={open ? "Zamknij menu" : "Otwórz menu"} 
onClick={() => setOpen((o) => !o)} 
className="md:hidden inline-flex items-center justify-center rounded-xl border border-black/10 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40" 
> 
{open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />} 
</button> 
</div> 

{/* Mobile menu */} 
{open && ( 
<div className="md:hidden border-t border-black/5 bg-white/90"> 
<div className="px-6 py-4"> 
<nav className="flex flex-col gap-3 text-sm"> 
{nav.map((item) => ( 
<a 
key={item.href} 
href={item.href} 
onClick={() => setOpen(false)} 
className="py-2 rounded-md hover:bg-slate-100 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40" 
> 
{item.label} 
</a> 
))} 
<Button asChild className="mt-4">
<a 
href="mailto:hello@startonlinelab.com?subject=Konsultacja%2015%20min"
onClick={() => setOpen(false)}
>
Umów konsultację
</a>
</Button>
</nav>
</div>
</div>
)}
</div>
);
}

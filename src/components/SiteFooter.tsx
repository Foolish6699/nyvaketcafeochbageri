import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-semibold">Nyvaket Café & Bageri</h3>
          <p className="mt-3 text-muted-foreground max-w-sm">
            Ett mysigt, helt nötfritt café i hjärtat av Södertälje. Hembakat varje dag — av oss, för dig.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 mt-0.5 text-primary" />
            <span>Värdsholmsgatan 24<br />151 32 Södertälje</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+4685503050" className="hover:text-foreground">08-550 305 05</a>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-4 w-4 mt-0.5 text-primary" />
            <span>Tis–Fre 07–17<br />Lör 09–15 · Sön & Mån stängt</span>
          </div>
        </div>

        <nav className="text-sm space-y-2">
          <h4 className="font-display text-lg font-semibold mb-2">Genvägar</h4>
          <Link to="/meny" className="block text-muted-foreground hover:text-foreground">Meny</Link>
          <Link to="/lojalitet" className="block text-muted-foreground hover:text-foreground">Stämpelkort</Link>
          <Link to="/om-oss" className="block text-muted-foreground hover:text-foreground">Om oss</Link>
          <Link to="/kontakt" className="block text-muted-foreground hover:text-foreground">Kontakt</Link>
        </nav>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nyvaket Café & Bageri · Ägt och drivet av kvinnor
      </div>
    </footer>
  );
}

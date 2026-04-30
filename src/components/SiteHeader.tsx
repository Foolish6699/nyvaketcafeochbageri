import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";

const links = [
  { to: "/", label: "Hem" },
  { to: "/lojalitet", label: "Stämpelkort" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-9 w-9 rounded-full bg-gradient-cinnamon text-primary-foreground shadow-soft transition-transform group-hover:rotate-12">
            <Coffee className="h-4 w-4" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Nyvaket
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full transition-colors"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="px-4 py-3 text-base rounded-xl hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full bg-primary text-primary-foreground px-5 py-3 font-medium"
            >
              Boka bord
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

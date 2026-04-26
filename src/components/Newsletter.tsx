import { useState } from "react";
import { Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-cinnamon text-primary-foreground p-8 sm:p-12 grain">
      <div className="relative max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium mb-4">
          <Mail className="h-3.5 w-3.5" /> Nyhetsbrev
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-balance">
          Få veckans bakverk & exklusiva erbjudanden direkt i inkorgen
        </h2>
        <p className="mt-3 opacity-90">
          Anmäl dig och få <strong>10 % rabatt</strong> på ditt nästa besök.
        </p>

        {done ? (
          <p className="mt-6 rounded-2xl bg-primary-foreground/15 px-5 py-4">
            Tack! Vi hörs snart i din inkorg ✉️
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.includes("@")) setDone(true);
            }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="din@epost.se"
              className="flex-1 rounded-full bg-primary-foreground/95 text-foreground px-5 py-3 outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <button
              type="submit"
              className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition"
            >
              Anmäl mig
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

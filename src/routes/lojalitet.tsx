import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Coffee, Gift, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/lojalitet")({
  head: () => ({
    meta: [
      { title: "Stämpelkort & lojalitet — Nyvaket Café" },
      { name: "description", content: "Samla 9 stämplar och få den 10:e koppen kaffe på huset. Plus exklusiva medlemserbjudanden." },
      { property: "og:title", content: "Stämpelkort — Nyvaket Café" },
      { property: "og:description", content: "Var 10:e kaffe är på oss." },
    ],
  }),
  component: LoyaltyPage,
});

const STAMPS_TOTAL = 10;

function LoyaltyPage() {
  const [stamps, setStamps] = useState(0);

  useEffect(() => {
    const saved = Number(localStorage.getItem("nyvaket-stamps") || "0");
    setStamps(saved);
  }, []);

  function addStamp() {
    const next = stamps >= STAMPS_TOTAL ? 1 : stamps + 1;
    setStamps(next);
    localStorage.setItem("nyvaket-stamps", String(next));
  }

  function reset() {
    setStamps(0);
    localStorage.setItem("nyvaket-stamps", "0");
  }

  const complete = stamps >= STAMPS_TOTAL;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/30 px-4 py-1.5 text-xs font-medium text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" /> Nyvaket-klubben
          </span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl font-semibold text-balance">
            Var <em className="text-primary not-italic">10:e</em> kaffe — på oss.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Samla en stämpel för varje kaffe eller bulle du köper. När kortet är fullt bjuder vi på nästa.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="relative rounded-3xl bg-gradient-cinnamon text-primary-foreground p-8 sm:p-10 shadow-warm grain overflow-hidden">
            <div className="relative flex items-center justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-80">Digitalt stämpelkort</p>
                <h2 className="font-display text-3xl font-semibold mt-1">Nyvaket-klubben</h2>
              </div>
              <Coffee className="h-10 w-10 opacity-90" />
            </div>

            <div className="relative grid grid-cols-5 gap-3 sm:gap-4">
              {Array.from({ length: STAMPS_TOTAL }).map((_, i) => {
                const filled = i < stamps;
                const isReward = i === STAMPS_TOTAL - 1;
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-full border-2 border-dashed border-primary-foreground/40 grid place-items-center transition-all duration-500 ${
                      filled ? "bg-primary-foreground text-primary scale-100 border-solid" : "bg-primary-foreground/10"
                    }`}
                  >
                    {isReward ? (
                      <Gift className={`h-5 w-5 sm:h-6 sm:w-6 ${filled ? "text-primary" : "text-primary-foreground/60"}`} />
                    ) : (
                      <Coffee className={`h-5 w-5 sm:h-6 sm:w-6 ${filled ? "text-primary" : "text-primary-foreground/40"}`} />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="relative mt-6 flex items-center justify-between text-sm">
              <span className="opacity-90">{stamps} / {STAMPS_TOTAL} stämplar</span>
              {complete && (
                <span className="font-semibold animate-pulse">🎉 Belöning upplåst!</span>
              )}
            </div>

            <div className="relative mt-6 flex flex-wrap gap-3">
              <button
                onClick={addStamp}
                className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
              >
                {complete ? "Lös in & börja om" : "Lägg till stämpel"}
              </button>
              <button
                onClick={reset}
                className="rounded-full border border-primary-foreground/40 px-5 py-2.5 text-sm font-medium hover:bg-primary-foreground/10 transition"
              >
                Nollställ
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Visa kortet i kassan vid ditt nästa besök så hjälper vi dig att stämpla.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-5 sm:px-8 py-20 grid md:grid-cols-3 gap-6">
          {[
            { title: "Födelsedagsfika", text: "En kostnadsfri bulle eller bakelse på din födelsedag — bara att slinka in." },
            { title: "Tidiga smakprov", text: "Var först med att prova nya bakverk innan de når disken." },
            { title: "Medlemspriser", text: "Återkommande erbjudanden som bara finns för Nyvaket-klubben." },
          ].map((p) => (
            <div key={p.title} className="rounded-3xl bg-card border border-border p-6 shadow-soft">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Award } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-cafe.jpg";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss — Nyvaket Café & Bageri" },
      { name: "description", content: "En kvinnoägd, nötfri caféupplevelse i Södertälje. Hembakat med kärlek sedan 2018." },
      { property: "og:title", content: "Om oss — Nyvaket Café" },
      { property: "og:description", content: "Kvinnoägt, nötfritt, hundvänligt — och hembakat varje dag." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5" /> Vår historia
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl font-semibold text-balance">
              Ett café byggt på <em className="text-primary not-italic">omtanke</em>.
            </h1>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Nyvaket startade ur en enkel idé: en plats där alla kan njuta av god fika
              — även de med nötallergi. Vi är ett kvinnoägt café i Södertälje där
              ägaren själv står vid ugnen från tidig morgon.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Doften av nybakat möter dig i dörren. Den nostalgiska inredningen
              och vänskapen mellan stamgästerna — det är så vi vill att din
              morgon ska kännas.
            </p>
          </div>
          <img
            src={heroImg}
            alt="Interiör hos Nyvaket Café & Bageri"
            width={1920}
            height={1280}
            loading="lazy"
            className="rounded-3xl shadow-warm w-full h-[480px] object-cover"
          />
        </section>

        <section className="bg-cream border-y border-border/60">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Nötfritt — alltid", text: "Vi har gjort hela köket nötfritt så att du kan slappna av i fikan." },
              { icon: Award, title: "Kvinnoägt sedan dag ett", text: "Drivet med passion och ett öga för det handgjorda." },
              { icon: Sparkles, title: "Bakat på plats", text: "Inga halvfabrikat — bara mjöl, smör, kanel och tid." },
            ].map((v) => (
              <div key={v.title}>
                <span className="grid place-items-center h-11 w-11 rounded-full bg-background text-primary shadow-soft">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 sm:px-8 py-20 text-center">
          <p className="font-display text-3xl sm:text-4xl leading-snug text-balance">
            "The best fika and atmosphere!"
          </p>
          <p className="mt-3 text-muted-foreground">— och det vill vi fortsätta vara.</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

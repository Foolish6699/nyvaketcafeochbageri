import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Star, Award, Heart, MapPin, Clock, ArrowRight, Coffee, Cake, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import heroImg from "@/assets/hero-cafe.jpg";
import rakmacka from "@/assets/menu-rakmacka.jpg";
import banhmi from "@/assets/menu-banhmi.jpg";
import bulle from "@/assets/menu-kanelbulle.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nyvaket Café & Bageri — Mysigt nötfritt café i Södertälje" },
      {
        name: "description",
        content:
          "Hembakat varje dag i hjärtat av Södertälje. Nötfritt, hundvänligt och prisvärt. Räkmackor, bullar, kaffe och bröd från ugnen.",
      },
      { property: "og:title", content: "Nyvaket Café & Bageri — Södertälje" },
      { property: "og:description", content: "Mysigt, nötfritt café med hembakat varje dag." },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <WeeklySpecial />
        <Signature />
        <Reviews />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground">
            <Sparkles className="h-3.5 w-3.5" /> Sedan 2018 · Södertälje
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] text-balance">
            Doften av <em className="text-primary not-italic">nybakat</em> väntar på dig.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg text-balance">
            Ett mysigt, helt nötfritt café där allt bakas på plats varje morgon.
            Ta med hunden, vännen — eller bara dig själv. Vi har kaffet på.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/meny"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-warm hover:opacity-90 transition"
            >
              Se menyn <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/lojalitet"
              className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 font-medium hover:bg-secondary transition"
            >
              Hämta stämpelkort
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-semibold">4,8</span>
              <span className="text-muted-foreground">(135 omdömen)</span>
            </div>
            <span className="hidden sm:inline text-muted-foreground">· 1–100 kr / pers</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-cinnamon opacity-20 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="Färska kanelbullar och bakverk på disken hos Nyvaket Café"
            width={1920}
            height={1280}
            className="relative rounded-3xl shadow-warm w-full h-[480px] sm:h-[560px] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl shadow-soft p-5 max-w-[240px] hidden sm:block">
            <p className="font-display text-lg font-semibold leading-tight">
              "The best fika and atmosphere!"
            </p>
            <p className="mt-2 text-xs text-muted-foreground">— Gäst på Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: Heart, title: "100 % nötfritt", text: "Trygg fika för alla med nötallergi." },
    { icon: Cake, title: "Hembakat varje dag", text: "Ägaren bakar allt själv från grunden." },
    { icon: Coffee, title: "Hundvänligt", text: "Fyrbenta vänner är alltid välkomna in." },
    { icon: Award, title: "4,8 av 5", text: "135 nöjda gäster på Google." },
  ];
  return (
    <section className="border-y border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((it) => (
          <div key={it.title} className="flex flex-col items-start gap-2">
            <span className="grid place-items-center h-11 w-11 rounded-full bg-background text-primary shadow-soft">
              <it.icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-semibold mt-1">{it.title}</h3>
            <p className="text-sm text-muted-foreground">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WeeklySpecial() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <img
          src={bulle}
          alt="Veckans special: kanelbullar med pärlsocker"
          width={1024}
          height={1024}
          loading="lazy"
          className="rounded-3xl shadow-soft w-full h-[420px] object-cover"
        />
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/30 px-4 py-1.5 text-xs font-medium text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" /> Veckans special
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-balance">
            Två kanelbullar + bryggkaffe — <span className="text-primary">39 kr</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Varje vecka väljer vi ut en ny favorit ur ugnen och kombinerar med
            nybryggt kaffe. Bara att slinka in.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Gäller t.o.m. söndag · I caféet & avhämtning
          </p>
          <Link
            to="/meny"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition"
          >
            Se hela menyn <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Signature() {
  const dishes = [
    { img: rakmacka, name: "Lyxig Räkmacka", price: "98 kr", note: "Husets klassiker" },
    { img: banhmi, name: "Banh Mi", price: "89 kr", note: "Knaprig & frisk" },
    { img: bulle, name: "Kanelbulle", price: "29 kr", note: "Nybakad varje morgon" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">Våra signaturer</h2>
          <p className="mt-2 text-muted-foreground">Det gästerna kommer tillbaka för.</p>
        </div>
        <Link to="/meny" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          Hela menyn <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {dishes.map((d) => (
          <article key={d.name} className="group rounded-3xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-warm transition">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={d.img}
                alt={d.name}
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold">{d.name}</h3>
                <p className="text-sm text-muted-foreground">{d.note}</p>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold">{d.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Pelle Anderson",
      text: "Toppen café och bageri, helt nötfritt café! Perfekt för mig med nötallergi. Plus att man får ha med sig hunden in och att ägaren bakar allt själv. Prisvärt, supergott och trevligt!",
    },
    {
      name: "Sepideh Kamrani",
      text: "Mysig cafe med fin nostalgisk inredning, flera sorters hembakade fina kakor, bakelser samt goda mackor. Verkligen värt ett besök, 5 minuter från E4.",
    },
    {
      name: "Gäst på Google",
      text: "The best fika and atmosphere!",
    },
  ];
  return (
    <section className="bg-cream border-y border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">Älskat av Södertälje</h2>
          <div className="mt-3 flex justify-center items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold">4,8</span>
            <span className="text-muted-foreground">· 135 omdömen</span>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-3xl bg-background border border-border p-6 shadow-soft">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{r.text}"</p>
              <footer className="mt-4 text-sm font-medium text-muted-foreground">— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
      <Newsletter />
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-card border border-border p-6 flex items-start gap-4">
          <MapPin className="h-6 w-6 text-primary shrink-0" />
          <div>
            <h3 className="font-display text-xl font-semibold">Hitta hit</h3>
            <p className="text-muted-foreground mt-1">Värdsholmsgatan 24, 151 32 Södertälje</p>
            <a
              href="https://maps.google.com/?q=Värdsholmsgatan+24+Södertälje"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex text-sm font-medium text-primary hover:underline"
            >
              Öppna i Google Maps →
            </a>
          </div>
        </div>
        <div className="rounded-3xl bg-card border border-border p-6 flex items-start gap-4">
          <Clock className="h-6 w-6 text-primary shrink-0" />
          <div>
            <h3 className="font-display text-xl font-semibold">Öppettider</h3>
            <ul className="mt-1 text-muted-foreground space-y-0.5 text-sm">
              <li>Tis–Fre · 07:00 – 17:00</li>
              <li>Lör · 09:00 – 15:00</li>
              <li>Sön & Mån · stängt</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

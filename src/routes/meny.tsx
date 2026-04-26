import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import rakmacka from "@/assets/photo-laxsmorgastarta.jpg";
import banhmi from "@/assets/photo-baguette.jpg";
import bulle from "@/assets/menu-kanelbulle.jpg";
import coffee from "@/assets/photo-coffee-pair.jpg";
import munkar from "@/assets/photo-munkar.jpg";
import igelkottar from "@/assets/photo-igelkottar.jpg";
import bakelse from "@/assets/photo-bakelse.jpg";
import burger from "@/assets/photo-burger.jpg";
import espresso from "@/assets/photo-espresso.jpg";

export const Route = createFileRoute("/meny")({
  head: () => ({
    meta: [
      { title: "Meny — Nyvaket Café & Bageri Södertälje" },
      { name: "description", content: "Vår meny: hembakade bullar, mackor, bakelser, kaffe och frukost. Allt nötfritt och bakat på plats." },
      { property: "og:title", content: "Meny — Nyvaket Café & Bageri" },
      { property: "og:description", content: "Hembakat varje dag. Allt nötfritt." },
    ],
  }),
  component: MenuPage,
});

type MenuItem = { name: string; desc: string; price: string; img?: string; tag?: string };
type Section = { title: string; note: string; items: MenuItem[] };

const sections: Section[] = [
  {
    title: "Smörgåsar & Mackor",
    note: "Bakade på vårt eget bröd",
    items: [
      { name: "Lyxig Räkmacka", desc: "Handskalade räkor, ägg, citron, dill på rågbröd", price: "98 kr", img: rakmacka, tag: "Husets favorit" },
      { name: "Baguette med skinka & ost", desc: "Krispig baguette, sallad, tomat", price: "89 kr", img: banhmi },
      { name: "Husets hamburgare", desc: "Saftig burgare på briochebröd, sallad & tomat", price: "129 kr", img: burger },
      { name: "Klassisk ostmacka", desc: "Lagrad svensk ost, smör, tomat, gräslök", price: "55 kr" },
      { name: "Avokadomacka", desc: "Mosad avokado, fetaost, granatäpplekärnor, surdeg", price: "75 kr" },
    ],
  },
  {
    title: "Från ugnen",
    note: "Bakat varje morgon kl. 05",
    items: [
      { name: "Kanelbulle", desc: "Med pärlsocker, klassisk svensk", price: "29 kr", img: bulle, tag: "Veckans special" },
      { name: "Munkar med kanelsocker", desc: "Friterade, fluffiga, rullade i kanelsocker", price: "32 kr", img: munkar },
      { name: "Igelkottar", desc: "Söta små bakverk med kokos & choklad", price: "35 kr", img: igelkottar, tag: "Barnens favorit" },
      { name: "Dagens bakelse", desc: "Variera efter säsong — fråga oss i disken", price: "55 kr", img: bakelse },
      { name: "Kardemummabulle", desc: "Riklig fyllning, smöriga lager", price: "32 kr" },
      { name: "Wienerbröd", desc: "Vaniljkräm och mandelflarn", price: "32 kr" },
      { name: "Chokladbiskvi", desc: "Mandelbotten, smörkräm, mörk choklad", price: "38 kr" },
      { name: "Princesstårtbit", desc: "Klassisk grön med hallon", price: "55 kr" },
    ],
  },
  {
    title: "Kaffe & Dryck",
    note: "Bryggt på lokalrostat kaffe",
    items: [
      { name: "Bryggkaffe", desc: "Påtår ingår", price: "32 kr", img: coffee },
      { name: "Espresso", desc: "Kort & intensiv", price: "32 kr", img: espresso },
      { name: "Cappuccino", desc: "Krämig mjölkskum", price: "42 kr" },
      { name: "Caffè Latte", desc: "Mild & mjuk", price: "45 kr" },
      { name: "Chai Latte", desc: "Husets blandning", price: "48 kr" },
      { name: "Färskpressad apelsinjuice", desc: "Pressad på beställning", price: "45 kr" },
      { name: "Varm choklad", desc: "Med vispgrädde", price: "42 kr" },
    ],
  },
  {
    title: "Frukost",
    note: "Serveras 07–11",
    items: [
      { name: "Liten frukost", desc: "Smörgås, kaffe & juice", price: "75 kr" },
      { name: "Stor frukost", desc: "Yoghurt, müsli, ost & skinka, ägg, kaffe & juice", price: "129 kr", tag: "Mest älskad" },
      { name: "Gröt med äpple & kanel", desc: "Havregrynsgröt med toppings", price: "55 kr" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <header className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-medium">
            100 % nötfritt · Hembakat dagligen
          </span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl font-semibold text-balance">Vår meny</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Allt vi serverar är bakat eller tillagat på plats av oss. Priserna är vänliga och porsionerna generösa.
          </p>
        </header>

        <div className="mx-auto max-w-5xl px-5 sm:px-8 pb-20 space-y-16">
          {sections.map((sec) => (
            <section key={sec.title}>
              <div className="flex items-end justify-between mb-6 border-b border-border pb-3">
                <h2 className="font-display text-3xl font-semibold">{sec.title}</h2>
                <p className="text-sm text-muted-foreground italic">{sec.note}</p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                {sec.items.map((it) => (
                  <li key={it.name} className="flex gap-4">
                    {it.img && (
                      <img
                        src={it.img}
                        alt={it.name}
                        loading="lazy"
                        className="h-20 w-20 rounded-2xl object-cover shadow-soft shrink-0"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-lg font-semibold">{it.name}</h3>
                        <span className="font-semibold tabular-nums whitespace-nowrap">{it.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">{it.desc}</p>
                      {it.tag && (
                        <span className="inline-block mt-2 text-xs font-medium rounded-full bg-accent/30 text-accent-foreground px-2.5 py-0.5">
                          {it.tag}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <p className="text-center text-sm text-muted-foreground">
            Vid frågor om allergener — fråga oss gärna i caféet eller ring 08-550 305 05.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

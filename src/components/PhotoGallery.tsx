import photo1 from "@/assets/photo-coffee-pair.jpg";
import photo2 from "@/assets/photo-saffranssemla.jpg";
import photo3 from "@/assets/photo-cake-latte.jpg";
import photo4 from "@/assets/photo-burger.jpg";
import photo5 from "@/assets/photo-baguette.jpg";
import photo6 from "@/assets/photo-igelkottar.jpg";
import photo7 from "@/assets/photo-espresso.jpg";
import photo8 from "@/assets/photo-bakelse.jpg";
import photo9 from "@/assets/photo-macka-kaffe.jpg";
import photo10 from "@/assets/photo-laxsmorgastarta.jpg";
import { Camera } from "lucide-react";

const photos = [
  { src: photo10, alt: "Laxsmörgåstårta med ägg och citron", span: "row-span-2" },
  { src: photo2, alt: "Saffranssemlor med vaniljgrädde och florsocker" },
  { src: photo3, alt: "Caffè latte med princessbakelse" },
  { src: photo4, alt: "Hamburgare med sallad och tomat" },
  { src: photo6, alt: "Söta igelkottsbakverk med kokos" },
  { src: photo1, alt: "Två koppar latte i vintagekoppar", span: "row-span-2" },
  { src: photo5, alt: "Knaprig baguette på serveringsbricka" },
  { src: photo8, alt: "Bakelse och kaffe i bärnstensglas" },
  { src: photo9, alt: "Macka och kaffe på träbord" },
  { src: photo7, alt: "Espresso i vintagekopp utomhus" },
];

export function PhotoGallery() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium">
            <Camera className="h-3.5 w-3.5" /> Från caféet
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">Ett smakprov</h2>
          <p className="mt-2 text-muted-foreground">Ögonblick från disken, bordet och ugnen.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
        {photos.map((p, i) => (
          <figure
            key={i}
            className={`relative overflow-hidden rounded-2xl shadow-soft group ${p.span ?? ""}`}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt & boka bord — Nyvaket Café Södertälje" },
      { name: "description", content: "Hitta hit, ring oss eller boka bord på Nyvaket Café & Bageri i Södertälje." },
      { property: "og:title", content: "Kontakt — Nyvaket Café" },
      { property: "og:description", content: "Värdsholmsgatan 24, Södertälje. Boka bord eller hör av dig." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-10 text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-semibold text-balance">
            Kom förbi — eller hör av dig.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Boka bord, beställ catering, eller bara säg hej. Vi svarar inom dagen.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <div className="rounded-3xl bg-card border border-border p-6 flex items-start gap-4 shadow-soft">
              <MapPin className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-display text-xl font-semibold">Adress</h3>
                <p className="mt-1 text-muted-foreground">Värdsholmsgatan 24<br />151 32 Södertälje</p>
                <a
                  href="https://maps.google.com/?q=Värdsholmsgatan+24+Södertälje"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex text-sm font-medium text-primary hover:underline"
                >
                  Vägbeskrivning →
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-card border border-border p-6 flex items-start gap-4 shadow-soft">
              <Phone className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-display text-xl font-semibold">Telefon</h3>
                <a href="tel:+4685503050" className="text-muted-foreground hover:text-foreground">08-550 305 05</a>
              </div>
            </div>

            <div className="rounded-3xl bg-card border border-border p-6 flex items-start gap-4 shadow-soft">
              <Clock className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-display text-xl font-semibold">Öppettider</h3>
                <ul className="mt-1 text-muted-foreground text-sm space-y-0.5">
                  <li>Tisdag – Fredag · 07:00 – 17:00</li>
                  <li>Lördag · 09:00 – 15:00</li>
                  <li>Söndag & Måndag · stängt</li>
                </ul>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="https://www.facebook.com/people/Nyvaket-caf%C3%A9-och-bageri/100063675725977/"
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl bg-card border border-border p-6 flex items-center gap-4 shadow-soft hover:bg-secondary transition"
              >
                <Facebook className="h-6 w-6 text-primary shrink-0" />
                <span className="font-medium">Följ oss på Facebook</span>
              </a>
              <a
                href="https://instagram.com/explore/locations/196258014433629/nyvaket-cafe-och-bageri/"
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl bg-card border border-border p-6 flex items-center gap-4 shadow-soft hover:bg-secondary transition"
              >
                <Instagram className="h-6 w-6 text-primary shrink-0" />
                <span className="font-medium">Följ oss på Instagram</span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-cream border border-border p-6 sm:p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl font-semibold">Skicka ett meddelande</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Bokning, catering eller bara en fråga.</p>

            {sent ? (
              <div className="rounded-2xl bg-background border border-border p-6 text-center">
                <p className="font-display text-xl">Tack! Vi hörs snart ☕</p>
                <p className="mt-2 text-sm text-muted-foreground">Vi återkommer normalt inom samma dag.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Namn" name="name" />
                  <Field label="Telefon" name="phone" type="tel" />
                </div>
                <Field label="E-post" name="email" type="email" required />
                <div>
                  <label className="block text-sm font-medium mb-1.5">Meddelande</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-2xl bg-background border border-input px-4 py-3 outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Hej! Jag skulle vilja..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-soft hover:opacity-90 transition"
                >
                  Skicka meddelande
                </button>
              </form>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
          <div className="rounded-3xl overflow-hidden border border-border shadow-soft">
            <iframe
              title="Karta — Nyvaket Café"
              src="https://www.google.com/maps?q=Värdsholmsgatan+24+Södertälje&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-full bg-background border border-input px-4 py-2.5 outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

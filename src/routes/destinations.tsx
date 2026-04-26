import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-kerala.jpg";
import tajImg from "@/assets/dest-taj.jpg";
import himalayaImg from "@/assets/dest-himalayas.jpg";
import maldivesImg from "@/assets/dest-maldives.jpg";
import dubaiImg from "@/assets/dest-dubai.jpg";
import goaImg from "@/assets/dest-goa.jpg";
import santoriniImg from "@/assets/dest-santorini.jpg";

export const Route = createFileRoute("/destinations")({
  component: DestinationsPage,
  head: () => ({
    meta: [
      { title: "Destinations — Packlogue Holidays" },
      { name: "description", content: "Browse curated tour packages to Kerala, Goa, Manali, Maldives, Dubai, Santorini and more." },
      { property: "og:title", content: "Destinations — Packlogue Holidays" },
      { property: "og:image", content: heroImg },
    ],
  }),
});

const dests = [
  { name: "Kerala Backwaters", country: "India", img: heroImg, days: "5 Days", price: "₹12,999", desc: "Houseboats, palm-lined rivers and Ayurvedic bliss." },
  { name: "Agra & Taj Mahal", country: "India", img: tajImg, days: "3 Days", price: "₹9,499", desc: "Sunrise at the world's most beautiful monument." },
  { name: "Manali Himalayas", country: "India", img: himalayaImg, days: "6 Days", price: "₹15,799", desc: "Snow peaks, prayer flags and alpine forests." },
  { name: "Maldives Escape", country: "Maldives", img: maldivesImg, days: "5 Days", price: "₹54,999", desc: "Overwater villas and turquoise reefs." },
  { name: "Dubai Discovery", country: "UAE", img: dubaiImg, days: "4 Days", price: "₹39,999", desc: "Skyline magic and desert dunes." },
  { name: "Goa Beaches", country: "India", img: goaImg, days: "4 Days", price: "₹8,999", desc: "Sunset coves and Portuguese cafés." },
  { name: "Santorini Sunsets", country: "Greece", img: santoriniImg, days: "7 Days", price: "₹89,999", desc: "Whitewashed villages over the Aegean sea." },
];

function DestinationsPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-white text-center">
          <p className="text-accent-glow font-semibold tracking-widest text-xs uppercase mb-3">Wander further</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-5">Our Destinations</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Handpicked journeys across India and the world — each one designed to leave a mark.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dests.map((d) => (
            <article key={d.name} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-card transition-smooth">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" width={1024} height={1280} />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-primary text-xs font-semibold backdrop-blur-md">{d.country}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground mb-2">{d.name}</h3>
                <p className="text-muted-foreground text-sm mb-5">{d.desc}</p>
                <div className="flex items-center justify-between text-sm border-t border-border pt-5">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Clock size={14} />{d.days}</span>
                    <span className="inline-flex items-center gap-1"><MapPin size={14} />Tour</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">from</div>
                    <div className="font-display text-lg text-accent">{d.price}</div>
                  </div>
                </div>
                <Button asChild variant="hero" size="lg" className="w-full mt-5">
                  <Link to="/contact">Enquire <ArrowRight /></Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

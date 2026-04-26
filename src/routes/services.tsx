import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Car, Hotel, Plane, Train, UserCheck, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Packlogue Holidays" },
      { name: "description", content: "Tour packages, vehicle hire, hotel & resort booking, flight & train booking, tour guides — everything you need." },
      { property: "og:title", content: "Services — Packlogue Holidays" },
    ],
  }),
});

const services = [
  { icon: Compass, title: "Tour Packages", desc: "Curated domestic and international itineraries built around your interests, pace and budget.", points: ["Honeymoon & couple", "Family getaways", "Group tours", "Pilgrimage tours"] },
  { icon: Car, title: "Vehicle Hiring", desc: "Premium fleet of sedans, SUVs, tempo travellers and luxury coaches with verified drivers.", points: ["Self-drive options", "Airport transfers", "Multi-day trips", "AC & non-AC fleet"] },
  { icon: Hotel, title: "Hotel & Resort Booking", desc: "Negotiated rates at handpicked hotels and resorts — from boutique stays to 5-star luxury.", points: ["Best rate guarantee", "Verified properties", "Family & couple suites", "Last-minute deals"] },
  { icon: Plane, title: "Flight Booking", desc: "Best fares across global airlines with flexible cancellation and 24/7 ticket support.", points: ["Domestic & international", "Group fares", "Visa assistance", "Web check-in help"] },
  { icon: Train, title: "Train Ticket Booking", desc: "Confirmed train reservations across India — including Tatkal and group bookings.", points: ["Tatkal booking", "Group reservation", "AC & sleeper class", "PNR support"] },
  { icon: UserCheck, title: "Tour Guides", desc: "Local, language-fluent guides who turn sightseeing into storytelling.", points: ["Multi-lingual", "Licensed experts", "Cultural insights", "Photography help"] },
];

function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-white text-center">
          <p className="text-accent-glow font-semibold tracking-widest text-xs uppercase mb-3">Full-service travel</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-5">What we do</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Six services. One promise — make your journey effortless from first idea to homecoming.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-smooth">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-brand text-white flex items-center justify-center shadow-soft shrink-0">
                  <s.icon size={26} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground mb-5">{s.desc}</p>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-foreground/80">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <Check size={14} className="text-accent" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 text-center">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Request a Quote <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Globe2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import mark from "@/assets/packlogue-mark.png";
import goaImg from "@/assets/dest-goa.jpg";
import himalayaImg from "@/assets/dest-himalayas.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Packlogue Holidays" },
      { name: "description", content: "Packlogue Holidays is a Mannarkkad-based travel company creating handcrafted journeys across India and the world." },
      { property: "og:title", content: "About — Packlogue Holidays" },
      { property: "og:image", content: goaImg },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-white text-center">
          <p className="text-accent-glow font-semibold tracking-widest text-xs uppercase mb-3">Our story</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-5">Travel made personal.</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            From a small office in Mannarkkad to journeys around the globe — meet the team behind Packlogue.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={himalayaImg} alt="Himalayas" loading="lazy" className="rounded-3xl shadow-card w-full aspect-[4/5] object-cover" width={1024} height={1280} />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card border border-border p-5 flex items-center gap-4">
              <img src={mark} alt="Packlogue mark" className="w-12 h-12" width={48} height={48} />
              <div>
                <div className="font-display text-foreground">Est. 2018</div>
                <div className="text-xs text-muted-foreground">Mannarkkad, Kerala</div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-3">Who we are</p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-6">
              A small team with <span className="text-gradient-brand">big wanderlust</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Packlogue Holidays began with a simple belief: every journey should feel personal. We design trips the way we'd want to take them — slow when needed, thrilling when called for, and always rooted in real local culture.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From quick weekend escapes to month-long expeditions, our travellers come back with the same words: "It felt like home, even far from home."
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Heart, t: "Personal", d: "Hand-built trips" },
                { icon: Globe2, t: "Global", d: "120+ destinations" },
                { icon: Sparkles, t: "Trusted", d: "5,000+ travellers" },
              ].map((v) => (
                <div key={v.t} className="p-4 rounded-xl border border-border bg-card text-center">
                  <v.icon className="text-accent mx-auto mb-2" size={22} />
                  <div className="font-semibold text-sm text-foreground">{v.t}</div>
                  <div className="text-xs text-muted-foreground">{v.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Plan with us <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl text-foreground mb-6">Our promise</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe travel should add to your life, not take from it. So we sweat the small stuff — the right driver, the room with the view, the guide who knows the back streets — so you can focus on the moments that matter.
          </p>
        </div>
      </section>
    </>
  );
}

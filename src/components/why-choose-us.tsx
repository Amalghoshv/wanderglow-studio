import { Map, Users, Tag, PhoneCall, ShieldCheck, Globe } from "lucide-react";

const reasons = [
  {
    icon: Map,
    title: "Personalized Travel Planning",
    desc: "Trips tailored to your budget, preferences, and unique travel style."
  },
  {
    icon: Users,
    title: "Trusted & Professional Team",
    desc: "Experienced travel experts ensuring smooth execution at every step."
  },
  {
    icon: Tag,
    title: "Best Price Guarantee",
    desc: "Premium experiences with competitive, transparent pricing. No hidden charges."
  },
  {
    icon: PhoneCall,
    title: "24/7 Travel Support",
    desc: "Continuous assistance and peace of mind throughout your entire journey."
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety",
    desc: "Handpicked accommodations, reliable transport, and top priority on safety, hygiene, and comfort."
  },
  {
    icon: Globe,
    title: "Local & Global Expertise",
    desc: "Deep knowledge of hidden local gems and iconic global destinations to enrich your itinerary."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-28 bg-background relative overflow-hidden reveal">
      {/* Background aesthetics */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-card to-transparent opacity-50" />
      <div className="absolute -left-40 top-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-3">Our Promise</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-6">
            Why Choose <span className="text-gradient-brand">Packlogue</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are committed to delivering extraordinary value and uncompromising quality. Here is why thousands of travellers trust us with their vacations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`group relative p-8 rounded-3xl bg-card border border-border hover:border-accent/40 shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col justify-between`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-gradient-brand opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <r.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3 leading-tight">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

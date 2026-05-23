import { 
  GraduationCap, Factory, Briefcase, Users, Map, Globe, Heart, 
  Landmark, Mountain, Ship, Sparkles, Hotel, Plane, ShieldCheck, Car, ArrowRight
} from "lucide-react";

const tourCategories = [
  { icon: GraduationCap, title: "School & College Tours", desc: "Educational excursions tailored for students." },
  { icon: Factory, title: "Industrial Visits", desc: "Insightful corporate and industrial learning trips." },
  { icon: Briefcase, title: "Corporate Tours", desc: "Team building, MICE, and executive retreats." },
  { icon: Users, title: "Family & Group Tours", desc: "Memorable getaways for families and large groups." },
  { icon: Map, title: "Weekend & Domestic", desc: "Quick escapes and comprehensive national tours." },
  { icon: Globe, title: "International Packages", desc: "Curated global journeys across continents." },
  { icon: Heart, title: "Honeymoon Packages", desc: "Romantic escapes to picturesque destinations." },
  { icon: Landmark, title: "Pilgrim Tours", desc: "Spiritual journeys and holy site visitations." },
  { icon: Mountain, title: "Wildlife & Adventure", desc: "Trekking, camping, and thrilling safaris." },
  { icon: Ship, title: "Cruise & Houseboat", desc: "Relaxing voyages on backwaters and oceans." },
  { icon: Sparkles, title: "Customized Planning", desc: "Tailor-made itineraries built just for you." },
];

const travelAssistance = [
  { icon: Hotel, title: "Resort & Hotel Booking", desc: "Handpicked accommodations for every budget." },
  { icon: Plane, title: "Flight & Train Tickets", desc: "Hassle-free reservations and travel assistance." },
  { icon: ShieldCheck, title: "Visa & Insurance", desc: "Expert assistance for travel documentation." },
  { icon: Car, title: "Vehicle Hiring", desc: "Tourist vehicles and prompt airport pickup/drops." },
];

export function CoreServices() {
  return (
    <section id="services" className="py-12 sm:py-28 bg-background relative overflow-hidden reveal">
      {/* Dynamic Backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-brand opacity-[0.03] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-16">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-3">Our Expertise</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
              Core <span className="text-gradient-brand">Services</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg md:text-right">
            From inspiration to the final souvenir, we offer a complete suite of travel services for a seamless journey.
          </p>
        </div>

        {/* Travel Assistance Section (Featured Cards) */}
        <div className="mb-24">
          <h3 className="text-xl sm:text-2xl font-display text-foreground mb-8 flex items-center gap-4">
            <span className="w-10 h-px bg-accent/40 block"></span>
            Travel Assistance & Bookings
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {travelAssistance.map((s, i) => (
              <div
                key={s.title}
                className={`group relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 flex flex-col ${
                  i === 1 
                    ? "bg-gradient-brand text-white shadow-glow hover:shadow-glow-lg" 
                    : "bg-card shadow-soft border border-border hover:border-accent/40 hover:shadow-card"
                }`}
              >
                {i === 1 && (
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/20 rounded-full blur-3xl" />
                )}
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm ${
                  i === 1 
                    ? "bg-white/20 text-white backdrop-blur-md border border-white/20" 
                    : "bg-gradient-to-br from-accent/10 to-accent/5 text-accent"
                }`}>
                  <s.icon size={26} strokeWidth={1.5} />
                </div>
                
                <div className="mt-auto">
                  <h4 className={`font-display text-2xl mb-3 leading-tight ${i === 1 ? "text-white" : "text-foreground"}`}>
                    {s.title}
                  </h4>
                  <p className={`leading-relaxed text-sm ${i === 1 ? "text-white/80" : "text-muted-foreground"}`}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tour Categories Section (Sleek List Grid) */}
        <div>
          <h3 className="text-xl sm:text-2xl font-display text-foreground mb-8 flex items-center gap-4">
            <span className="w-10 h-px bg-accent/40 block"></span>
            Tour Categories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {tourCategories.map((s) => (
              <div
                key={s.title}
                className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-card hover:shadow-soft transition-all duration-300 border border-transparent hover:border-border/60 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-muted/50 text-muted-foreground group-hover:bg-gradient-brand group-hover:text-white group-hover:shadow-glow flex items-center justify-center shrink-0 transition-all duration-500">
                  <s.icon size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-base mb-1 group-hover:text-accent transition-colors">{s.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-1">{s.desc}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-accent">
                  <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

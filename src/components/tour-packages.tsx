import { Link } from "@tanstack/react-router";
import { Clock, Train, ArrowRight, CalendarDays, MapPin } from "lucide-react";

const categories = [
  { title: "One Day Packages", desc: "Quick getaways to Alappuzha, Munnar, Wayanad, Ooty, and more.", icon: Clock },
  { title: "Two Days Packages", desc: "Extended weekend trips covering multiple scenic destinations.", icon: CalendarDays },
  { title: "Three Days Packages", desc: "Multi-city tours across South India's finest heritage spots.", icon: MapPin },
  { title: "Four Days Packages", desc: "Deeper explorations for a complete immersive experience.", icon: MapPin },
  { title: "Five Days Packages", desc: "Extensive regional tours across states and varied landscapes.", icon: MapPin },
  { title: "Six Days Packages", desc: "Our most comprehensive itineraries for the ultimate vacation.", icon: MapPin },
  { title: "Train Packages", desc: "Specialized train routes covering major Indian hubs like Delhi, Goa, and Mumbai.", icon: Train },
];

export function TourPackages() {
  return (
    <section id="packages" className="py-12 sm:py-28 bg-card relative overflow-hidden reveal">
      {/* Background aesthetics */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-brand opacity-10 rounded-full blur-[120px] translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-3">Itineraries Designed For You</p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-6">
              Tour Packages & <span className="text-gradient-brand">Destinations</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From quick weekend escapes to immersive cultural journeys, explore our extensive range of domestic and train packages tailored to your schedule.
            </p>
          </div>
          <Link to="/packages-overview" className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-full font-semibold hover:shadow-glow transition-all shrink-0">
            Explore All Packages <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.title}
              className="group p-6 rounded-3xl bg-background border border-border hover:border-accent/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 text-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <cat.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">{cat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">{cat.desc}</p>
              
              <Link 
                to="/packages-overview"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-glow transition-colors mt-auto"
              >
                View Routes <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
          
          {/* Custom Package Card */}
          <div className="group p-6 rounded-3xl bg-gradient-brand text-white shadow-glow flex flex-col h-full relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <h3 className="font-display text-xl mb-3 relative z-10">Need a Custom Route?</h3>
            <p className="text-white/80 text-sm leading-relaxed flex-grow mb-6 relative z-10">
              We can tailor any itinerary to fit your exact preferences, duration, and budget.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-primary px-4 py-2 rounded-full w-fit hover:shadow-lg transition-all relative z-10"
            >
              Contact our experts <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

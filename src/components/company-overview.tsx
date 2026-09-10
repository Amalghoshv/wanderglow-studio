import { Star, Award, Users, MapPin, Quote } from "lucide-react";
import goaImg from "@/assets/dest-goa.webp";
import heroImg from "@/assets/hero-kerala.webp";
import munnarImg from "@/assets/dest-munnar.webp";

export function CompanyOverview() {
  return (
    <section id="about" className="py-12 sm:py-32 bg-card relative reveal overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Images Section */}
          <div className="relative mb-20 sm:mb-0">
            <div className="absolute -inset-4 bg-gradient-brand rounded-3xl blur-2xl opacity-20" />
            
            <div className="relative grid grid-cols-2 gap-4">
              <img 
                src={goaImg} 
                alt="Happy travellers enjoying a beach vacation" 
                loading="lazy" 
                className="rounded-3xl shadow-glow w-full aspect-[4/5] object-cover" 
              />
              <div className="flex flex-col gap-4 pt-12">
                <img 
                  src={heroImg} 
                  alt="Beautiful backwaters" 
                  loading="lazy" 
                  className="rounded-3xl shadow-card w-full aspect-square object-cover" 
                />
                <div className="bg-gradient-brand rounded-3xl p-6 shadow-glow text-white flex flex-col justify-center items-start aspect-square relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 p-4 opacity-20 transform rotate-12">
                    <Quote size={80} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl mb-2 relative z-10 leading-tight">Your Journey,<br/>Our Responsibility.</h3>
                  <p className="text-white/80 text-[10px] sm:text-xs font-medium uppercase tracking-widest relative z-10 mt-auto">Our Motto</p>
                </div>
              </div>
            </div>

            {/* Testimonial Floating Badge & Munnar Image */}
            <div className="absolute -bottom-10 -left-2 sm:-bottom-8 sm:-left-8 z-20">
              <div className="relative">
                {/* Larger Munnar Image */}
                <img 
                  src={munnarImg}
                  alt="Lush green tea gardens of Munnar"
                  loading="lazy"
                  className="w-32 h-32 sm:w-64 sm:h-64 rounded-2xl sm:rounded-3xl shadow-glow object-cover border-4 sm:border-[8px] border-background"
                />
                
                {/* Review Card Stacking over the image */}
                <div className="absolute -bottom-4 left-10 sm:left-auto sm:-bottom-10 sm:-right-10 bg-background p-2.5 sm:p-6 rounded-xl sm:rounded-2xl shadow-card border border-border w-[170px] sm:w-[300px] z-30">
                  <div className="flex items-center gap-0.5 sm:gap-1 text-accent mb-1 sm:mb-2">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="w-2.5 h-2.5 sm:w-4 sm:h-4" fill="currentColor" />)}
                  </div>
                  <p className="text-[10px] sm:text-base text-foreground font-medium leading-tight sm:leading-snug">
                    "Best trip we've ever had — every detail was handled perfectly."
                  </p>
                  <p className="text-[9px] sm:text-xs text-muted-foreground mt-1 sm:mt-2">— Anita & Raj</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="relative z-10 lg:pl-6">
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-3">Company Overview</p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-6 leading-tight">
              Your <span className="text-gradient-brand">Trusted</span> Travel Partner.
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Packlogue Holidays is positioned as a "Trusted Travel Partner," dedicated to crafting personalized and seamless travel experiences for individuals, families, groups, and corporate clients. 
            </p>
            
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              From domestic getaways to international adventures, we provide <span className="text-foreground font-medium">end-to-end travel solutions</span> including customized tour packages, accommodation, transportation, and booking assistance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Award, title: "Personalized Experiences", desc: "Tailored for families & corporates." },
                { icon: MapPin, title: "End-to-End Solutions", desc: "From tickets to accommodations." },
                { icon: Users, title: "Seamless Journeys", desc: "We manage every single detail." },
                { icon: Star, title: "Trusted Partner", desc: "Unwavering commitment to quality." },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <f.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

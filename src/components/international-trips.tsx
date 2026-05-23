import { Link } from "@tanstack/react-router";
import { ArrowRight, Plane, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import baliImg from "@/assets/bali_temple_1779475272545.png";
import japanImg from "@/assets/japan_cherry_1779475287338.png";
import singaporeImg from "@/assets/singapore_city_1779475303037.png";
import thailandImg from "@/assets/thailand_beach_1779475320065.png";
import dubaiImg from "@/assets/dubai_skyline_1779475337956.png";
import greeceImg from "@/assets/europe_street_1779475354860.png";
import maldivesImg from "@/assets/dest-maldives.jpg";
import himalayasImg from "@/assets/dest-himalayas.jpg";
import tajImg from "@/assets/dest-taj.jpg";
import heroImg from "@/assets/hero-kerala.jpg";

import egyptImg from "@/assets/dest-egypt.png";
import cambodiaImg from "@/assets/dest-cambodia.png";
import vietnamImg from "@/assets/dest-vietnam.png";
import malaysiaImg from "@/assets/dest-malaysia.png";
import srilankaImg from "@/assets/dest-srilanka.png";

import laosImg from "@/assets/dest-laos.png";
import uzbekistanImg from "@/assets/dest-uzbekistan.png";
import armeniaImg from "@/assets/dest-armenia.png";
import mauritiusImg from "@/assets/dest-mauritius.png";
import georgiaImg from "@/assets/dest-georgia.png";

const destinations = [
  { name: "Bali", region: "Southeast Asia", img: baliImg, featured: true },
  { name: "Japan", region: "East Asia", img: japanImg, featured: true },
  { name: "Singapore", region: "Southeast Asia", img: singaporeImg, featured: true },
  { name: "Thailand", region: "Southeast Asia", img: thailandImg, featured: true },
  { name: "Dubai", region: "Middle East", img: dubaiImg, featured: true },
  { name: "Greece", region: "Europe", img: greeceImg, featured: true },
  { name: "Maldives", region: "Indian Ocean", img: maldivesImg },
  { name: "Mauritius", region: "Indian Ocean", img: mauritiusImg },
  { name: "Egypt", region: "Middle East", img: egyptImg },
  { name: "Armenia", region: "Eurasia", img: armeniaImg },
  { name: "Georgia", region: "Eurasia", img: georgiaImg },
  { name: "Kazakhstan", region: "Central Asia", img: himalayasImg },
  { name: "Uzbekistan", region: "Central Asia", img: uzbekistanImg },
  { name: "Cambodia", region: "Southeast Asia", img: cambodiaImg },
  { name: "Laos", region: "Southeast Asia", img: laosImg },
  { name: "Vietnam", region: "Southeast Asia", img: vietnamImg },
  { name: "Malaysia", region: "Southeast Asia", img: malaysiaImg },
  { name: "Sri Lanka", region: "South Asia", img: srilankaImg },
];

export function InternationalTrips() {
  return (
    <section className="py-12 sm:py-28 bg-card relative overflow-hidden reveal">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-brand opacity-10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              <Plane size={14} /> Go Beyond Borders
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
              <span className="text-gradient-brand">International</span> Escapes
            </h2>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              Discover our expanded list of global destinations. From the cherry blossoms of Japan to the vibrant streets of Greece, we curate unforgettable international journeys.
            </p>
          </div>
          <Button asChild variant="default" size="lg" className="shrink-0 shadow-glow hover:shadow-glow-lg transition-all">
            <Link to="/contact">Plan Your Trip <ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </div>

        {/* CSS Scroll Snapping Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 gap-4 sm:gap-6 style-scroll">
          {destinations.map((d) => (
            <div 
              key={d.name} 
              className={`shrink-0 snap-start relative rounded-2xl overflow-hidden group shadow-soft hover:shadow-card transition-all duration-500 w-[260px] sm:w-[320px] aspect-[4/5]`}
            >
              <img
                src={d.img}
                alt={`Tour package for ${d.name}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 group-hover:to-black/80 transition-colors" />
              
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white transform transition-transform duration-500">
                <div className="flex items-center gap-1.5 text-accent-glow text-xs sm:text-sm font-medium mb-2 opacity-90">
                  <MapPin size={14} /> {d.region}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-medium mb-1 drop-shadow-md">{d.name}</h3>
                
                <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-300 opacity-0 group-hover:opacity-100 mt-2">
                  <span className="text-sm font-medium text-white/90 border-b border-white/40 hover:border-accent hover:text-accent-glow transition-smooth pb-0.5 inline-flex items-center gap-1 cursor-pointer">
                    View itineraries <ArrowRight size={14} />
                  </span>
                </div>
              </div>
              
              {d.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold text-white shadow-soft">
                  Popular
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html:`
        .style-scroll::-webkit-scrollbar {
          height: 8px;
        }
        .style-scroll::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.05);
          border-radius: 4px;
        }
        .style-scroll::-webkit-scrollbar-thumb {
          background: rgba(var(--accent), 0.5);
          border-radius: 4px;
        }
        .style-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(var(--accent), 0.8);
        }
      `}} />
    </section>
  );
}

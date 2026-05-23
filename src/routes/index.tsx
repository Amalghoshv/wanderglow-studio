import { useEffect } from "react";
import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, MapPin, Star, Users, Award, Compass, Plane, Hotel, Car, UserCheck, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactMapSection } from "@/components/contact-map-section";
import { InternationalTrips } from "@/components/international-trips";
import { CoreServices } from "@/components/core-services";
import { CompanyOverview } from "@/components/company-overview";
import { WhyChooseUs } from "@/components/why-choose-us";
import { TourPackages } from "@/components/tour-packages";
import heroImg from "@/assets/hero-kerala.jpg";
import tajImg from "@/assets/dest-taj.jpg";
import himalayaImg from "@/assets/dest-himalayas.jpg";
import maldivesImg from "@/assets/dest-maldives.jpg";
import dubaiImg from "@/assets/dest-dubai.jpg";
import goaImg from "@/assets/dest-goa.jpg";
import santoriniImg from "@/assets/dest-santorini.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Packlogue Holidays — Handcrafted Tour Packages from Kerala" },
      { name: "description", content: "Explore the best tour packages, vehicle hire, and hotel bookings with Packlogue Holidays. Your premier travel partner in Mannarkkad, Kerala for domestic and international trips." },
      { property: "og:title", content: "Packlogue Holidays — Handcrafted Tour Packages" },
      { property: "og:description", content: "Discover curated travel experiences with our expert team. From Kerala to the Maldives, we handle every detail of your journey." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
});

const destinations = [
  { name: "Kerala", tag: "Backwaters", img: heroImg, price: "₹12,999" },
  { name: "Agra", tag: "Heritage", img: tajImg, price: "₹9,499" },
  { name: "Manali", tag: "Mountains", img: himalayaImg, price: "₹15,799" },
  { name: "Maldives", tag: "Island", img: maldivesImg, price: "₹54,999" },
  { name: "Dubai", tag: "City Break", img: dubaiImg, price: "₹39,999" },
  { name: "Goa", tag: "Beaches", img: goaImg, price: "₹8,999" },
];

const services = [
  { icon: Compass, title: "Tour Packages", desc: "Domestic & international curated journeys." },
  { icon: Car, title: "Vehicle Hiring", desc: "Premium fleet for comfortable travel." },
  { icon: Hotel, title: "Hotel & Resort", desc: "Handpicked stays for every budget." },
  { icon: Plane, title: "Flight Booking", desc: "Best fares across global airlines." },
  { icon: Train, title: "Train Booking", desc: "Effortless rail reservations." },
  { icon: UserCheck, title: "Tour Guides", desc: "Local experts for authentic insights." },
];

export function Index() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const targetId = pathname.slice(1);
    
    if (targetId) {
      const scrollTimer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(scrollTimer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Kerala backwaters at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/60 to-accent/40" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-24 grid lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
          <div className="lg:col-span-7 text-white animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm mb-6 sm:mb-8 mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted by 5,000+ happy travellers
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 text-balance">
            <span className="italic text-accent-glow">Unveil the world's</span> hidden gems.
            </h1>
            <p className="text-base sm:text-xl text-white/85 max-w-2xl mb-8 sm:mb-10 leading-relaxed mx-auto lg:mx-0">
              Packlogue Holidays curates immersive journeys — from the misty Kerala backwaters to global wonders. Experience the best tour packages from the most trusted travel agency in Palakkad.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                <Link to="/destinations">
                  Explore Destinations <ArrowRight className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
                <Link to="/contact">Request a Custom Tour</Link>
              </Button>
            </div>
 
            <div className="mt-12 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto lg:mx-0">
              {[
                { v: "5K+", l: "Happy Travellers" },
                { v: "120+", l: "Destinations" },
                { v: "4.9★", l: "Average Rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl sm:text-4xl text-accent-glow">{s.v}</div>
                  <div className="text-[10px] sm:text-sm text-white/70 mt-1 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative animate-float-slow">
              <div className="absolute -inset-4 bg-gradient-brand rounded-3xl blur-2xl opacity-40" />
              <div className="relative grid grid-cols-2 gap-4">
                <img src={maldivesImg} alt="Luxury beach villa in Maldives" loading="lazy" className="rounded-2xl shadow-glow object-cover h-56 w-full" width={400} height={500} />
                <img src={santoriniImg} alt="Iconic blue domed church in Santorini, Greece" loading="lazy" className="rounded-2xl shadow-glow object-cover h-56 w-full mt-12" width={400} height={500} />
                <img src={himalayaImg} alt="Snow-capped mountain peaks of the Himalayas" loading="lazy" className="rounded-2xl shadow-glow object-cover h-56 w-full -mt-8" width={400} height={500} />
                <img src={tajImg} alt="The magnificent Taj Mahal in Agra, India" loading="lazy" className="rounded-2xl shadow-glow object-cover h-56 w-full mt-4" width={400} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompanyOverview />
      <WhyChooseUs />

      <CoreServices />

      {/* DESTINATIONS */}
      <section id="destinations" className="py-12 sm:py-24 bg-gradient-soft relative overflow-hidden reveal">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-3">Popular places</p>
              <h2 className="font-display text-4xl sm:text-5xl text-foreground max-w-xl">
                Featured <span className="text-gradient-brand">destinations</span>
              </h2>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link to="/destinations">View all <ArrowRight /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((d) => (
              <div
                key={d.name}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth aspect-[4/5]"
              >
                <img
                  src={d.img}
                  alt={`Explore our ${d.name} tour package - ${d.tag}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  width={1024}
                  height={1280}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium border border-white/20">
                      {d.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent text-xs font-semibold shadow-soft">
                      from {d.price}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-accent-glow text-sm mb-2">
                      <MapPin size={14} /> Tour package
                    </div>
                    <h3 className="font-display text-3xl mb-4">{d.name}</h3>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white/40 hover:border-accent hover:text-accent-glow transition-smooth pb-1 w-fit"
                    >
                      Plan a trip <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TourPackages />
      <InternationalTrips />

      <ContactMapSection />
    </>
  );
}

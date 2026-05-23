import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Train, Compass, ArrowRight, CheckCircle2, ChevronRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

import heroImg from "@/assets/hero-kerala.jpg";
import tajImg from "@/assets/dest-taj.jpg";
import himalayaImg from "@/assets/dest-himalayas.jpg";
import maldivesImg from "@/assets/dest-maldives.jpg";
import dubaiImg from "@/assets/dest-dubai.jpg";
import goaImg from "@/assets/dest-goa.jpg";
import santoriniImg from "@/assets/dest-santorini.jpg";

export const Route = createFileRoute("/packages")({
  component: PackagesPage,
});

const packageData = [
  {
    id: "one-day",
    title: "One Day Packages",
    icon: Compass,
    image: heroImg,
    routes: [
      "Alappuzha", "Ernakulam with Cruise", "Malampuzha", "Nelliyampathy", 
      "Nilambur", "Wayanad", "Munnar", "Ramakkalmedu", "Vagamon", "Thenmala", 
      "Thiruvananthapuram", "Athirappally", "Jadayupara", "Sambrani Kodi", 
      "Parambikulam", "Kanyakumari", "Ooty", "Kodaikanal", "Chennai", "Coorg", "Mysore"
    ]
  },
  {
    id: "two-days",
    title: "Two Days Packages",
    icon: CalendarDays,
    image: goaImg,
    routes: [
      "Munnar → Ernakulam", "Munnar → Vagamon", "Munnar → Ramakkalmedu", "Munnar → Calverymount → Ramakkalmedu", "Munnar → Athirappally → Ernakulam", "Munnar → Thekkady", "Jadayupara → Alleppey", "Munnar → Idukki", "Jadayupara → Ernakulam", "Munnar → Alleppey", "Trivandrum → Alleppey", "Trivandrum → Kanyakumari", "Trivandrum → Jadayupara", "Wayanad → Coorg", "Athirappally → Valparai", "Wayanad → Ooty", "Mysore → Bangalore", "Kodaikanal → Munnar", "Kodaikanal → Thekkady", "Mysore → Wonderla", "Kodaikanal → Ramakkalmedu", "Ooty → Mysore", "Mysore → Coorg", "Chennai → Mahabalipuram", "Chennai → Pondicherry", "Chikmagalur → Coorg", "Chikmagalur → Mysore", "Shimoga → Chikmagalur", "Chikmagalur → Bangalore", "Chikmagalur → Belur", "Udupi → Chikmagalur", "Udupi → Belur", "Udupi → Gokarna → Murudeshwar", "Udupi → Mirjan Fort → Gokarna", "Vagamon → Parunthumpara → Panchamedu"
    ]
  },
  {
    id: "three-days",
    title: "Three Days Packages",
    icon: MapPin,
    image: himalayaImg,
    routes: [
      "Trivandrum → Kanyakumari → Ponmudi", "Trivandrum → Alleppey → Kochi", "Jadayupara → Trivandrum → Kanyakumari", "Munnar → Vagamon → Ramakkalmedu", "Munnar → Ernakulam → Wonderla", "Kodaikanal → Thekkady → Munnar", "Kodaikanal → Munnar → Wonderla", "Rameshwaram → Danushkodi → Kodaikanal", "Chennai → Mahabalipuram → Pondicherry", "Ooty → Wayanad → Mysore", "Ooty → Mysore → Bangalore", "Bangalore → Mysore → Coorg", "Bangalore → Mysore → Wonderla", "Chikmagalur → Belur → Coorg", "Chikmagalur → Mysore → Coorg", "Udupi → Chikmagalur → Coorg", "Udupi → Chikmagalur → Belur", "Udupi → Shimoga → Chikmagalur", "Udupi → Dandeli → Gokarna → Murudeshwar", "Udupi → Mirjan Fort → Gokarna → Murudeshwar"
    ]
  },
  {
    id: "four-days",
    title: "Four Days Packages",
    icon: MapPin,
    image: santoriniImg,
    routes: [
      "Munnar → Vagamon → Ramakkalmedu → Idukki", "Vagamon → Ramakkalmedu → Munnar → Wonderla", "Kodaikanal → Munnar → Ernakulam → Wonderla", "Kodaikanal → Munnar → Thekkady → Ernakulam", "Trivandrum → Kanyakumari → Alleppey → Kochi", "Chennai → Mahabalipuram → Pondicherry → Hogenakkal", "Bangalore → Mysore → Chikmagalur → Coorg", "Bangalore → Wonderla → Mysore → Coorg", "Udupi → Gokarna → Murudeshwar → Dandeli → Coorg", "Udupi → Dandeli → Goa", "Udupi → Goa → Chikmagalur", "Udupi → Bangalore → Mysore → Coorg", "Udupi → Chikmagalur → Belur → Coorg", "Udupi → Shimoga → Chikmagalur → Coorg", "Bangalore → Chitradurga → Hampi", "Hampi → Badami → Dandeli → Gokarna", "Goa → Udupi → Chikmagalur", "Udupi → Goa", "Goa → Bangalore", "Bangalore → Hyderabad"
    ]
  },
  {
    id: "five-days",
    title: "Five Days Packages",
    icon: MapPin,
    image: maldivesImg,
    routes: [
      "Udupi → Yana Caves → Gokarna → Dandeli", "Chikmagalur → Coorg", "Bangalore → Hyderabad → Chikmagalur", "Udupi → Dandeli → Goa", "Kodaikanal → Marayoor → Munnar", "Ramakkalmedu → Vagamon", "Ernakulam with Cruise"
    ]
  },
  {
    id: "six-days",
    title: "Six Days Packages",
    icon: MapPin,
    image: dubaiImg,
    routes: [
      "Udupi → Goa → Dandeli → Hampi → Aihole → Badami", "Bangalore → Hyderabad → Hampi", "Aihole → Badami → Pattadakal", "Bangalore → Gandikota → Belum Caves → Hyderabad", "Madurai → Dhanushkodi → Kodaikanal", "Marayoor → Munnar → Ramakkalmedu", "Vagamon → Ernakulam with Cruise"
    ]
  },
  {
    id: "train",
    title: "Train Packages",
    icon: Train,
    image: tajImg,
    routes: [
      "Delhi → Agra", "Delhi → Agra → Amritsar", "Delhi → Agra → Nainital", "Shimla → Kullu → Manali", "Rajasthan", "Ajanta → Ellora", "Mumbai → Aurangabad", "Golden Triangle", "Hyderabad", "Goa", "Trivandrum", "Chennai"
    ]
  }
];

function PackagesPage() {
  const [activeTab, setActiveTab] = useState(packageData[0].id);

  const activeData = packageData.find(d => d.id === activeTab) || packageData[0];

  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-30 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-8 sm:mb-10">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-2">
            ← Back to Home
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            Explore All <span className="text-gradient-brand">Tour Packages</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Browse our exhaustive list of carefully crafted itineraries. Whether you have just one day or a whole week, we have the perfect journey planned out for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 flex flex-col gap-3">
              {packageData.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setActiveTab(pkg.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-left transition-all duration-300 ${
                    activeTab === pkg.id 
                      ? "bg-gradient-brand text-white shadow-glow translate-x-2" 
                      : "bg-card text-foreground border border-border hover:border-accent/40 hover:bg-muted/30 hover:translate-x-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <pkg.icon size={20} className={activeTab === pkg.id ? "text-white" : "text-muted-foreground"} />
                    <span className="font-medium text-lg">{pkg.title}</span>
                  </div>
                  <ChevronRight size={18} className={`transition-transform ${activeTab === pkg.id ? "opacity-100" : "opacity-0"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Content Area with smooth animation via key change */}
          <div className="lg:col-span-8">
            <div 
              key={activeTab} 
              className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-soft animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out fill-mode-both"
            >
              
              <div className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-8 relative shadow-inner">
                <img src={activeData.image} alt={activeData.title} className="w-full h-full object-cover animate-in zoom-in-105 duration-1000 ease-out fill-mode-both" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-background/20 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-background/20 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-glow">
                    <activeData.icon size={28} />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl sm:text-4xl text-foreground drop-shadow-md">{activeData.title}</h2>
                    <p className="text-muted-foreground mt-1 font-medium">Found {activeData.routes.length} incredible itineraries</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeData.routes.map((route, idx) => (
                  <div 
                    key={idx} 
                    className="group flex items-start gap-3 p-4 rounded-2xl bg-background border border-border hover:border-accent/40 hover:shadow-sm transition-all cursor-default"
                    style={{ animationDelay: `${idx * 20}ms` }}
                  >
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <p className="text-foreground group-hover:text-accent transition-colors font-medium">
                      {route}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 rounded-3xl bg-gradient-brand text-white shadow-glow flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10 text-center sm:text-left">
                  <h3 className="font-display text-2xl mb-2">Ready to pack your bags?</h3>
                  <p className="text-white/80 text-sm max-w-md">Contact us to customize any of these routes or get a quick quote for your trip.</p>
                </div>
                <Link to="/contact" className="relative z-10 shrink-0 inline-flex items-center gap-2 text-sm font-semibold bg-white text-primary px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all">
                  Book Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

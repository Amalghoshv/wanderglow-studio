import { useState, type FormEvent } from "react";
import { MapPin, Phone, ArrowRight, User, Mail, Plane, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "919207411510"; // country code + number, no +

// We store the data here so the dropdown can be populated dynamically
const packageData = [
  {
    title: "One Day Packages",
    routes: [
      "Alappuzha", "Ernakulam with Cruise", "Malampuzha", "Nelliyampathy", 
      "Nilambur", "Wayanad", "Munnar", "Ramakkalmedu", "Vagamon", "Thenmala", 
      "Thiruvananthapuram", "Athirappally", "Jadayupara", "Sambrani Kodi", 
      "Parambikulam", "Kanyakumari", "Ooty", "Kodaikanal", "Chennai", "Coorg", "Mysore"
    ]
  },
  {
    title: "Two Days Packages",
    routes: [
      "Munnar → Ernakulam", "Munnar → Vagamon", "Munnar → Ramakkalmedu", "Munnar → Calverymount → Ramakkalmedu", "Munnar → Athirappally → Ernakulam", "Munnar → Thekkady", "Jadayupara → Alleppey", "Munnar → Idukki", "Jadayupara → Ernakulam", "Munnar → Alleppey", "Trivandrum → Alleppey", "Trivandrum → Kanyakumari", "Trivandrum → Jadayupara", "Wayanad → Coorg", "Athirappally → Valparai", "Wayanad → Ooty", "Mysore → Bangalore", "Kodaikanal → Munnar", "Kodaikanal → Thekkady", "Mysore → Wonderla", "Kodaikanal → Ramakkalmedu", "Ooty → Mysore", "Mysore → Coorg", "Chennai → Mahabalipuram", "Chennai → Pondicherry", "Chikmagalur → Coorg", "Chikmagalur → Mysore", "Shimoga → Chikmagalur", "Chikmagalur → Bangalore", "Chikmagalur → Belur", "Udupi → Chikmagalur", "Udupi → Belur", "Udupi → Gokarna → Murudeshwar", "Udupi → Mirjan Fort → Gokarna", "Vagamon → Parunthumpara → Panchamedu"
    ]
  },
  {
    title: "Three Days Packages",
    routes: [
      "Trivandrum → Kanyakumari → Ponmudi", "Trivandrum → Alleppey → Kochi", "Jadayupara → Trivandrum → Kanyakumari", "Munnar → Vagamon → Ramakkalmedu", "Munnar → Ernakulam → Wonderla", "Kodaikanal → Thekkady → Munnar", "Kodaikanal → Munnar → Wonderla", "Rameshwaram → Danushkodi → Kodaikanal", "Chennai → Mahabalipuram → Pondicherry", "Ooty → Wayanad → Mysore", "Ooty → Mysore → Bangalore", "Bangalore → Mysore → Coorg", "Bangalore → Mysore → Wonderla", "Chikmagalur → Belur → Coorg", "Chikmagalur → Mysore → Coorg", "Udupi → Chikmagalur → Coorg", "Udupi → Chikmagalur → Belur", "Udupi → Shimoga → Chikmagalur", "Udupi → Dandeli → Gokarna → Murudeshwar", "Udupi → Mirjan Fort → Gokarna → Murudeshwar"
    ]
  },
  {
    title: "Four Days Packages",
    routes: [
      "Munnar → Vagamon → Ramakkalmedu → Idukki", "Vagamon → Ramakkalmedu → Munnar → Wonderla", "Kodaikanal → Munnar → Ernakulam → Wonderla", "Kodaikanal → Munnar → Thekkady → Ernakulam", "Trivandrum → Kanyakumari → Alleppey → Kochi", "Chennai → Mahabalipuram → Pondicherry → Hogenakkal", "Bangalore → Mysore → Chikmagalur → Coorg", "Bangalore → Wonderla → Mysore → Coorg", "Udupi → Gokarna → Murudeshwar → Dandeli → Coorg", "Udupi → Dandeli → Goa", "Udupi → Goa → Chikmagalur", "Udupi → Bangalore → Mysore → Coorg", "Udupi → Chikmagalur → Belur → Coorg", "Udupi → Shimoga → Chikmagalur → Coorg", "Bangalore → Chitradurga → Hampi", "Hampi → Badami → Dandeli → Gokarna", "Goa → Udupi → Chikmagalur", "Udupi → Goa", "Goa → Bangalore", "Bangalore → Hyderabad"
    ]
  },
  {
    title: "Five Days Packages",
    routes: [
      "Udupi → Yana Caves → Gokarna → Dandeli", "Chikmagalur → Coorg", "Bangalore → Hyderabad → Chikmagalur", "Udupi → Dandeli → Goa", "Kodaikanal → Marayoor → Munnar", "Ramakkalmedu → Vagamon", "Ernakulam with Cruise"
    ]
  },
  {
    title: "Six Days Packages",
    routes: [
      "Udupi → Goa → Dandeli → Hampi → Aihole → Badami", "Bangalore → Hyderabad → Hampi", "Aihole → Badami → Pattadakal", "Bangalore → Gandikota → Belum Caves → Hyderabad", "Madurai → Dhanushkodi → Kodaikanal", "Marayoor → Munnar → Ramakkalmedu", "Vagamon → Ernakulam with Cruise"
    ]
  },
  {
    title: "Train Packages",
    routes: [
      "Delhi → Agra", "Delhi → Agra → Amritsar", "Delhi → Agra → Nainital", "Shimla → Kullu → Manali", "Rajasthan", "Ajanta → Ellora", "Mumbai → Aurangabad", "Golden Triangle", "Hyderabad", "Goa", "Trivandrum", "Chennai"
    ]
  }
];

export function ContactMapSection() {
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRoute, setSelectedRoute] = useState("");

  const activePackage = packageData.find(p => p.title === selectedCategory);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const msg = String(data.get("message") || "");
    
    const customRoute = String(data.get("customRoute") || "");
    const finalRoute = selectedCategory === "Custom Tour" ? customRoute : selectedRoute;

    const text =
      `Hello Packlogue Holidays! 👋%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      (email ? `*Email:* ${email}%0A` : "") +
      (selectedCategory ? `*Package Type:* ${selectedCategory}%0A` : "") +
      (finalRoute ? `*Specific Route:* ${finalRoute}%0A` : "") +
      (msg ? `%0A*Message:*%0A${msg}` : "");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <section id="contact" className="relative py-12 sm:py-24 overflow-hidden reveal">
      {/* Map background — OpenStreetMap tile of Mannarkkad */}
      <div className="absolute inset-0">
        <iframe
          title="Packlogue Holidays location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=76.45%2C10.95%2C76.52%2C11.02&layer=mapnik&marker=10.9925%2C76.4682"
          className="w-full h-full grayscale-[40%] saturate-[1.1] opacity-90 pointer-events-none"
          loading="lazy"
        />
        {/* Color wash so the map melts into the brand */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-accent/55" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-40 mix-blend-screen" />
        {/* Decorative pin pulse */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping w-16 h-16 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative w-14 h-14 rounded-full bg-gradient-brand text-white flex items-center justify-center shadow-glow border-4 border-white">
              <MapPin size={22} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* Left intro */}
        <div className="text-white max-w-xl">
          <p className="text-accent-glow font-semibold tracking-widest text-xs uppercase mb-3">Get in touch</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-5 leading-tight">
            Find us in Mannarkkad — <span className="italic text-accent-glow">reach us anywhere</span>.
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Ready to start your next adventure? Send us an inquiry and our travel experts will reach out to craft your perfect itinerary.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Visit</div>
                Avenue Plaza, Near MES Kalladi College, Mannarkkad
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Call</div>
                <a href="tel:+919207411510" className="hover:text-accent-glow block">+91 92074 11510</a>
                <a href="tel:+919207411520" className="hover:text-accent-glow block">+91 92074 11520</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Form card */}
        <div className="bg-card/95 backdrop-blur-xl border border-white/30 rounded-3xl p-8 sm:p-10 shadow-glow relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand" />
          
          <div className="mb-8">
            <h3 className="font-display text-3xl text-foreground leading-tight mb-2">Request a Custom Quote</h3>
            <p className="text-muted-foreground">Share your travel dreams and we'll make them a reality.</p>
          </div>
 
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
                  <User size={18} />
                </div>
                <Input id="cm-name" name="name" required placeholder="Full Name" className="h-14 bg-background/60 border-border/60 pl-11 focus:bg-background focus:border-accent focus:ring-accent shadow-sm rounded-xl transition-all" />
              </div>
              
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
                  <Phone size={18} />
                </div>
                <Input id="cm-phone" name="phone" required placeholder="+91 Phone Number" className="h-14 bg-background/60 border-border/60 pl-11 focus:bg-background focus:border-accent focus:ring-accent shadow-sm rounded-xl transition-all" />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
                  <Mail size={18} />
                </div>
                <Input id="cm-email" name="email" type="email" placeholder="Email Address (Optional)" className="h-14 bg-background/60 border-border/60 pl-11 focus:bg-background focus:border-accent focus:ring-accent shadow-sm rounded-xl transition-all" />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
                  <Map size={18} />
                </div>
                <select 
                  id="cm-category" 
                  name="category" 
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedRoute("");
                  }}
                  className="flex h-14 w-full rounded-xl border border-border/60 bg-background/60 pl-11 pr-4 py-2 text-sm ring-offset-background text-foreground focus:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select Package</option>
                  {packageData.map(pkg => (
                    <option key={pkg.title} value={pkg.title}>{pkg.title}</option>
                  ))}
                  <option value="Custom Tour">Custom Tour / Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted-foreground">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Dynamic Specific Route Selector */}
            <div className={`transition-all duration-500 overflow-hidden ${selectedCategory ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
              {selectedCategory === "Custom Tour" ? (
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
                    <Plane size={18} />
                  </div>
                  <Input id="cm-custom" name="customRoute" placeholder="Where do you want to go?" className="h-14 bg-background/60 border-border/60 pl-11 focus:bg-background focus:border-accent focus:ring-accent shadow-sm rounded-xl transition-all" />
                </div>
              ) : activePackage ? (
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
                    <MapPin size={18} />
                  </div>
                  <select 
                    id="cm-route" 
                    name="route" 
                    value={selectedRoute}
                    onChange={(e) => setSelectedRoute(e.target.value)}
                    className="flex h-14 w-full rounded-xl border border-border/60 bg-background/60 pl-11 pr-4 py-2 text-sm ring-offset-background text-foreground focus:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Specific Route</option>
                    {activePackage.routes.map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted-foreground">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="relative group">
              <Textarea id="cm-msg" name="message" rows={3} placeholder="Tell us about your group size, dates, and what you love most about travel..." className="bg-background/60 border-border/60 p-4 focus:bg-background focus:border-accent focus:ring-accent shadow-sm rounded-xl transition-all resize-none" />
            </div>
 
            <Button
              type="submit"
              size="xl"
              disabled={loading}
              className="w-full bg-gradient-brand text-white shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-bold text-lg h-14 rounded-xl mt-2"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Plan My Journey <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </div>
              )}
            </Button>
            
            <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest opacity-60">
              Personalized itineraries • No hidden fees • 24/7 Concierge
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

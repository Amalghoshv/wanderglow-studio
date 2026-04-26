import { useState, type FormEvent } from "react";
import { MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const WHATSAPP_NUMBER = "919207411510"; // country code + number, no +

export function ContactMapSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const dest = String(data.get("destination") || "");
    const msg = String(data.get("message") || "");

    const text =
      `Hello Packlogue Holidays! 👋%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      (email ? `*Email:* ${email}%0A` : "") +
      (dest ? `*Destination:* ${dest}%0A` : "") +
      (msg ? `%0A*Message:*%0A${msg}` : "");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 overflow-hidden reveal">
      {/* Map background — OpenStreetMap tile of Mannarkkad */}
      <div className="absolute inset-0">
        <iframe
          title="Packlogue Holidays location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=76.45%2C10.95%2C76.52%2C11.02&layer=mapnik&marker=10.9925%2C76.4682"
          className="w-full h-full grayscale-[40%] saturate-[1.1] opacity-90"
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
 
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="cm-name" className="text-sm font-medium ml-1">Name</Label>
                <Input id="cm-name" name="name" required placeholder="User Name" className="h-12 bg-background/50 border-border focus:ring-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cm-phone" className="text-sm font-medium ml-1">Phone</Label>
                <Input id="cm-phone" name="phone" required placeholder="+91 ..." className="h-12 bg-background/50 border-border focus:ring-accent" />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="cm-email" className="text-sm font-medium ml-1">Email <span className="text-muted-foreground font-normal">(optional)</span></Label>
                <Input id="cm-email" name="email" type="email" placeholder="user@example.com" className="h-12 bg-background/50 border-border focus:ring-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cm-dest" className="text-sm font-medium ml-1">Preferred Destination</Label>
                <Input id="cm-dest" name="destination" placeholder="e.g. Bali, Maldives" className="h-12 bg-background/50 border-border focus:ring-accent" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cm-msg" className="text-sm font-medium ml-1">Your Message</Label>
              <Textarea id="cm-msg" name="message" rows={4} placeholder="Tell us about your group size, dates, and what you love most about travel..." className="bg-background/50 border-border focus:ring-accent resize-none" />
            </div>
 
            <Button
              type="submit"
              size="xl"
              disabled={loading}
              className="w-full bg-gradient-brand text-white shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-bold text-lg h-14"
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

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Send, MessageCircle } from "lucide-react";
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
    <section id="contact" className="relative py-24 overflow-hidden">
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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left intro */}
        <div className="text-white max-w-xl">
          <p className="text-accent-glow font-semibold tracking-widest text-xs uppercase mb-3">Get in touch</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-5 leading-tight">
            Find us in Mannarkkad — <span className="italic text-accent-glow">reach us anywhere</span>.
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Drop your details below and we'll continue the conversation on WhatsApp — no waiting, no forms in your inbox.
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
        <div className="bg-card/95 backdrop-blur-xl border border-white/30 rounded-3xl p-8 sm:p-10 shadow-glow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-soft">
              <MessageCircle size={22} />
            </div>
            <div>
              <h3 className="font-display text-2xl text-foreground leading-tight">Chat on WhatsApp</h3>
              <p className="text-xs text-muted-foreground">Submit and we'll continue on WhatsApp instantly.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cm-name">Name</Label>
                <Input id="cm-name" name="name" required placeholder="Your name" className="mt-2 h-12" />
              </div>
              <div>
                <Label htmlFor="cm-phone">Phone</Label>
                <Input id="cm-phone" name="phone" required placeholder="+91 ..." className="mt-2 h-12" />
              </div>
            </div>
            <div>
              <Label htmlFor="cm-email">Email <span className="text-muted-foreground font-normal">(optional)</span></Label>
              <Input id="cm-email" name="email" type="email" placeholder="you@example.com" className="mt-2 h-12" />
            </div>
            <div>
              <Label htmlFor="cm-dest">Destination</Label>
              <Input id="cm-dest" name="destination" placeholder="Where would you like to go?" className="mt-2 h-12" />
            </div>
            <div>
              <Label htmlFor="cm-msg">Message</Label>
              <Textarea id="cm-msg" name="message" rows={4} placeholder="Travel dates, group size, style of trip..." className="mt-2" />
            </div>

            <Button
              type="submit"
              size="xl"
              disabled={loading}
              className="w-full bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-glow transition-smooth font-semibold"
            >
              {loading ? "Opening WhatsApp…" : (<>Send via WhatsApp <Send size={18} /></>)}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              By submitting, you'll be redirected to WhatsApp with your message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

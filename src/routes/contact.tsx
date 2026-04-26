import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Globe, Mail, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Packlogue Holidays" },
      { name: "description", content: "Reach Packlogue Holidays at +91 92074 11510 / 92074 11520, or visit us at Avenue Plaza, Mannarkkad." },
      { property: "og:title", content: "Contact — Packlogue Holidays" },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative pt-40 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-white text-center">
          <p className="text-accent-glow font-semibold tracking-widest text-xs uppercase mb-3">Get in touch</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-5">Let's plan your journey.</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Tell us where you dream of going. Our travel experts respond within a few hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-soft">
            <h2 className="font-display text-3xl text-foreground mb-2">Send us a message</h2>
            <p className="text-muted-foreground mb-8">We'll craft a personalised itinerary just for you.</p>

            {sent ? (
              <div className="flex flex-col items-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <Check size={28} />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">Thanks — we got it!</h3>
                <p className="text-muted-foreground">Our team will reach out within a few hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required placeholder="Your name" className="mt-2 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" required placeholder="+91 ..." className="mt-2 h-12" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="you@example.com" className="mt-2 h-12" />
                </div>
                <div>
                  <Label htmlFor="dest">Destination</Label>
                  <Input id="dest" placeholder="Where would you like to go?" className="mt-2 h-12" />
                </div>
                <div>
                  <Label htmlFor="msg">Tell us about your trip</Label>
                  <Textarea id="msg" rows={5} placeholder="Travel dates, group size, style of trip..." className="mt-2" />
                </div>
                <Button type="submit" variant="hero" size="xl" className="w-full">
                  Send Enquiry <Send size={18} />
                </Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl bg-gradient-hero text-white p-8 shadow-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
              <div className="relative">
                <h3 className="font-display text-2xl mb-5">Reach us directly</h3>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur-md shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-white/70 uppercase tracking-wider">Visit</div>
                      <div className="text-sm">Avenue Plaza, Near MES Kalladi College, Mannarkkad</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur-md shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-white/70 uppercase tracking-wider">Call</div>
                      <a href="tel:+919207411510" className="text-sm block hover:text-accent-glow">+91 92074 11510</a>
                      <a href="tel:+919207411520" className="text-sm block hover:text-accent-glow">+91 92074 11520</a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur-md shrink-0">
                      <Globe size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-white/70 uppercase tracking-wider">Web</div>
                      <div className="text-sm">www.packlogue.com</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur-md shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-white/70 uppercase tracking-wider">Email</div>
                      <div className="text-sm">hello@packlogue.com</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
              <div className="font-semibold text-foreground mb-1">Working hours</div>
              Mon — Sat · 9:00 AM to 8:00 PM<br />
              Sunday · By appointment
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

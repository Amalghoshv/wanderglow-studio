import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Globe, Facebook, Instagram, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo png-04.png";

export function SiteFooter() {
  return (
    <footer className="relative bg-gradient-deep text-white overflow-hidden">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />

      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr_1fr_1fr] gap-10 lg:gap-8 items-start">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5 lg:pr-6 lg:border-r lg:border-white/8">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3 backdrop-blur-sm shrink-0">
                <img
                  src={logo}
                  alt="Packlogue Holidays"
                  className="h-14 w-auto"
                  width={432}
                  height={96}
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-display font-semibold text-white leading-snug">
                  Packlogue<br />Holidays
                </p>
                <p className="text-[10px] tracking-widest uppercase text-accent mt-0.5 font-medium">
                  Travel & Tours
                </p>
              </div>
            </div>

            <p className="text-xs text-white/55 leading-relaxed max-w-[200px]">
              Crafting unforgettable journeys. Your trusted travel partner.
            </p>

            <div className="flex gap-2">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/1MzpQ2Jy5Q/?mibextid=wwXIfr", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/packlogue_holidays?igsh=bm16eTJkbnR3bmJk&utm_source=qr", label: "Instagram" },
                { icon: Mail, href: "mailto:packlogue@gmail.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group w-9 h-9 rounded-xl bg-white/8 ring-1 ring-white/10 hover:bg-accent hover:ring-accent flex items-center justify-center transition-all duration-200"
                >
                  <s.icon size={15} className="text-white/65 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Explore */}
          <div className="lg:pl-2">
            <h4 className="text-[10px] font-semibold tracking-widest uppercase text-accent mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Destinations", to: "/destinations" },
                { label: "Services", to: "/services" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="group flex items-center gap-1 text-sm text-white/55 hover:text-white transition-colors duration-150"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-widest uppercase text-accent mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Tour Packages", "Vehicle Hiring", "Hotel & Resort Booking", "Flight & Train Booking", "Tour Guides"].map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-white/55">
                  <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold tracking-widest uppercase text-accent mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex gap-2.5">
                <span className="mt-0.5 w-6 h-6 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                  <MapPin size={13} className="text-accent" />
                </span>
                <span className="text-sm text-white/55 leading-relaxed">
                  Avenue Plaza, Near MES Kalladi College, Mannarkkad
                </span>
              </li>
              {[
                { href: "tel:+919207411510", label: "+91 92074 11510" },
                { href: "tel:+919207411520", label: "+91 92074 11520" },
              ].map((p) => (
                <li key={p.href} className="flex gap-2.5 items-center">
                  <span className="w-6 h-6 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <Phone size={13} className="text-accent" />
                  </span>
                  <a href={p.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {p.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-2.5 items-center">
                <span className="w-6 h-6 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                  <Globe size={13} className="text-accent" />
                </span>
                <span className="text-sm text-white/55">www.packlogue.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-5 border-t border-white/8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} Packlogue Holidays. All rights reserved.</p>
          <p>Designed for wanderers, by wanderers.</p>
        </div>
      </div>
    </footer>
  );
}
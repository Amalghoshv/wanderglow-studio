import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Globe, Facebook, Instagram, Mail } from "lucide-react";
import logo from "@/assets/packlogue-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-deep text-white pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="bg-white inline-block rounded-xl p-3">
            <img src={logo} alt="Packlogue Holidays Logo" className="h-12 w-auto" width={216} height={48} />
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Crafting unforgettable journeys across the world. Your trusted partner for seamless travel experiences.
          </p>
          <div className="flex gap-3 pt-2">
            {[
              { icon: Facebook, href: "https://www.facebook.com/share/1MzpQ2Jy5Q/?mibextid=wwXIfr" },
              { icon: Instagram, href: "https://www.instagram.com/packlogue_holidays?igsh=bm16eTJkbnR3bmJk&utm_source=qr" },
              { icon: Mail, href: "mailto:packlogue@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-smooth"
                aria-label="social"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5 text-accent-glow">Explore</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li><Link to="/" className="hover:text-accent transition-smooth">Home</Link></li>
            <li><Link to="/destinations" className="hover:text-accent transition-smooth">Destinations</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-smooth">Services</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-smooth">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5 text-accent-glow">Services</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li>Tour Packages</li>
            <li>Vehicle Hiring</li>
            <li>Hotel & Resort Booking</li>
            <li>Flight & Train Booking</li>
            <li>Tour Guides</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5 text-accent-glow">Get in Touch</h4>
          <ul className="space-y-4 text-white/70 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <span>Avenue Plaza, Near MES Kalladi College, Mannarkkad</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-accent shrink-0" />
              <a href="tel:+919207411510" className="hover:text-accent transition-smooth">+91 92074 11510</a>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-accent shrink-0" />
              <a href="tel:+919207411520" className="hover:text-accent transition-smooth">+91 92074 11520</a>
            </li>
            <li className="flex gap-3 items-center">
              <Globe size={18} className="text-accent shrink-0" />
              <span>www.packlogue.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-white/10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Packlogue Holidays. All rights reserved.</p>
        <p>Designed for wanderers, by wanderers.</p>
      </div>
    </footer>
  );
}

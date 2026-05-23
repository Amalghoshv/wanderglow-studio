import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo png-04.png";
import logo2 from "@/assets/packlogue-logo.png";
import logoMark from "@/assets/packlogue-mark.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const { pathname } = useLocation();
  const hasHeroImage = pathname !== "/packages-overview";
  
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Text should be white ONLY when on a page with a hero image, NOT scrolled, and NOT open.
  const useWhiteText = hasHeroImage && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        open
          ? "bg-background py-1 sm:py-2"
          : scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-soft py-1 sm:py-2"
          : "bg-transparent py-2 sm:py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-14 sm:h-20">
        <Link to="/" className="flex items-center gap-1 group transition-smooth">
          {/* Desktop Logo */}
          <img 
            src={useWhiteText ? logo : logo2} 
            alt="Packlogue Holidays Logo" 
            className="h-40 w-auto group-hover:scale-105 transition-smooth hidden lg:block" 
            width={620} 
            height={160} 
          />
          {/* Mobile Logo Mark */}
          <img 
            src={logoMark} 
            alt="Packlogue Holidays Mark" 
            className="h-10 w-auto group-hover:scale-105 transition-smooth lg:hidden" 
            width={80} 
            height={80} 
          />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={cn(
                "text-sm font-semibold tracking-wide transition-all duration-300 relative group",
                !useWhiteText ? "text-foreground" : "text-white drop-shadow-md",
              )}
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a 
            href="tel:+919207411510" 
            className={cn(
              "group flex items-center gap-0 hover:gap-3 font-semibold transition-all duration-500 overflow-hidden max-w-[40px] hover:max-w-[250px] whitespace-nowrap",
              !useWhiteText ? "text-foreground" : "text-white"
            )}
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <Phone size={18} fill="currentColor" />
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
              +91 92074 11510
            </span>
          </a>
          <Button asChild variant="hero" size="lg" className="shadow-glow hover:scale-105 transition-smooth">
            <Link to="/contact">Plan Your Trip</Link>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <a
            href="tel:+919207411510"
            className={cn(
              "p-2.5 rounded-xl transition-all duration-300",
              open
                ? "text-accent bg-accent/10"
                : scrolled
                ? "text-accent bg-accent/10"
                : useWhiteText
                ? "text-white bg-white/10 backdrop-blur-md"
                : "text-foreground bg-foreground/5 backdrop-blur-md",
            )}
            aria-label="Call us"
          >
            <Phone size={20} fill="currentColor" />
          </a>
          <button
            className={cn(
              "p-2.5 rounded-xl transition-all duration-300",
              open
                ? "text-foreground bg-secondary"
                : scrolled
                ? "text-foreground bg-secondary/50"
                : useWhiteText
                ? "text-white bg-white/10 backdrop-blur-md"
                : "text-foreground bg-foreground/5 backdrop-blur-md",
            )}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div 
        className={cn(
          "fixed inset-0 z-40 lg:hidden bg-background transition-all duration-500 ease-in-out",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
        )}
      >
        {/* Close button inside the overlay — always visible */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-foreground/10 text-foreground border border-foreground/20 hover:bg-foreground/15 transition-all duration-200"
          >
            <X size={22} strokeWidth={2.5} />
          </button>
        </div>
        <div className="flex flex-col h-full pt-24 px-8 pb-12">
          <nav className="flex flex-col space-y-6 flex-1">
            {links.map((l, i) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-4xl font-display font-semibold text-foreground hover:text-accent transition-all duration-300 transform",
                  open ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          
          <div className={cn(
            "pt-8 border-t border-border transition-all duration-500 delay-500",
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="flex flex-col gap-4">
              <a 
                href="tel:+919207411510" 
                className="flex items-center justify-center gap-3 w-full h-16 rounded-2xl bg-secondary text-foreground font-semibold"
              >
                <Phone size={20} className="text-accent" fill="currentColor" />
                Call: +91 92074 11510
              </a>
              <Button asChild variant="hero" size="xl" className="w-full h-16 text-lg shadow-glow">
                <Link to="/contact" onClick={() => setOpen(false)}>Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

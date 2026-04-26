import { createFileRoute } from "@tanstack/react-router";
import { ContactMapSection } from "@/components/contact-map-section";

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
  return (
    <>
      <section className="relative pt-40 pb-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-white text-center">
          <p className="text-accent-glow font-semibold tracking-widest text-xs uppercase mb-3">Get in touch</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-5">Let's plan your journey.</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Tell us where you dream of going. Our travel experts respond within minutes on WhatsApp.
          </p>
        </div>
      </section>

      <ContactMapSection />
    </>
  );
}

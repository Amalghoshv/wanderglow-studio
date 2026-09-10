import { createFileRoute } from "@tanstack/react-router";
import { Index } from "./index";
import { pageHead } from "@/lib/seo";

// NOTE: this route renders the homepage and scrolls to the #contact section.
// It is not a separate page, so its canonical points at "/" and it is
// excluded from the sitemap. Give it real content before indexing it.
export const Route = createFileRoute("/contact")({
  component: Index,
  head: () =>
    pageHead({
      title: "Contact Packlogue Holidays — Plan Your Trip from Palakkad",
      description:
        "Get in touch with Packlogue Holidays in Mannarkkad, Palakkad to plan a custom Kerala, Indian or international tour. Call, WhatsApp or visit us.",
      path: "/contact",
      canonicalPath: "/",
      noindex: true,
    }),
});

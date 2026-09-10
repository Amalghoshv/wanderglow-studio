import { createFileRoute } from "@tanstack/react-router";
import { Index } from "./index";
import { pageHead } from "@/lib/seo";

// NOTE: this route renders the homepage and scrolls to the #destinations section.
// It is not a separate page, so its canonical points at "/" and it is
// excluded from the sitemap. Give it real content before indexing it.
export const Route = createFileRoute("/destinations")({
  component: Index,
  head: () =>
    pageHead({
      title: "Destinations — Kerala, India & International Tours | Packlogue Holidays",
      description:
        "Browse Packlogue's curated destinations: Kerala backwaters, Munnar, Goa, Agra, the Maldives, Dubai and more, with honeymoon and family packages.",
      path: "/destinations",
      canonicalPath: "/",
      noindex: true,
    }),
});

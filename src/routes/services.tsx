import { createFileRoute } from "@tanstack/react-router";
import { Index } from "./index";
import { pageHead } from "@/lib/seo";

// NOTE: this route renders the homepage and scrolls to the #services section.
// It is not a separate page, so its canonical points at "/" and it is
// excluded from the sitemap. Give it real content before indexing it.
export const Route = createFileRoute("/services")({
  component: Index,
  head: () =>
    pageHead({
      title: "Travel Services — Tour Packages, Vehicle Hire & Hotel Booking | Packlogue",
      description:
        "Tour packages, luxury vehicle hire, hotel and resort booking, flight and train tickets, and expert guides — all from one Palakkad travel agency.",
      path: "/services",
      canonicalPath: "/",
      noindex: true,
    }),
});

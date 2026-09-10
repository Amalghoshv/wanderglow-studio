import { createFileRoute } from "@tanstack/react-router";
import { Index } from "./index";
import { pageHead } from "@/lib/seo";

// NOTE: this route renders the homepage and scrolls to the #about section.
// It is not a separate page, so its canonical points at "/" and it is
// excluded from the sitemap. Give it real content before indexing it.
export const Route = createFileRoute("/about")({
  component: Index,
  head: () =>
    pageHead({
      title: "About Packlogue Holidays — Travel Agency in Mannarkkad, Palakkad",
      description:
        "Meet the team behind Packlogue Holidays, a Mannarkkad-based travel agency crafting personal tour packages across Kerala, India and abroad.",
      path: "/about",
      canonicalPath: "/",
      noindex: true,
    }),
});

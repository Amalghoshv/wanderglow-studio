import { createFileRoute } from '@tanstack/react-router'
import { Index } from "./index";

export const Route = createFileRoute("/packages")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tour Packages — Packlogue Holidays" },
      { name: "description", content: "Explore our curated domestic and international tour packages." },
      { property: "og:title", content: "Tour Packages — Packlogue Holidays" },
    ],
  }),
});

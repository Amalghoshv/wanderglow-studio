import { createFileRoute } from '@tanstack/react-router'
import { Index } from "./index";

export const Route = createFileRoute("/destinations")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Destinations — Packlogue Holidays" },
      { name: "description", content: "Explore our curated travel destinations." },
      { property: "og:title", content: "Destinations — Packlogue Holidays" },
    ],
  }),
});

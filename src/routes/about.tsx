import { createFileRoute } from '@tanstack/react-router'
import { Index } from "./index";

export const Route = createFileRoute("/about")({
  component: Index,
  head: () => ({
    meta: [
      { title: "About — Packlogue Holidays" },
      { name: "description", content: "Learn about Packlogue Holidays and our mission to make travel effortless." },
      { property: "og:title", content: "About — Packlogue Holidays" },
    ],
  }),
});

import { createFileRoute } from '@tanstack/react-router'
import { Index } from "./index";

export const Route = createFileRoute("/contact")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Contact — Packlogue Holidays" },
      { name: "description", content: "Get in touch with us for your next trip." },
      { property: "og:title", content: "Contact — Packlogue Holidays" },
    ],
  }),
});

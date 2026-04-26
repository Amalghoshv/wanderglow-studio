import { createFileRoute } from '@tanstack/react-router'
import { Index } from "./index";

export const Route = createFileRoute("/services")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Services — Packlogue Holidays" },
      { name: "description", content: "Tour packages, vehicle hire, hotel & resort booking, flight & train booking, tour guides — everything you need." },
      { property: "og:title", content: "Services — Packlogue Holidays" },
    ],
  }),
});

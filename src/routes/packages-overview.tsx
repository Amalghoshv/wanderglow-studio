import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * /packages-overview was the old URL for the packages page.
 * It was removed in the seo-fixes branch (the canonical URL is now /packages).
 * This file issues a client-side 301-equivalent redirect so that any
 * bookmarks, shared links or internal references still work.
 *
 * The matching server-side 301 is declared in vercel.json.
 */
export const Route = createFileRoute("/packages-overview")({
  beforeLoad: () => {
    throw redirect({ to: "/packages", replace: true });
  },
});

/* eslint-disable @typescript-eslint/no-explicit-any -- route option types are not exposed */
import { renderToString } from "react-dom/server";
import { RouterProvider, createMemoryHistory } from "@tanstack/react-router";
import { getRouter } from "./router";
import type { RouteHead } from "./lib/seo";

/**
 * Used only by scripts/prerender.mjs at build time. Renders a route to static
 * HTML and returns the head tags declared by that route's `head()`.
 */
export async function render(url: string): Promise<{ html: string; head: RouteHead | null }> {
  const router = getRouter();
  router.update({ history: createMemoryHistory({ initialEntries: [url] }) });
  await router.load();

  const html = renderToString(<RouterProvider router={router} />);

  const matches = router.state.matches;
  const headMatch = [...matches]
    .reverse()
    .find((m: any) => typeof router.looseRoutesById[m.routeId]?.options?.head === "function");
  const head: RouteHead | null = headMatch
    ? (router.looseRoutesById[headMatch.routeId] as any).options.head()
    : null;

  return { html, head };
}

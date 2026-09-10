import { useEffect } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any -- route option types are not exposed */
import { useMatches } from "@tanstack/react-router";
import type { RouteHead } from "@/lib/seo";

/**
 * Applies the matched route's `head()` output to the document at runtime
 * (client-side navigation). On first load the same tags are already baked
 * into the prerendered HTML by scripts/prerender.tsx, so this only needs to
 * keep them in sync after navigation.
 */
export function SEO() {
  const matches = useMatches();

  useEffect(() => {
    const headMatch = [...matches]
      .reverse()
      .find((m: any) => typeof m?.route?.options?.head === "function");
    if (!headMatch) return;
    const head: RouteHead = (headMatch as any).route.options.head();
    applyHead(head);
  }, [matches]);

  return null;
}

function upsert(selector: string, create: () => HTMLElement): HTMLElement {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

export function applyHead(head: RouteHead) {
  for (const m of head.meta ?? []) {
    if ("title" in m) {
      document.title = m.title;
    } else if ("name" in m) {
      upsert(`meta[name="${m.name}"]`, () => {
        const el = document.createElement("meta");
        el.setAttribute("name", m.name);
        return el;
      }).setAttribute("content", m.content);
    } else if ("property" in m) {
      upsert(`meta[property="${m.property}"]`, () => {
        const el = document.createElement("meta");
        el.setAttribute("property", m.property);
        return el;
      }).setAttribute("content", m.content);
    }
  }
  for (const l of head.links ?? []) {
    upsert(`link[rel="${l.rel}"]`, () => {
      const el = document.createElement("link");
      el.setAttribute("rel", l.rel);
      return el;
    }).setAttribute("href", l.href);
  }
}

import { useEffect } from "react";
import { useMatches } from "@tanstack/react-router";

export function SEO() {
  const matches = useMatches();

  useEffect(() => {
    // Find the last match with a head property
    const headMatch = [...matches].reverse().find((match: any) => {
      return !!match?.route?.options?.head && typeof match.route.options.head === "function";
    });

    if (headMatch && (headMatch as any).route?.options?.head) {
      const head = (headMatch as any).route.options.head();

      if (head.meta) {
        head.meta.forEach((meta: any) => {
          if (meta.title) {
            document.title = meta.title;
          } else if (meta.name) {
            let el = document.querySelector(`meta[name="${meta.name}"]`);
            if (!el) {
              el = document.createElement("meta");
              el.setAttribute("name", meta.name);
              document.head.appendChild(el);
            }
            el.setAttribute("content", meta.content);
          } else if (meta.property) {
            let el = document.querySelector(`meta[property="${meta.property}"]`);
            if (!el) {
              el = document.createElement("meta");
              el.setAttribute("property", meta.property);
              document.head.appendChild(el);
            }
            el.setAttribute("content", meta.content);
          }
        });
      }
    }
  }, [matches]);

  return null;
}

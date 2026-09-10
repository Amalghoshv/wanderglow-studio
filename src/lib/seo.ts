export const SITE_URL = "https://packlogue.com";
export const SITE_NAME = "Packlogue Holidays";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export type HeadMeta =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

export type HeadLink = { rel: string; href: string };

export interface RouteHead {
  meta: HeadMeta[];
  links: HeadLink[];
}

interface PageHeadOptions {
  title: string;
  description: string;
  /** Route path, e.g. "/packages". Used to build the canonical URL. */
  path: string;
  /** Absolute URL of the social share image. Defaults to /og-image.jpg. */
  image?: string;
  /**
   * Set when this route is an in-page anchor of another page and should
   * point its canonical there instead of at itself.
   */
  canonicalPath?: string;
  /** Set true for routes that should not be indexed on their own. */
  noindex?: boolean;
}

/** Builds a consistent, complete head for a route. */
export function pageHead(o: PageHeadOptions): RouteHead {
  const url = `${SITE_URL}${o.path === "/" ? "/" : o.path}`;
  const canonical = `${SITE_URL}${o.canonicalPath ?? (o.path === "/" ? "/" : o.path)}`;
  const image = o.image ?? DEFAULT_OG_IMAGE;
  return {
    meta: [
      { title: o.title },
      { name: "description", content: o.description },
      {
        name: "robots",
        content: o.noindex
          ? "noindex, follow"
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: o.title },
      { property: "og:description", content: o.description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: o.title },
      { name: "twitter:description", content: o.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

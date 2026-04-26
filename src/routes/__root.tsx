import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

import logoMark from "@/assets/packlogue-mark.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Packlogue Holidays — Best Tour Package Agency in Kerala & Palakkad" },
      { name: "description", content: "Packlogue Holidays is the leading tour package agency in Kerala and Palakkad. We offer handcrafted domestic & international tours, luxury vehicle hire, hotel bookings, and expert tour guides. Discover travel that feels personal." },
      { name: "keywords", content: "Packlogue Holidays, Packlogue, best tour package agency in kerala, best travel agency in palakkad, tour packages from kerala, travel agency mannarkkad, kerala tourism packages, honeymoon packages kerala, international tour packages from kerala, vehicle hire palakkad, hotel booking kerala" },
      { name: "author", content: "Packlogue Holidays" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "Packlogue Holidays — Premium Tour Packages & Travel Services in Kerala" },
      { property: "og:description", content: "Expertly curated tours, luxury transport, and handpicked stays. Based in Mannarkkad, serving travelers across Kerala and beyond." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://packlogue.com" },
      { property: "og:site_name", content: "Packlogue Holidays" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Packlogue Holidays — Best Travel Agency in Kerala" },
      { name: "twitter:description", content: "Handcrafted tours and premium travel services from Mannarkkad, Kerala." },
      { name: "theme-color", content: "#0f172a" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://packlogue.com",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: logoMark,
      },
      {
        rel: "apple-touch-icon",
        href: logoMark,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Packlogue Holidays",
          "alternateName": "Packlogue",
          "url": "https://packlogue.com",
          "logo": "https://packlogue.com/logo-mark.png",
          "image": "https://packlogue.com/hero-kerala.jpg",
          "description": "Leading tour package agency in Kerala and Palakkad offering domestic and international travel services.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Avenue Plaza, Near MES Kalladi College",
            "addressLocality": "Mannarkkad",
            "addressRegion": "Kerala",
            "postalCode": "678582",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.9925,
            "longitude": 76.4682
          },
          "telephone": "+919207411510",
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "19:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/packlogue",
            "https://www.instagram.com/packlogueholidays"
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}

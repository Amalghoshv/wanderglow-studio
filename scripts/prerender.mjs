/**
 * Post-build prerender: writes static HTML for each route into dist/ so
 * crawlers (and users) receive real content and the correct <head> before any
 * JavaScript runs. React then hydrates on the client as usual.
 *
 * Run automatically by `npm run build`.
 */
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDist = join(root, "dist-ssr");

// Routes to prerender. Add new pages here as they are created.
const routes = ["/", "/packages", "/about", "/services", "/destinations", "/contact"];

const escape = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function headToHtml(head) {
  const lines = [];
  for (const m of head.meta ?? []) {
    if ("title" in m) lines.push(`<title>${escape(m.title)}</title>`);
    else if ("name" in m)
      lines.push(`<meta name="${escape(m.name)}" content="${escape(m.content)}" />`);
    else if ("property" in m)
      lines.push(`<meta property="${escape(m.property)}" content="${escape(m.content)}" />`);
  }
  for (const l of head.links ?? [])
    lines.push(`<link rel="${escape(l.rel)}" href="${escape(l.href)}" />`);
  return lines.map((l) => "    " + l).join("\n");
}

const template = await readFile(join(dist, "index.html"), "utf8");
const { render } = await import(pathToFileURL(join(ssrDist, "entry-server.js")).href);

for (const route of routes) {
  const { html, head } = await render(route);
  let page = template.replace("<!--app-html-->", html);
  if (head) {
    page = page.replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, headToHtml(head));
  }
  const outDir = route === "/" ? dist : join(dist, route);
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "index.html"), page);
  console.log(`prerendered ${route.padEnd(14)} -> ${outDir.replace(root + "/", "")}/index.html`);
}

await rm(ssrDist, { recursive: true, force: true });

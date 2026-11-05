/**
 * Build-time static generation for the eleven known portfolio routes.
 * No deployed server or browser executable is needed; Vite transforms TSX
 * into a Node-compatible server module, then React renders HTML directly.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { createServer } from "vite";

const knownPaths = [
  "/", "/about", "/projects", "/projects/routewell",
  "/projects/skillproof-api", "/projects/api-gateway",
  "/projects/cloudpress-aws", "/experience", "/education",
  "/blog", "/contact"
];
const origin = "https://olayenikan-michael-software-enginee.vercel.app";
const indexingEnabled = process.env.VERCEL_ENV === "production";
const dist = path.resolve("dist");

const escapeAttribute = (str) => String(str).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
function setMeta(html, attr, value, content) {
  const esc = escapeAttribute(content);
  const pattern = new RegExp(`(<meta\\s+\\b${attr}="${value}"\\s+content=")[^"]*(")`, "i");
  if (!pattern.test(html)) throw new Error(`Missing metadata ${attr}=${value}`);
  return html.replace(pattern, (_, before, after) => before + esc + after);
}
function replaceCanonical(html, url) {
  const pattern = /(<link\s+rel="canonical"\s+href=")[^"]*(")/i;
  if (!pattern.test(html)) throw new Error("Canonical link missing");
  return html.replace(pattern, (_,before,after) => before + escapeAttribute(url) + after);
}
function replaceTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttribute(title)}</title>`);
}
async function main() {
  const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
  const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: "custom", logLevel: "error" });
  try {
    const { renderStaticPage } = await vite.ssrLoadModule("/src/entry-prerender.tsx");
    const { getPageMeta } = await vite.ssrLoadModule("/src/content/seo.ts");
    for (const route of knownPaths) {
      const body = renderStaticPage(route);
      const meta = getPageMeta(route);
      if (!body.includes("<h1") || !body.includes('id="main-content"')) {
        throw new Error(`Static render missing heading or content on ${route}`);
      }
      const url = origin + route;
      let html = template.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
      if (html === template) throw new Error("Root HTML outlet not found");
      html = replaceTitle(html, meta.title);
      html = setMeta(html,"name","description",meta.description);
      html = setMeta(html,"property","og:title",meta.title);
      html = setMeta(html,"property","og:description",meta.description);
      html = setMeta(html,"property","og:url",url);
      html = setMeta(html,"name","twitter:title",meta.title);
      html = setMeta(html,"name","twitter:description",meta.description);
      html = setMeta(html,"name","robots",indexingEnabled && meta.indexable !== false ? "index, follow" : "noindex, nofollow");
      html = replaceCanonical(html,url);
      const directory = path.join(dist,...route.split("/").filter(Boolean));
      await fs.mkdir(directory,{recursive:true});
      await fs.writeFile(path.join(directory,"index.html"),html);
      console.log(`SSG: ${route} — ${meta.title}`);
    }
  } finally {
    await vite.close();
  }
}
main().catch(error => { console.error(error); process.exitCode=1; });

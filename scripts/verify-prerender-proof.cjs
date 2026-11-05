const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const routes = [
  ["/", "Olayenikan Michael"],
  ["/about", "About Olayenikan Michael"],
  ["/projects", "Engineering Projects"],
  ["/projects/routewell", "RouteWell"],
  ["/projects/skillproof-api", "SkillProof API"],
  ["/projects/api-gateway", "API Gateway Service"],
  ["/projects/cloudpress-aws", "CloudPress AWS"],
  ["/experience", "Experience & Engineering Focus"],
  ["/education", "Education & Technical Training"],
  ["/blog", "Engineering Notes"],
  ["/contact", "Let's work together"]
];
const base = path.resolve("prerender-proof");

for (const [route, heading] of routes) {
  const file = path.join(base, ...route.split("/").filter(Boolean), "index.html");
  const html = fs.readFileSync(file, "utf8");
  const { document } = new JSDOM(html).window; // scripts do not execute
  const h1 = document.querySelector("#main-content h1");
  const title = document.title;
  const description = document.querySelector('meta[name="description"]')?.content;
  const canonical = document.querySelector('link[rel="canonical"]')?.href;
  const robots = document.querySelector('meta[name="robots"]')?.content;
  if (!h1?.textContent?.includes(heading)) throw Error(`Missing static heading for ${route}: ${h1?.textContent}`);
  if (!title?.includes("Olayenikan Michael")) throw Error(`Missing static document title: ${route}`);
  if (!description || description.length < 40) throw Error(`Missing static description: ${route}`);
  if (!canonical?.endsWith(route)) throw Error(`Canonical mismatch ${route}: ${canonical}`);
  if (robots !== "noindex, nofollow") throw Error(`Proof must stay noindex, got ${robots} for ${route}`);
  if (route === "/projects" && !document.querySelector("#main-content")?.textContent?.includes("SkillProof")) {
    throw Error("Project content missing in no-JavaScript snapshot");
  }
  console.log(`PASS static HTML: ${route} — ${h1.textContent.trim()}`);
}
console.log(`PASS ${routes.length} prerendered page snapshots without executing JavaScript`);

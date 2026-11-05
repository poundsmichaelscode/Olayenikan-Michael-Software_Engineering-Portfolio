/** Validate the deployable dist/ files, not merely a separate proof artifact. */
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const pages = [
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
const expectedRobots = process.env.VERCEL_ENV === "production" ? "index, follow" : "noindex, nofollow";
const origin = "https://olayenikan-michael-software-enginee.vercel.app";
for (const [route, expectedHeading] of pages) {
  const filename = path.join("dist", ...route.split("/").filter(Boolean), "index.html");
  const { document } = new JSDOM(fs.readFileSync(filename, "utf8")).window;
  const root = document.querySelector("#root");
  const heading = root?.querySelector("#main-content h1")?.textContent?.trim() || "";
  if (!heading.includes(expectedHeading)) throw new Error(`Missing static heading on ${route}: ${heading}`);
  const title = document.querySelector("title")?.textContent || "";
  if (!title.includes("Olayenikan Michael")) throw new Error(`Invalid title on ${route}: ${title}`);
  const desc = document.querySelector('meta[name="description"]')?.content;
  if (!desc || desc.length < 40) throw new Error(`Missing description on ${route}`);
  const canonical = document.querySelector('link[rel="canonical"]')?.href;
  if (canonical !== origin + route) throw new Error(`Incorrect canonical on ${route}: ${canonical}`);
  const ogUrl = document.querySelector('meta[property="og:url"]')?.content;
  if (ogUrl !== origin + route) throw new Error(`Incorrect Open Graph URL on ${route}`);
  const robots = document.querySelector('meta[name="robots"]')?.content;
  if (robots !== expectedRobots) throw new Error(`Incorrect robots on ${route}: ${robots}`);
  if (root?.textContent?.includes("Loading page…")) throw new Error(`Only a loading fallback was prerendered: ${route}`);
  if (route === "/projects" && !root?.textContent?.includes("SkillProof")) throw new Error("Project cards not prerendered");
  console.log(`PASS SSG HTML without JavaScript: ${route}`);
}
const config = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
for (const [route] of pages.filter(([route]) => route !== "/")) {
  if (!config.rewrites.some((r) => r.source === route && r.destination === `${route}/index.html`)) {
    throw new Error(`Missing Vercel route rewrite: ${route}`);
  }
}
console.log("PASS: 11 deployable pages and Vercel rewrites verified");

/* Proof of concept: snapshot public routes from a built Vite site.
 * Requires the Playwright test runner installed by the GitHub browser job.
 * Intentionally writes to prerender-proof/, NOT dist/, so it cannot be shipped
 * as an unreviewed production prerenderer.
 */
const { chromium } = require("@playwright/test");
const fs = require("node:fs/promises");
const path = require("node:path");

const routes = [
  "/", "/about", "/projects", "/projects/routewell",
  "/projects/skillproof-api", "/projects/api-gateway",
  "/projects/cloudpress-aws", "/experience", "/education",
  "/blog", "/contact"
];
const origin = process.env.PRERENDER_ORIGIN || "http://127.0.0.1:4173";
const output = path.resolve(process.cwd(), "prerender-proof");

function routeDirectory(route) {
  return path.join(output, ...route.split("/").filter(Boolean));
}

async function main() {
  await fs.rm(output, { recursive: true, force: true });
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();
    for (const route of routes) {
      const response = await page.goto(origin + route, { waitUntil: "networkidle" });
      if (!response || response.status() !== 200) throw new Error(`HTTP ${response?.status()} for ${route}`);
      await page.locator("#main-content h1").first().waitFor({ state: "visible" });
      await page.waitForFunction(() => {
        const heading = document.querySelector("#main-content h1");
        return heading && heading.textContent && heading.textContent.trim().length > 0;
      });
      const snapshot = await page.content();
      const docTitle = await page.title();
      if (!snapshot.includes('id="main-content"') || !snapshot.includes("<h1")) {
        throw new Error(`Missing content for ${route}`);
      }
      const folder = routeDirectory(route);
      await fs.mkdir(folder, { recursive: true });
      await fs.writeFile(path.join(folder, "index.html"), snapshot);
      process.stdout.write(`Prerender proof: ${route} -> ${path.relative(output, folder)} [${docTitle}]\n`);
    }
    await context.close();
  } finally {
    await browser.close();
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });

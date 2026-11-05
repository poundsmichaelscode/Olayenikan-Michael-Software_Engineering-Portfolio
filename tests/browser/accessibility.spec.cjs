const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;

const routes = ["/", "/about", "/projects", "/projects/routewell", "/experience", "/education", "/blog", "/contact"];

test("core routes have no critical or serious axe accessibility violations", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const audit = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    const blocking = audit.violations.filter((issue) => ["critical", "serious"].includes(issue.impact));
    expect(blocking.map((v) => ({ route, id: v.id, impact: v.impact, nodes: v.nodes.map((n) => n.target) })), route).toEqual([]);
  }
});

test("light theme and expanded mobile navigation have no critical or serious axe violations", async ({ page, isMobile }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await expect(page.locator("html")).not.toHaveClass(/dark/);
  if (isMobile) {
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  }
  const audit = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  const blocking = audit.violations.filter((issue) => ["critical", "serious"].includes(issue.impact));
  expect(blocking.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.map((n) => n.target) }))).toEqual([]);
});

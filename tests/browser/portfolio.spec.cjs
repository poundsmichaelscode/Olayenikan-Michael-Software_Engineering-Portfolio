const { test, expect } = require("@playwright/test");

const routes = [
  ["/", /Olayenikan Michael/i],
  ["/about", /About Olayenikan Michael/i],
  ["/projects", /Engineering Projects/i],
  ["/projects/routewell", /RouteWell/i],
  ["/projects/skillproof-api", /SkillProof API/i],
  ["/projects/api-gateway", /API Gateway Service/i],
  ["/projects/cloudpress-aws", /CloudPress AWS/i],
  ["/experience", /Experience & Engineering Focus/i],
  ["/education", /Education & Technical Training/i],
  ["/blog", /Engineering Notes/i],
  ["/contact", /Let's work together/i]
];

test("each public route loads directly and has one heading", async ({ page }) => {
  for (const [route, heading] of routes) {
    const response = await page.goto(route);
    expect(response?.status(), `HTTP status for ${route}`).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
    await expect(page.locator("title")).not.toHaveText(/Page Not Found/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(route === "/" ? "\\/$" : `${route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`));
  }
});

test("invalid route renders 404 and noindex metadata", async ({ page }) => {
  const response = await page.goto("/missing-page");
  expect(response?.status()).toBe(200); // SPA fallback serves shell; app renders 404.
  await expect(page.getByRole("heading", { level: 1 })).toContainText("404");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, nofollow");
  await page.getByRole("link", { name: "Return home" }).click();
  await expect(page).toHaveURL(/\/$/);
});

test("theme toggle switches modes and persists across reload", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await expect(page.locator("html")).not.toHaveClass(/dark/);
  await page.reload();
  await expect(page.getByRole("button", { name: "Switch to dark mode" })).toBeVisible();
});

test("navigation remains accessible on keyboard and mobile", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) {
    const open = page.getByRole("button", { name: "Open navigation menu" });
    await expect(open).toHaveAttribute("aria-expanded", "false");
    await open.click();
    const close = page.getByRole("button", { name: "Close navigation menu" });
    await expect(close).toHaveAttribute("aria-expanded", "true");
    await close.press("Escape");
    await expect(open).toBeVisible();
    await open.click();
    await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Projects" }).click();
  } else {
    await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Projects" }).click();
  }
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole("heading", { name: "Engineering Projects" })).toBeVisible();
});

test("content does not overflow common viewport widths", async ({ page }) => {
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 850 });
    for (const route of ["/", "/projects", "/experience", "/education", "/contact"]) {
      await page.goto(route);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      const result = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
      expect(result.content, `Horizontal overflow on ${route} at ${width}px`).toBeLessThanOrEqual(result.viewport + 1);
    }
  }
});

test("project filters and search work", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("status")).toHaveText("4 projects shown");
  await page.getByRole("button", { name: "Backend", exact: true }).click();
  await expect(page.getByRole("status")).toHaveText("2 projects shown");
  await page.getByRole("button", { name: "All", exact: true }).click();
  await page.getByRole("searchbox", { name: "Search projects" }).fill("SkillProof");
  await expect(page.getByRole("status")).toHaveText("1 project shown");
});

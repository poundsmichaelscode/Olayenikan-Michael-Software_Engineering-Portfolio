const { test, expect } = require("@playwright/test");

const staticRoutes = [
  ["/", "Olayenikan Michael"],
  ["/projects/index.html", "Engineering Projects"],
  ["/projects/skillproof-api/index.html", "SkillProof API"],
  ["/experience/index.html", "Experience & Engineering Focus"],
  ["/contact/index.html", "Let's work together"]
];

test("deployable static HTML remains readable without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  try {
    for (const [path, expectedHeading] of staticRoutes) {
      const response = await page.goto("http://127.0.0.1:4173" + path);
      expect(response?.status(), path).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toContainText(expectedHeading);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.+/);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, nofollow");
      await expect(page.locator("#main-content")).toBeVisible();
    }
  } finally {
    await context.close();
  }
});

const { test, expect } = require("@playwright/test");
const fs = require("node:fs/promises");

const pages = [
  ["/", "home"],
  ["/projects", "projects"],
  ["/projects/skillproof-api", "skillproof"],
  ["/experience", "experience"],
  ["/contact", "contact"]
];

test("capture release-review screenshots in both themes", async ({ page }, testInfo) => {
  await fs.mkdir("visual-review", { recursive: true });
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const [route, slug] of pages) {
    await page.goto(route, { waitUntil: "networkidle" });
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("html")).toHaveClass(/dark/);
    await page.screenshot({
      path: `visual-review/${testInfo.project.name}-${slug}-dark.png`,
      fullPage: true,
      animations: "disabled"
    });

    await page.getByRole("button", { name: "Switch to light mode" }).click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);
    await page.screenshot({
      path: `visual-review/${testInfo.project.name}-${slug}-light.png`,
      fullPage: true,
      animations: "disabled"
    });
    await page.getByRole("button", { name: "Switch to dark mode" }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);
  }
});

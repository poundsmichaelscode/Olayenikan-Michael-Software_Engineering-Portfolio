const { test, expect } = require("@playwright/test");

test("prerendered routes hydrate without recoverable React errors", async ({ page }) => {
  const warnings = [];
  page.on("pageerror", (error) => warnings.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error" && /hydration|hydrating|did not match|server html|text content does not match/i.test(message.text())) {
      warnings.push(message.text());
    }
  });
  for (const route of ["/", "/about", "/projects", "/projects/skillproof-api", "/experience", "/contact"]) {
    const result = await page.goto(route);
    expect(result?.status(), route).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.getByRole("button", { name: /switch to (light|dark) mode/i }).waitFor();
  }
  expect(warnings, "React hydration errors or page exceptions").toEqual([]);
});

test("prerendered projects page keeps its interactive filters after hydration", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/projects");
  await expect(page.getByRole("status")).toHaveText("4 projects shown");
  await page.getByRole("button", { name: "Backend", exact: true }).click();
  await expect(page.getByRole("status")).toHaveText("2 projects shown");
  expect(errors).toEqual([]);
});

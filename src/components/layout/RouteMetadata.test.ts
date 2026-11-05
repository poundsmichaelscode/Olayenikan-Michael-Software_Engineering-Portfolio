import { describe, expect, it } from "vitest";
import { getPageMeta, seoPages, SITE_ORIGIN } from "@/content/seo";
import { engineeringProjects } from "@/content/engineeringProjects";

describe("portfolio SEO metadata", () => {
  it("uses the approved canonical production origin", () => {
    expect(SITE_ORIGIN).toBe("https://olayenikan-michael-software-enginee.vercel.app");
  });
  it("provides distinct metadata for every public page and case study", () => {
    const requiredPaths = [
      "/", "/about", "/projects", "/experience", "/education",
      "/blog", "/contact", ...engineeringProjects.map((project) => `/projects/${project.slug}`)
    ];
    expect(Object.keys(seoPages).sort()).toEqual(requiredPaths.sort());
    for (const path of requiredPaths) {
      expect(getPageMeta(path).title).toContain("Olayenikan Michael");
      expect(getPageMeta(path).description.length).toBeGreaterThan(40);
    }
  });
  it("normalizes trailing slashes and marks unknown pages as non-indexable", () => {
    expect(getPageMeta("/about/").title).toBe(getPageMeta("/about").title);
    expect(getPageMeta("/not-a-route").indexable).toBe(false);
  });
  it("does not reference placeholder SEO providers", () => {
    expect(Object.values(seoPages).every((page) => !page.description.includes("lovable.dev"))).toBe(true);
  });
});

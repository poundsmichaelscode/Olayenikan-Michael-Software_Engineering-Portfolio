import { describe, expect, it } from "vitest";
import { featuredProjectSlugs, portfolioIdentity, portfolioNavigation } from "./site";

describe("approved portfolio content", () => {
  it("preserves the approved professional identity", () => {
    expect(portfolioIdentity.name).toBe("Olayenikan Michael");
    expect(portfolioIdentity.title).toBe("Full-Stack Software Engineer");
    expect(portfolioIdentity.email).toBe("olayenikanmichaelolaniyi@gmail.com");
  });
  it("uses unique internal routes", () => {
    const routes = portfolioNavigation.map((item) => item.href);
    expect(new Set(routes).size).toBe(routes.length);
    expect(routes.every((route) => route.startsWith("/"))).toBe(true);
  });
  it("features the four approved projects", () => {
    expect(featuredProjectSlugs).toEqual(["routewell", "skillproof-api", "api-gateway", "cloudpress-aws"]);
  });
});

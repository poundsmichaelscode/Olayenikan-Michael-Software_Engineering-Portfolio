import { describe, expect, it } from "vitest";
import { featuredEngineeringWork } from "./FeaturedEngineeringWork";

describe("featured engineering work", () => {
  it("uses four distinct approved project slugs", () => {
    expect(featuredEngineeringWork.map((p) => p.slug)).toEqual([
      "routewell", "skillproof-api", "api-gateway", "cloudpress-aws"
    ]);
  });
  it("provides honest deployment notes for every project", () => {
    expect(featuredEngineeringWork.every((p) => p.note.trim().length > 0)).toBe(true);
  });
});

import { describe, expect, it } from "vitest";
import { engineeringProjects, findEngineeringProject } from "./engineeringProjects";
import { featuredProjectSlugs } from "./site";

describe("engineering case study content", () => {
  it("covers exactly the approved featured projects", () => {
    expect(engineeringProjects.map((project) => project.slug)).toEqual([...featuredProjectSlugs]);
  });
  it("includes source evidence, implementation details and honest limitations", () => {
    for (const project of engineeringProjects) {
      expect(project.evidence.length).toBeGreaterThanOrEqual(2);
      expect(project.approach.length).toBeGreaterThan(1);
      expect(project.limitations.length).toBeGreaterThan(0);
      expect(project.evidence.every((source) => source.url.startsWith("https://github.com/"))).toBe(true);
      expect(findEngineeringProject(project.slug)?.title).toBe(project.title);
    }
  });
  it("does not return an invented case study for an unknown slug", () => {
    expect(findEngineeringProject("unknown")).toBeUndefined();
  });
});

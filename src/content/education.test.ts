import { describe, expect, it } from "vitest";
import { completedTraining, formalEducation, ongoingLearning } from "./education";

describe("education and learning", () => {
  it("distinguishes formal qualifications and ongoing labs", () => {
    expect(formalEducation).toHaveLength(2);
    expect(formalEducation.every((item) => item.status === "Completed")).toBe(true);
    expect(ongoingLearning.every((item) => item.status === "Ongoing")).toBe(true);
  });
  it("preserves nine unique completed programmes", () => {
    expect(completedTraining).toHaveLength(9);
    expect(new Set(completedTraining.map((item) => item.name)).size).toBe(9);
  });
});

import { describe, expect, it } from "vitest";
import { activeEngagements, professionalFocus } from "./career";

describe("engineering experience content", () => {
  it("lists approved ongoing engagements only", () => {
    expect(activeEngagements.map((item) => item.organization)).toEqual(["TripBooka", "Markelo"]);
    expect(activeEngagements.every((item) => item.period === "Ongoing")).toBe(true);
  });
  it("does not link to confidential client repositories", () => {
    expect(activeEngagements.every((item) => item.evidence.every((link) => link.href.startsWith("https://github.com/TripBooka/platform/pull/")))).toBe(true);
  });
  it("provides technical areas of focus", () => {
    expect(professionalFocus.length).toBe(3);
  });
});

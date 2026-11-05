import { describe, expect, it } from "vitest";
import { activeEngagements, historicalEngagements, professionalFocus } from "./career";

describe("engineering experience content", () => {
  it("lists approved ongoing engagements only", () => {
    expect(activeEngagements.map((item) => item.organization)).toEqual(["TripBooka", "Markelo"]);
    expect(activeEngagements.every((item) => item.period === "Ongoing")).toBe(true);
  });
  it("does not link to confidential client repositories", () => {
    expect(activeEngagements.every((item) => item.evidence.every((link) => link.href.startsWith("https://github.com/TripBooka/platform/pull/")))).toBe(true);
  });
  it("includes all seven approved historical roles with visible verification details", () => {
    expect(historicalEngagements.map((item) => item.organization)).toEqual([
      "Bincom Solutions", "Enoverlab / EduHive", "Moedify Agency",
      "Pantech ProEd", "Nerdeye", "SON IT", "CVIT Nigeria"
    ]);
    expect(historicalEngagements.every((item) => item.verification.length > 0)).toBe(true);
    expect(new Set([...activeEngagements, ...historicalEngagements].map((item) => item.organization)).size).toBe(9);
  });
  it("provides technical areas of focus", () => {
    expect(professionalFocus.length).toBe(3);
  });
});

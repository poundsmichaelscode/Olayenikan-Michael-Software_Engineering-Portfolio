import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { PortfolioNavigation } from "./PortfolioNavigation";

vi.mock("@/components/ThemeToggle", () => ({ ThemeToggle: () => <button type="button">Theme</button> }));

describe("PortfolioNavigation", () => {
  it("renders accessible mobile navigation", () => {
    render(<MemoryRouter><PortfolioNavigation /></MemoryRouter>);
    const toggle = screen.getByRole("button", { name: "Open navigation menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: "Close navigation menu" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getAllByRole("link", { name: "Projects" }).length).toBeGreaterThan(0);
  });
});

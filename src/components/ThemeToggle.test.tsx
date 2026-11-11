import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ThemeToggle } from "./ThemeToggle";

const themeMock = vi.hoisted(() => ({ resolvedTheme: "dark", setTheme: vi.fn() }));
vi.mock("next-themes", () => ({ useTheme: () => themeMock }));

describe("ThemeToggle", () => {
  beforeEach(() => { themeMock.resolvedTheme = "dark"; themeMock.setTheme.mockReset(); });
  it("switches the default dark theme to light", () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole("button", { name: "Switch to light mode" }));
    expect(themeMock.setTheme).toHaveBeenCalledWith("light");
  });
  it("switches back to dark", () => {
    themeMock.resolvedTheme = "light";
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole("button", { name: "Switch to dark mode" }));
    expect(themeMock.setTheme).toHaveBeenCalledWith("dark");
  });
});

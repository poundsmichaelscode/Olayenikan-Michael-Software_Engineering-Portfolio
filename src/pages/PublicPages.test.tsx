import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";

function renderInRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("public portfolio pages", () => {
  it("provides the approved engineering biography and working navigation", () => {
    renderInRouter(<AboutPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("About Olayenikan Michael");
    expect(screen.getByRole("link", { name: /engineering work/i })).toHaveAttribute("href", "/projects");
  });
  it("links engineering notes to real case studies without fictional publication dates", () => {
    renderInRouter(<BlogPage />);
    expect(screen.getAllByRole("link", { name: /read related case study/i })).toHaveLength(3);
    expect(screen.getByText(/not previously published standalone blog posts/i)).toBeInTheDocument();
  });
  it("provides a working email action instead of a placeholder form", () => {
    renderInRouter(<ContactPage />);
    expect(screen.getByRole("link", { name: /compose an email/i })).toHaveAttribute("href",
      expect.stringContaining("mailto:olayenikanmichaelolaniyi@gmail.com"));
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
  });
});

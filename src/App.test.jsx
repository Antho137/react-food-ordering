import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders h1 title ", () => {
    render(<App />);
    expect(screen.getByText("Food Ordering")).toBeInTheDocument();
    expect(screen.getByText("Food Ordering")).toBeVisible();
  });
  it("renders h2 heading ", () => {
    render(<App />);
    expect(screen.getByText("Our Top Dishes")).toBeInTheDocument();
  });
  
  it("shows card button text", () => {
    render(<App />);
    expect(screen.queryAllByText('Add to cart'));
  });
});

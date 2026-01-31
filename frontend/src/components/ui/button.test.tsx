import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import React from "react";
import '@testing-library/jest-dom';

describe("Button component", () => {
  it("renders with default text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("applies the variant class", () => {
    render(<Button variant="destructive">Delete</Button>);
    const btn = screen.getByRole("button", { name: /delete/i });
    expect(btn.className).toMatch(/destructive/);
  });

  it("is disabled when passed the disabled prop", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button", { name: /disabled/i })).toBeDisabled();
  });
});

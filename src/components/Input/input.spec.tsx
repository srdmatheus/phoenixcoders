import { render, screen } from "@testing-library/react";

import { Input } from "./";

describe("Input component", () => {
  it("should render the input element", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    render(<Input className="custom-class" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("custom-class");
  });

  it("should forward the ref", () => {
    const ref = { current: null };
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("should accept and pass props", () => {
    render(<Input placeholder="placeholder" />);
    const inputElement = screen.getByPlaceholderText("placeholder");
    expect(inputElement).toBeInTheDocument();
  });
});

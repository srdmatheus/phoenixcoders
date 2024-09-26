import { render, screen } from "@testing-library/react";
import { useFormContext } from "react-hook-form";

import { InputForm } from "./";

jest.mock("react-hook-form", () => ({
  useFormContext: jest.fn()
}));

describe("<InputForm />", () => {
  const mockRegister = jest.fn();
  const mockErrors = {};

  beforeEach(() => {
    (useFormContext as jest.Mock).mockReturnValue({
      register: mockRegister,
      formState: { errors: mockErrors }
    });
  });

  it("deve renderizar o rótulo corretamente", () => {
    render(<InputForm name="email" label="Email" />);

    const labelElement = screen.getByLabelText(/Email/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("deve renderizar o input corretamente", () => {
    render(<InputForm name="email" label="Email" />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("id", "email");
  });

  it("deve mostrar o asterisco quando o campo é obrigatório", () => {
    render(<InputForm name="email" label="Email" required />);

    const asteriskElement = screen.getByText("*");
    expect(asteriskElement).toBeInTheDocument();
    expect(asteriskElement).toHaveClass("text-semanticColor-2");
  });

  it("não deve mostrar o asterisco quando o campo não é obrigatório", () => {
    render(<InputForm name="email" label="Email" required={false} />);

    const asteriskElement = screen.queryByText("*");
    expect(asteriskElement).not.toBeInTheDocument();
  });

  it("deve aplicar a classe de erro ao input quando houver erro", () => {
    const mockErrorsWithError = { email: { message: "Campo obrigatório" } };

    (useFormContext as jest.Mock).mockReturnValue({
      register: mockRegister,
      formState: { errors: mockErrorsWithError }
    });

    render(<InputForm name="email" label="Email" />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("border-semanticColor-2");
  });
});

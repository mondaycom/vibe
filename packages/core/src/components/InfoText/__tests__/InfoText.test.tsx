import React from "react";
import { render, screen } from "@testing-library/react";
import InfoText from "../InfoText";

describe("InfoText", () => {
  const MOCK_ID = "test-info-text";
  const MOCK_TEXT = "This is info text";

  it("should render text when provided", () => {
    render(<InfoText id={MOCK_ID} text={MOCK_TEXT} />);
    expect(screen.getByText(MOCK_TEXT)).toBeInTheDocument();
  });

  it("should not render when text is empty string", () => {
    const { container } = render(<InfoText id={MOCK_ID} text={""} />);
    expect(container.firstChild).toBeNull();
  });

  it("should not render when text is null", () => {
    const { container } = render(<InfoText id={MOCK_ID} text={null} />);
    expect(container.firstChild).toBeNull();
  });

  it("should apply error styling when error prop is true", () => {
    render(<InfoText id={MOCK_ID} text="Error message" error />);
    const element = screen.getByText("Error message");
    expect(element).toHaveClass("error");
  });

  it("should apply success styling when success prop is true", () => {
    render(<InfoText id={MOCK_ID} text="Success message" success />);
    const element = screen.getByText("Success message");
    expect(element).toHaveClass("success");
  });

  it("should apply disabled styling when disabled prop is true", () => {
    render(<InfoText id={MOCK_ID} text="Disabled message" disabled />);
    const element = screen.getByText("Disabled message");
    expect(element).toHaveClass("disabled");
  });

  it("should apply readOnly styling when readOnly prop is true", () => {
    render(<InfoText id={MOCK_ID} text="Read only message" readOnly />);
    const element = screen.getByText("Read only message");
    expect(element).toHaveClass("readOnly");
  });
});

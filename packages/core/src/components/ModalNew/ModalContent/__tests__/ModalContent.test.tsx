import React from "react";
import { render } from "@testing-library/react";
import ModalContent from "../ModalContent";

describe("ModalContent", () => {
  const childrenContent = <span>My content</span>;

  it("renders the children correctly", () => {
    const { getByText } = render(<ModalContent>{childrenContent}</ModalContent>);
    expect(getByText("My content")).toBeInTheDocument();
  });

  it("renders when no children are provided", () => {
    const { container } = render(<ModalContent />);
    expect(container.firstChild).toBeInTheDocument();
  });
});

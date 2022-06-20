import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import ModalContent from "../ModalContent";

const renderComponent = props => {
  return render(<ModalContent {...props} />);
};

describe("ModalContent tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});

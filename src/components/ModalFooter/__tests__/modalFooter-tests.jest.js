import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import ModalFooter from "../ModalFooter";

const renderComponent = props => {
  return render(<ModalFooter {...props} />);
};

describe("ModalFooter tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});

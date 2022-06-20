import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import ModalHeader from "../ModalHeader";

const renderComponent = props => {
  return render(<ModalHeader {...props} />);
};

describe("ModalHeader tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});

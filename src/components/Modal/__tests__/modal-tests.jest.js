import React from "react";
import { render, cleanup } from "@testing-library/react";
// import { act } from "@testing-library/react-hooks";
import Modal from "../Modal";

// eslint-disable-next-line no-unused-vars
const renderComponent = props => {
  return render(<Modal {...props} />);
};

describe("Modal tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});

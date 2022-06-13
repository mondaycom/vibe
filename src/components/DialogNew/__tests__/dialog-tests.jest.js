import React from "react";
import { render, cleanup } from "@testing-library/react";
// import { act } from "@testing-library/react-hooks";
import Dialog from "../Dialog";

// eslint-disable-next-line no-unused-vars
const renderComponent = props => {
  return render(<Dialog {...props} />);
};

describe("DialogNew tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});

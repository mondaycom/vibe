import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import IconButton from "../IconButton";


const renderComponent = props => {
  return render(<IconButton {...props} />);
};

describe("IconButton tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});

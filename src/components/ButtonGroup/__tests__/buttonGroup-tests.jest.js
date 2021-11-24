import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import ButtonGroup from "../ButtonGroup";


const renderComponent = props => {
  return render(<ButtonGroup {...props} />);
};

describe("ButtonGroup tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});

import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Combobox from "../Combobox";


const renderComponent = props => {
  return render(<Combobox {...props} />);
};

describe("Combobox tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});

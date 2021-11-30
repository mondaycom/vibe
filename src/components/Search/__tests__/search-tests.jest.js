import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Search from "../Search";


const renderComponent = props => {
  return render(<Search {...props} />);
};

describe("Search tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});

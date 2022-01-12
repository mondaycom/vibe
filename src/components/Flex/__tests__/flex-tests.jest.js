import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Flex from "../Flex";


const renderComponent = props => {
  return render(<Flex {...props} />);
};

describe("Flex tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});

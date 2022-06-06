import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import AvatarGroup from "../AvatarGroup";


const renderComponent = props => {
  return render(<AvatarGroup {...props} />);
};

describe("AvatarGroup tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});

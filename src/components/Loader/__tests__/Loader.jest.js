import React from "react";
import { cleanup, render } from "@testing-library/react";
import Loader from "../Loader";

describe("<Loader />", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be able to forward ref", () => {
    const ref = React.createRef();
    render(<Loader ref={ref} className="ref-class-name" />);
    expect(ref.current.querySelector(".ref-class-name")).toBeInTheDOM;
  });
});

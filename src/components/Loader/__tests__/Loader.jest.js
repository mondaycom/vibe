import React from "react";
import { render, cleanup } from "@testing-library/react";
import Loader from "../Loader";

describe("<Loader />", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be able to forward ref", () => {
    const ref = React.createRef();
    render(<Loader ref={ref} />);
    expect(ref.current.classList.contains("monday-loader-component")).toEqual(true);
  });
});

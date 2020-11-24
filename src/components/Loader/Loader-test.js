import React from "react";
import { render, cleanup } from "@testing-library/react";
import { expect } from "../../test/test-helpers";
import Loader from "./Loader";

describe("<Loader />", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be able to forward ref", () => {
    const ref = {};
    render(<Loader ref={ref} />);
    expect(ref.current.className).to.eq("monday-loader-component");
  });
});

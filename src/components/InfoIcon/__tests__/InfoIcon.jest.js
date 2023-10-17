import React from "react";
import { render, cleanup } from "@testing-library/react";
import InfoIcon from "../InfoIcon";

describe("InfoIcon", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render successfully and match snapshot", () => {
    const { container } = render(<InfoIcon>Information</InfoIcon>);
    expect(container).toMatchSnapshot();
  });
});

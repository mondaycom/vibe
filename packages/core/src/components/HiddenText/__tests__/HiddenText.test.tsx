import { it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import HiddenText from "../HiddenText";
import { render } from "@testing-library/react";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<HiddenText text="This text is hidden" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Doesn't show the text", () => {
  const { getByText } = render(<HiddenText text="Example" />);
  const element = getByText("Example");
  expect(element).toHaveClass("hiddenTextWrapper");
});

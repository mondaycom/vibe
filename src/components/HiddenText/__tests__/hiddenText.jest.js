import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import HiddenText from "../HiddenText";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<HiddenText />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Doesn't show the text", () => {
  const { getyByText } = render(<HiddenText text="Example" />);
  try {
    getyByText("Example");
    fail("Didn't throw");
  } catch (e) {
    // couldn't find an element with that text => success
  }
});

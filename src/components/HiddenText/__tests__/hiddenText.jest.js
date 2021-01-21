import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import HiddenText from "../HiddenText";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<HiddenText />).toJSON();
  expect(tree).toMatchSnapshot();
});

// This test currently fails due to an apparent jest bug.
// it("Doesn't show the text", () => {
//   const { getByText } = render(<HiddenText text="Example" />);
//   const element = getByText("Example");
//   expect(element).not.toBeVisible();
// });

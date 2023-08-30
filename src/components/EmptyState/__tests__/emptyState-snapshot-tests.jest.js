import React from "react";
import renderer from "react-test-renderer";
import EmptyState from "../EmptyState";

const defaultProps = {
  imgSrc: "someImg",
  title: "This is title",
  body: "This is body"
};

describe("EmptyState", () => {
  it("should render correctly with required props", () => {
    const tree = renderer.create(<EmptyState {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import ButtonGroup from "../ButtonGroup";

const option = [
  { value: 1, text: "Alpha" },
  { value: 2, text: "Beta" },
  { value: 3, text: "Gamma" },
  { value: 4, text: "Delta" }
];

describe("ButtonGroup renders correctly", () => {
  it("with value", () => {
    const tree = renderer.create(<ButtonGroup value={1} options={option} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with name", () => {
    const tree = renderer.create(<ButtonGroup name="name" options={option} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<ButtonGroup disabled options={option} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with large size", () => {
    const tree = renderer.create(<ButtonGroup size={ButtonGroup.sizes.LARGE} options={option} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with TERTIARY kind ", () => {
    const tree = renderer.create(<ButtonGroup kind={ButtonGroup.kinds.TERTIARY} options={option} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<ButtonGroup groupAriaLabel="as" options={option} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with componentClassName", () => {
    const tree = renderer.create(<ButtonGroup componentClassName="testClassName" options={option} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

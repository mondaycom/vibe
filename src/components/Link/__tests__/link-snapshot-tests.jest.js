import React from "react";
import renderer from "react-test-renderer";
import Link from "../Link";

describe("Link renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Link />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<Link id="id" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<Link componentClassName="my-classname" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with href", () => {
    const tree = renderer.create(<Link href="http://somelink.com" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with rel", () => {
    const tree = renderer.create(<Link rel="something" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with onClick", () => {
    const tree = renderer.create(<Link onClick={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with target", () => {
    const tree = renderer.create(<Link target={Link.target.TOP} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("a11y", () => {
    const tree = renderer.create(<Link ariaLabelDescription="My Link" ariaLabeledBy="anotherId" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import Search from "../Search";

describe("Search renders correctly", () => {
  it("without props", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with placeholder", () => {
    const tree = renderer.create(<Search placeholder="placeholder" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<Search value="value" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<Search disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when underline", () => {
    const tree = renderer.create(<Search underline />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with wrapperClassName", () => {
    const tree = renderer.create(<Search wrapperClassName="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<Search className="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<Search id="testId" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with validation", () => {
    const tree = renderer.create(<Search validation={{ status: "error" }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with loading", () => {
    const tree = renderer.create(<Search loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with underline type", () => {
    const tree = renderer.create(<Search type={Search.types.UNDERLINE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with icon", () => {
    const tree = renderer.create(<Search iconName="fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with secondaryIconName", () => {
    const tree = renderer.create(<Search secondaryIconName="fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

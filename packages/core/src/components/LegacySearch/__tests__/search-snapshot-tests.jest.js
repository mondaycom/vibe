import React from "react";
import renderer from "react-test-renderer";
import LegacySearch from "../LegacySearch";

describe("LegacySearch renders correctly", () => {
  it("without props", () => {
    const tree = renderer.create(<LegacySearch />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with placeholder", () => {
    const tree = renderer.create(<LegacySearch placeholder="placeholder" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<LegacySearch value="value" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<LegacySearch disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when underline", () => {
    const tree = renderer.create(<LegacySearch underline />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with wrapperClassName", () => {
    const tree = renderer.create(<LegacySearch wrapperClassName="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<LegacySearch className="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<LegacySearch id="testId" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with validation", () => {
    const tree = renderer.create(<LegacySearch validation={{ status: "error" }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with loading", () => {
    const tree = renderer.create(<LegacySearch loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with underline type", () => {
    const tree = renderer.create(<LegacySearch type={LegacySearch.types.UNDERLINE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with icon", () => {
    const tree = renderer.create(<LegacySearch iconName="fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with secondaryIconName", () => {
    const tree = renderer.create(<LegacySearch secondaryIconName="fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

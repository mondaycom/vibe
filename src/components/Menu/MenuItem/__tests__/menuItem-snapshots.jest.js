import React from "react";
import renderer from "react-test-renderer";
import MenuItem from "../MenuItem";

describe("Snapshots", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<MenuItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom class name", () => {
    const tree = renderer.create(<MenuItem className="dummy-class-name" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with title and icon", () => {
    const tree = renderer.create(<MenuItem title="my item" icon="fa fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when disabled", () => {
    const tree = renderer.create(<MenuItem title="my item" disabled={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when selected", () => {
    const tree = renderer.create(<MenuItem title="my item" selected={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

jest.useFakeTimers();

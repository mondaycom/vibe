import React from "react";
import renderer from "react-test-renderer";
import AvatarGroup from "../AvatarGroup";
import Avatar from "../../Avatar/Avatar";

// Component depends on Avatar, Counter and Tooltip components
describe("AvatarGroup renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<AvatarGroup />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with dummy class name", () => {
    const tree = renderer
      .create(
        <AvatarGroup className="dummy-class-name">
          <Avatar text="P1" />
        </AvatarGroup>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with counter", () => {
    const tree = renderer
      .create(
        <AvatarGroup max={1}>
          <Avatar text="P1" />
          <Avatar text="P2" />
        </AvatarGroup>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly without counter", () => {
    const tree = renderer
      .create(
        <AvatarGroup max={2}>
          <Avatar text="P1" />
          <Avatar text="P2" />
        </AvatarGroup>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom counter value", () => {
    const tree = renderer
      .create(
        <AvatarGroup max={2} counterValue={13}>
          <Avatar text="P1" />
          <Avatar text="P2" />
        </AvatarGroup>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with large size", () => {
    const tree = renderer
      .create(
        <AvatarGroup size={Avatar.sizes.LARGE} max={1}>
          <Avatar text="P1" />
          <Avatar text="P2" />
        </AvatarGroup>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with counter ariaLabel default-tooltip", () => {
    const tree = renderer
      .create(
        <AvatarGroup max={1}>
          <Avatar text="P1" ariaLabel="Person 1" />
          <Avatar text="P2" ariaLabel="Person 2" />
        </AvatarGroup>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with counter default-tooltip", () => {
    const tree = renderer
      .create(
        <AvatarGroup max={1}>
          <Avatar text="P1" tooltipProps={{ content: "Person 1" }} />
          <Avatar text="P2" tooltipProps={{ content: "Person 2" }} />
        </AvatarGroup>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom counter tooltip", () => {
    const tree = renderer
      .create(
        <AvatarGroup counterTooltipCustomProps={{ content: "Custom tooltip content" }} max={1}>
          <Avatar text="P1" />
          <Avatar text="P2" />
        </AvatarGroup>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

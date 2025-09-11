import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import Chips from "../Chips";
import { Calendar } from "@vibe/icons";
import { person1 } from "../../Avatar/__stories__/assets";

describe("Chips renders correctly", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Chips />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with color", () => {
    const tree = renderer.create(<Chips color="negative" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly disabled chip", () => {
    const tree = renderer.create(<Chips disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly without close button", () => {
    const tree = renderer.create(<Chips readOnly />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with text", () => {
    const tree = renderer.create(<Chips label="text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with right icon", () => {
    const tree = renderer.create(<Chips rightIcon={Calendar} readOnly />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with left icon", () => {
    const tree = renderer.create(<Chips leftIcon={Calendar} readOnly />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with right avatar", () => {
    const tree = renderer.create(<Chips rightAvatar={person1} readOnly />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with left avatar", () => {
    const tree = renderer.create(<Chips leftAvatar={person1} readOnly />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with left custom renderer", () => {
    const tree = renderer.create(<Chips leftRenderer={<div>custom renderer</div>} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with right custom renderer", () => {
    const tree = renderer.create(<Chips rightRenderer={<div>custom renderer</div>} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with a custom label", () => {
    const tree = renderer
      .create(
        <Chips
          readOnly
          ariaLabel={"This is mandatory"}
          label={
            <>
              This is mandatory <span>*</span>
            </>
          }
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

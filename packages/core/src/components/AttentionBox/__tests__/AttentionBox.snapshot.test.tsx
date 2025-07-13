import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import AttentionBox from "../AttentionBox";

describe("AttentionBox renders correctly", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<AttentionBox className="dummy-class-name" title="Title" text="Text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with empty props", () => {
    const tree = renderer.create(<AttentionBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with empty title prop", () => {
    const tree = renderer.create(<AttentionBox title="" text="Text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with no icon", () => {
    const tree = renderer.create(<AttentionBox title="Title" text="Text" withoutIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when compact", () => {
    const tree = renderer.create(<AttentionBox title="Title" text="Text" compact />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly dark type", () => {
    const tree = renderer.create(<AttentionBox title="Title" text="Text" type="dark" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with icon font type", () => {
    const tree = renderer.create(<AttentionBox title="Title" text="Text" iconType="font" icon="fa fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly className", () => {
    const tree = renderer.create(<AttentionBox title="Title" text="Text" className="test-classNmae" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with onClose", () => {
    const tree = renderer.create(<AttentionBox title="Title" text="Text" onClose={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with renderer", () => {
    const tree = renderer
      .create(
        <AttentionBox>
          <span>
            renderer with components <div>and sub components</div>
          </span>
        </AttentionBox>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

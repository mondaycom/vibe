import React from "react";
import renderer from "react-test-renderer";
import Banner from "../Banner";
import { NOOP } from "../../../utils/function-utils";

jest.mock("../../Button/Button", () => {
  const Button = ({ onClick }) => (
    <div data-testid="cancel-button" {...(onClick && { "data-onclick": "onclick-provided" })} />
  );

  Button.sizes = {};
  Button.kinds = {};
  Button.colors = {};

  return Button;
});

describe("Banner", () => {
  const mockTitle = "mock title";
  const mockSubtitle = "mock Subtitle";
  const mockRenderFunction = text => <div data-testid="custom_render">{text}</div>;

  it("should render correctly without props", () => {
    const tree = renderer.create(<Banner />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with correct image position class - left", () => {
    const tree = renderer.create(<Banner imagePosition={Banner.imagePosition.LEFT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with correct image position class - top", () => {
    const tree = renderer.create(<Banner imagePosition={Banner.imagePosition.TOP} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with correct image position class - right", () => {
    const tree = renderer.create(<Banner imagePosition={Banner.imagePosition.RIGHT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with correct image position class - bottom", () => {
    const tree = renderer.create(<Banner imagePosition={Banner.imagePosition.BOTTOM} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render title, subtitle and image", () => {
    const tree = renderer
      .create(
        <Banner
          title={mockTitle}
          subtitle={mockSubtitle}
          imageSrc="mockImage.src"
          imageAlt="mock image alt"
          imageClassName="mock-image-classname"
          className="mock-classname"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should use custom render function for subtitle", () => {
    const tree = renderer
      .create(<Banner title={mockTitle} subtitle={mockSubtitle} renderSubtitle={mockRenderFunction} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should use custom render function for title", () => {
    const tree = renderer
      .create(<Banner title={mockTitle} subtitle={mockSubtitle} renderTitle={mockRenderFunction} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render close button", () => {
    const tree = renderer
      .create(
        <Banner
          title={mockTitle}
          subtitle={mockSubtitle}
          imageSrc="mockImage.src"
          imageAlt="mock image alt"
          className="mock-classname"
          onClose={NOOP}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render in Right to Left mode", () => {
    const tree = renderer
      .create(
        <Banner
          title={mockTitle}
          subtitle={mockSubtitle}
          imageSrc="mockImage.src"
          imageAlt="mock image alt"
          imageClassName="mock-image-classname"
          className="mock-classname"
          onClose={NOOP}
          rtl
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import Heading from "../LegacyHeading";

describe("Renders correctly", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Heading type={Heading.types.h1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with different sizes", () => {
    const tree = renderer
      .create(
        <div>
          <Heading type={Heading.types.h1} value="Hello H1" />
          <Heading type={Heading.types.h1} value="Hello H1 medium" size="medium" />
          <Heading type={Heading.types.h2} value="Hello H2" />
          <Heading type={Heading.types.h2} value="Hello H2 small" size="small" />
          <Heading type={Heading.types.h3} value="Hello H3" />
          <Heading type={Heading.types.h4} value="Hello H4" />
          <Heading type={Heading.types.h5} value="Hello H5" />
        </div>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with text highlight", () => {
    const tree = renderer
      .create(
        <Heading
          type={Heading.types.h2}
          highlightTerm="heading highlight"
          value="Heading with highlight text heading with highlight text without overflow"
          ellipsis={false}
          nonEllipsisTooltip="Tooltip when no overflow"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom color", () => {
    const tree = renderer.create(<Heading type={Heading.types.h1} value="Hello" customColor="blue" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

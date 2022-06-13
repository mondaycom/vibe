import React from "react";
import renderer from "react-test-renderer";
import Box from "../Box";

/**
 * There are cases where the component we want to test in the snapshot test will contain additional components.
 We do not want changes to the additional components to fail our component snapshot's test.
 Therefore, we will replace the instances of the other external components in the snapshot test with mock/stub components in these cases.
 */

/** example for external library
 jest.mock("react-transition-group", () => {
  const FakeTransition = jest.fn(({ children }) => children);
  const FakeSwitchTransition = jest.fn(({ children }) => children);
  const FakeCSSTransition = jest.fn(({ children }) => children);

  // We return here the instance of the mock / stub library object content
  return {
    CSSTransition: FakeCSSTransition,
    Transition: FakeTransition,
    SwitchTransition: FakeSwitchTransition
  };
});
 **/

/** example for internal component
jest.mock("../../Button/Button", () => {
  // We return here the instance of the mock / stub component
  return ({ onClick }) => (
    <div data-testid="cancel-button" {...(onClick && { "data-onclick": "onclick-provided" })} />
  );
});
**/

describe("Box renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Box></Box>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with border prop", () => {
    const tree = renderer.create(<Box border={Box.borders.DEFAULT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with borderTop prop", () => {
    const tree = renderer.create(<Box borderTop={Box.borderTops.DEFAULT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with borderEnd prop", () => {
    const tree = renderer.create(<Box borderEnd={Box.borderEnds.DEFAULT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with borderBottom prop", () => {
    const tree = renderer.create(<Box borderBottom={Box.borderBottoms.DEFAULT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with borderStart prop", () => {
    const tree = renderer.create(<Box borderStart={Box.borderStarts.DEFAULT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with borderColor prop", () => {
    const tree = renderer.create(<Box borderColor={Box.borderColors.UI_BORDER_COLOR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with rounded prop", () => {
    const tree = renderer.create(<Box rounded={Box.roundeds.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with roundedTop prop", () => {
    const tree = renderer.create(<Box roundedTop={Box.roundedTops.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with roundedEnd prop", () => {
    const tree = renderer.create(<Box roundedTop={Box.roundedTops.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with roundedBottom prop", () => {
    const tree = renderer.create(<Box roundedTop={Box.roundedTops.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with roundedStart prop", () => {
    const tree = renderer.create(<Box roundedStart={Box.roundedStarts.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with shadow prop", () => {
    const tree = renderer.create(<Box shadow={Box.shadows.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with margin prop", () => {
    const tree = renderer.create(<Box margin={Box.margins.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginX prop", () => {
    const tree = renderer.create(<Box marginX={Box.marginXs.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginY prop", () => {
    const tree = renderer.create(<Box marginY={Box.marginYs.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginTop prop", () => {
    const tree = renderer.create(<Box marginTop={Box.marginTops.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginEnd prop", () => {
    const tree = renderer.create(<Box marginEnd={Box.marginEnds.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginStart prop", () => {
    const tree = renderer.create(<Box marginStart={Box.marginStarts.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with padding prop", () => {
    const tree = renderer.create(<Box padding={Box.paddings.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingX prop", () => {
    const tree = renderer.create(<Box paddingX={Box.paddingXs.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingY prop", () => {
    const tree = renderer.create(<Box paddingY={Box.paddingYs.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingTop prop", () => {
    const tree = renderer.create(<Box paddingTop={Box.paddingTops.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingEnd prop", () => {
    const tree = renderer.create(<Box paddingEnd={Box.paddingEnds.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingBottom prop", () => {
    const tree = renderer.create(<Box paddingBottom={Box.paddingBottoms.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingStart prop", () => {
    const tree = renderer.create(<Box paddingStart={Box.paddingStarts.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with backgronudColor prop", () => {
    const tree = renderer.create(<Box BackgronudColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with text prop", () => {
    const tree = renderer.create(<Box text={Box.texts.PRIMARY_COLOR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

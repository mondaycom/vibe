import React from "react";
import renderer from "react-test-renderer";
import IconButton from "../IconButton";
import { SIZES } from "../../../constants/sizes";

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
 * */

/** example for internal component
jest.mock("../../Button/Button", () => {
  // We return here the instance of the mock / stub component
  return ({ onClick }) => (
    <div data-testid="cancel-button" {...(onClick && { "data-onclick": "onclick-provided" })} />
  );
});
* */

describe("IconButton renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<IconButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<IconButton id="icon-button" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with", () => {
    const tree = renderer.create(<IconButton className="class-name" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with disabled", () => {
    const tree = renderer.create(<IconButton disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //   it(`with size - xs`, () => {
  //     const tree = renderer.create(<IconButton size="xs" />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  //
  // it(`with size - medium`, () => {
  //     const tree = renderer.create(<IconButton size="medium" />).toJSON();
  //     expect(tree).toMatchSnapshot();
  // });

  Object.values(SIZES).forEach(size => {
    it(`with size - ${size}`, () => {
      const tree = renderer.create(<IconButton size={size} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it("with aria label", () => {
    const tree = renderer.create(<IconButton ariaLabel="My aria label" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with active", () => {
    const tree = renderer.create(<IconButton active />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

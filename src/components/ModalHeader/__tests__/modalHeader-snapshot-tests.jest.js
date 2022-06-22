import React from "react";
import renderer from "react-test-renderer";
import ModalHeader from "../ModalHeader";
import { Settings } from "components/Icon/Icons";

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

describe("ModalHeader renders correctly", () => {
  it("with required props", () => {
    const tree = renderer.create(<ModalHeader title={"Title"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with close button hidden", () => {
    const tree = renderer.create(<ModalHeader title={"Title"} hideCloseButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with description", () => {
    const tree = renderer.create(<ModalHeader title={"Title"} description="description" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with icon", () => {
    const tree = renderer.create(<ModalHeader title={"Title"} icon={Settings} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with classNames", () => {
    const tree = renderer
      .create(
        <ModalHeader
          title={"Title"}
          className="className"
          descriptionClassName="descriptionClassName"
          iconClassName="iconClassName"
          titleClassName="titleClassName"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

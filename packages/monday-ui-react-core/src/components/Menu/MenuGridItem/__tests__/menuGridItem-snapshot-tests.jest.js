import React from "react";
import renderer from "react-test-renderer";
import MenuGridItem from "../MenuGridItem";

const NO_OP = () => {};

describe("MenuGridItem renders correctly", () => {
  const FAKE_REQUIRED_PROPS = {
    closeMenu: NO_OP,
    setActiveItemIndex: NO_OP,
    getNextSelectableIndex: NO_OP,
    getPreviousSelectableIndex: NO_OP,
    setSubMenuIsOpenByIndex: NO_OP
  };

  it("with a child", () => {
    const tree = renderer
      .create(
        <MenuGridItem {...FAKE_REQUIRED_PROPS}>
          <div>Hello!</div>
        </MenuGridItem>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("with a disabled child", () => {
    // MenuGridItem should pass the disabled prop into DivWrapper
    const DivWrapper = ({ disabled }) => <div disabled={disabled}>this should be disabled</div>;
    const tree = renderer
      .create(
        <MenuGridItem disabled {...FAKE_REQUIRED_PROPS}>
          <DivWrapper />
        </MenuGridItem>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

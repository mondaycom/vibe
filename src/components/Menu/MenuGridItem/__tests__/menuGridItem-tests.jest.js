import { cleanup, render } from "@testing-library/react";
import React from "react";
import MenuGridItem from "../MenuGridItem";

const NO_OP = () => {};

describe("MenuGridItem", () => {
  const FAKE_REQUIRED_PROPS = {
    closeMenu: NO_OP,
    setActiveItemIndex: NO_OP,
    getNextSelectableIndex: NO_OP,
    getPreviousSelectableIndex: NO_OP,
    setSubMenuIsOpenByIndex: NO_OP
  };

  afterEach(() => {
    cleanup();
  });

  it("should pass the disabled prop to the child", () => {
    const { getByTestId } = render(
      <MenuGridItem disabled={true} {...FAKE_REQUIRED_PROPS}>
        <button type="button" data-testid="my-div">
          Hey
        </button>
      </MenuGridItem>
    );
    const child = getByTestId("my-div");

    expect(child).toBeDisabled;
  });
});

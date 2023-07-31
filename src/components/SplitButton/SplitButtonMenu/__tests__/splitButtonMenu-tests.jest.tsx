import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SplitButtonMenu from "../SplitButtonMenu";
import MenuItem from "../../../Menu/MenuItem/MenuItem";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";

const id = "menu";
const menuDataTestId = getTestId(ComponentDefaultTestId.MENU, id);

const renderSplitButtonMenu = () => {
  return render(
    <SplitButtonMenu id={id}>
      <MenuItem title="Test 1" />
      <MenuItem title="Test 2" />
    </SplitButtonMenu>
  );
};

describe("SplitButtonMenu", () => {
  it("renders correctly", () => {
    const { container } = renderSplitButtonMenu();
    expect(container).toBeInTheDocument();
  });

  it("should pass the correct props to the underlying Menu component", () => {
    const { getByTestId } = renderSplitButtonMenu();
    expect(getByTestId(menuDataTestId)).toHaveAttribute("aria-activedescendant", `${id}-0`);
  });

  it("should render the children of Menu", () => {
    const { getByText } = renderSplitButtonMenu();
    expect(getByText("Test 1")).toBeInTheDocument();
    expect(getByText("Test 2")).toBeInTheDocument();
  });

  it("should focus first menu item on mount", () => {
    const { getByTestId } = renderSplitButtonMenu();
    expect(getByTestId(getTestId(ComponentDefaultTestId.MENU_ITEM))).toHaveFocus();
  });
});

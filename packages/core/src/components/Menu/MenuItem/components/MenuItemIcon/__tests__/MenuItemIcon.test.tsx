import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuItemIcon from "../MenuItemIcon";
import { MenuItemIconProps } from "../MenuItemIcon.types";

function renderMenuItemIcon(props: Partial<MenuItemIconProps> = {}) {
  return render(<MenuItemIcon icon="test-icon" label="Test Icon" {...props} />);
}

describe("MenuItemIcon", () => {
  it("should render the icon correctly", () => {
    const { queryByTestId } = renderMenuItemIcon();
    expect(queryByTestId("icon")).toBeInTheDocument();
  });

  it("should apply the disabled style if the disabled prop is true", () => {
    const { queryByTestId } = renderMenuItemIcon({ disabled: true });
    const iconWrapper = queryByTestId("icon").parentNode;
    expect(iconWrapper).toHaveClass("disabled");
  });

  it("should apply the selected style if the selected prop is true and not disabled", () => {
    const { queryByTestId } = renderMenuItemIcon({ selected: true });
    screen.logTestingPlaygroundURL();
    expect(queryByTestId("icon")).toHaveClass("selected");
  });

  it("should not apply the selected style if the icon is disabled", () => {
    const { queryByTestId } = renderMenuItemIcon({
      selected: true,
      disabled: true
    });
    expect(queryByTestId("icon")).not.toHaveClass("selected");
  });

  it("should set the background color if backgroundColor prop is provided", () => {
    const { queryByTestId } = renderMenuItemIcon({ backgroundColor: "red" });
    const iconWrapper = queryByTestId("icon").parentNode;
    expect(iconWrapper).toHaveClass("withBackgroundColor");
    expect(iconWrapper).toHaveStyle("background-color: red");
  });
});

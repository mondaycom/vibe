import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuItemIcon from "../MenuItemIcon";
import { MenuItemIconProps } from "../MenuItemIcon.types";

function renderMenuItemIcon(props: Partial<MenuItemIconProps> = {}) {
  return render(<MenuItemIcon icon="test-icon" label="Test Icon" {...props} />);
}

describe("MenuItemIcon", () => {
  it("should render the icon correctly", () => {
    const { getByLabelText } = renderMenuItemIcon();
    expect(getByLabelText("Test Icon")).toBeInTheDocument();
  });

  it("should apply the disabled style if the disabled prop is true", () => {
    const { getByLabelText } = renderMenuItemIcon({ disabled: true });
    const iconWrapper = getByLabelText("Test Icon").parentNode;
    expect(iconWrapper).toHaveClass("disabled");
  });

  it("should apply the selected style if the selected prop is true and not disabled", () => {
    const { getByLabelText } = renderMenuItemIcon({ selected: true });
    screen.logTestingPlaygroundURL();
    expect(getByLabelText("Test Icon")).toHaveClass("selected");
  });

  it("should not apply the selected style if the icon is disabled", () => {
    const { getByLabelText } = renderMenuItemIcon({
      selected: true,
      disabled: true
    });
    expect(getByLabelText("Test Icon")).not.toHaveClass("selected");
  });

  it("should set the background color if backgroundColor prop is provided", () => {
    const { getByLabelText } = renderMenuItemIcon({ backgroundColor: "red" });
    const iconWrapper = getByLabelText("Test Icon").parentNode;
    expect(iconWrapper).toHaveClass("withBackgroundColor");
    expect(iconWrapper).toHaveStyle("background-color: red");
  });
});

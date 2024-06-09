import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuItemSubMenuIcon from "../MenuItemSubMenuIcon";
import { MenuItemSubMenuIconProps } from "../MenuItemSubMenuIcon.types";

function renderMenuItemSubMenuIcon(props: Partial<MenuItemSubMenuIconProps> & { ref?: React.Ref<HTMLDivElement> }) {
  return render(<MenuItemSubMenuIcon {...props} />);
}

describe("MenuItemSubMenuIcon", () => {
  it("should render the split icon button when isSplit is true", () => {
    const { getByRole } = renderMenuItemSubMenuIcon({ isSplit: true });
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should render a simple icon when isSplit is false", () => {
    const { queryByRole, getByTestId, getByLabelText } = renderMenuItemSubMenuIcon({
      isSplit: false,
      label: "SubMenu"
    });
    expect(queryByRole("button")).not.toBeInTheDocument();
    expect(getByTestId("icon")).toBeInTheDocument();
    expect(getByLabelText("SubMenu")).toBeInTheDocument();
  });

  it("should apply disabled styles when disabled is true", () => {
    const { getByRole } = renderMenuItemSubMenuIcon({ isSplit: true, disabled: true });
    expect(getByRole("button")).toHaveAttribute("aria-disabled", "true");
  });

  it("should forward ref to the button when isSplit is true", () => {
    const ref = React.createRef<HTMLDivElement>();
    renderMenuItemSubMenuIcon({ isSplit: true, ref });
    expect(ref.current.tagName).toBe("BUTTON");
  });
});

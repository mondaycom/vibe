import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuItemSubMenu from "../MenuItemSubMenu";
// import { MenuChild } from "../../../../Menu/MenuConstants";
import { MenuProps } from "../../../../Menu/Menu";

const mockConsoleError = () => {
  const originalConsoleError = console.error;
  jest.spyOn(console, "error").mockImplementation((message, ...args) => {
    if (!message.includes("MenuItem can accept only")) {
      originalConsoleError(message, ...args);
    }
  });
};

const MockMenuChild = React.forwardRef(({ onClose }: MenuProps, ref: React.ForwardedRef<HTMLDivElement>) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div data-testid="close-button" onClick={() => onClose({})}>
    <div ref={ref}>Items</div>
  </div>
));
Object.assign(MockMenuChild, { isMenu: true });

describe("MenuItemSubMenu", () => {
  it("should render correctly with visibility hidden when not open", () => {
    const mockAnchor = document.createElement("div");
    const { container } = render(
      <MenuItemSubMenu anchorRef={{ current: mockAnchor }} open={false}>
        <MockMenuChild />
      </MenuItemSubMenu>
    );
    expect(container.firstChild).toHaveStyle("visibility: hidden");
  });

  it("should render correctly and become visible when open is true", () => {
    const mockAnchor = document.createElement("div");
    const { container } = render(
      <MenuItemSubMenu anchorRef={{ current: mockAnchor }} open>
        <MockMenuChild />
      </MenuItemSubMenu>
    );
    expect(container.firstChild).toHaveStyle("visibility: visible");
  });

  it("should call onClose when requested to close", () => {
    const mockAnchor = document.createElement("div");
    const onCloseMock = jest.fn();
    const { getByTestId } = render(
      <MenuItemSubMenu anchorRef={{ current: mockAnchor }} open onClose={onCloseMock}>
        <MockMenuChild />
      </MenuItemSubMenu>
    );

    fireEvent.click(getByTestId("close-button"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("should not crash if children are not valid menu items", () => {
    // component prints an error message to the console when children are not valid
    mockConsoleError();

    const mockAnchor = document.createElement("div");
    const { container } = render(
      <MenuItemSubMenu anchorRef={{ current: mockAnchor }} open>
        <div>Invalid Child</div>
      </MenuItemSubMenu>
    );
    expect(container).toBeEmptyDOMElement();
  });
});

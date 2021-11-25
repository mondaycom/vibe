import React from "react";
import { render, cleanup } from "@testing-library/react";
import { expect } from "../../../test/test-helpers";
import MenuItemButton from "./MenuItemButton";

describe("<MenuItemButton />", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be able to render menu item", () => {
    const { container } = render(<MenuItemButton />);
  });

  it("should be able to render menu item text", () => {
    const { container } = render(<MenuItemButton icon="fa fa-star">my item title</MenuItemButton>);
    const MenuItemButtonElement = container.querySelector(".monday-style-menu-item-button");
    expect(MenuItemButtonElement.innerText).toBe("my item title");
  });
});

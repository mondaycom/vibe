import React from "react";
import { render, cleanup } from "@testing-library/react";
import { expect } from "../../../test/test-helpers";
import MenuItem from "./MenuItem";

describe("<MenuItem />", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be able to render menu item", () => {
    const { container } = render(<MenuItem />);
  });

  it("should be able to render menu item text", () => {
    const { container } = render(<MenuItem title="my item title" icon="fa fa-star" />);
    const menuItemElement = container.querySelector(".monday-style-menu-item");
    expect(menuItemElement.innerText).to.eq("my item title");
  });

  describe("render children inside popover element", () => {
    it("should be able to render children ", () => {
      const { container } = render(
        <MenuItem title="my item title" icon="fa fa-star">
          <div className="bla-element">Bla bla bla</div>
        </MenuItem>
      );
      const childElement = container.querySelector(".bla-element");
      expect(childElement.innerText).to.eq("Bla bla bla");
    });
  });
});

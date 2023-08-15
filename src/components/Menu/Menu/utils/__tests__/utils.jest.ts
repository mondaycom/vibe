import React from "react";
import { isMenuChildSelectable } from "../utils";
import MenuItem from "../../../MenuItem/MenuItem";
import MenuTitle from "../../../MenuTitle/MenuTitle";
import MenuDivider from "../../../MenuDivider/MenuDivider";

describe("isMenuChildSelectable utility function", () => {
  describe("with selectable child", () => {
    it("should return true for enabled MenuItem", () => {
      const isMenuItemSelectable = isMenuChildSelectable(React.createElement(MenuItem));
      expect(isMenuItemSelectable).toBe(true);
    });

    it("should return false for disabled MenuItem", () => {
      const isDisabledMenuItemSelectable = isMenuChildSelectable(React.createElement(MenuItem, { disabled: true }));
      expect(isDisabledMenuItemSelectable).toBe(false);
    });
  });

  describe("with non-selectable child", () => {
    it("should return false for MenuTitle", () => {
      const isMenuTitleSelectable = isMenuChildSelectable(React.createElement(MenuTitle));
      expect(isMenuTitleSelectable).toBe(false);
    });

    it("should return false for MenuDivider", () => {
      const isMenuDividerSelectable = isMenuChildSelectable(React.createElement(MenuDivider));
      expect(isMenuDividerSelectable).toBe(false);
    });

    it("should return false for a non-Menu item", () => {
      const isDivSelectable = isMenuChildSelectable(React.createElement("div", null, "I'm a child"));
      expect(isDivSelectable).toBe(false);
    });
  });
});

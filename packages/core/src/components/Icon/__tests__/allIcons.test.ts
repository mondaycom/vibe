import { ArrayLastElement, SplitString } from "../../../types";
import { keysOf } from "../../../helpers/key-of";
import { exposeIcons } from "../../../utils/icon-utils";
import * as allIcons from "../Icons";
import {
  getIconScreenReaderAccessProps,
  getClickableScreenReaderAccessProps,
  getClickableIconScreenReaderAccessProps
} from "../../../helpers/screenReaderAccessHelper";

type IconPath = `/icons/${keyof typeof allIcons}`;
type SplittedIconPath = SplitString<IconPath, "/">;

const all = allIcons as Record<keyof typeof allIcons, () => unknown>;

function getNameFromPath(iconPath: IconPath): ArrayLastElement<SplittedIconPath> | null {
  const splittedPath = iconPath.split("/") as SplittedIconPath;
  if (!splittedPath) return null;
  return splittedPath[splittedPath.length - 1] as ArrayLastElement<SplittedIconPath>;
}

describe("All icons", () => {
  it("should contains all icons", () => {
    const allIconFiles = exposeIcons() as Record<IconPath, string>;
    const missingIcons: Array<string> = [];
    keysOf(allIconFiles).forEach(iconPath => {
      const iconName = getNameFromPath(iconPath);

      if (!all[iconName]) {
        missingIcons.push(iconPath);
      }
    });
    // Make sure all icons are also exported in allIcons
    if (missingIcons.length > 0) {
      console.error("Missing exported icons in components/Icon/Icons/index.ts", missingIcons);
    }
    expect(missingIcons).toEqual([]);
  });
});

describe("getIconScreenReaderAccessProps", () => {
  it("should return correct props for clickable icon with label", () => {
    const props = getIconScreenReaderAccessProps({
      isClickable: true,
      isDecorationOnly: false,
      label: "Icon Label"
    });
    expect(props).toEqual({
      role: "button",
      tabIndex: 0,
      "aria-hidden": false,
      "aria-label": "Icon Label"
    });
  });

  it("should return correct props for non-clickable decoration icon without label", () => {
    const props = getIconScreenReaderAccessProps({
      isClickable: false,
      isDecorationOnly: true,
      label: ""
    });
    expect(props).toEqual({
      role: undefined,
      "aria-hidden": true,
      tabIndex: undefined,
      "aria-label": undefined
    });
  });

  it("should return correct props for non-clickable icon with label", () => {
    const props = getIconScreenReaderAccessProps({
      isClickable: false,
      isDecorationOnly: false,
      label: "Icon Label"
    });
    expect(props).toEqual({
      role: "img",
      "aria-hidden": false,
      tabIndex: 0,
      "aria-label": "Icon Label"
    });
  });
});

describe("getClickableScreenReaderAccessProps", () => {
  it("should return correct props for keyboard accessible clickable element", () => {
    const props = getClickableScreenReaderAccessProps({
      isKeyboardAccessible: true,
      isDecorationOnly: false,
      isHoverOnly: false
    });
    expect(props).toEqual({
      role: "button",
      tabIndex: 0,
      "aria-hidden": false
    });
  });

  it("should return correct props for non-keyboard accessible clickable element", () => {
    const props = getClickableScreenReaderAccessProps({
      isKeyboardAccessible: false,
      isDecorationOnly: false,
      isHoverOnly: false
    });
    expect(props).toEqual({
      role: "button",
      tabIndex: -1,
      "aria-hidden": false
    });
  });

  it("should return correct props for decoration-only clickable element", () => {
    const props = getClickableScreenReaderAccessProps({
      isKeyboardAccessible: true,
      isDecorationOnly: true,
      isHoverOnly: false
    });
    expect(props).toEqual({
      role: "button",
      tabIndex: 0,
      "aria-hidden": true
    });
  });

  it("should return correct props for hover-only clickable element", () => {
    const props = getClickableScreenReaderAccessProps({
      isKeyboardAccessible: true,
      isDecorationOnly: false,
      isHoverOnly: true
    });
    expect(props).toEqual({
      role: "img",
      tabIndex: 0,
      "aria-hidden": false
    });
  });
});

describe("getClickableIconScreenReaderAccessProps", () => {
  it("should return correct props for clickable icon with label and keyboard accessibility", () => {
    const props = getClickableIconScreenReaderAccessProps({
      label: "Clickable Icon",
      isDecorationOnly: false,
      isKeyboardAccessible: true,
      isHoverOnly: false
    });
    expect(props).toEqual({
      role: "button",
      tabIndex: 0,
      "aria-hidden": false,
      "aria-label": "Clickable Icon"
    });
  });

  it("should return correct props for clickable icon with label and without keyboard accessibility", () => {
    const props = getClickableIconScreenReaderAccessProps({
      label: "Clickable Icon",
      isDecorationOnly: false,
      isKeyboardAccessible: false,
      isHoverOnly: false
    });
    expect(props).toEqual({
      role: "button",
      tabIndex: -1,
      "aria-hidden": false,
      "aria-label": "Clickable Icon"
    });
  });

  it("should return correct props for decoration-only clickable icon with label", () => {
    const props = getClickableIconScreenReaderAccessProps({
      label: "Clickable Icon",
      isDecorationOnly: true,
      isKeyboardAccessible: true,
      isHoverOnly: false
    });
    expect(props).toEqual({
      role: "button",
      tabIndex: 0,
      "aria-hidden": true,
      "aria-label": "Clickable Icon"
    });
  });

  it("should return correct props for hover-only clickable icon with label", () => {
    const props = getClickableIconScreenReaderAccessProps({
      label: "Hover Icon",
      isDecorationOnly: false,
      isKeyboardAccessible: true,
      isHoverOnly: true
    });
    expect(props).toEqual({
      role: "img",
      tabIndex: 0,
      "aria-hidden": false,
      "aria-label": "Hover Icon"
    });
  });
});

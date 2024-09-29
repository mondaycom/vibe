import {
  getIconScreenReaderAccessProps,
  getClickableScreenReaderAccessProps,
  getClickableIconScreenReaderAccessProps
} from "../../../helpers/screenReaderAccessHelper";

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

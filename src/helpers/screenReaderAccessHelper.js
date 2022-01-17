import isNil from "lodash/isNil";

export function getIconScreenReaderAccessProps({ isClickable, isDecorationOnly, isKeyboardAccessible, label }) {
  const overrideIsDecorationOnly = isNil(isDecorationOnly) ? !isClickable : isDecorationOnly;
  if (isClickable) {
    return getClickableIconScreenReaderAccessProps({
      label,
      isDecorationOnly: overrideIsDecorationOnly,
      isKeyboardAccessible
    });
  }
  return {
    role: overrideIsDecorationOnly ? undefined : "img",
    "aria-hidden": overrideIsDecorationOnly,
    tabIndex: undefined,
    "aria-label": isDecorationOnly ? undefined : label
  };
}

export function getClickableScreenReaderAccessProps({ isKeyboardAccessible = true, isDecorationOnly = false }) {
  return {
    role: "button",
    tabIndex: isKeyboardAccessible ? 0 : -1,
    "aria-hidden": isDecorationOnly
  };
}

export function getClickableIconScreenReaderAccessProps({
  label,
  isDecorationOnly = false,
  isKeyboardAccessible = true
}) {
  return {
    ...getClickableScreenReaderAccessProps({ isDecorationOnly, isKeyboardAccessible }),
    "aria-label": label
  };
}

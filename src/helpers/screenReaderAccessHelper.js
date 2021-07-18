export function getIconScreenReaderAccessProps({ isClickable, isDecorationOnly, isKeyboardAccessible, label }) {
  if (isClickable) return getClickableIconScreenReaderAccessProps({ label, isDecorationOnly, isKeyboardAccessible });
  return {
    role: "img",
    "aria-hidden": isDecorationOnly,
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

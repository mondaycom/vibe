export function getClickableScreenReaderAccessProps({
  isKeyboardAccessible = true,
  isDecorationOnly = false,
  isHoverOnly = false
}: {
  isKeyboardAccessible?: boolean;
  isDecorationOnly?: boolean;
  isHoverOnly: boolean;
}) {
  return {
    role: isHoverOnly ? "img" : "button",
    tabIndex: isKeyboardAccessible ? 0 : -1,
    "aria-hidden": isDecorationOnly
  };
}

export function getClickableIconScreenReaderAccessProps({
  label,
  isDecorationOnly = false,
  isKeyboardAccessible = true,
  isHoverOnly = false
}: {
  label: string;
  isDecorationOnly?: boolean;
  isKeyboardAccessible?: boolean;
  isHoverOnly?: boolean;
}) {
  return {
    ...getClickableScreenReaderAccessProps({ isDecorationOnly, isKeyboardAccessible, isHoverOnly }),
    "aria-label": label
  };
}

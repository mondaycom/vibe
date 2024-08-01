import { isNil } from "lodash-es";

export function getIconScreenReaderAccessProps({
  isClickable,
  isDecorationOnly,
  isKeyboardAccessible,
  label
}: {
  isClickable: boolean;
  isDecorationOnly: boolean;
  isKeyboardAccessible?: boolean;
  label: string;
}) {
  const overrideIsDecorationOnly = isNil(isDecorationOnly) ? !isClickable && !label : isDecorationOnly;
  if (isClickable || label) {
    return getClickableIconScreenReaderAccessProps({
      label,
      isDecorationOnly: overrideIsDecorationOnly,
      isKeyboardAccessible,
      isHoverOnly: !isClickable && !!label
    });
  }
  return {
    role: overrideIsDecorationOnly ? undefined : "img",
    "aria-hidden": overrideIsDecorationOnly,
    tabIndex: undefined,
    "aria-label": isDecorationOnly ? undefined : label
  };
}

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

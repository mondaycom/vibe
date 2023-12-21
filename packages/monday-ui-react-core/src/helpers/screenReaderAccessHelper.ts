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

export function getClickableScreenReaderAccessProps({
  isKeyboardAccessible = true,
  isDecorationOnly = false
}: {
  isKeyboardAccessible?: boolean;
  isDecorationOnly?: boolean;
}) {
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
}: {
  label: string;
  isDecorationOnly?: boolean;
  isKeyboardAccessible?: boolean;
}) {
  return {
    ...getClickableScreenReaderAccessProps({ isDecorationOnly, isKeyboardAccessible }),
    "aria-label": label
  };
}

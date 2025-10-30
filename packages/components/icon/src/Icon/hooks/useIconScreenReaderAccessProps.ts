import { useMemo } from "react";
import { getClickableIconScreenReaderAccessProps } from "@vibe/shared";

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
  const overrideIsDecorationOnly = isDecorationOnly ?? (!isClickable && !label);
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

export default function useIconScreenReaderAccessProps({
  isClickable,
  label,
  isDecorationOnly
}: {
  isClickable: boolean;
  label: string;
  isDecorationOnly: boolean;
}) {
  const screenReaderAccessProps = useMemo(
    () =>
      getIconScreenReaderAccessProps({
        isClickable,
        label,
        isDecorationOnly
      }),
    [isClickable, label, isDecorationOnly]
  );
  return screenReaderAccessProps;
}

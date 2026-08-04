import React from "react";
import { Icon, type IconSubComponentProps } from "@vibe/icon";
import { defaultIconMap } from "./ToastConstants";
import { type ToastType } from "./Toast.types";

/** Inline style wins over app-level `svg[class*="icon_"] { color: var(--icon-color) }` rules. */
const ICON_COLOR_BY_TYPE: Record<ToastType, string> = {
  normal: "var(--primary-text-color)",
  positive: "var(--text-color-on-primary)",
  negative: "var(--text-color-on-primary)",
  warning: "var(--text-color-on-primary)",
  dark: "var(--text-color-on-inverted)"
};

export const getIcon = (type: ToastType, icon: string | React.FC<IconSubComponentProps> | null) => {
  /* icon may be node a may be a string */
  if (icon && typeof icon === "object") {
    return icon;
  }
  return icon || defaultIconMap[type] ? (
    <Icon
      iconType={icon ? "font" : "svg"}
      icon={icon || defaultIconMap[type]}
      iconSize={16}
      ignoreFocusStyle
      style={{ color: ICON_COLOR_BY_TYPE[type] }}
    />
  ) : null;
};

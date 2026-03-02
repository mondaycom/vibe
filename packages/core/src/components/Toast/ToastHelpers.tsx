import React from "react";
import { Icon, type SubIcon } from "@vibe/icon";
import { defaultIconMap } from "./ToastConstants";
import { type ToastType } from "./Toast.types";

export const getIcon = (type: ToastType, icon: SubIcon) => {
  if (icon && typeof icon === "object") {
    return icon;
  }
  const resolvedIcon = icon || defaultIconMap[type];
  return resolvedIcon ? <Icon icon={resolvedIcon} size={20} ignoreFocusStyle /> : null;
};

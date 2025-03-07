import React from "react";
import Icon, { IconSubComponentProps } from "../Icon/Icon";
import { defaultIconMap } from "./ToastConstants";
import { ToastType } from "./Toast.types";

export const getIcon = (type: ToastType, icon: string | React.FC<IconSubComponentProps> | null) => {
  /* icon may be node a may be a string */
  if (icon && typeof icon === "object") {
    return icon;
  }
  return icon || defaultIconMap[type] ? (
    <Icon iconType={icon ? "font" : "svg"} icon={icon || defaultIconMap[type]} iconSize={20} ignoreFocusStyle />
  ) : null;
};

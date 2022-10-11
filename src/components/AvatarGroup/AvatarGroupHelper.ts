import React from "react";
import { AvatarProps } from "../Avatar/Avatar";

export const avatarOnClick = (event: React.MouseEvent | React.KeyboardEvent, avatarProps: AvatarProps) => {
  return avatarProps?.onClick && (() => avatarProps.onClick(event, avatarProps?.id));
};

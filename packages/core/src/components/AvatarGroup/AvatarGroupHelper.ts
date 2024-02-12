import React from "react";
import { AvatarProps } from "../Avatar/Avatar";

export const avatarOnClick = (event: React.MouseEvent | React.KeyboardEvent, avatarProps: AvatarProps) => {
  avatarProps?.onClick?.(event, avatarProps.id);
};

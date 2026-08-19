import type React from "react";
import { type AvatarProps } from "@vibe/avatar";

export const avatarOnClick = (event: React.MouseEvent | React.KeyboardEvent, avatarProps: AvatarProps) => {
  avatarProps?.onClick?.(event, avatarProps.id);
};

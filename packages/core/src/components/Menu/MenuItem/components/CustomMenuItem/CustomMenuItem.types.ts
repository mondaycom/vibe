import { LossMenuItemProps } from "../BaseMenuItem/BaseMenuItem.types";
import { VibeComponentProps } from "../../../../../types";
import React from "react";
import { MenuChild } from "../../../Menu/MenuConstants";

export interface CustomMenuItemProps extends LossMenuItemProps, VibeComponentProps {
  content: React.ReactNode;
  children?: MenuChild;
}

import { VibeComponentProps } from "../../../types";
import React from "react";

export interface TableMenuProps extends VibeComponentProps {
  rowId: string;
  children?: React.ReactNode;
}

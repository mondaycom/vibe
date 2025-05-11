import { VibeComponentProps } from "../../../types";
import React from "react";

export interface TableMenuProps extends VibeComponentProps {
  /**
   * The ID of the row that the menu is associated with.
   */
  rowId: string;
  /**
   * The child elements inside the table menu.
   */
  children?: React.ReactNode;
}

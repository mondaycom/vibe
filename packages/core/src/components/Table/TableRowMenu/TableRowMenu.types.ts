import { type EZDSComponentProps } from "../../../types";
import type React from "react";

export interface TableMenuProps extends EZDSComponentProps {
  /**
   * The ID of the row that the menu is associated with.
   */
  rowId: string;
  /**
   * The child elements inside the table menu.
   */
  children?: React.ReactNode;
}

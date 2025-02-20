import React, { AriaRole } from "react";
import { NOOP } from "../../../utils/function-utils";

type ListContextType = {
  /**
   * A callback function which is being called when the item is being focused by keyboard navigation
   * @param ListItem id
   */
  updateFocusedItem: (id: string) => void;
  /**
   * Role of the children of the list
   */
  itemRole: AriaRole;
};

export const ListContext = React.createContext<ListContextType>({ updateFocusedItem: NOOP, itemRole: "option" });

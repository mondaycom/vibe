import React from "react";
import { NOOP } from "@vibe/shared";

type ListContextType = {
  /**
   * A callback function which is being called when the item is being focused by keyboard navigation
   * @param ListItem id
   */
  updateFocusedItem: (id: string) => void;
};

export const ListContext = React.createContext<ListContextType>({ updateFocusedItem: NOOP });

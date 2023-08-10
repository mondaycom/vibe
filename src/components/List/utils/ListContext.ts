import React from "react";
import { NOOP } from "../../../utils/function-utils";

export let listIdCounter = 0;

export const generateListId = () => `list-${listIdCounter++}`;

type ListContextType = {
  /**
   * A callback function which is being called when the item is being focused: by keyboard navigation or by mouse hover
   * @param ListItem index
   */
  updateFocusedItem: (index: number) => void;
  /**
   * The id of the list which the item belongs to
   */
  listId: string;
};

export const ListContext = React.createContext<ListContextType>({ listId: generateListId(), updateFocusedItem: NOOP });

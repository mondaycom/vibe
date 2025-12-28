import React, { useContext } from "react";
import { NOOP } from "../../../utils/function-utils";

export interface BaseListContextProps {
  /**
   * The index of the currently focused/active item.
   */
  activeItemIndex: number;
  /**
   * Callback to update the focused item by id and index.
   */
  updateFocusedItem: (id: string, index: number) => void;
  /**
   * Register an item ref for keyboard navigation.
   */
  registerItem: (ref: HTMLElement | null, index: number) => void;
  /**
   * The size of items in the list.
   */
  size?: "small" | "medium" | "large";
}

const defaultContextValue: BaseListContextProps = {
  activeItemIndex: -1,
  updateFocusedItem: NOOP,
  registerItem: NOOP,
  size: "medium"
};

export const BaseListContext = React.createContext<BaseListContextProps>(defaultContextValue);

export const useBaseList = (): BaseListContextProps => {
  return useContext(BaseListContext);
};

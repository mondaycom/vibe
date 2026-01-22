import React, { createContext, useContext, type ReactNode } from "react";
import { NOOP } from "../../../utils/function-utils";
import { type BaseListSizes } from "../BaseList.types";
import { type AriaRole } from "react";

export interface BaseListItemContextProps {
  /**
   * The index of this item in the list.
   */
  index: number;
  /**
   * The derived ID for this item.
   */
  id: string;
  /**
   * Whether this item is currently highlighted (has keyboard focus).
   */
  highlighted: boolean;
  /**
   * The tabIndex for this item (0 if highlighted, -1 otherwise).
   */
  tabIndex: number;
  /**
   * The HTML element to render as.
   */
  component: string;
  /**
   * The size of the item.
   */
  size: BaseListSizes;
  /**
   * The ARIA role for this item.
   */
  role: AriaRole | undefined;
  /**
   * Callback ref to register the item's DOM element.
   */
  refCallback: (element: HTMLElement | null) => void;
}

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
  size?: BaseListSizes;
}

export interface BaseListProviderProps {
  value: BaseListContextProps;
  children: ReactNode;
}

export interface BaseListItemProviderProps {
  value: BaseListItemContextProps;
  children: ReactNode;
}

const defaultListContextValue: BaseListContextProps = {
  activeItemIndex: -1,
  updateFocusedItem: NOOP,
  registerItem: NOOP,
  size: "medium"
};

const BaseListContext = createContext<BaseListContextProps>(defaultListContextValue);
const BaseListItemContext = createContext<BaseListItemContextProps | undefined>(undefined);

export const BaseListProvider = ({ value, children }: BaseListProviderProps) => {
  return <BaseListContext.Provider value={value}>{children}</BaseListContext.Provider>;
};

export const BaseListItemProvider = ({ value, children }: BaseListItemProviderProps) => {
  return <BaseListItemContext.Provider value={value}>{children}</BaseListItemContext.Provider>;
};

export const useBaseList = (): BaseListContextProps => {
  return useContext(BaseListContext);
};

export const useBaseListItem = (): BaseListItemContextProps | undefined => {
  return useContext(BaseListItemContext);
};

import type React from "react";

export interface TableRowMenuCallbacksContext {
  onMouseOverRow: (rowRef: React.MutableRefObject<HTMLDivElement>) => void;
  onMouseLeaveRow: () => void;
  resetHoveredRow: () => void;
}

export interface TableRowMenuContext {
  hoveredRowId: string;
  onMouseOverRowMenu: () => void;
  onMouseLeaveRowMenu: () => void;
  menuButtonPosition: number;
  setTableMenuShown: () => void;
  setTableMenuHidden: () => void;
}

export interface TableRowMenuProviderValue {
  tableRootRef: React.RefObject<HTMLDivElement>;
  /** Populated by the provider with its internal reset function so callers (e.g. scroll handler) can trigger a reset without owning the state. */
  resetRef: React.MutableRefObject<() => void>;
}

export type TableRowMenuProviderProps = {
  value: TableRowMenuProviderValue;
  children: React.ReactNode;
};

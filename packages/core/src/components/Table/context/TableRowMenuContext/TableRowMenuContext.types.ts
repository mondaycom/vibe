import React from "react";

export interface TableRowMenuContext {
  hoveredRowId: string;
  resetHoveredRow: () => void;
  onMouseOverRow: (rowRef: React.MutableRefObject<HTMLDivElement>) => void;
  onMouseLeaveRow: () => void;
  onMouseOverRowMenu: () => void;
  onMouseLeaveRowMenu: () => void;
  menuButtonPosition: number;
  setTableMenuShown: () => void;
  setTableMenuHidden: () => void;
}

export type TableRowMenuProviderProps = {
  children: React.ReactNode;
};

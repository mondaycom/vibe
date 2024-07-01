import React from "react";

export interface ITableRowMenuContext {
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

export type ITableRowMenuProviderProps = {
  children: React.ReactNode;
};

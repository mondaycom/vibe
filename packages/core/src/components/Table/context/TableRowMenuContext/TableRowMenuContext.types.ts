import React from "react";

export interface ITableRowMenuContext extends Pick<TableRowMenuProviderValue, "resetHoveredRow"> {
  hoveredRowId: string;
  onMouseOverRow: (rowRef: React.MutableRefObject<HTMLDivElement>) => void;
  onMouseLeaveRow: () => void;
  onMouseOverRowMenu: () => void;
  onMouseLeaveRowMenu: () => void;
  menuButtonPosition: number;
  setTableMenuShown: () => void;
  setTableMenuHidden: () => void;
}

export interface TableRowMenuProviderValue {
  tableRootRef: React.RefObject<HTMLDivElement>;
  hoveredRowRef: React.RefObject<HTMLDivElement>;
  isMenuOpen: boolean;
  resetHoveredRow: () => void;
  setHoveredRowRef: (rowRef: React.RefObject<HTMLDivElement>) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export type ITableRowMenuProviderProps = {
  value: TableRowMenuProviderValue;
  children: React.ReactNode;
};

import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import {
  type TableRowMenuContext as ITableRowMenuContext,
  type TableRowMenuProviderProps
} from "./TableRowMenuContext.types";

const TableRowMenuContext = createContext<ITableRowMenuContext | undefined>(undefined);

export const TableRowMenuProvider = ({ value, children }: TableRowMenuProviderProps) => {
  const { tableRootRef, hoveredRowRef, isMenuOpen, resetHoveredRow, setHoveredRowRef, setIsMenuOpen } = value;
  const [menuButtonPosition, setMenuButtonPosition] = useState(0);
  const isMenuHovered = useRef(false);

  const onMouseOverRow = useCallback(
    (rowRef: React.RefObject<HTMLDivElement>) => {
      if (isMenuOpen) return;

      setHoveredRowRef(rowRef);
      const tableRootTop = tableRootRef.current.getBoundingClientRect().top;
      const rowTop = rowRef.current.getBoundingClientRect().top;
      setMenuButtonPosition(rowTop - tableRootTop);
    },
    [isMenuOpen, setHoveredRowRef, tableRootRef]
  );

  const onMouseLeaveRow = useCallback(() => {
    if (isMenuOpen || isMenuHovered.current) return;
    setHoveredRowRef(null);
  }, [isMenuOpen, setHoveredRowRef]);

  const onMouseOverRowMenu = useCallback(() => {
    isMenuHovered.current = true;
  }, []);

  const onMouseLeaveRowMenu = useCallback(() => {
    isMenuHovered.current = false;
    if (isMenuOpen) return;

    if (!hoveredRowRef?.current) {
      setHoveredRowRef(null);
    }
  }, [isMenuOpen, hoveredRowRef, setHoveredRowRef]);

  const setTableMenuShown = useCallback(() => {
    setIsMenuOpen(true);
  }, [setIsMenuOpen]);

  const setTableMenuHidden = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  const contextValue = useMemo<ITableRowMenuContext>(
    () => ({
      hoveredRowId: hoveredRowRef?.current?.id,
      resetHoveredRow,
      menuButtonPosition,
      onMouseOverRow,
      onMouseLeaveRow,
      onMouseOverRowMenu,
      onMouseLeaveRowMenu,
      setTableMenuShown,
      setTableMenuHidden
    }),
    [
      hoveredRowRef,
      resetHoveredRow,
      menuButtonPosition,
      onMouseLeaveRow,
      onMouseLeaveRowMenu,
      onMouseOverRow,
      onMouseOverRowMenu,
      setTableMenuShown,
      setTableMenuHidden
    ]
  );

  return <TableRowMenuContext.Provider value={contextValue}>{children}</TableRowMenuContext.Provider>;
};

export const useTableRowMenu = () => {
  const context = useContext(TableRowMenuContext);
  if (!context) {
    throw new Error("useTableRowMenuContext must be used within a TableRowMenuProvider");
  }
  return context;
};

import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { ITableRowMenuContext, ITableRowMenuProviderProps } from "./TableRowMenuContext.types";

const TableRowMenuContext = createContext<ITableRowMenuContext | undefined>(undefined);

export const TableRowMenuProvider = ({ value, children }: ITableRowMenuProviderProps) => {
  const { tableRootRef, hoveredRowRef, isMenuOpen, resetHoveredRow, setHoveredRowRef, setIsMenuOpen } = value;
  const rowMouseLeaveTimeoutId = useRef<ReturnType<typeof setTimeout>>(null);
  const [menuButtonPosition, setMenuButtonPosition] = useState(0);

  const resetTimeout = useCallback(() => {
    clearTimeout(rowMouseLeaveTimeoutId.current);
    rowMouseLeaveTimeoutId.current = null;
  }, []);

  const onMouseOverRow = useCallback(
    (rowRef: React.RefObject<HTMLDivElement>) => {
      if (isMenuOpen || hoveredRowRef?.current === rowRef.current) return;
      resetTimeout();
      setHoveredRowRef(rowRef);
      const tableRootTop = tableRootRef.current.getBoundingClientRect().top;
      const rowTop = rowRef.current.getBoundingClientRect().top;
      setMenuButtonPosition(rowTop - tableRootTop);
    },
    [isMenuOpen, hoveredRowRef, resetTimeout, setHoveredRowRef, tableRootRef]
  );

  const onMouseLeaveRow = useCallback(() => {
    if (isMenuOpen) return;
    rowMouseLeaveTimeoutId.current = setTimeout(() => {
      setHoveredRowRef(null);
    }, 400);
  }, [isMenuOpen, setHoveredRowRef]);

  const onMouseOverRowMenu = useCallback(() => {
    if (isMenuOpen) return;
    resetTimeout();
  }, [isMenuOpen, resetTimeout]);

  const onMouseLeaveRowMenu = useCallback(() => {
    if (isMenuOpen) return;
    setHoveredRowRef(null);
  }, [isMenuOpen, setHoveredRowRef]);

  const contextValue = useMemo<ITableRowMenuContext>(
    () => ({
      hoveredRowId: hoveredRowRef?.current?.id,
      resetHoveredRow,
      menuButtonPosition,
      onMouseOverRow,
      onMouseLeaveRow,
      onMouseOverRowMenu,
      onMouseLeaveRowMenu,
      setTableMenuShown: () => setIsMenuOpen(true),
      setTableMenuHidden: () => setIsMenuOpen(false)
    }),
    [
      hoveredRowRef,
      resetHoveredRow,
      menuButtonPosition,
      onMouseLeaveRow,
      onMouseLeaveRowMenu,
      onMouseOverRow,
      onMouseOverRowMenu,
      setIsMenuOpen
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

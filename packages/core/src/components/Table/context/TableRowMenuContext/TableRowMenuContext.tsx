import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { ITableRowMenuContext, ITableRowMenuProviderProps } from "./TableRowMenuContext.types";
import { useTable } from "../TableContext/TableContext";

const TableRowMenuContext = createContext<ITableRowMenuContext | undefined>(undefined);

export const TableRowMenuProvider = ({ children }: ITableRowMenuProviderProps) => {
  const { tableRootRef } = useTable();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [hoveredRowRef, setHoveredRowRef] = useState<React.MutableRefObject<HTMLDivElement>>(null);
  const hoveredRowId = useMemo<string>(() => hoveredRowRef?.current?.id, [hoveredRowRef]);

  const rowMouseLeaveTimeoutId = useRef<ReturnType<typeof setTimeout>>(null);

  const resetTimeout = useCallback(() => {
    clearTimeout(rowMouseLeaveTimeoutId.current);
    rowMouseLeaveTimeoutId.current = null;
  }, []);

  const startTimeout = useCallback((callback: () => void) => {
    rowMouseLeaveTimeoutId.current = setTimeout(() => {
      callback();
    }, 400);
  }, []);

  const menuButtonPosition = useMemo<number>(() => {
    if (!tableRootRef?.current || !hoveredRowRef?.current) return 0;
    const tableRootTop = tableRootRef.current.getBoundingClientRect().top;
    const rowTop = hoveredRowRef.current.getBoundingClientRect().top;
    return rowTop - tableRootTop;
  }, [hoveredRowRef, tableRootRef]);

  const onMouseOverRow = useCallback(
    (rowRef: React.MutableRefObject<HTMLDivElement>) => {
      if (isMenuOpen || hoveredRowRef?.current === rowRef.current) return;
      resetTimeout();
      setHoveredRowRef(rowRef);
    },
    [isMenuOpen, hoveredRowRef, resetTimeout]
  );

  const onMouseLeaveRow = useCallback(() => {
    if (isMenuOpen) return;
    startTimeout(() => setHoveredRowRef(null));
  }, [isMenuOpen, startTimeout]);

  const onMouseOverRowMenu = useCallback(() => {
    if (isMenuOpen) return;
    resetTimeout();
  }, [isMenuOpen, resetTimeout]);

  const onMouseLeaveRowMenu = useCallback(() => {
    if (isMenuOpen) return;
    setHoveredRowRef(null);
  }, [isMenuOpen]);

  const resetHoveredRow = useCallback(() => {
    setIsMenuOpen(false);
    setHoveredRowRef(null);
  }, []);

  const contextValue = useMemo<ITableRowMenuContext>(
    () => ({
      hoveredRowId,
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
      hoveredRowId,
      resetHoveredRow,
      menuButtonPosition,
      onMouseLeaveRow,
      onMouseLeaveRowMenu,
      onMouseOverRow,
      onMouseOverRowMenu
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

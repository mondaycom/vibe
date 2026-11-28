import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import {
  type TableRowMenuCallbacksContext as ITableRowMenuCallbacksContext,
  type TableRowMenuContext as ITableRowMenuContext,
  type TableRowMenuProviderProps
} from "./TableRowMenuContext.types";

const TableRowMenuCallbacksContext = createContext<ITableRowMenuCallbacksContext | undefined>(undefined);
const TableRowMenuContext = createContext<ITableRowMenuContext | undefined>(undefined);

export const TableRowMenuProvider = ({ value, children }: TableRowMenuProviderProps) => {
  const { tableRootRef, resetRef } = value;
  const [hoveredRowRef, setHoveredRowRef] = useState<React.RefObject<HTMLDivElement>>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuButtonPosition, setMenuButtonPosition] = useState(0);
  const isMenuHovered = useRef(false);

  const resetHoveredRow = useCallback(() => {
    setIsMenuOpen(false);
    setHoveredRowRef(null);
  }, []);

  resetRef.current = resetHoveredRow;

  const onMouseOverRow = useCallback(
    (rowRef: React.RefObject<HTMLDivElement>) => {
      if (isMenuOpen) return;

      setHoveredRowRef(rowRef);
      const tableRootTop = tableRootRef.current.getBoundingClientRect().top;
      const rowTop = rowRef.current.getBoundingClientRect().top;
      setMenuButtonPosition(rowTop - tableRootTop);
    },
    [isMenuOpen, tableRootRef]
  );

  const onMouseLeaveRow = useCallback(() => {
    if (isMenuOpen || isMenuHovered.current) return;
    setHoveredRowRef(null);
  }, [isMenuOpen]);

  const onMouseOverRowMenu = useCallback(() => {
    isMenuHovered.current = true;
  }, []);

  const onMouseLeaveRowMenu = useCallback(() => {
    isMenuHovered.current = false;
    if (isMenuOpen) return;

    if (!hoveredRowRef?.current) {
      setHoveredRowRef(null);
    }
  }, [isMenuOpen, hoveredRowRef]);

  const setTableMenuShown = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const setTableMenuHidden = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const callbacksValue = useMemo<ITableRowMenuCallbacksContext>(
    () => ({ onMouseOverRow, onMouseLeaveRow, resetHoveredRow }),
    [onMouseOverRow, onMouseLeaveRow, resetHoveredRow]
  );

  const stateValue = useMemo<ITableRowMenuContext>(
    () => ({
      hoveredRowId: hoveredRowRef?.current?.id,
      menuButtonPosition,
      onMouseOverRowMenu,
      onMouseLeaveRowMenu,
      setTableMenuShown,
      setTableMenuHidden
    }),
    [
      hoveredRowRef,
      menuButtonPosition,
      onMouseLeaveRowMenu,
      onMouseOverRowMenu,
      setTableMenuShown,
      setTableMenuHidden
    ]
  );

  return (
    <TableRowMenuCallbacksContext.Provider value={callbacksValue}>
      <TableRowMenuContext.Provider value={stateValue}>{children}</TableRowMenuContext.Provider>
    </TableRowMenuCallbacksContext.Provider>
  );
};

export const useTableRowMenuCallbacks = () => {
  const context = useContext(TableRowMenuCallbacksContext);
  if (!context) {
    throw new Error("useTableRowMenuCallbacks must be used within a TableRowMenuProvider");
  }
  return context;
};

export const useTableRowMenu = () => {
  const context = useContext(TableRowMenuContext);
  if (!context) {
    throw new Error("useTableRowMenuContext must be used within a TableRowMenuProvider");
  }
  return context;
};

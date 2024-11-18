import React, { createContext, UIEventHandler, useCallback, useContext, useMemo, useRef } from "react";
import { ITableContext, ITableProviderProps } from "./TableContext.types";

const TableContext = createContext<ITableContext | undefined>(undefined);

export const TableProvider = ({ value, children }: ITableProviderProps) => {
  const { setScrollLeft } = value;
  const headRef = useRef<HTMLDivElement>(null);
  const virtualizedListRef = useRef<HTMLDivElement>(null);
  const lastScrollLeft = useRef<number>(0);

  const syncScroll = useCallback(
    (newScrollLeft: number, source: "head" | "body") => {
      if (newScrollLeft === lastScrollLeft.current) return;

      if (source === "body" && headRef.current) {
        headRef.current.scrollLeft = newScrollLeft;
      }
      if (source === "head" && virtualizedListRef.current) {
        virtualizedListRef.current.scrollLeft = newScrollLeft;
      }

      setScrollLeft(newScrollLeft);
      lastScrollLeft.current = newScrollLeft;
    },
    [setScrollLeft]
  );

  const onHeadScroll: UIEventHandler<HTMLDivElement> = useCallback(
    e => {
      const newLeft = (e.target as HTMLDivElement).scrollLeft;
      syncScroll(newLeft, "head");
    },
    [syncScroll]
  );

  const onVirtualizedListScroll = useCallback<UIEventHandler<HTMLDivElement>>(
    e => {
      const newLeft = (e.target as HTMLDivElement).scrollLeft;
      syncScroll(newLeft, "body");
    },
    [syncScroll]
  );

  const contextValue = useMemo<ITableContext>(
    () => ({
      ...value,
      headRef,
      onHeadScroll,
      virtualizedListRef,
      onVirtualizedListScroll
    }),
    [value, onHeadScroll, onVirtualizedListScroll]
  );

  return <TableContext.Provider value={contextValue}>{children}</TableContext.Provider>;
};

export const useTable = () => {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error("useTable must be used within a TableProvider");
  }
  return context;
};

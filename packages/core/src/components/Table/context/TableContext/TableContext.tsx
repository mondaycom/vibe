import React, { createContext, UIEventHandler, useCallback, useContext, useMemo, useRef, useState } from "react";
import { ITableContext, ITableProviderProps } from "./TableContext.types";

const TableContext = createContext<ITableContext | undefined>(undefined);

export const TableProvider = ({ value, children }: ITableProviderProps) => {
  const tableRootRef = useRef<HTMLDivElement>(null);

  const [isVirtualized, setIsVirtualized] = useState<boolean>(false);
  const markTableAsVirtualized = useCallback(() => {
    setIsVirtualized(true);
  }, []);

  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const headRef = useRef<HTMLDivElement>(null);
  const virtualizedListRef = useRef<HTMLDivElement>(null);

  const onTableRootScroll = useCallback<UIEventHandler<HTMLDivElement>>(
    e => {
      const newLeft = (e.target as HTMLDivElement).scrollLeft;
      if (newLeft !== scrollLeft) {
        setScrollLeft(newLeft);
      }
    },
    [scrollLeft]
  );

  const onHeadScroll: UIEventHandler<HTMLDivElement> = useCallback(
    e => {
      const newLeft = (e.target as HTMLDivElement).scrollLeft;
      if (virtualizedListRef.current && newLeft !== scrollLeft) {
        virtualizedListRef.current.scrollLeft = newLeft;
        setScrollLeft(newLeft);
      }
    },
    [scrollLeft]
  );

  const onVirtualizedListScroll = useCallback<UIEventHandler<HTMLDivElement>>(
    e => {
      const newLeft = (e.target as HTMLDivElement).scrollLeft;
      if (headRef.current && newLeft !== scrollLeft) {
        headRef.current.scrollLeft = newLeft;
        setScrollLeft(newLeft);
      }
    },
    [scrollLeft]
  );

  const contextValue = useMemo<ITableContext>(
    () => ({
      ...value,
      tableRootRef,
      headRef,
      scrollLeft,
      onTableRootScroll,
      onHeadScroll,
      virtualizedListRef,
      onVirtualizedListScroll,
      isVirtualized,
      markTableAsVirtualized
    }),
    [
      value,
      tableRootRef,
      scrollLeft,
      onTableRootScroll,
      onHeadScroll,
      onVirtualizedListScroll,
      isVirtualized,
      markTableAsVirtualized
    ]
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

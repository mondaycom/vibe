import React, { createContext, useContext, useMemo, useRef } from "react";
import { ITableContainerContext, ITableContainerProviderProps } from "./TableContainerContext.types";

const TableContainerContext = createContext<ITableContainerContext | undefined>(undefined);

export const TableContainerProvider = ({ children }: ITableContainerProviderProps) => {
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const contextValue = useMemo<ITableContainerContext>(() => ({ menuContainerRef }), [menuContainerRef]);
  return <TableContainerContext.Provider value={contextValue}>{children}</TableContainerContext.Provider>;
};

export const useTableContainer = () => {
  const context = useContext(TableContainerContext);
  if (!context) {
    throw new Error("useTableContainer must be used within a TableContainerProvider");
  }
  return context;
};

import React, { createContext, useContext } from "react";
import {
  type TableContainerContext as ITableContainerContext,
  type TableContainerProviderProps
} from "./TableContainerContext.types";

const TableContainerContext = createContext<ITableContainerContext | undefined>(undefined);

export const TableContainerProvider = ({ value, children }: TableContainerProviderProps) => {
  return <TableContainerContext.Provider value={value}>{children}</TableContainerContext.Provider>;
};

export const useTableContainer = () => {
  const context = useContext(TableContainerContext);
  if (!context) {
    throw new Error("useTableContainer must be used within a TableContainerProvider");
  }
  return context;
};


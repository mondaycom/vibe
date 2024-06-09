import React, { createContext, useContext, useMemo, useState } from "react";
import { ITableContext, ITableProviderProps } from "./TableContext.types";

const TableContext = createContext<ITableContext | undefined>(undefined);

export const TableProvider = ({ value, children }: ITableProviderProps) => {
  const [rowWidth, setRowWidth] = useState<number>(0);
  const contextValue = useMemo(
    () => ({
      ...value,
      rowWidth,
      setRowWidth
    }),
    [value, rowWidth]
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

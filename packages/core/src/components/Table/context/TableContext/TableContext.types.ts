import { ITableProps } from "../../Table/Table";
import React from "react";

export interface ITableContext {
  columns: ITableProps["columns"];
  dataState?: ITableProps["dataState"];
  emptyState: ITableProps["emptyState"];
  errorState: ITableProps["errorState"];
  size: ITableProps["size"];
  rowWidth?: number;
  setRowWidth?: (width: number) => void;
}

export type ITableProviderProps = {
  value: ITableContext;
  children: React.ReactNode;
};

import { ITableProps } from "../../Table/Table";
import React, { UIEventHandler } from "react";

export interface ITableContext {
  columns: ITableProps["columns"];
  dataState?: ITableProps["dataState"];
  emptyState: ITableProps["emptyState"];
  errorState: ITableProps["errorState"];
  size: ITableProps["size"];
  tableRootRef: React.MutableRefObject<HTMLDivElement>;
  scrollLeft: number;
  onTableRootScroll: UIEventHandler<HTMLDivElement>;
  headRef: React.MutableRefObject<HTMLDivElement>;
  onHeadScroll: UIEventHandler<HTMLDivElement>;
  virtualizedListRef: React.MutableRefObject<HTMLDivElement>;
  onVirtualizedListScroll: UIEventHandler<HTMLDivElement>;
  isVirtualized: boolean;
  markTableAsVirtualized: () => void;
}

export type ITableProviderProps = {
  value: Pick<ITableContext, "columns" | "dataState" | "emptyState" | "errorState" | "size">;
  children: React.ReactNode;
};

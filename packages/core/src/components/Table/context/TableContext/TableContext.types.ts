import { TableProps } from "../../Table/Table";
import React, { UIEventHandler } from "react";

export interface TableContext {
  columns: TableProps["columns"];
  dataState?: TableProps["dataState"];
  emptyState: TableProps["emptyState"];
  errorState: TableProps["errorState"];
  size: TableProps["size"];
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

export type TableProviderProps = {
  value: Pick<TableContext, "columns" | "dataState" | "emptyState" | "errorState" | "size">;
  children: React.ReactNode;
};

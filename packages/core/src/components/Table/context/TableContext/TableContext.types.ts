import { ITableProps } from "../../Table/Table";
import React, { UIEventHandler } from "react";

export interface ITableContext extends TableProviderValue {
  headRef: React.MutableRefObject<HTMLDivElement>;
  onHeadScroll: UIEventHandler<HTMLDivElement>;
  virtualizedListRef: React.MutableRefObject<HTMLDivElement>;
  onVirtualizedListScroll: UIEventHandler<HTMLDivElement>;
}

export interface TableProviderForwardedProps {
  columns: ITableProps["columns"];
  dataState?: ITableProps["dataState"];
  emptyState: ITableProps["emptyState"];
  errorState: ITableProps["errorState"];
  size: ITableProps["size"];
}

export interface TableProviderValue extends TableProviderForwardedProps {
  tableRootRef: React.MutableRefObject<HTMLDivElement>;
  isVirtualized: boolean;
  markTableAsVirtualized: () => void;
  scrollLeft: number;
  setScrollLeft: (scrollAmount: number) => void;
}

export type ITableProviderProps = {
  value: TableProviderValue;
  children: React.ReactNode;
};

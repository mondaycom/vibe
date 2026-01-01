import { type TableProps } from "../../Table/Table";
import { type UIEventHandler } from "react";
import type React from "react";

export interface TableContext extends TableProviderValue {
  headRef: React.MutableRefObject<HTMLDivElement>;
  onHeadScroll: UIEventHandler<HTMLDivElement>;
  virtualizedListRef: React.MutableRefObject<HTMLDivElement>;
  onVirtualizedListScroll: UIEventHandler<HTMLDivElement>;
}

export interface TableProviderForwardedProps {
  columns: TableProps["columns"];
  dataState?: TableProps["dataState"];
  emptyState: TableProps["emptyState"];
  errorState: TableProps["errorState"];
  size: TableProps["size"];
}

export interface TableProviderValue extends TableProviderForwardedProps {
  tableRootRef: React.MutableRefObject<HTMLDivElement>;
  isVirtualized: boolean;
  markTableAsVirtualized: () => void;
  isScrolled: boolean;
  setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>;
}

export type TableProviderProps = {
  value: TableProviderValue;
  children: React.ReactNode;
};


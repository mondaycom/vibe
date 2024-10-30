import React from "react";

export type ITableContainerContext = TableContainerProviderValue;

export interface TableContainerProviderValue {
  menuContainerRef: React.RefObject<HTMLDivElement>;
}

export interface ITableContainerProviderProps {
  value: TableContainerProviderValue;
  children: React.ReactNode;
}

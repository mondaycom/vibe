import React from "react";

export type TableContainerContext = TableContainerProviderValue;

export interface TableContainerProviderValue {
  menuContainerRef: React.RefObject<HTMLDivElement | null>;
}

export interface TableContainerProviderProps {
  value: TableContainerProviderValue;
  children: React.ReactNode;
}

import React from "react";

export interface ITableContainerContext {
  menuContainerRef: React.MutableRefObject<HTMLDivElement>;
}

export interface ITableContainerProviderProps {
  children: React.ReactNode;
}

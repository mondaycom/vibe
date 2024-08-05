import React from "react";

export interface TableContainerContext {
  menuContainerRef: React.MutableRefObject<HTMLDivElement>;
}

export interface TableContainerProviderProps {
  children: React.ReactNode;
}

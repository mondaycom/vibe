import React, { createContext, useContext } from "react";
import { ModalContextProps, ModalProviderProps } from "./ModalContext.types";

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ value, children }: ModalProviderProps) => {
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

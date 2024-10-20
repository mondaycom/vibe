import React, { createContext, useContext, useMemo, useState } from "react";
import { ModalContextProps, ModalProviderProps } from "./ModalContext.types";

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ value, children }: ModalProviderProps) => {
  const [isContentScrolled, setContentScrolled] = useState<boolean>(false);

  const contextValue = useMemo<ModalContextProps>(
    () => ({
      ...value,
      isContentScrolled,
      setContentScrolled: (newContentScrolled: boolean) => setContentScrolled(newContentScrolled)
    }),
    [isContentScrolled, value]
  );

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
};

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

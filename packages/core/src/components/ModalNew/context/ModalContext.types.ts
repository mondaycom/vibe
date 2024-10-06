import React from "react";

export interface ModalContextProps extends ModalProviderValue {
  contentScrolled?: boolean;
  setContentScrolled: (scrolled: boolean) => void;
}

export type ModalProviderValue = {
  modalId: string;
  setTitleId: (id: string) => void;
  setDescriptionId: (id: string) => void;
};

export interface ModalProviderProps {
  value: ModalProviderValue;
  children: React.ReactNode;
}

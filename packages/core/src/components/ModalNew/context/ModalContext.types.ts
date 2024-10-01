import React from "react";

export type ModalProviderValue = {
  modalId: string;
  setTitleId: (id: string) => void;
  setDescriptionId: (id: string) => void;
  contentScrolled?: boolean;
  setContentScrolled: (scrolled: boolean) => void;
};

export type ModalContextProps = ModalProviderValue;

export interface ModalProviderProps {
  value: ModalProviderValue;
  children: React.ReactNode;
}

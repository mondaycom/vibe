import React from "react";

export type ModalContextProps = ModalProviderValue;

export type ModalProviderValue = {
  /**
   * Unique identifier for the modal.
   * In use to set the modal title and description IDs to be unique.
   */
  modalId: string;
  /**
   * Callback to set the title element ID for accessibility.
   */
  setTitleId: (id: string) => void;
  /**
   * Callback to set the description element ID for accessibility.
   */
  setDescriptionId: (id: string) => void;
  /**
   * Passed from the Modal component, `true` by default, `false` if set by user.
   */
  autoFocus?: boolean;
};

export interface ModalProviderProps {
  /**
   * Context value containing modal state and handlers.
   */
  value: ModalProviderValue;
  /**
   * Modal provider children.
   * Should be the Modal root.
   */
  children: React.ReactNode;
}

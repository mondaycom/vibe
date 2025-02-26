export type ModalContextProps = ModalProviderValue;

export type ModalProviderValue = {
  /**
   * Unique identifier for the modal.
   * Used to ensure modal title and description IDs are unique.
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
   * If true, the modal automatically focuses on open.
   * Defaults to `true`, unless explicitly set to `false`.
   */
  autoFocus?: boolean;
};

export interface ModalProviderProps {
  /**
   * The context value containing modal state and handlers.
   */
  value: ModalProviderValue;
  /**
   * The children of the modal provider.
   * Should wrap the root of the Modal.
   */
  children: React.ReactNode;
}

import type React from "react";
import type MenuButton from "../../MenuButton/MenuButton";
import type { IconButton } from "@vibe/icon-button";
import { type ButtonColor } from "@vibe/button";

export type ModalTopActionsTheme = "light" | "dark";
export type ModalTopActionsButtonColor = Extract<ButtonColor, "primary" | "fixed-light" | "fixed-dark">;

export interface ModalTopActionsProps {
  /**
   * The action element or a function that renders an action element in the top-right area.
   * When provided as a function, it receives the current button color theme.
   */
  renderAction?:
    | React.ReactElement<typeof MenuButton | typeof IconButton>
    | ((color?: ModalTopActionsButtonColor) => React.ReactElement<typeof MenuButton | typeof IconButton>);
  /**
   * The color theme for the top actions.
   */
  theme?: ModalTopActionsTheme;
  /**
   * The label of the close button for accessibility.
   */
  closeButtonAriaLabel?: string;
  /**
   * Callback fired when the close button is clicked.
   */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

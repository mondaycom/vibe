import React, { MouseEventHandler } from "react";
import VibeComponentProps from "./VibeComponentProps";

export default interface VibeBaseButtonComponentProps<HTMLElementType = HTMLButtonElement> extends VibeComponentProps {
  /** Callback function to run when the button is clicked */
  onClick: MouseEventHandler<HTMLElementType>;
  /** aria controls - receives id for the controlled region */
  ariaControls?: string;
  /** Whether the button should be disabled or not */
  disabled?: boolean;
  /** aria to be set if the popup is open */
  ariaHasPopup?: React.HTMLProps<HTMLElementType>["aria-haspopup"];
  /** aria to be set if the popup is open */
  ariaExpanded?: boolean;
}

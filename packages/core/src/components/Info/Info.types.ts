import { type VibeComponentProps } from "../../types";
import { type DialogPosition } from "../Dialog/Dialog.types";
import { type InfoLinkProps } from "./components";

export type InfoProps = BaseInfoProps & VibeComponentProps & InfoAriaLabelProps;

interface BaseInfoProps {
  /**
   * The title text displayed at the top of the info dialog.
   */
  title?: string;
  /**
   * The main body text content displayed in the info dialog.
   */
  body: string;
  /**
   * Link configuration for the info dialog.
   */
  link?: InfoLinkProps;
  /**
   * The ID of the element that labels the info button.
   */
  "aria-labelledby"?: string;
  /**
   * The placement of the dialog relative to the info button.
   */
  position?: DialogPosition;
  /**
   * If true, the info dialog is disabled.
   */
  disabled?: boolean;
  /**
   * Callback fired when the info dialog is shown.
   */
  onDialogShow?: () => void;
  /**
   * Callback fired when the info dialog is hidden.
   */
  onDialogHide?: () => void;
  /**
   * Class name applied to the dialog content.
   */
  dialogClassName?: string;
  /**
   * The CSS selector of the container where the dialog is rendered.
   */
  containerSelector?: string;
}

// Mutually exclusive aria-label props
export type InfoAriaLabelProps =
  | {
      /**
       * The ARIA label for the info button.
       */
      "aria-label": string;
      /**
       * If true, the tooltip for the info button is hidden.
       */
      hideButtonTooltip?: boolean;
    }
  | {
      "aria-label"?: string;
      hideButtonTooltip?: never;
    };

import { type VibeComponentProps } from "../../../../types";
import { type InfoLinkProps } from "../InfoLink/InfoLink";

export interface InfoDialogContentProp extends VibeComponentProps {
  /**
   * The title text displayed at the top of the info dialog.
   */
  title?: string;
  /**
   * The main body text content displayed in the info dialog.
   */
  body?: string;
  /**
   * Link configuration for the info dialog.
   */
  link?: InfoLinkProps;
}

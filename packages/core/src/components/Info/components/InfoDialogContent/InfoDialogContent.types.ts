import { type InfoLinkProps } from "../InfoLink/InfoLink";

export interface InfoDialogContentProps {
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
  /**
   * Class name applied to the dialog content.
   */
  className?: string;
}

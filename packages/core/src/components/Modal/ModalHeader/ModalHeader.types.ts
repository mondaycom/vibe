import React from "react";
import { SubIcon, VibeComponentProps } from "../../../types";

interface WithoutDescription {
  description?: never;
  descriptionIcon?: never;
}

interface WithDescription {
  /**
   * Descriptive text or content below the title.
   * When supplied, would also add an aria-describedby attribute to the modal dialog element.
   */
  description: string | React.ReactNode;
  /**
   * Icon to display before the description. Can only be passed when description is supplied.
   */
  descriptionIcon?:
    | SubIcon
    | {
        name: SubIcon;
        className?: string;
      };
}

export type ModalHeaderProps = {
  /**
   * Main heading text of the modal.
   * When supplied, would also add an aria-labelledby attribute to the modal dialog element.
   */
  title: string | React.ReactNode;
} & (WithDescription | WithoutDescription) &
  VibeComponentProps;

import React from "react";
import { SubIcon, VibeComponentProps } from "../../../types";

interface WithoutDescription {
  description?: never;
  descriptionIcon?: never;
}

interface WithDescription {
  description: string | React.ReactNode;
  descriptionIcon?:
    | SubIcon
    | {
        name: SubIcon;
        className?: string;
      };
}

export type ModalHeaderProps = { title: string } & (WithoutDescription | WithDescription) & VibeComponentProps;

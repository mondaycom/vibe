import React from "react";
import { SubIcon, VibeComponentProps } from "../../../types";

interface WithoutSubtitle {
  subtitle?: never;
  subtitleIcon?: never;
}

interface WithSubtitle {
  subtitle: string | React.ReactNode;
  subtitleIcon?:
    | SubIcon
    | {
        name: SubIcon;
        className?: string;
      };
}

export type ModalHeaderProps = { title: string } & (WithoutSubtitle | WithSubtitle) & VibeComponentProps;

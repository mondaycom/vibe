import React from "react";
import { LinkProps } from "../Link/Link";
import { VibeComponentProps } from "src/types";
import { ButtonProps } from "../Button";

export type EmptyStateLayout = "default" | "compact";

export interface EmptyStateProps extends VibeComponentProps {
  /** Optional title for the empty state */
  title?: string;
  /** Required description text explaining the empty state */
  description: string | React.ReactNode;
  /** Optional visual element like image, animation, video, or illustration to display */
  visual?: React.ReactNode;
  /** Main action button configuration */
  mainAction?: React.ReactElement<ButtonProps>;
  /** Supporting action (link or tertiary button) configuration */
  supportingAction?: React.ReactElement<ButtonProps | LinkProps>;
  /** Layout style of the empty state */
  layout?: EmptyStateLayout;
}

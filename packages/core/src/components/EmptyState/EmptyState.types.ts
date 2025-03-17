import React from "react";
import { ButtonProps } from "../../components/Button/Button";
import { LinkProps } from "../../components/Link/Link";
import { VibeComponentProps } from "src/types";

export type EmptyStateLayout = "default" | "compact";

export interface EmptyStateMainActionProps {
  text: string;
  kind?: ButtonProps["kind"];
  leftIcon?: ButtonProps["leftIcon"];
  rightIcon?: ButtonProps["rightIcon"];
  disabled?: boolean;
  color?: ButtonProps["color"];
  loading?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export interface EmptyStateSupportingButtonActionProps {
  type: "button";
  text: string;
  leftIcon?: ButtonProps["leftIcon"];
  rightIcon?: ButtonProps["rightIcon"];
  disabled?: boolean;
  color?: ButtonProps["color"];
  loading?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export interface EmptyStateSupportingLinkActionProps {
  type?: "link";
  text: string;
  href?: string;
  onClick?: LinkProps["onClick"];
}

export type EmptyStateSupportingActionProps =
  | EmptyStateSupportingButtonActionProps
  | EmptyStateSupportingLinkActionProps;

export interface EmptyStateProps extends VibeComponentProps {
  /** Optional title for the empty state */
  title?: string;
  /** Required description text explaining the empty state */
  description: string;
  /** Optional visual element like image, animation, video, or illustration to display */
  visual?: React.ReactNode;
  /** Main action button configuration */
  mainAction?: EmptyStateMainActionProps;
  /** Supporting action (link or tertiary button) configuration */
  supportingAction?: EmptyStateSupportingActionProps;
  /** Layout style of the empty state */
  layout?: EmptyStateLayout;
}

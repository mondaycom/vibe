import React from "react";
import { ButtonProps } from "../../components/Button/Button";
import { LinkProps } from "../../components/Link/Link";

export enum EmptyStateLayout {
  DEFAULT = "default",
  COMPACT = "compact"
}

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

export interface EmptyStateProps {
  /** Custom class name to be applied to the component */
  className?: string;
  /** Optional title for the empty state */
  title?: string;
  /** Required description text explaining the empty state */
  description: string;
  /** Optional image, animation or other illustration to display */
  illustration?: React.ReactNode;
  /** Main action button configuration */
  mainAction?: EmptyStateMainActionProps;
  /** Supporting action (link or tertiary button) configuration */
  supportingAction?: EmptyStateSupportingActionProps;
  /** Layout style of the empty state */
  layout?: EmptyStateLayout;
  /** ID to be applied to the component */
  id?: string;
  /** Test ID for testing purposes */
  "data-testid"?: string;
}

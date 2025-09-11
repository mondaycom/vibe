import type React from "react";
import { type LinkProps } from "../Link/Link";
import { type VibeComponentProps } from "src/types";
import { type ButtonProps, type ButtonType } from "../Button";

export type EmptyStateLayout = "default" | "compact";

export interface EmptyStateProps extends VibeComponentProps {
  /** Optional title for the empty state */
  title?: string;
  /** Required description text explaining the empty state */
  description: string | React.ReactNode;
  /** Optional visual element like image, animation, video, or illustration to display */
  visual?: React.ReactNode;
  /** Main action button configuration */
  mainAction?:
    | React.ReactElement<ButtonProps>
    | (Omit<ButtonProps, "kind" | "children" | "size"> & {
        kind?: Exclude<ButtonType, "tertiary">;
        text: string;
      });
  /** Supporting action (link or tertiary button) configuration */
  supportingAction?:
    | React.ReactElement<ButtonProps | LinkProps>
    | (Omit<ButtonProps, "kind" | "children" | "size"> & {
        kind: "tertiary";
        text: string;
      })
    | (LinkProps & {
        text: string;
      });
  /** Layout style of the empty state */
  layout?: EmptyStateLayout;
}

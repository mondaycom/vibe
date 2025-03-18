import React from "react";
import Link from "../Link/Link";
import { VibeComponentProps } from "src/types";
import { Button } from "../Button";

export type EmptyStateLayout = "default" | "compact";

export interface EmptyStateProps extends VibeComponentProps {
  /** Optional title for the empty state */
  title?: string;
  /** Required description text explaining the empty state */
  description: string;
  /** Optional visual element like image, animation, video, or illustration to display */
  visual?: React.ReactNode;
  /** Main action button configuration */
  mainAction?: React.ReactElement<typeof Button>;
  /** Supporting action (link or tertiary button) configuration */
  supportingAction?: React.ReactElement<typeof Button | typeof Link>;
  /** Layout style of the empty state */
  layout?: EmptyStateLayout;
}

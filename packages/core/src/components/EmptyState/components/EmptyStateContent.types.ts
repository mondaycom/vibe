import { ReactNode } from "react";
import { VibeComponentProps } from "../../../types";

export interface EmptyStateContentProps extends VibeComponentProps {
  /** Title heading text (optional) */
  title?: string;
  /** Description content; can be plain string or ReactNode (required) */
  description: string | ReactNode;
  /** Use compact layout variant (reduced spacing) */
  compact?: boolean;
}

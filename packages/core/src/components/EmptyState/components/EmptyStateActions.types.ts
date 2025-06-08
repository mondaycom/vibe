import { VibeComponentProps } from "../../../types";
import { EmptyStateAction } from "../EmptyState.types";

export interface EmptyStateActionsProps extends VibeComponentProps {
  /** Configuration for the primary action (optional) */
  primaryAction?: EmptyStateAction;
  /** Configuration for the secondary action (optional) */
  secondaryAction?: EmptyStateAction;
  /** Use compact layout variant (reduced spacing) */
  compact?: boolean;
}

import { ReactNode } from "react";
import { VibeComponentProps } from "../../types";

export interface EmptyStateAction {
  /** Label text for the action; also serves as accessible name */
  text: string;
  /** Callback when action is clicked (for Button) */
  onClick?: () => void;
  /** URL to navigate to; if present, action renders as Link */
  href?: string;
  /** Visual variant of the button: primary, secondary, tertiary */
  kind?: "primary" | "secondary" | "tertiary";
  /** Disable user interaction */
  disabled?: boolean;
  /** Show loading spinner inside button */
  loading?: boolean;
  /** Optional icon, placed before text */
  icon?: string | React.FC;
}

export interface EmptyStateProps extends VibeComponentProps {
  /** Decorative visual element (SVG, Lottie, etc.); rendered with alt="" for accessibility */
  visual?: ReactNode;
  /** Title heading text (optional) */
  title?: string;
  /** Description content; can be plain string or ReactNode (required) */
  description: string | ReactNode;
  /** Configuration for the primary action (optional) */
  primaryAction?: EmptyStateAction;
  /** Configuration for the secondary action (optional) */
  secondaryAction?: EmptyStateAction;
  /** Use compact layout variant (reduced spacing) */
  compact?: boolean;
}

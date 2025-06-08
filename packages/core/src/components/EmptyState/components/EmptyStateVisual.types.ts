import { ReactNode } from "react";
import { VibeComponentProps } from "../../../types";

export interface EmptyStateVisualProps extends VibeComponentProps {
  /** Decorative visual element (SVG, Lottie, etc.); rendered with alt="" for accessibility */
  visual: ReactNode;
  /** Use compact layout variant (reduced spacing) */
  compact?: boolean;
}

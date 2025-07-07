import { ReactNode } from "react";
import { VibeComponentProps, SubIcon } from "../../types";
import { AttentionBoxButtonProps } from "./components/AttentionBoxButton/AttentionBoxButton";
import { AttentionBoxLinkProps } from "./components/AttentionBoxLink/AttentionBoxLink";

export type AttentionBoxType = "primary" | "success" | "danger" | "warning" | "dark";

// Mutually exclusive icon props
export type AttentionBoxIconProps = { icon?: SubIcon; hideIcon?: never } | { icon?: never; hideIcon?: boolean };

export type AttentionBoxRole = "alert" | "status";

// Shared props for both compact and default layouts
export interface AttentionBoxLayoutSharedProps
  extends Pick<AttentionBoxProps, "icon" | "onClose" | "closeButtonAriaLabel" | "action" | "link"> {
  content: React.ReactNode;
  isLinkInline: boolean;
}

// Action/Link constraint types - if action exists, link cannot have inlineText
export type AttentionBoxActionLinkProps =
  | {
      action?: AttentionBoxButtonProps;
      link?: Omit<AttentionBoxLinkProps, "inlineText">;
    }
  | {
      action?: never;
      link?: AttentionBoxLinkProps;
    };

// Compact/Multiline logic - multiline allowed only if compact is true
export type AttentionBoxCompactMultilineProps =
  | { compact?: false; multiline?: never }
  | { compact: true; multiline?: boolean };

// Compact/Title logic - title not allowed when compact is true
export type AttentionBoxCompactTitleProps = { compact?: false; title?: string } | { compact: true; title?: never };

export type AttentionBoxProps = VibeComponentProps &
  AttentionBoxIconProps &
  AttentionBoxCompactMultilineProps &
  AttentionBoxCompactTitleProps &
  AttentionBoxActionLinkProps & {
    /**
     * The variant type of the attention box
     */
    type?: AttentionBoxType;
    /**
     * The main text content
     */
    text?: string;
    /**
     * Custom children to override the default text content
     */
    children?: ReactNode;
    /**
     * Callback when the close button is clicked
     */
    onClose?: () => void;
    /**
     * Custom aria label for the close button
     */
    closeButtonAriaLabel?: string;
    /**
     * Whether to animate the entrance
     */
    animate?: boolean;
  };

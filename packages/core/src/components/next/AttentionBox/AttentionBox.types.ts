import type { ReactNode, MouseEvent } from "react";
import type { VibeComponentProps } from "../../../types";
import type { SubIcon, IconType } from "@vibe/icon";
import type { AttentionBoxButtonProps } from "./components/AttentionBoxButton/AttentionBoxButton";
import type { AttentionBoxLinkProps } from "./components/AttentionBoxLink/AttentionBoxLink";

export type AttentionBoxType = "primary" | "positive" | "negative" | "warning" | "neutral";

// Mutually exclusive content props
export type AttentionBoxContentProps =
  | {
      /**
       * The main text content
       */
      text: string;
      children?: never;
    }
  | {
      /**
       * Custom children to override the default text content
       */
      children: ReactNode;
      text?: never;
    };

// Shared props for both compact and default layouts
export interface AttentionBoxLayoutSharedProps
  extends Pick<AttentionBoxProps, "icon" | "iconType" | "onClose" | "closeButtonAriaLabel" | "action" | "link"> {
  content: ReactNode;
}

// Mutually exclusive title props
export type AttentionBoxCompactTitleProps =
  | {
      compact?: false;
      /**
       * The title of the attention box
       */
      title?: string;
    }
  | {
      /**
       * When true, the attention box will be displayed in compact mode of one-liner
       */
      compact: true;
      title?: never;
    };

export type AttentionBoxRole = "alert" | "status";

export type AttentionBoxProps = VibeComponentProps &
  AttentionBoxContentProps &
  AttentionBoxCompactTitleProps & {
    /**
     * The variant type of the attention box
     */
    type?: AttentionBoxType;
    /**
     * The type of the icon
     */
    iconType?: IconType;
    /**
     * The icon to display. Pass `false` to hide the icon entirely, or omit to use the default icon for the type.
     */
    icon?: SubIcon | false;
    /**
     * Callback when the close button is clicked
     */
    onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Custom aria label for the close button
     */
    closeButtonAriaLabel?: string;
    /**
     * Whether to animate the entrance
     */
    animate?: boolean;
    /**
     * Action button configuration
     */
    action?: AttentionBoxButtonProps;
    /**
     * Link configuration
     */
    link?: Omit<AttentionBoxLinkProps, "inlineText">;
  };

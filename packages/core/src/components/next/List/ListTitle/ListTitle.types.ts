import type { VibeComponentProps } from "../../../../types";
import type { BaseListSizes } from "../../../BaseList/BaseList.types";

export interface ListTitleProps extends VibeComponentProps {
  /**
   * The title text to display.
   */
  children?: string;
  /**
   * The size of the list title, inherited from the parent list context if not provided.
   */
  size?: BaseListSizes;
  /**
   * If true, the title will stick to the top when scrolling within a list.
   */
  sticky?: boolean;
}

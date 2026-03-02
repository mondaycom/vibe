import { type SubIcon } from "@vibe/icon";

export interface MenuItemIconProps {
  /**
   * The icon to be displayed. Must be an icon component (e.g. from `@vibe/icons`).
   */
  icon?: SubIcon;
  /**
   * If true, the icon appears disabled.
   */
  disabled?: boolean;
  /**
   * If true, the icon appears selected.
   */
  selected?: boolean;
  /**
   * The background color of the icon wrapper.
   */
  backgroundColor?: string;
  /**
   * Additional class name for styling the icon wrapper.
   */
  wrapperClassName?: string;
  /**
   * If true, the icon appears on the right side.
   * @default false
   */
  isRightIcon?: boolean;
}

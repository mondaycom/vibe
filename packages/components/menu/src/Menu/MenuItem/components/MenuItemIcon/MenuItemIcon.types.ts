import { type IconType, type SubIcon } from "@vibe/icon";

export interface MenuItemIconProps {
  /**
   * The icon to be displayed. Can be a string or an icon component.
   */
  icon?: SubIcon;
  /**
   * The type of icon to be used.
   */
  type?: IconType;
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

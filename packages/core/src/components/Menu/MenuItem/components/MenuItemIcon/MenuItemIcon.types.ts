import { SubIcon } from "../../../../../types";
import { IconType } from "../../../../Icon";

export interface MenuItemIconProps {
  /**
   * The icon to be displayed. Can be a string or an icon component.
   */
  icon?: SubIcon;
  /**
   * The type of icon to be used.
   */
  type?: IconType;
  // TODO: [breaking] remove in next major
  /**
   * Label for the icon, used for accessibility.
   * @deprecated This property will be removed in the next major version.
   */
  label?: string;
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
}

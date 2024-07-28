import { SubIcon } from "../../../../../types";
import { IconType } from "../../../../Icon/IconConstants";

export interface MenuItemIconProps {
  /**
   * Icon to be displayed. Can be a string or an icon component.
   */
  icon?: SubIcon;
  /**
   * Icon type to be used.
   */
  type?: IconType;
  /**
   * Label for the icon, used for accessibility.
   */
  // TODO remove in next major
  label?: string;
  /**
   * Indicates whether the icon is disabled. Disabled icons appear faded and do not respond to user interactions.
   */
  disabled?: boolean;
  /**
   * Indicates whether the icon is selected. Selected icons have a different visual style.
   */
  selected?: boolean;
  /**
   * Background color for the icon wrapper.
   */
  backgroundColor?: string;
  /**
   * Additional class name for the icon wrapper.
   */
  wrapperClassName?: string;
}

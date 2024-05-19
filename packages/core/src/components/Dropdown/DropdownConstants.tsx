import { Theme } from "../ThemeProvider/ThemeProviderConstants";

export const defaultCustomStyles = (baseStyles: string) => baseStyles;

export enum ADD_AUTO_HEIGHT_COMPONENTS {
  CONTAINER = "container",
  CONTROL = "control",
  VALUE_CONTAINER = "valueContainer"
}

export const DROPDOWN_MENU_ARIA_LABEL = "Dropdown menu";

export const DROPDOWN_MENU_ID = "dropdown-menu-list-id";

export const DROPDOWN_ID = "dropdown-menu-id";

export enum DROPDOWN_CHIP_COLORS {
  PRIMARY = "PRIMARY",
  NEGATIVE = "NEGATIVE",
  POSITIVE = "POSITIVE"
}

export enum DROPDOWN_MENU_POSITION {
  ABSOLUTE = "absolute",
  FIXED = "fixed"
}

export enum DROPDOWN_MENU_PLACEMENT {
  TOP = "top",
  BOTTOM = "bottom",
  AUTO = "auto"
}

export type DropdownOption = {
  label: string;
  value: string | number | Theme;
  isMandatory?: boolean;
};

export const ELEMENT_TYPES = {
  COMBOBOX: "combobox",
  DROPDOWN: "dropdown",
  BUTTON: "button",
  CLICKABLE: "clickable",
  VIRTUALIZED_LIST: "virtualized-list",
  TEXT_FIELD: "text-field",
  TEXT_FIELD_SECONDARY_BUTTON: "text-field-secondary-button",
  SEARCH: "search",
  CLEAN_SEARCH_BUTTON: "clean-search-button",
  COLOR_PICKER_ITEM: "color-picker-item",
  ICON_BUTTON: "icon-button",
  CHIP: "chip"
};

export const NAVIGATIONS_COMMANDS = {
  RIGHT_ARROW: "{arrowright}",
  LEFT_ARROW: "{arrowleft}",
  UP_ARROW: "{arrowup}",
  DOWN_ARROW: "{arrowdown}",
  TAB: "#TAB#",
  ENTER: "{enter}",
  PAGE_UP: "{pageup}",
  PAGE_DOWN: "{pagedown}"
};

export const getTestId = (elementType, id) => {
  return id ? `${elementType}_${id}` : elementType;
};

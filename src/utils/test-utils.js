export const ELEMENT_TYPES = {
  COMBOBOX: "combobox",
  DROPDOWN: "dropdown",
  BUTTON: "button",
  CLICKABLE: "clickable",
  COLOR_PICKER_ITEM: "color-picker-item"
};

export const NAVIGATIONS_COMMANDS = {
  RIGHT_ARROW: "{arrowright}",
  LEFT_ARROW: "{arrowleft}",
  UP_ARROW: "{arrowup}",
  DOWN_ARROW: "{arrowdown}",
  TAB: "#TAB#",
  ENTER: "{enter}"
};

export const getTestId = (elementType, id) => {
  return `${elementType}_${id}`;
};

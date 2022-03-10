export const ELEMENT_TYPES = {
  COMBOBOX: "combobox",
  DROPDOWN: "dropdown",
  BUTTON: "button"
};

export const getTestId = (elementType, id) => {
  return `${elementType}_${id}`;
};

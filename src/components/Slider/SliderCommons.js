import cx from "classnames";

export const COMPONENT_ID = "slider";

// TODO: move to common constants?
export const SIZES_BASIC = Object.freeze({
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
});

// TODO: move to common constants/utils?
// TODO: add tests
const BEM_PREFIX = "monday";
export function createBemHelper(block) {
  if (!block || block === "") {
    return () => "";
  }
  const blockClass = `${BEM_PREFIX}-${block}`;
  return function bem(element, modifiers = "", extraClasses = "") {
    const elClass = element !== "" ? `${blockClass}__${element}` : blockClass;
    const modClasses = cx(modifiers)
      .split(" ")
      .map(modClass => (modClass === "" ? "" : `${elClass}--${modClass}`));
    return cx(elClass, modClasses, extraClasses);
  };
}

export function ensureId(id, componentName) {
  return id ?? createDefaultId(componentName);
}

export function createDefaultId(prefix) {
  return `${prefix}-${Math.random()}`;
}

function defaultFormatter(value) {
  return `${value}%`;
}

export function formatValue(value, formatter) {
  if (typeof formatter === "function") {
    return formatter(value);
  }
  return defaultFormatter(value);
}

export function ensureValueText(valueText, value, formatter) {
  if (valueText) {
    return valueText;
  }
  if (typeof value === "undefined") {
    return undefined;
  }
  return formatValue(value, formatter);
}

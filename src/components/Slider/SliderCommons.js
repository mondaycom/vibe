export const COMPONENT_ID = "slider";

export function ensureValueText(valueText, value, formatter) {
  if (valueText) {
    return valueText;
  }
  if (typeof value === "undefined") {
    return undefined;
  }
  if (typeof formatter !== "function") {
    return value;
  }
  return formatter(value);
}

export { getCSSVar } from "@vibe/shared";

export const getComputedVarColor = (elem: Element, cssVar: string) =>
  getComputedStyle(elem).getPropertyValue(`--${cssVar}`);

export function hexToRgb(hex: string) {
  if (hex.startsWith("#")) {
    hex = hex.substring(1);
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
}

function isThemesSupported() {
  try {
    if (!window.CSS || !window.CSS.supports) return false;
    // check if browser supports basic var value usage
    return window.CSS.supports("color", "var(--fake-var)");
  } catch (e) {
    return false;
  }
}

export function getCSSVar(varName, fallback) {
  const fb = fallback ? `, ${fallback}` : "";
  if (isThemesSupported()) {
    return `var(--${varName}${fb})`;
  }
}

export const getComputedVarColor = (elem, cssVar) => getComputedStyle(elem).getPropertyValue(`--${cssVar}`);

export function hexToRgb(hex) {
  if (hex.startsWith("#")) {
    hex = hex.substring(1);
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
}

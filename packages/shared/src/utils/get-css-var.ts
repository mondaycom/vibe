function isThemesSupported() {
  try {
    if (!window.CSS || !window.CSS.supports) return false;
    // check if browser supports basic var value usage
    return window.CSS.supports("color", "var(--fake-var)");
  } catch (e) {
    return false;
  }
}

export function getCSSVar(varName: string, fallback?: string) {
  const fb = fallback ? `, ${fallback}` : "";
  if (isThemesSupported()) {
    return `var(--${varName}${fb})`;
  }
}

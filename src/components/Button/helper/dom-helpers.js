export const TRANSPARENT_COLOR = "rgba(0, 0, 0, 0)";

export function getParentBackgroundColorNotTransparent(element, defaultColor) {
  const parentElement = element.parentElement;
  if (element === element.parentElement) {
    if (!element) {
      return defaultColor;
    }
    return element.style.backgroundColor;
  }

  if (!parentElement) {
    return defaultColor;
  }

  const backgroundColor = parentElement.style.backgroundColor;
  if (!backgroundColor || backgroundColor === defaultColor) {
    return getParentBackgroundColorNotTransparent(parentElement, defaultColor);
  }

  return backgroundColor === TRANSPARENT_COLOR ? defaultColor : backgroundColor;
}

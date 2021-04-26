export const TRANSPARENT_COLOR = "rgba(0, 0, 0, 0)";

export function getParentBackgroundColorNotTransparent(element, defaultColor) {
  const parentElement = element.parentElement;
  if (element === element.parentElement) {
    if (!element) {
      return defaultColor;
    }

    return window.getComputedStyle(element).backgroundColor;
  }

  if (!parentElement) {
    return defaultColor;
  }

  const backgroundColor = window.getComputedStyle(parentElement).backgroundColor;
  if (!backgroundColor || backgroundColor === defaultColor) {
    return getParentBackgroundColorNotTransparent(parentElement, defaultColor);
  }

  return backgroundColor === TRANSPARENT_COLOR ? defaultColor : backgroundColor;
}

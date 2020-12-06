const TRANSPARENT_COLOR = "rgba(0, 0, 0, 0)";
export function getParentBackgroundColorNotTransparent(element) {
  const parentElement = element.parentElement;
  if (element === element.parentElement) {
    if (!element) {
      return TRANSPARENT_COLOR;
    }
    return element.style.backgroundColor;
  }
  if (!parentElement) {
    return TRANSPARENT_COLOR;
  }

  const backgroundColor = parentElement.style.backgroundColor;
  if (!backgroundColor || backgroundColor === TRANSPARENT_COLOR) {
    return getParentBackgroundColorNotTransparent(parentElement);
  }
  return backgroundColor;
}

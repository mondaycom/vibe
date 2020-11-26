export function getParentBackgroundColorNotTransparent(element) {
  const parentElement = element.parentElement;
  if (element === element.parentElement) {
    return element.style.backgroundColor;
  }
  const backgroundColor = parentElement.style.backgroundColor;
  if (!backgroundColor || backgroundColor === "rgba(0, 0, 0, 0)") {
    return getParentBackgroundColorNotTransparent(parentElement);
  }
  return backgroundColor;
}

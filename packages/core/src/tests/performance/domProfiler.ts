export function countDOMNodes(element: Element): number {
  let count = 1;
  const children = element.children;
  for (let i = 0; i < children.length; i++) {
    count += countDOMNodes(children[i]);
  }
  return count;
}

export function countNodesBySelector(selector: string): number {
  const element = document.querySelector(selector);
  if (!element) {
    return 0;
  }
  return countDOMNodes(element);
}

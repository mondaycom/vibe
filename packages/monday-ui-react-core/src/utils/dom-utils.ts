import { memoize as _memoize } from "lodash-es";

export function isInsideClass(domElement: HTMLElement, classOrClassesName: Array<string> | string) {
  if (!classOrClassesName) return false;
  let selector;

  if (Array.isArray(classOrClassesName)) {
    selector = classOrClassesName.map(c => `.${c}`).join(",");
  } else {
    selector = `.${classOrClassesName}`;
  }

  return !!domElement.parentElement.closest(selector);
}

export const getScrollableParent = _memoize(
  (node: HTMLElement): HTMLElement => {
    if (!node) {
      return null;
    }
    while (node.parentElement) {
      if (isNodeVerticallyScrollable(node.parentElement)) {
        return node.parentElement;
      }
      node = node.parentElement;
    }
    return document.body;
  },
  (node: HTMLElement) => node.outerHTML
);

const isNodeVerticallyScrollable = (node: HTMLElement): boolean => {
  return ["auto", "scroll"].includes(getComputedStyle(node).getPropertyValue("overflow-y"));
};

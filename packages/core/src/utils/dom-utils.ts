import { memoize as _memoize } from "es-toolkit";

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

const _getScrollableParent = _memoize(
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
  {
    getCacheKey: (node: HTMLElement) => node.outerHTML
  }
);

export const getScrollableParent: (node: HTMLElement) => HTMLElement = _getScrollableParent;

const isNodeVerticallyScrollable = (node: HTMLElement): boolean => {
  return ["auto", "scroll"].includes(getComputedStyle(node).getPropertyValue("overflow-y"));
};

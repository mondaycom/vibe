import type React from "react";

export const VALID_ROLES = ["option", "listitem", "menuitem", "tab", "treeitem"];

const ROLE_MAPPING: Record<string, string> = {
  listbox: "option",
  menu: "menuitem",
  tablist: "tab",
  tree: "treeitem"
};

export const getChildRole = (listRole: string): string => ROLE_MAPPING[listRole] || "listitem";

let listIdCounter = 0;

export const generateListId = (): string => `baselist-${listIdCounter++}`;

export const isListItem = (element: HTMLElement | null): boolean => {
  return element instanceof HTMLElement && VALID_ROLES.includes(element.getAttribute("role") || "");
};

const ELEMENT_MAPPING: Record<string, string> = {
  ul: "li",
  ol: "li",
  nav: "a"
};

export const getItemComponentType = (listElement: string): string => ELEMENT_MAPPING[listElement] || "div";

export const findAdjacentFocusableIndex = (
  refs: (HTMLElement | null)[],
  currentIndex: number,
  direction: "next" | "prev",
  shouldWrap = true
): number | undefined => {
  const step = direction === "next" ? 1 : -1;
  let index = currentIndex + step;

  while (index >= 0 && index < refs.length) {
    if (isListItem(refs[index])) {
      return index;
    }
    index += step;
  }

  if (shouldWrap) {
    const startIndex = direction === "next" ? 0 : refs.length - 1;
    index = startIndex;

    while (index !== currentIndex) {
      if (isListItem(refs[index])) {
        return index;
      }
      index += step;

      if (index < 0 || index >= refs.length) {
        break;
      }
    }
  }

  return undefined;
};

export const findFirstFocusableIndex = (refs: (HTMLElement | null)[]): number => {
  return refs.findIndex(isListItem);
};

export const findLastFocusableIndex = (refs: (HTMLElement | null)[]): number => {
  for (let i = refs.length - 1; i >= 0; i--) {
    if (isListItem(refs[i])) {
      return i;
    }
  }
  return -1;
};

export const findSelectedItemIndex = (refs: (HTMLElement | null)[]): number => {
  return refs.findIndex(element => {
    if (!isListItem(element)) return false;
    return element.getAttribute("aria-selected") === "true";
  });
};

export const mergeStyleWithMaxHeight = (
  style: React.CSSProperties | undefined,
  maxHeight: number | string | undefined
): React.CSSProperties => {
  if (maxHeight === undefined) {
    return style || {};
  }

  return {
    ...style,
    maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight
  };
};

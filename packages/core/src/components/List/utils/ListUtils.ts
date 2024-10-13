import { MutableRefObject, useState } from "react";
import { ListItemElement } from "../../ListItem/ListItem.types";
import { ListElement } from "../List.types";
import useIsomorphicLayoutEffect from "../../../hooks/ssr/useIsomorphicLayoutEffect";

let listIdCounter = 0;
export const generateListId = () => {
  return `list-${listIdCounter++}`;
};

export const useListId = (id: string) => {
  const [listId, setListId] = useState<string>();
  useIsomorphicLayoutEffect(() => {
    setListId(id || generateListId());
  }, [id]);
  return listId;
};

export const getListItemIdByIndex = (childrenRefs: MutableRefObject<HTMLElement[]>, index: number): string => {
  return childrenRefs.current[index]?.id;
};

export const getListItemIndexById = (childrenRefs: MutableRefObject<HTMLElement[]>, id: string): number => {
  return childrenRefs.current.findIndex(child => child?.id === id);
};

export const getListItemComponentType = (listComponent: ListElement): ListItemElement => {
  switch (listComponent) {
    case "ul":
    case "ol":
      return "li";
    case "nav":
      return "a";
    default:
      return "div";
  }
};

const isListItem = (element: HTMLElement) => {
  return element && element.getAttribute("role") === "option";
};

export const getNextListItemIndex = (currentIndex: number, childrenRefs: MutableRefObject<HTMLElement[]>) => {
  while (currentIndex < childrenRefs.current.length - 1) {
    const child = childrenRefs.current[++currentIndex];
    if (isListItem(child)) {
      return currentIndex;
    }
  }
  return undefined;
};

export const getPrevListItemIndex = (currentIndex: number, childrenRefs: MutableRefObject<HTMLElement[]>) => {
  while (currentIndex > 0) {
    const child = childrenRefs.current[--currentIndex];
    if (isListItem(child)) {
      return currentIndex;
    }
  }
  return undefined;
};

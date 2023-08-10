import { MutableRefObject } from "react";

let listIdCounter = 0;
export const generateListId = () => `list-${listIdCounter++}`;

export const getListItemIdByIndex = (childrenRefs: MutableRefObject<HTMLElement[]>, index: number): string => {
  return childrenRefs.current[index]?.id;
};

export const getListItemIndexById = (childrenRefs: MutableRefObject<HTMLElement[]>, id: string): number => {
  return childrenRefs.current.findIndex(child => child.id === id);
};

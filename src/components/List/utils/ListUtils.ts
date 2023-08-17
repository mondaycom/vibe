import { MutableRefObject, useLayoutEffect, useState } from "react";
import { ListWrapperComponentStringType, ListWrapperComponentType } from "../ListConstants";
import { ListItemComponentType } from "../../ListItem/ListItemConstants";

let listIdCounter = 0;
export const generateListId = () => {
  return `list-${listIdCounter++}`;
};

export const useListId = (id: string) => {
  const [listId, setListId] = useState<string>();
  useLayoutEffect(() => {
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

export const getListItemComponentType = (listComponent: ListWrapperComponentType | ListWrapperComponentStringType) => {
  switch (listComponent) {
    case ListWrapperComponentType.UL:
    case ListWrapperComponentType.OL:
      return ListItemComponentType.LI;
    case ListWrapperComponentType.NAV:
      return ListItemComponentType.A;
    default:
      return ListItemComponentType.DIV;
  }
};

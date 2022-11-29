import { ComponentDefaultTestId } from "../interactions-tests";

export const ELEMENT_TYPES = ComponentDefaultTestId;
export const getTestId = (elementType: string, id?: string | number) => {
  return id ? `${elementType}_${id}` : elementType;
};

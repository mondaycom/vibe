import { ComponentDefaultTestId } from "../interactions-tests";

export const getTestId = (elementType: string, id?: string | number) => {
  return id ? `${elementType}_${id}` : elementType;
};

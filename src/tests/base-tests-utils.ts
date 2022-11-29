import { ComponentDefaultTestId } from "./constants";
export const getTestId = (elementType: ComponentDefaultTestId, id?: string | number) => {
  return id ? `${elementType}_${id}` : elementType;
};

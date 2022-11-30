import { ComponentDefaultTestId as TestIds } from "./constants";
export const ComponentDefaultTestId = TestIds;
export const getTestId = (elementType: TestIds, id?: string | number) => {
  return id ? `${elementType}_${id}` : elementType;
};

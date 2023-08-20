import { ComponentDefaultTestId as TestIds } from "./constants";
export const ComponentDefaultTestId = TestIds;
export const getTestId = (elementType: TestIds, id?: string | number) => {
  const formattedId = (id ?? "").toString();
  return `${elementType}${formattedId && `_${formattedId}`}`;
};

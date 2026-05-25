import type { ComponentDefaultTestId } from "./constants";

export const getTestId = (elementType: ComponentDefaultTestId, id?: string | number) => {
  const formattedId = (id ?? "").toString();
  return `${elementType}${formattedId && `_${formattedId}`}`;
};

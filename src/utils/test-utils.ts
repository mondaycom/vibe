import { ComponentDefaultTestId } from "../storybook-utils/testsConstants";

export const ELEMENT_TYPES = ComponentDefaultTestId;
export const getTestId = (elementType: ComponentDefaultTestId, id?: string | number) => {
  return id ? `${elementType}_${id}` : elementType;
};

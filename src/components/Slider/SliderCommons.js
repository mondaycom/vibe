import { createBemBlockHelper } from "../../helpers/bem-helper";

export const INFIX_KIND = {
  PREFIX: "prefix",
  POSTFIX: "postfix"
};

export const COMPONENT_ID = "slider";

export const bem = createBemBlockHelper(COMPONENT_ID);

import { Core, JSCodeshift } from "jscodeshift";

export type TransformationContext = {
  j: JSCodeshift;
  root: ReturnType<Core>;
};

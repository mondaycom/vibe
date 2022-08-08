import { Visitor } from "@babel/core";
import { State } from "../../index";
import { stringLiteralReplacementVisitors } from "./stringLiteralReplacementVisitors";

/**
 * 8: These visitors look within JSX `className` attributes, looking for string literals
 * which we can process into `style["className"]` lookups, as well as variable references
 * in the containing scope which also contain string literals.
 */
export const classNameReplacementVisitors: Visitor<State> = {
  // 10:
  ...stringLiteralReplacementVisitors

  // Identifier: ({ node, scope }, state) => {
  //   const binding = scope.getBinding(node.name);
  //   if (!binding) {
  //     return;
  //   }
  //
  //   // TODO is that needed??
  //   // 10:
  //   // printWithCondition(true, "&&& starting stringLiteralReplacementVisitors Identifier node.name", node.name);
  //   // binding.path.traverse(stringLiteralReplacementVisitors, state);
  // }
};

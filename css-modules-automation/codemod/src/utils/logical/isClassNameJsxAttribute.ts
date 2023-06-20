import * as t from "@babel/types";
import { printWithCondition } from "../commonProcess/print";
import { NodePath } from "@babel/traverse";

/**
 * Returns true for Jsx classname attribute: <div ... className=...>
 * @param path path
 */
export const isClassNameJsxAttribute = (path: NodePath<t.Node> | null) => {
  if (!path) {
    return false;
  }

  const res = t.isJSXAttribute(path.node) && path.node.name.name === "className";
  printWithCondition(false, "@@@ isClassNameJsxAttribute, res, path", res, path);
  return res;
};

import * as t from "@babel/types";
import { NodePath } from "@babel/traverse";

/**
 * Split className={cx("1 2 3")} into className={cx("1", "2", "3")}
 * @param path Path to "1 2 3" stringLiteral
 */
export const splitClassNames = (path: NodePath<t.StringLiteral>): t.CallExpression => {
  const parentNode = path.parentPath.node as t.CallExpression;
  const parts = path.node.value.trim().split(" ");
  const currentNodePosition = parentNode.arguments.findIndex(
    a => a.start === path.node.start && a.end === path.node.end
  );
  let newArgs = parentNode.arguments.slice(0, currentNodePosition);
  for (let i = 0; i < parts.length; ++i) {
    newArgs.push(t.stringLiteral(parts[i]));
  }
  newArgs = [...newArgs, ...parentNode.arguments.slice(currentNodePosition + 1)];
  // parentPath.replaceWith();
  return t.callExpression(parentNode.callee, newArgs);
};

import * as t from "@babel/types";
import { NodePath } from "@babel/traverse";
import { getFileLastName } from "../getFileLastName";
import { printWithCondition } from "../commonProcess/print";

/**
 * Return true if it's component props like 'const Avatar = ({}) =>' or 'const Avatar = forwardRef({}) =>'
 * @param path
 */
export const isComponentPropsObjectPattern = (path: NodePath<t.ObjectPattern>) => {
  // @ts-ignore
  const filename = getFileLastName(path.hub.file.opts.filename, false);
  printWithCondition(false, "<<< addDataTestIdPropsVisitors, path.parent", path.parent);
  printWithCondition(false, "<<< addDataTestIdPropsVisitors, path.parent.parent", path.parentPath.parent);
  return (
    t.isArrowFunctionExpression(path.parent) &&
    ((t.isCallExpression(path.parentPath.parent) &&
      t.isIdentifier(path.parentPath.parent.callee) &&
      path.parentPath.parent.callee.name === "forwardRef") ||
      (t.isVariableDeclarator(path.parentPath.parent) &&
        t.isIdentifier(path.parentPath.parent.id) &&
        path.parentPath.parent.id.name.toLowerCase() === filename.toLowerCase()))
  );
};

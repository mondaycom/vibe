import { getComponentNameOrAliasFromImports, getCoreImportsForFile, wrap } from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'dataTestId' prop to 'data-testid'
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const hookName = getComponentNameOrAliasFromImports(j, imports, "useClickableProps");
  if (!hookName) return;

  root
    .find(j.CallExpression, {
      callee: {
        type: "Identifier",
        name: hookName
      }
    })
    .find(j.ObjectExpression)
    .find(j.Property, {
      key: {
        type: "Identifier",
        name: "dataTestId"
      }
    })
    .forEach(propPath => {
      propPath.node.key = j.literal("data-testid");
    });
}

export default wrap(transform);

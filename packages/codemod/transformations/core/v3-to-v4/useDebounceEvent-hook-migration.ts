import { getImports, getComponentNameOrAliasFromImports, wrap } from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * useDebounceEvent migration for v3 to v4:
 * 1. Remove `initialStateValue` from the hook's options argument
 * 2. Remove `inputValue` and `updateValue` from the destructured return value
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);
  const hookName = getComponentNameOrAliasFromImports(j, imports, "useDebounceEvent");
  if (!hookName) return;

  let modified = false;

  // Find all calls to useDebounceEvent
  root
    .find(j.CallExpression, {
      callee: {
        type: "Identifier",
        name: hookName
      }
    })
    .forEach(callPath => {
      // 1. Remove `initialStateValue` from the options object argument
      j(callPath)
        .find(j.ObjectExpression)
        .at(0)
        .forEach(objPath => {
          const properties = objPath.node.properties;
          const initialIdx = properties.findIndex(
            prop => prop.type === "ObjectProperty" && prop.key.type === "Identifier" && prop.key.name === "initialStateValue"
          );
          if (initialIdx !== -1) {
            properties.splice(initialIdx, 1);
            modified = true;
          }
        });

      // 2. Remove `inputValue` and `updateValue` from the destructured return
      const parent = callPath.parent;
      if (parent?.node?.type === "VariableDeclarator" && parent.node.id?.type === "ObjectPattern") {
        const pattern = parent.node.id;
        const propsToRemove = ["inputValue", "updateValue"];
        pattern.properties = pattern.properties.filter(prop => {
          if (prop.type === "ObjectProperty" && prop.key.type === "Identifier" && propsToRemove.includes(prop.key.name)) {
            modified = true;
            return false;
          }
          return true;
        });
      }
    });

  if (modified) {
    console.warn(
      `[useDebounceEvent migration] ${filePath}: Removed deprecated params/returns. ` +
        `You may need to manually add a local useState to manage input value.`
    );
  }
}

export default wrap(transform);

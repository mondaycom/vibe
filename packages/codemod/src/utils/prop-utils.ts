import {
  ASTPath,
  Collection,
  JSCodeshift,
  JSXAttribute,
  JSXElement,
  JSXExpressionContainer,
  JSXIdentifier,
  JSXOpeningElement,
  literal,
  Literal,
  memberExpression,
  MemberExpression
} from "jscodeshift";
import { logPropMigrationError } from "./report-utils";

/**
 * Updates a prop name in a JSX element
 */
export function updatePropName(
  j: JSCodeshift,
  elementPath: ASTPath<JSXElement>,
  propsNamesMappingOldToNew: Record<string, string>
): void {
  j(elementPath)
    .find(JSXOpeningElement)
    .find(JSXIdentifier)
    .forEach(identifierPath => {
      if (propsNamesMappingOldToNew[identifierPath.node.name]) {
        identifierPath.node.name = propsNamesMappingOldToNew[identifierPath.node.name];
      }
    });
}

/**
 * Checks for whether a prop is used in a JSX element
 */
export function isPropExists(j: JSCodeshift, elementPath: ASTPath<JSXElement>, propName: string): boolean {
  return j(elementPath).find(JSXOpeningElement).find(JSXIdentifier, { name: propName }).size() > 0;
}

/**
 * Finds props on a JSX element
 */
export function findProps(j: JSCodeshift, elementPath: ASTPath<JSXElement>, ...propNames: string[]) {
  return j(elementPath)
    .find(JSXOpeningElement)
    .find(JSXAttribute)
    .filter(attr => {
      const attrName = attr.node.name.type === "JSXIdentifier" ? attr.node.name.name : "";
      return propNames.includes(attrName);
    });
}

/**
 * Removes props from a JSX element
 */
export function removeProp(j: JSCodeshift, elementPath: ASTPath<JSXElement>, ...propsNames: string[]): void {
  findProps(j, elementPath, ...propsNames).remove();
}

/**
 * Gets the computed value of a prop
 */
function getPropValue(j: JSCodeshift, prop: JSXAttribute): undefined | boolean | Literal["value"] | string {
  const value = prop.value;

  // boolean flag value (e.g. <Button disabled />)
  if (value === null) {
    return true;
  }

  // string value (e.g. <Button text="Click me" />)
  if (value?.type === "Literal") {
    return value.value;
  }

  // expression value (e.g. <Button text={...} />).
  if (value?.type === "JSXExpressionContainer") {
    if (value.expression.type === "Literal") {
      // e.g. <Button text={true} /> or <Button text={"text"} />
      return value.expression.value;
    }

    if (value.expression.type === "MemberExpression") {
      // e.g. <Button border={Box.borders.DEFAULT} />
      return j(value.expression).toSource();
    }
  }
  // can be very complex, we'll have to compare strings
  return value ? j(value).toSource() : undefined;
}

export function setPropValue(
  j: JSCodeshift,
  attributePath: ASTPath<JSXAttribute>,
  newValue: {
    value: string | number | boolean;
    type: typeof memberExpression | typeof literal;
  }
): void {
  if (typeof newValue.value !== "string") {
    const newValueIsTrue = typeof newValue.value === "boolean" && newValue.value;
    attributePath.node.value = newValueIsTrue ? null : j.jsxExpressionContainer(j.literal(newValue.value));
  } else {
    if (newValue.type === memberExpression) {
      const objectValue = j(`${newValue.value}`).find(j.ExpressionStatement).get().node.expression;
      attributePath.node.value = j.jsxExpressionContainer(objectValue);
    } else if (newValue.type === literal) {
      attributePath.node.value = j.literal(newValue.value);
    }
  }
}

/**
 * Checks if a Collection of props have the same value
 */
export function propsValueMatch(j: JSCodeshift, propsCollection: Collection<JSXAttribute>): boolean {
  const values = propsCollection.nodes().map(prop => getPropValue(j, prop));
  return values.every(value => value === values[0]);
}

/**
 * Perform a regular prop migration on a JSX element, and logs an error if conditions are not met
 * 1. If new prop is not found, update the prop name
 * 2. If both props are found, check if the values match
 *   - If they do, remove the old prop
 *   - If they don't, log an error
 */
export function migratePropsNames(
  j: JSCodeshift,
  elementPath: ASTPath<JSXElement>,
  filePath: string,
  componentName: string,
  propsNamesMappingOldToNew: Record<string, string>
): void {
  Object.entries(propsNamesMappingOldToNew).forEach(([deprecatedPropName, newPropName]) => {
    const props = findProps(j, elementPath, deprecatedPropName, newPropName);

    if (props.length !== 2) {
      updatePropName(j, elementPath, { [deprecatedPropName]: newPropName });
      return;
    }

    if (propsValueMatch(j, props)) {
      removeProp(j, elementPath, deprecatedPropName);
    } else {
      logPropMigrationError(filePath, componentName, deprecatedPropName, newPropName);
    }
  });
}

export function updatePropValues(
  j: JSCodeshift,
  elementPath: ASTPath<JSXElement>,
  propName: string,
  valuesMapping: Record<
    string,
    {
      value: string | number | boolean;
      type: typeof memberExpression | typeof literal;
    }
  >
): void {
  findProps(j, elementPath, propName).forEach(attributePath => {
    const currentPropValue = getPropValue(j, attributePath.node);
    if (currentPropValue !== undefined) {
      const newValue = valuesMapping[String(currentPropValue)];
      if (newValue !== undefined) {
        setPropValue(j, attributePath, newValue);
      }
    }
  });
}

export function updateStaticPropKeys(
  j: JSCodeshift,
  elementPath: ASTPath<JSXElement>,
  propName: string,
  keysMapping: Record<string, string>
) {
  findProps(j, elementPath, propName)
    .find(JSXExpressionContainer, { expression: { type: "MemberExpression" } })
    .find(MemberExpression)
    .find(MemberExpression)
    .forEach(attributePath => {
      const currentPropValue = attributePath.value;
      const currentProperty = currentPropValue?.property;
      if (currentProperty?.type !== "Identifier") return;
      const newValue = keysMapping[currentProperty.name];
      if (newValue === undefined) return;
      currentProperty.name = newValue;
    });
}

/**
 * Updates props that are using the component namespace to use the new namespace
 * e.g. <OldName size={OldName.sizes.XXL}> -> <NewName size={NewName.sizes.XXL}>
 * Should be used when updating specifiers and component jsx names
 */
export function updateComponentNamespaceProps(
  j: JSCodeshift,
  elementPath: ASTPath<JSXElement>,
  oldNamespace: string,
  newNamespace: string
) {
  j(elementPath)
    .find(JSXAttribute)
    .find(JSXExpressionContainer)
    .forEach(exprContainerPath => {
      j(exprContainerPath)
        .find(MemberExpression)
        .forEach(memberExprPath => {
          // Only update the base of the MemberExpression chain
          // e.g. <OldName size={OldName.attr.other.OldName.XXL}> would only update the first 'OldName'
          let base = memberExprPath.node.object;
          while (base.type === "MemberExpression") {
            base = base.object;
          }

          if (base.type === "Identifier" && base.name === oldNamespace) {
            base.name = newNamespace;
          }
        });
    });
}

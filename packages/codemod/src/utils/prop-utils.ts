import {
  ASTPath,
  Collection,
  JSCodeshift,
  JSXAttribute,
  JSXElement,
  JSXExpressionContainer,
  JSXIdentifier,
  JSXOpeningElement,
  MemberExpression
} from "jscodeshift";
import { logPropMigrationError } from "./report-utils";

/**
 * Updates a prop name in a JSX element
 */
export function updatePropName(
  PropCollection: Collection<JSXAttribute>,
  propsNamesMappingOldToNew: Record<string, string>
): void {
  PropCollection.forEach(attr => {
    const propName = attr.node.name.name;
    const newPropName = propsNamesMappingOldToNew[String(propName)];
    if (newPropName) {
      attr.node.name.name = newPropName;
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
      if (
        elementPath.node.openingElement.name.type === "JSXIdentifier" &&
        attr.parentPath.node.name.name !== elementPath.node.openingElement.name.name
      ) {
        return false;
      }
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
export function getPropValue(j: JSCodeshift, prop: JSXAttribute) {
  const value = prop.value;

  // boolean flag value (e.g. <Button disabled />)
  if (value === null) {
    return true;
  }

  // string value (e.g. <Button text="Click me" />)
  if (value?.type === "StringLiteral") {
    return value.value;
  }

  // expression value (e.g. <Button text={...} />).
  if (value?.type === "JSXExpressionContainer") {
    if (
      value.expression?.type === "StringLiteral" ||
      value.expression?.type === "NumericLiteral" ||
      value.expression?.type === "BooleanLiteral"
    ) {
      // e.g. <Button text={true} /> or <Button text={"text"} or <Button text={20} />
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
    type: "MemberExpression" | "Literal";
  }
): void {
  if (typeof newValue.value !== "string") {
    const newValueIsTrue = typeof newValue.value === "boolean" && newValue.value;
    attributePath.node.value = newValueIsTrue ? null : j.jsxExpressionContainer(j.literal(newValue.value));
  } else {
    if (newValue.type === "MemberExpression") {
      const objectValue = j(`${newValue.value}`).find(j.ExpressionStatement).get()?.node?.expression;
      if (!objectValue) return;
      attributePath.node.value = j.jsxExpressionContainer(objectValue);
    } else if (newValue.type === "Literal") {
      attributePath.node.value = j.literal(newValue.value);
    }
  }
}

export function addNewProp(
  j: JSCodeshift,
  elementPath: ASTPath<JSXElement>,
  propName: string,
  propValue: string,
  propValueType: "MemberExpression" | "Literal"
): void {
  if (isPropExists(j, elementPath, propName)) return;
  const propValueNode =
    propValueType === "MemberExpression" ? j.jsxExpressionContainer(j.identifier(propValue)) : j.literal(propValue);
  const newProp = j.jsxAttribute(j.jsxIdentifier(propName), propValueNode);
  elementPath.node.openingElement.attributes?.push(newProp);
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

    if (!props.length) {
      return;
    }

    if (props.length == 1) {
      updatePropName(props, { [deprecatedPropName]: newPropName });
      return;
    }

    if (props.length == 2) {
      if (propsValueMatch(j, props)) {
        removeProp(j, elementPath, deprecatedPropName);
      } else {
        logPropMigrationError(filePath, componentName, deprecatedPropName, newPropName);
      }
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
      type: "MemberExpression" | "Literal";
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

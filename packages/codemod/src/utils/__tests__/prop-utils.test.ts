import {
  isPropExists,
  migratePropsNames,
  removeProp,
  updateComponentNamespaceProps,
  updatePropValues,
  updateStaticPropKeys
} from "../prop-utils";
import jscodeshift, { ASTPath, JSXElement } from "jscodeshift";

function getElementPath(source: string): ASTPath<JSXElement> {
  const j = jscodeshift.withParser("tsx");
  const root = j(source);
  return root.find(j.JSXElement).paths()[0];
}

describe("Prop Utils", () => {
  describe("isPropExists", () => {
    const testCases = [
      {
        source: `<Component existingProp="value" />`,
        propName: "existingProp",
        expected: true,
        description: "should return true if prop exists"
      },
      {
        source: `<Component someOtherProp="value" />`,
        propName: "nonExistentProp",
        expected: false,
        description: "should return false if prop does not exist"
      },
      {
        source: `<Component someProp="value"><div someOtherProp="value"></div></Component>`,
        propName: "someOtherProp",
        expected: false,
        description: "should return false if prop doesn't exist on parent element"
      },
      {
        source: `<Component someOtherProp="value"><div someOtherProp="value"></div></Component>`,
        propName: "someOtherProp",
        expected: true,
        description: "should return true if prop exists on parent element"
      }
    ];

    testCases.forEach(({ source, propName, expected, description }) => {
      it(description, () => {
        const elementPath = getElementPath(source);
        const result = isPropExists(jscodeshift, elementPath, propName);
        expect(result).toBe(expected);
      });
    });
  });

  describe("removeProp", () => {
    const testCases = [
      {
        description: "should remove the specified prop",
        source: `<Component existingProp="value" otherProp="value" />`,
        propName: "existingProp",
        expected: `<Component otherProp="value" />`
      },
      {
        description: "should do nothing if the prop does not exist",
        source: `<Component existingProp="value" otherProp="value" />`,
        propName: "nonExistentProp",
        expected: `<Component existingProp="value" otherProp="value" />`
      }
    ];

    testCases.forEach(({ description, source, propName, expected }) => {
      it(description, () => {
        const elementPath = getElementPath(source);
        removeProp(jscodeshift, elementPath, propName);
        const output = jscodeshift(elementPath).toSource();
        expect(output).toBe(expected);
      });
    });
  });

  describe("migratePropsNames", () => {
    const testCases = [
      {
        description: "should rename old prop to new prop when the new prop is not found",
        source: `<Component oldProp="value" />`,
        expected: `<Component newProp="value" />`,
        propsNamesMappingOldToNew: { oldProp: "newProp" }
      },
      {
        description: "should remove the old prop if both props are found and their values match",
        source: `<Component oldProp="sameValue" newProp="sameValue" />`,
        expected: `<Component newProp="sameValue" />`,
        propsNamesMappingOldToNew: { oldProp: "newProp" }
      },
      {
        description: "should log an error if both props are found and their values do not match",
        source: `<Component oldProp="value1" newProp="value2" />`,
        expected: `<Component oldProp="value1" newProp="value2" />`,
        propsNamesMappingOldToNew: { oldProp: "newProp" }
      },
      {
        description: "should do nothing if neither prop is found",
        source: `<Component anotherProp="value" />`,
        expected: `<Component anotherProp="value" />`,
        propsNamesMappingOldToNew: { oldProp: "newProp" }
      }
    ];

    testCases.forEach(({ description, source, expected, propsNamesMappingOldToNew }) => {
      it(description, () => {
        const elementPath = getElementPath(source);
        migratePropsNames(jscodeshift, elementPath, "filePath.tsx", "Component", propsNamesMappingOldToNew);
        const output = jscodeshift(elementPath).toSource();
        expect(output).toBe(expected);
      });
    });
  });

  describe("updatePropValues", () => {
    const testCases = [
      {
        description: "should update string prop value based on the mapping",
        source: `<Component someProp="oldValue" />`,
        valuesMapping: {
          oldValue: { value: "newValue", type: "Literal" }
        },
        expected: `<Component someProp="newValue" />`
      },
      {
        description: "should update number prop value based on the mapping",
        source: `<Component someProp={1} />`,
        valuesMapping: {
          "1": { value: 42, type: "Literal" }
        },
        expected: `<Component someProp={42} />`
      },
      {
        description: "should update boolean prop value based on the mapping",
        source: `<Component someProp={true} />`,
        valuesMapping: {
          true: { value: false, type: "Literal" }
        },
        expected: `<Component someProp={false} />`
      },
      {
        description: "should update member expression prop value based on the mapping",
        source: `<Component someProp={OldNamespace.value} />`,
        valuesMapping: {
          "OldNamespace.value": { value: "NewNamespace.value", type: "MemberExpression" }
        },
        expected: `<Component someProp={NewNamespace.value} />`
      },
      {
        description: "should leave the prop unchanged if the value is not in the mapping",
        source: `<Component someProp="unchangedValue" />`,
        valuesMapping: {
          oldValue: { value: "newValue", type: "Literal" }
        },
        expected: `<Component someProp="unchangedValue" />`
      },
      {
        description: "should change value to enum",
        source: `<Component someProp />`,
        valuesMapping: {
          true: { value: "Dialog.sizes.SMALL", type: "MemberExpression" }
        },
        expected: `<Component someProp={Dialog.sizes.SMALL} />`
      },
      {
        description: "should change value to null if setting to true",
        source: `<Component someProp={false} />`,
        valuesMapping: {
          false: { value: true, type: "MemberExpression" }
        },
        expected: `<Component someProp />`
      }
    ];

    testCases.forEach(({ description, source, valuesMapping, expected }) => {
      it(description, () => {
        const elementPath = getElementPath(source);
        updatePropValues(jscodeshift, elementPath, "someProp", valuesMapping);
        const output = jscodeshift(elementPath).toSource();
        expect(output).toBe(expected);
      });
    });
  });

  describe("updateStaticPropKeys", () => {
    const testCases = [
      {
        description: "should update the static key from Dialog.size.SMALL to Dialog.sizes.SMALL",
        source: `<Component size={Dialog.size.SMALL} />`,
        propName: "size",
        keysMapping: { size: "sizes" },
        expected: `<Component size={Dialog.sizes.SMALL} />`
      },
      {
        description: "should leave the prop unchanged if the key is not in the mapping",
        source: `<Component size={Dialog.otherKey.SMALL} />`,
        propName: "size",
        keysMapping: { size: "sizes" },
        expected: `<Component size={Dialog.otherKey.SMALL} />`
      }
    ];

    testCases.forEach(({ description, source, propName, keysMapping, expected }) => {
      it(description, () => {
        const elementPath = getElementPath(source);
        updateStaticPropKeys(jscodeshift, elementPath, propName, keysMapping);
        const output = jscodeshift(elementPath).toSource();
        expect(output).toBe(expected);
      });
    });
  });

  describe("updateComponentNamespaceProps", () => {
    const testCases = [
      {
        description: "should update the namespace from OldNamespace to NewNamespace",
        source: `<Component size={OldNamespace.size.SMALL} />`,
        oldNamespace: "OldNamespace",
        newNamespace: "NewNamespace",
        expected: `<Component size={NewNamespace.size.SMALL} />`
      },
      {
        description: "should not change anything if the namespace does not match",
        source: `<Component size={DifferentNamespace.size.SMALL} />`,
        oldNamespace: "OldNamespace",
        newNamespace: "NewNamespace",
        expected: `<Component size={DifferentNamespace.size.SMALL} />`
      },
      {
        description: "should handle multiple occurrences of the namespace",
        source: `<Component size={OldNamespace.size.SMALL} weight={OldNamespace.weight.HEAVY} />`,
        oldNamespace: "OldNamespace",
        newNamespace: "NewNamespace",
        expected: `<Component size={NewNamespace.size.SMALL} weight={NewNamespace.weight.HEAVY} />`
      }
    ];

    testCases.forEach(({ description, source, oldNamespace, newNamespace, expected }) => {
      it(description, () => {
        const elementPath = getElementPath(source);
        updateComponentNamespaceProps(jscodeshift, elementPath, oldNamespace, newNamespace);
        const output = jscodeshift(elementPath).toSource();
        expect(output).toBe(expected);
      });
    });
  });
});

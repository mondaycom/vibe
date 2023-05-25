import { iconsMetaData } from "monday-ui-style/src/Icons/iconsMetaData";
import * as AllIcons from "../../components/Icon/Icons";
import { useCallback, useMemo, useState } from "react";
import { action } from "@storybook/addon-actions";

const allowedIcons = iconsMetaData.reduce(
  (acc, icon) => {
    const Component = AllIcons[icon.file.split(".")[0]];
    acc.options.push(icon.name);
    acc.mapping[icon.name] = Component;

    return acc;
  },
  { options: [], mapping: {} }
);

function parseStringForEnums(componentName, enumName, enumObj) {
  let returnValue;

  for (const key of Object.keys(enumObj)) {
    if (returnValue) returnValue = `${returnValue} | ${parseStringForEnum(componentName, enumName, key)}`;
    else returnValue = parseStringForEnum(componentName, enumName, key);
  }

  return returnValue;
}

function parseStringForEnum(componentName, enumName, enumKey) {
  return `${componentName}.${enumName}.${enumKey}`;
}

/**
 * Creates a decorator which maps a callback prop to an input prop.
 * For example: mapping the onChange callback of a Select component to its currentValue prop.
 * Useful for adding interactivity to stories of controlled components.
 * Additionally, the callback will trigger a Storybook action, that can be seen on the Actions tab.
 * @param {string} actionName - the name of the action prop of the component in the story. For example, "setValue" or "onChange".
 * @param {string} linkedToPropValue - the name of the prop which should be updated when the prop of "actionName" is called. For example, "value".
 * @returns A decorate for storybook which updates the {@link linkedToPropValue} input of the component, whenever {@link actionName} is called.
 */
function createMappedActionToInputPropDecorator(actionName, linkedToPropValue) {
  return (Story, context) => {
    const [propValue, setPropValue] = useState(context.initialArgs[linkedToPropValue]);
    const createAction = useMemo(() => action(actionName), []);

    const injectedCallback = useCallback(
      newPropValue => {
        setPropValue(newPropValue);
        createAction(newPropValue);
      },
      [setPropValue, createAction]
    );

    context.args[actionName] = injectedCallback;
    context.args[linkedToPropValue] = propValue;

    return Story();
  };
}

export function createStoryMetaSettings({ component, enumPropNamesArray, iconPropNamesArray, actionPropsArray }) {
  const argTypes = {};
  const decorators = [];

  // set enum allowed values inside argsTypes object
  enumPropNamesArray?.forEach(prop => {
    let enumName;
    if (prop instanceof Object) {
      enumName = prop.enumName;
      prop = prop.propName;
    } else {
      enumName = `${prop}s`;
    }
    const enums = component[enumName];
    if (enums && enums instanceof Object) {
      // docgen is the parser we using for parsing all our component prop types, default props and
      // other component data (it's configure under storybook main.js file)
      const componentName = component.__docgenInfo.displayName;
      argTypes[prop] = {
        options: enums,
        labels: enums,
        table: {
          type: {
            summary: parseStringForEnums(componentName, enumName, enums),
            // For not displaying box for enumns in controls of js not converted components
            detail: null
          }
        }
      };
    }
  });

  // set icon allowed values inside argsTypes object
  iconPropNamesArray?.forEach(propName => {
    argTypes[propName] = {
      options: allowedIcons.options,
      mapping: allowedIcons.mapping,
      control: {
        type: "select"
      }
    };
  });

  actionPropsArray?.forEach(actionProp => {
    if (typeof actionProp === "string") {
      argTypes[actionProp] = { action: actionProp };
    } else if (actionProp?.name && actionProp.linkedToPropValue) {
      // we assume that actionPropsArray is static. If it changes, things may break, since internally we call React.useState for the story decorator.
      decorators.push(createMappedActionToInputPropDecorator(actionProp.name, actionProp.linkedToPropValue));
    }
  });

  return { argTypes, decorators };
}

export default createStoryMetaSettings;

import React, { useState, useCallback, useMemo } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from "@storybook/addon-actions";
import { iconsMetaData } from "monday-ui-style/src/Icons/iconsMetaData";
import * as AllIcons from "../../components/Icon/Icons";

export function createComponentTemplate(ComponentClass) {
  // eslint-disable-next-line react/display-name
  return args => <ComponentClass {...args} />;
}

const allowedIcons = iconsMetaData.reduce(
  (acc, icon) => {
    const Component = AllIcons[icon.file.split(".")[0]];
    acc.options.push(icon.name);
    acc.mapping[icon.name] = Component;

    return acc;
  },
  { options: [], mapping: {} }
);

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
      argTypes[prop] = {
        options: Object.values(enums)
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

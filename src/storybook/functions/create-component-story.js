import React, { useState, useCallback, useMemo } from "react";
import { iconsMetaData } from "monday-ui-style/src/Icons/iconsMetaData";
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from "@storybook/addon-actions";
import * as AllIcons from "../../components/Icon/Icons";

export function createComponentTemplate(ComponentClass) {
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

  // set enum allowed values inside argsTypes object
  enumPropNamesArray?.forEach(propName => {
    const enums = component[`${propName}s`];
    if (enums && enums instanceof Object) {
      argTypes[propName] = {
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

  actionPropsArray?.forEach(propName => {
    argTypes[propName] = { action: propName };
  });

  return argTypes;
}

/**
 * Creates a decorator which maps a callback prop to an input prop.
 * Useful for adding interactivity to stories of controlled components.
 * For example: mapping the onChange callback of a Select component to its currentValue prop.
 * Additionally, the callback will trigger a Storybook action, that can be seen on the Actions tab.
 */
export function createControlledInputDecorator({ fromCbProp, toProp }) {
  return (Story, context) => {
    const [propValue, setPropValue] = useState(context.initialArgs[toProp]);
    const createAction = useMemo(() => action(fromCbProp), []);

    const injectedCallback = useCallback(
      newPropValue => {
        setPropValue(newPropValue);
        createAction(newPropValue);
      },
      [setPropValue, createAction]
    );

    context.args[fromCbProp] = injectedCallback;
    context.args[toProp] = propValue;

    return Story();
  };
}

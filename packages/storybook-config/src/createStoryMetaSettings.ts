import { useCallback, useMemo, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { AllowedIcons, IconMetaData, StoryMetaSettingsArgs, StoryMetaSettingsResult } from './types';
import { ArgTypes } from '@storybook/types';
import { Decorator } from '@storybook/react';

function parseStringForEnums(componentName: string, enumName: string, enumObj: { [key: string]: unknown }) {
  let returnValue;
  for (const key of Object.keys(enumObj)) {
    if (returnValue) returnValue = `${returnValue} | ${parseStringForEnum(componentName, enumName, key)}`;
    else returnValue = parseStringForEnum(componentName, enumName, key);
  }

  return returnValue;
}

function parseStringForEnum(componentName: string, enumName: string, enumKey: string) {
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
function createMappedActionToInputPropDecorator(actionName: string, linkedToPropValue: string): Decorator {
  return (Story, context) => {
    const [propValue, setPropValue] = useState(context.initialArgs[linkedToPropValue]);
    const createAction = useMemo(() => action(actionName), []);

    const injectedCallback = useCallback(
      (newPropValue: unknown) => {
        setPropValue(newPropValue);
        createAction(newPropValue);
      },
      [setPropValue, createAction],
    );

    context.args[actionName] = injectedCallback;
    context.args[linkedToPropValue] = propValue;

    return Story();
  };
}

export function createStoryMetaSettings({
  component,
  enumPropNamesArray,
  iconPropNamesArray,
  actionPropsArray,
  iconsMetaData,
  allIconsComponents,
  ignoreControlsPropNamesArray,
}: StoryMetaSettingsArgs): StoryMetaSettingsResult {
  const argTypes: ArgTypes = {};
  const decorators: Decorator[] = [];
  const allowedIcons = iconsMetaData?.reduce(
    (acc: AllowedIcons, icon: IconMetaData) => {
      const Component = allIconsComponents[icon.file.split('.')[0]];
      acc.options.push(icon.name);
      acc.mapping[icon.name] = Component;

      return acc;
    },
    { options: [], mapping: {} },
  );

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
      // eslint-disable-next-line no-underscore-dangle
      const componentName = component.__docgenInfo.displayName;
      argTypes[prop] = {
        options: enums,
        labels: enums,
        table: {
          type: {
            summary: parseStringForEnums(componentName, enumName, enums),
            // For not displaying box for enumns in controls of js not converted components
            detail: null,
          },
        },
      };
    }
  });

  // set icon allowed values inside argsTypes object
  iconPropNamesArray?.forEach(propName => {
    argTypes[propName] = {
      options: allowedIcons?.options,
      mapping: allowedIcons?.mapping,
      control: {
        type: 'select',
      },
    };
  });

  actionPropsArray?.forEach(actionProp => {
    if (typeof actionProp === 'string') {
      argTypes[actionProp] = { action: actionProp, control: false };
    } else if (actionProp?.name && actionProp.linkedToPropValue) {
      // we assume that actionPropsArray is static. If it changes, things may break, since internally we call React.useState for the story decorator.
      decorators.push(createMappedActionToInputPropDecorator(actionProp.name, actionProp.linkedToPropValue));
    }
  });

  // If prop type is ElementContent, set text control, otherwise it's displaying as object
  const componentProps = component?.__docgenInfo?.props;
  if (componentProps) {
    Object.keys(componentProps)?.forEach(propName => {
      const prop = componentProps[propName];
      if (prop?.type?.name === 'ElementContent') {
        argTypes[propName] = { control: { type: 'text' } };
      }
    });
  }

  // Disable controls for specific props
  ignoreControlsPropNamesArray?.forEach((propName: string) => {
    if (argTypes[propName] instanceof Object) {
      argTypes[propName] = { ...argTypes[propName], control: false };
    } else {
      argTypes[propName] = { control: false };
    }
  });

  return { argTypes, decorators };
}

export default createStoryMetaSettings;

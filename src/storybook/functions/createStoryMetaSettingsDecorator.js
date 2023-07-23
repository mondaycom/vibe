import { iconsMetaData } from "monday-ui-style/src/Icons/iconsMetaData";
import * as AllIcons from "../../components/Icon/Icons";
import { createStoryMetaSettings } from "vibe-storybook-components";

/**
 * Decorator on createStoryMetaSettings from vibe-storybook-components - adds icons metadata and icons components to function arguments
 */
export function createStoryMetaSettingsDecorator({
  component,
  enumPropNamesArray,
  iconPropNamesArray,
  actionPropsArray
}) {
  return createStoryMetaSettings({
    component,
    enumPropNamesArray,
    iconPropNamesArray,
    actionPropsArray,
    iconsMetaData,
    allIconsComponents: AllIcons
  });
}

export default createStoryMetaSettingsDecorator;

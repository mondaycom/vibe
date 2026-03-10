import iconsMetaData from "@ezds/icons/meta";
import { createStoryMetaSettings } from "@ezds/storybook-blocks";
import { type CreateStoryMetaSettingsArgs } from "@ezds/storybook-blocks/types";
import * as AllIcons from "@ezds/icons";

/**
 * Decorator on createStoryMetaSettings from @ezds/storybook-blocks - adds icons metadata and icons components to function arguments
 */
export function createStoryMetaSettingsDecorator({
  component,
  enumPropNamesArray,
  iconPropNamesArray,
  actionPropsArray,
  ignoreControlsPropNamesArray
}: Omit<CreateStoryMetaSettingsArgs, "allIconsComponents" | "iconsMetaData">) {
  return createStoryMetaSettings({
    component,
    enumPropNamesArray,
    iconPropNamesArray,
    actionPropsArray,
    ignoreControlsPropNamesArray,
    iconsMetaData,
    allIconsComponents: AllIcons
  });
}

export default createStoryMetaSettingsDecorator;

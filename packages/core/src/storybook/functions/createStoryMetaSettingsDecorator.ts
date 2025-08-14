import iconsMetaData from "@vibe/icons/meta";
import { createStoryMetaSettings } from "vibe-storybook-components";
import { type CreateStoryMetaSettingsArgs } from "vibe-storybook-components/types";
import * as AllIcons from "@vibe/icons";

/**
 * Decorator on createStoryMetaSettings from vibe-storybook-components - adds icons metadata and icons components to function arguments
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

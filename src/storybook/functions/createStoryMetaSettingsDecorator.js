import { iconsMetaData } from "monday-ui-style/src/Icons/iconsMetaData";
import * as AllIcons from "../../components/Icon/Icons";
import { createStoryMetaSettings } from "monday-ui-storybook-blocks";

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

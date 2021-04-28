import { iconsMetaData } from "monday-ui-style/src/Icons/iconsMetaData";
// eslint-disable-next-line import/no-extraneous-dependencies
import { select } from "@storybook/addon-knobs";
import * as AllIcons from "../../Icon/Icons";

const getIcons = () => {
  return iconsMetaData.reduce((acc, icon) => {
    const Component = AllIcons[icon.file.split(".")[0]];
    if (!Component) {
      console.error("missing -  ", icon.file);
      return acc;
    }
    acc[Component.name] = Component;
    return acc;
  }, {});
};

const getIconOptions = () => {
  const icons = getIcons();
  return Object.keys(icons).reduce((acc, iconName) => {
    acc[iconName] = iconName;
    return acc;
  }, {});
};

export const selectIcon = (title, defaultIconName) => {
  const icons = getIcons();
  const iconOptions = getIconOptions();
  const iconName = select(title, iconOptions, defaultIconName);
  return icons[iconName];
};

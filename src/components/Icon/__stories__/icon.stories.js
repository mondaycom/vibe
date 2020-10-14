import React from "react";
import { text, number, select, boolean } from "@storybook/addon-knobs";
import { iconsMetaData } from "monday-ui-style/src/Icons/iconsMetaData";
import Icon from "../Icon";
import DescriptionLabel from "../../storybook-helpers/description-label/description-label";
import FlexLayout from "../../storybook-helpers/flex-layout/flex-layout";
import * as AllIcons from "../Icons";

export const Icons = () => {
  console.log("AllIcons:", AllIcons);

  return (
    <div style={{ display: "flex" }}>
      {iconsMetaData.map(icon => {
        const Component = AllIcons[icon.file.split(".")[0]];
        console.log("Component:", Component);
        return <IconComponent {...icon} Component={Component} />;
      })}
    </div>
  );
};

function IconComponent({ name, description, Component }) {
  return (
    <FlexLayout centerize>
      <DescriptionLabel>{name}</DescriptionLabel>
      <div style={{ width: "16px", height: "16px" }}>
        <Component size={16} />
      </div>
    </FlexLayout>
  );
}

export default {
  title: "Components/Icon",
  component: Icon
};

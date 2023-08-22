import React from "react";
import ExpandCollapse from "../ExpandCollapse";
import Text from "../../Text/Text";
import Icon from "../../Icon/Icon";
import Robot from "../../Icon/Icons/components/Robot";
import { Heading } from "../../../next/next";
import "./ExpandCollapse.stories.scss";

export const ExpandCollapseCustomHeadingComponent = () => {
  return <Heading type={Heading.types.H3}>Any component you want</Heading>;
};

export const expandCollapseTemplate = args => {
  return (
    <div className="expandCollapse">
      <ExpandCollapse {...args}>
        <Text maxLines={2}>Insert any component that you want, here is a robot for you</Text>
        <Icon iconType={Icon.type.SVG} icon={Robot} iconSize={40} clickable={false} />
      </ExpandCollapse>
    </div>
  );
};

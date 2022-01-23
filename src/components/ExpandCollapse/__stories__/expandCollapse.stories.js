import React from "react";
import { withPerformance } from "storybook-addon-performance";
import ExpandCollapse from "../ExpandCollapse";
import Icon from "../../Icon/Icon";
import Robot from "../../Icon/Icons/components/Robot";
import "./expandCollapse.stories.scss";

function HeaderComponent() {
  return <span>I can be anything</span>;
}

function H1Component() {
  return <h1>Any component you want</h1>;
}
export const Sandbox = () => {
  const width = 300;
  const height = 200;

  return (
    <div style={{ width, height }}>
      <ExpandCollapse headerComponentRenderer={HeaderComponent}>
        <h2>insert any component you want</h2>
        <p>here is a robot for you</p>
        <Icon iconType={Icon.type.SVG} icon={Robot} iconSize="52px" tabindex="-1" clickable={true} />
      </ExpandCollapse>
    </div>
  );
};

export const OpenByDefault = () => (
  <div>
    <ExpandCollapse className="expandCollapse" defaultOpenState={true} headerComponentRenderer={H1Component}>
      <Icon iconType={Icon.type.SVG} icon={Robot} iconSize="52px" tabindex="-1" clickable={true} />
    </ExpandCollapse>
  </div>
);

export default {
  title: "Components|ExpandCollapse",
  component: ExpandCollapse,
  decorators: [withPerformance]
};

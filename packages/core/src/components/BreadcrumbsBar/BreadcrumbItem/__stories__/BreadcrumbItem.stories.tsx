import React from "react";
import { createStoryMetaSettingsDecorator } from "../../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import BreadcrumbsBar from "../../BreadcrumbsBar";
import BreadcrumbItem from "../BreadcrumbItem";
import { Workspace } from "../../../Icon/Icons";
import "./BreadcrumbItem.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: BreadcrumbItem,
  iconPropNamesArray: ["icon"]
});

const breadcrumbItemTemplate = createComponentTemplate(BreadcrumbItem);

export default {
  title: "Navigation/BreadcrumbsBar/BreadcrumbItem",
  component: BreadcrumbItem,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: breadcrumbItemTemplate.bind({}),
  name: "Overview",

  args: {
    text: "Workspace",
    icon: Workspace
  }
};

export const States = {
  render: () => (
    <div className="monday-storybook-breadcrumb-item_column-wrapper">
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Link</span>
        <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
          <BreadcrumbItem text="Workspace" icon={Workspace} link="https://www.google.com" />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Function</span>
        <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
          <BreadcrumbItem
            text="Workspace"
            icon={Workspace}
            onClick={() => {
              alert("Hello");
            }}
          />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Disabled</span>
        <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION}>
          <BreadcrumbItem text="Workspace" icon={Workspace} disabled />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Current</span>
        <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION}>
          <BreadcrumbItem text="Workspace" icon={Workspace} isCurrent />
        </BreadcrumbsBar>
      </div>
    </div>
  ),

  name: "States"
};

export const WithIcon = {
  render: () => (
    <div className="monday-storybook-breadcrumb-item_column-wrapper">
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>With Icon</span>
        <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION}>
          <BreadcrumbItem text="Workspace" icon={Workspace} />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Without Icon</span>
        <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION}>
          <BreadcrumbItem text="Workspace" />
        </BreadcrumbsBar>
      </div>
    </div>
  ),

  name: "With icon"
};

import React from "react";
import { createStoryMetaSettingsDecorator } from "../../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import BreadcrumbsBar from "../../BreadcrumbsBar";
import BreadcrumbItem from "../BreadcrumbItem";
import { Workspace } from "@vibe/icons";
import "./BreadcrumbItem.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: BreadcrumbItem,
  iconPropNamesArray: ["icon"]
});

const breadcrumbItemTemplate = createComponentTemplate(BreadcrumbItem);

export default {
  title: "Components/BreadcrumbsBar/BreadcrumbItem",
  component: BreadcrumbItem,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { Workspace }
      }
    }
  }
};

export const Overview = {
  render: breadcrumbItemTemplate.bind({}),
  name: "Overview",

  args: {
    text: "Workspace",
    icon: Workspace
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const States = {
  render: () => (
    <div className="monday-storybook-breadcrumb-item_column-wrapper">
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Link</span>
        <BreadcrumbsBar type="navigation">
          <BreadcrumbItem text="Workspace" icon={Workspace} link="https://www.google.com" />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Function</span>
        <BreadcrumbsBar type="navigation">
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
        <BreadcrumbsBar type="indication">
          <BreadcrumbItem text="Workspace" icon={Workspace} disabled />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Current</span>
        <BreadcrumbsBar type="indication">
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
        <BreadcrumbsBar type="indication">
          <BreadcrumbItem text="Workspace" icon={Workspace} />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Without Icon</span>
        <BreadcrumbsBar type="indication">
          <BreadcrumbItem text="Workspace" />
        </BreadcrumbsBar>
      </div>
    </div>
  ),

  name: "With icon"
};

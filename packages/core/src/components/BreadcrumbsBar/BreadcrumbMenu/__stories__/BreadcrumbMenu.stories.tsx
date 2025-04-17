import React from "react";
import { createStoryMetaSettingsDecorator } from "../../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import BreadcrumbsBar from "../../BreadcrumbsBar";
import BreadcrumbMenu from "../BreadcrumbMenu";
import BreadcrumbMenuItem from "../BreadcrumbMenuItem/BreadcrumbMenuItem";
import { Workspace, Filter } from "@vibe/icons";
import "./BreadcrumbMenu.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: BreadcrumbMenu
});

const breadcrumbMenuTemplate = createComponentTemplate(BreadcrumbMenu);

export default {
  title: "Components/BreadcrumbsBar/BreadcrumbMenu",
  component: BreadcrumbMenu,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: breadcrumbMenuTemplate.bind({}),
  name: "Overview",

  args: {
    children: [
      <BreadcrumbMenuItem key="1" title="Option 1" />,
      <BreadcrumbMenuItem key="2" title="Option 2" />,
      <BreadcrumbMenuItem key="3" title="Option 3" />
    ]
  }
};

export const States = {
  render: () => (
    <div className="monday-storybook-breadcrumb-menu_column-wrapper">
      <div className="monday-storybook-breadcrumb-menu_row-wrapper">
        <span>Default</span>
        <BreadcrumbsBar type="navigation">
          <BreadcrumbMenu>
            <BreadcrumbMenuItem title="Option 1" icon={Workspace} />
            <BreadcrumbMenuItem title="Option 2" icon={Filter} />
            <BreadcrumbMenuItem title="Option 3" />
          </BreadcrumbMenu>
        </BreadcrumbsBar>
      </div>
    </div>
  ),

  name: "States"
};

export const WithLinks = {
  render: () => (
    <div className="monday-storybook-breadcrumb-menu_column-wrapper">
      <div className="monday-storybook-breadcrumb-menu_row-wrapper">
        <span>With Links</span>
        <BreadcrumbsBar type="indication">
          <BreadcrumbMenu>
            <BreadcrumbMenuItem title="Google" icon={Workspace} link="https://www.google.com" />
            <BreadcrumbMenuItem title="Monday" icon={Filter} link="https://www.monday.com" />
          </BreadcrumbMenu>
        </BreadcrumbsBar>
      </div>
    </div>
  ),

  name: "With Links"
}; 
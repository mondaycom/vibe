import React from "react";
import { createStoryMetaSettingsDecorator } from "../../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import BreadcrumbsBar from "../../BreadcrumbsBar";
import BreadcrumbMenu from "../BreadcrumbMenu";
import BreadcrumbMenuItem from "../BreadcrumbMenuItem/BreadcrumbMenuItem";
import { Workspace, Filter, Menu } from "@vibe/icons";
import "./BreadcrumbMenu.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: BreadcrumbMenu,
  iconPropNamesArray: ["icon"]
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
    text: "Menu Options",
    icon: Menu,
    children: [
      <BreadcrumbMenuItem key="1" text="Option 1" />,
      <BreadcrumbMenuItem key="2" text="Option 2" />,
      <BreadcrumbMenuItem key="3" text="Option 3" />
    ]
  }
};

export const States = {
  render: () => (
    <div className="monday-storybook-breadcrumb-menu_column-wrapper">
      <div className="monday-storybook-breadcrumb-menu_row-wrapper">
        <span>Default</span>
        <BreadcrumbsBar type="navigation">
          <BreadcrumbMenu text="Menu Options" icon={Menu}>
            <BreadcrumbMenuItem text="Option 1" icon={Workspace} />
            <BreadcrumbMenuItem text="Option 2" icon={Filter} />
            <BreadcrumbMenuItem text="Option 3" />
          </BreadcrumbMenu>
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-menu_row-wrapper">
        <span>With onClick</span>
        <BreadcrumbsBar type="navigation">
          <BreadcrumbMenu text="Menu Options" icon={Menu}>
            <BreadcrumbMenuItem
              text="Option 1"
              icon={Workspace}
              onClick={() => {
                alert("Clicked option 1");
              }}
            />
            <BreadcrumbMenuItem
              text="Option 2"
              icon={Filter}
              onClick={() => {
                alert("Clicked option 2");
              }}
            />
          </BreadcrumbMenu>
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-menu_row-wrapper">
        <span>Disabled</span>
        <BreadcrumbsBar type="indication">
          <BreadcrumbMenu text="Menu Options" icon={Menu} disabled>
            <BreadcrumbMenuItem text="Option 1" icon={Workspace} />
            <BreadcrumbMenuItem text="Option 2" icon={Filter} />
          </BreadcrumbMenu>
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-menu_row-wrapper">
        <span>Current</span>
        <BreadcrumbsBar type="indication">
          <BreadcrumbMenu text="Menu Options" icon={Menu} isCurrent>
            <BreadcrumbMenuItem text="Option 1" icon={Workspace} />
            <BreadcrumbMenuItem text="Option 2" icon={Filter} />
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
          <BreadcrumbMenu text="Menu Options" icon={Menu}>
            <BreadcrumbMenuItem text="Google" icon={Workspace} link="https://www.google.com" />
            <BreadcrumbMenuItem text="Monday" icon={Filter} link="https://www.monday.com" />
          </BreadcrumbMenu>
        </BreadcrumbsBar>
      </div>
    </div>
  ),

  name: "With Links"
}; 
import React from "react";
import BreadcrumbsBar, { BreadcrumbBarProps } from "../BreadcrumbsBar";
import BreadcrumbItem, { BreadcrumbItemProps } from "../BreadcrumbItem/BreadcrumbItem";
import Avatar from "../../Avatar/Avatar";
import { Board, Folder, Group, Workspace, Item } from "@vibe/icons";
import person3 from "./assets/person3.png";
import { createStoryMetaSettingsDecorator } from "../../../storybook/functions/createStoryMetaSettingsDecorator";
import "./BreadcrumbsBar.stories.scss";
import BreadcrumbMenu from "../BreadcrumbMenu/BreadcrumbMenu";
import BreadcrumbMenuItem from "../BreadcrumbMenu/BreadcrumbMenuItem/BreadcrumbMenuItem";

const metaSettings = createStoryMetaSettingsDecorator({
  component: BreadcrumbsBar
});

const breadcrumbsBarTemplate = (args: BreadcrumbBarProps) => {
  return (
    <BreadcrumbsBar {...args}>
      {args.children &&
        // @ts-ignore
        args.children.map((item: BreadcrumbItemProps) => (
          <BreadcrumbItem key={item.text} text={item.text} icon={item.icon} />
        ))}
    </BreadcrumbsBar>
  );
};

export default {
  title: "Components/BreadcrumbsBar/BreadcrumbsBar",
  component: BreadcrumbsBar,
  argTypes: {
    ...metaSettings.argTypes,
    children: {
      description: "Breadcrumb item, each containing text and an optional icon, or a BreadcrumbMenu",
      control: "object",
      table: {
        type: {
          summary: "(BreadcrumbItemProps | BreadcrumbMenuProps)[]",
          detail: `{
            text: string;
            icon?: React.ReactNode;
            children?: BreadcrumbMenuItemProps[];
          }[]`
        },
        defaultValue: {
          summary: `[ { text: "Workspace", icon: <IconName /> } ]`
        }
      }
    }
  },
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      transformSource: (src: string) => {
        return src.replace(/icon:\s*function[^{]+\{[^}]+\}/g, "icon: <Icon />");
      },
      liveEdit: {
        scope: { Board, Group }
      }
    }
  }
};

export const Overview = {
  render: breadcrumbsBarTemplate.bind({}),
  name: "Overview",

  args: {
    children: [
      {
        text: "Workspace",
        icon: Workspace
      },
      {
        text: "Folder",
        icon: Folder
      },
      {
        text: "Board",
        icon: Board
      },
      {
        text: "Group",
        icon: Group
      }
    ]
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const TextOnly = {
  render: () => (
    <BreadcrumbsBar type="indication">
      <BreadcrumbItem text="Workspace" isCurrent />
      <BreadcrumbItem text="Folder" />
      <BreadcrumbItem text="Board" />
      <BreadcrumbItem text="Group" />
    </BreadcrumbsBar>
  ),

  name: "Text only"
};

export const WithIcons = {
  render: () => (
    <BreadcrumbsBar type="navigation">
      <BreadcrumbItem text="Workspace" icon={Workspace} isCurrent />
      <BreadcrumbItem text="Folder" icon={Folder} />
      <BreadcrumbItem text="Board" icon={Board} />
      <BreadcrumbItem text="Group" icon={Group} />
    </BreadcrumbsBar>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Workspace, Folder }
      }
    }
  },

  name: "With icons"
};

export const NavigatableBreadcrumbs = {
  render: () => (
    <div className="monday-storybook-breadcrumbs-bar_inline-wrapper">
      <Avatar size="medium" src={person3} type="img" />
      <div className="monday-storybook-breadcrumbs-bar_column-wrapper">
        <span className="monday-storybook-breadcrumbs-bar_title">Rotem Dekel</span>
        <BreadcrumbsBar type="navigation">
          <BreadcrumbItem text="User research" icon={Board} />
          <BreadcrumbItem text="Video sessions" icon={Group} />
        </BreadcrumbsBar>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { person3 }
      }
    }
  },

  name: "Navigatable breadcrumbs"
};

export const WithBreadcrumbMenu = {
  render: () => (
    <BreadcrumbsBar type="navigation">
      <BreadcrumbItem text="Board" icon={Board} />
      <BreadcrumbItem text="Group" icon={Group} />
      <BreadcrumbMenu>
        <BreadcrumbMenuItem title="Item 1" onClick={() => alert("Item 1 clicked")} />
        <BreadcrumbMenuItem title="Item 2" link="https://www.monday.com" />
        <BreadcrumbMenuItem title="Item 3" link="https://www.monday.com" />
      </BreadcrumbMenu>
      <BreadcrumbItem text="My Item" icon={Item} isCurrent />
    </BreadcrumbsBar>
  ),

  name: "With Breadcrumb Menu"
};

import React from "react";
import {
  BreadcrumbsBar,
  type BreadcrumbBarProps,
  Avatar,
  Flex,
  Text,
  BreadcrumbMenu,
  BreadcrumbMenuItem,
  BreadcrumbItem,
  type BreadcrumbItemProps
} from "@vibe/core";
import { Board, Folder, Group, Workspace, Item } from "@vibe/icons";
import person3 from "./assets/person3.png";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import styles from "./BreadcrumbsBar.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: BreadcrumbsBar
});

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
        scope: { Board, Group, Item }
      }
    }
  }
};

export const Overview = {
  render: (args: BreadcrumbBarProps) => (
    <BreadcrumbsBar {...args}>
      {args.children &&
        (args.children as BreadcrumbItemProps[]).map(item => (
          <BreadcrumbItem key={item.text} text={item.text} icon={item.icon} />
        ))}
    </BreadcrumbsBar>
  ),
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
    <Flex gap="small">
      <Avatar size="medium" src={person3} type="img" />
      <div className={styles.list}>
        <Text type="text1" weight="medium">
          Rotem Dekel
        </Text>
        <BreadcrumbsBar type="navigation">
          <BreadcrumbItem text="User research" icon={Board} />
          <BreadcrumbItem text="Video sessions" icon={Group} />
        </BreadcrumbsBar>
      </div>
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { styles, person3 }
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
  )
};

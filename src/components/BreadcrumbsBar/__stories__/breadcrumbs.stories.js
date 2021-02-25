import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import BreadcrumbsBar from "../BreadcrumbsBar";
import { BreadcrumbItem } from "../BreadcrumbItem/BreadcrumbItem";
import BoardIcon from "../../Icon/Icons/components/Board";
import WorkspaceIcon from "../../Icon/Icons/components/Workspace";
import GroupIcon from "../../Icon/Icons/components/Group";
import ItemIcon from "../../Icon/Icons/components/Item";
import StoryLine from "../../../StoryBookComponents/StoryLink/StoryLine";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";

export const Sandbox = () => (
  <div style={{ width: "500px" }}>
    <BreadcrumbsBar hasHoverEffect={true}>
      <BreadcrumbItem
        text={text("First breadcrumb text", "Workspace")}
        icon={WorkspaceIcon}
        isClickable={boolean("First is clickable", true)}
        link="https://www.google.com"
        isDisabled={boolean("First is disabled", false)}
        isCurrent={boolean("First is current", false)}
      />
      <BreadcrumbItem
        text={text("Second breadcrumb text", "Board")}
        icon={BoardIcon}
        isClickable={boolean("Second is clickable", false)}
        link="https://www.google.com"
        isDisabled={boolean("Second is disabled", false)}
        isCurrent={boolean("Second is current", false)}
      />
      <BreadcrumbItem
        text={text("Third breadcrumb text", "Group")}
        icon={GroupIcon}
        isClickable={boolean("Third is clickable", false)}
        func={() => {
          alert("Hello");
        }}
        isDisabled={boolean("Third is disabled", true)}
        isCurrent={boolean("Third is current", false)}
      />
      <BreadcrumbItem
        text={text("Fourth breadcrumb text", "Item")}
        icon={ItemIcon}
        func={() => {
          alert("Hello");
        }}
        isDisabled={boolean("Fourth is disabled", false)}
        isClickable={boolean("Fourth is clickable", true)}
        isCurrent={boolean("Fourth is current", true)}
      />
    </BreadcrumbsBar>
  </div>
);

export const BreadcrumbsTypes = () => {
  return (
    <div style={{ width: 1500 }}>
      <FlexLayout>
        <StoryLine title="Link">
          <BreadcrumbsBar hasHoverEffect={true}>
            <BreadcrumbItem text="Workspace" icon={WorkspaceIcon} isClickable={true} link="https://www.google.com" />
            <BreadcrumbItem text="Board" icon={BoardIcon} isClickable={true} link="https://www.google.com" />
            <BreadcrumbItem text="Group" icon={GroupIcon} isClickable={true} link="https://www.google.com" />
            <BreadcrumbItem text="Item" icon={ItemIcon} isClickable={true} link="https://www.google.com" />
          </BreadcrumbsBar>
        </StoryLine>
      </FlexLayout>

      <FlexLayout>
        <StoryLine title="Function">
          <BreadcrumbsBar hasHoverEffect={true}>
            <BreadcrumbItem
              text="Workspace"
              icon={WorkspaceIcon}
              isClickable={true}
              func={() => {
                alert("Hello");
              }}
            />
            <BreadcrumbItem
              text="Board"
              icon={BoardIcon}
              isClickable={true}
              func={() => {
                alert("Hello");
              }}
            />
            <BreadcrumbItem
              text="Group"
              icon={GroupIcon}
              isClickable={true}
              func={() => {
                alert("Hello");
              }}
            />
            <BreadcrumbItem
              text="Item"
              icon={ItemIcon}
              isClickable={true}
              func={() => {
                alert("Hello");
              }}
            />
          </BreadcrumbsBar>
        </StoryLine>
      </FlexLayout>

      <FlexLayout>
        <StoryLine title="Disabled">
          <BreadcrumbsBar hasHoverEffect={true}>
            <BreadcrumbItem text="Workspace" icon={WorkspaceIcon} isDisabled={true} />
            <BreadcrumbItem text="Board" icon={BoardIcon} isDisabled={true} />
            <BreadcrumbItem text="Group" icon={GroupIcon} isDisabled={true} />
            <BreadcrumbItem text="Item" icon={ItemIcon} isDisabled={true} />
          </BreadcrumbsBar>
        </StoryLine>
      </FlexLayout>

      <FlexLayout>
        <StoryLine title="Current">
          <BreadcrumbsBar hasHoverEffect={true}>
            <BreadcrumbItem text="Workspace" icon={WorkspaceIcon} isCurrent={true} />
            <BreadcrumbItem text="Board" icon={BoardIcon} isCurrent={true} />
            <BreadcrumbItem text="Group" icon={GroupIcon} isCurrent={true} />
            <BreadcrumbItem text="Item" icon={ItemIcon} isCurrent={true} />
          </BreadcrumbsBar>
        </StoryLine>
      </FlexLayout>
    </div>
  );
};

export const Icon = () => (
  <div style={{ width: 1500 }}>
    <FlexLayout>
      <StoryLine title="With Icons">
        <BreadcrumbsBar hasHoverEffect={true}>
          <BreadcrumbItem text="Workspace" icon={WorkspaceIcon} />
          <BreadcrumbItem text="Board" icon={BoardIcon} />
          <BreadcrumbItem text="Group" icon={GroupIcon} />
          <BreadcrumbItem text="Item" icon={ItemIcon} />
        </BreadcrumbsBar>
      </StoryLine>
    </FlexLayout>

    <FlexLayout>
      <StoryLine title="Without Icons">
        <BreadcrumbsBar hasHoverEffect={true}>
          <BreadcrumbItem text="Workspace" />
          <BreadcrumbItem text="Board" />
          <BreadcrumbItem text="Group" />
          <BreadcrumbItem text="Item" />
        </BreadcrumbsBar>
      </StoryLine>
    </FlexLayout>

    <FlexLayout>
      <StoryLine title="Mix">
        <BreadcrumbsBar hasHoverEffect={true}>
          <BreadcrumbItem text="Workspace" icon={WorkspaceIcon} />
          <BreadcrumbItem text="Board" />
          <BreadcrumbItem text="Group" icon={GroupIcon} />
          <BreadcrumbItem text="Item" />
        </BreadcrumbsBar>
      </StoryLine>
    </FlexLayout>
  </div>
);

export default {
  title: "Components/BreadcrumbsBar",
  component: BreadcrumbsBar,
  decorators: [withPerformance]
};

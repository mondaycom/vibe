import React from "react";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import BreadcrumbsBar from "../BreadcrumbsBar";
import BreadcrumbItem from "../BreadcrumbItem/BreadcrumbItem";
import BoardIcon from "../../Icon/Icons/components/Board";
import WorkspaceIcon from "../../Icon/Icons/components/Workspace";
import GroupIcon from "../../Icon/Icons/components/Group";
import ItemIcon from "../../Icon/Icons/components/Item";
import StoryLine from "../../../StoryBookComponents/StoryLink/StoryLine";
import { FlexLayout } from "../../storybook-helpers";

export const Sandbox = () => (
  <div style={{ width: "500px" }}>
    <BreadcrumbsBar
      type={select(
        "Type",
        { navigation: BreadcrumbsBar.types.NAVIGATION, indication: BreadcrumbsBar.types.INDICATION },
        BreadcrumbsBar.types.INDICATION
      )}
    >
      <BreadcrumbItem
        text={text("First breadcrumb text", "Workspace")}
        icon={boolean("First has icon", true) ? WorkspaceIcon : null}
        link="https://www.google.com"
        isDisabled={boolean("First is disabled", false)}
        isCurrent={boolean("First is current", false)}
      />
      <BreadcrumbItem
        text={text("Second breadcrumb text", "Board")}
        icon={boolean("Second has icon", true) ? BoardIcon : null}
        link="https://www.google.com"
        isDisabled={boolean("Second is disabled", false)}
        isCurrent={boolean("Second is current", false)}
      />
      <BreadcrumbItem
        text={text("Third breadcrumb text", "Group")}
        icon={boolean("Third has icon", true) ? GroupIcon : null}
        onClick={() => {
          alert("Hello");
        }}
        isDisabled={boolean("Third is disabled", true)}
        isCurrent={boolean("Third is current", false)}
      />
      <BreadcrumbItem
        text={text("Fourth breadcrumb text", "Item")}
        icon={boolean("Fourth has icon", true) ? ItemIcon : null}
        onClick={() => {
          alert("Hello");
        }}
        isDisabled={boolean("Fourth is disabled", false)}
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
          <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
            <BreadcrumbItem text="Workspace" icon={WorkspaceIcon} link="https://www.google.com" />
            <BreadcrumbItem text="Board" icon={BoardIcon} link="https://www.google.com" />
            <BreadcrumbItem text="Group" icon={GroupIcon} link="https://www.google.com" />
            <BreadcrumbItem text="Item" icon={ItemIcon} link="https://www.google.com" />
          </BreadcrumbsBar>
        </StoryLine>
      </FlexLayout>

      <FlexLayout>
        <StoryLine title="Function">
          <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
            <BreadcrumbItem
              text="Workspace"
              icon={WorkspaceIcon}
              onClick={() => {
                alert("Hello");
              }}
            />
            <BreadcrumbItem
              text="Board"
              icon={BoardIcon}
              onClick={() => {
                alert("Hello");
              }}
            />
            <BreadcrumbItem
              text="Group"
              icon={GroupIcon}
              onClick={() => {
                alert("Hello");
              }}
            />
            <BreadcrumbItem
              text="Item"
              icon={ItemIcon}
              onClick={() => {
                alert("Hello");
              }}
            />
          </BreadcrumbsBar>
        </StoryLine>
      </FlexLayout>

      <FlexLayout>
        <StoryLine title="Disabled">
          <BreadcrumbsBar>
            <BreadcrumbItem text="Workspace" icon={WorkspaceIcon} isDisabled={true} />
            <BreadcrumbItem text="Board" icon={BoardIcon} isDisabled={true} />
            <BreadcrumbItem text="Group" icon={GroupIcon} isDisabled={true} />
            <BreadcrumbItem text="Item" icon={ItemIcon} isDisabled={true} />
          </BreadcrumbsBar>
        </StoryLine>
      </FlexLayout>

      <FlexLayout>
        <StoryLine title="Current">
          <BreadcrumbsBar>
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
        <BreadcrumbsBar>
          <BreadcrumbItem text="Workspace" icon={WorkspaceIcon} />
          <BreadcrumbItem text="Board" icon={BoardIcon} />
          <BreadcrumbItem text="Group" icon={GroupIcon} />
          <BreadcrumbItem text="Item" icon={ItemIcon} />
        </BreadcrumbsBar>
      </StoryLine>
    </FlexLayout>

    <FlexLayout>
      <StoryLine title="Without Icons">
        <BreadcrumbsBar>
          <BreadcrumbItem text="Workspace" />
          <BreadcrumbItem text="Board" />
          <BreadcrumbItem text="Group" />
          <BreadcrumbItem text="Item" />
        </BreadcrumbsBar>
      </StoryLine>
    </FlexLayout>

    <FlexLayout>
      <StoryLine title="Mix">
        <BreadcrumbsBar>
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

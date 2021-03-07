import React from "react";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import BreadcrumbsBar from "../../BreadcrumbsBar";
import BreadcrumbItem from "../BreadcrumbItem";
import WorkspaceIcon from "../../../Icon/Icons/components/Workspace";
import StoryLine from "../../../../StoryBookComponents/StoryLink/StoryLine";
import { FlexLayout } from "../../../storybook-helpers";

export const Sandbox = () => (
  <div style={{ width: "500px" }}>    
      <BreadcrumbItem
        text={text("Breadcrumb text", "Workspace")}
        icon={boolean("Has icon", true) ? WorkspaceIcon : null}
        link="https://www.google.com"
        isDisabled={boolean("Is disabled", false)}
        isCurrent={boolean("Is current", false)}
      />
  </div>
);

export const BreadcrumbsTypes = () => {
  return (
    <div style={{ width: 1500 }}>
      <FlexLayout>
        <StoryLine title="Link">
          <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
            <BreadcrumbItem text="Workspace" icon={WorkspaceIcon} link="https://www.google.com" />
          </BreadcrumbsBar>
        </StoryLine>
      </FlexLayout>

      <FlexLayout>
        <StoryLine title="Function">
          <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
            <BreadcrumbItem
              text="Workspace"
              icon={WorkspaceIcon}
              func={() => {
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
          </BreadcrumbsBar>
        </StoryLine>
      </FlexLayout>

      <FlexLayout>
        <StoryLine title="Current">
          <BreadcrumbsBar>
            <BreadcrumbItem text="Workspace" icon={WorkspaceIcon} isCurrent={true} />
          </BreadcrumbsBar>
        </StoryLine>
      </FlexLayout>
    </div>
  );
};

export const Icon = () => (
  <div style={{ width: 1500 }}>
    <FlexLayout>
      <StoryLine title="With Icon">
        <BreadcrumbsBar>
          <BreadcrumbItem text="Workspace" icon={WorkspaceIcon} />
        </BreadcrumbsBar>
      </StoryLine>
    </FlexLayout>

    <FlexLayout>
      <StoryLine title="Without Icon">
        <BreadcrumbsBar>
          <BreadcrumbItem text="Workspace" />
        </BreadcrumbsBar>
      </StoryLine>
    </FlexLayout>
  </div>
);

export default {
  title: "Components/BreadcrumbsBar/BreadcrumbItem",
  component: BreadcrumbItem,
  decorators: [withPerformance]
};

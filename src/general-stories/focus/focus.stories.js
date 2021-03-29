import "./focus.scss";
import DescriptionLabel from "../../components/storybook-helpers/description-label/description-label";
import { Button, Checkbox, RadioButton, TextField } from "../../components";
import Search from "../../components/Search/Search";
import SearchIcon from "../../components/Icon/Icons/components/Search";
import { CloseSmall } from "../../components/Icon/Icons";
import SearchStoryLine from "../../components/Search/__stories__/SearchStoryLine";
import React from "react";
import SplitButton from "../../components/SplitButton/SplitButton";
import { StoryStateColumn } from "../../components/storybook-helpers";
import BreadcrumbsBar from "../../components/BreadcrumbsBar/BreadcrumbsBar";
import BreadcrumbItem from "../../components/BreadcrumbsBar/BreadcrumbItem/BreadcrumbItem";
import WorkspaceIcon from "../../components/Icon/Icons/components/Workspace";
import BoardIcon from "../../components/Icon/Icons/components/Board";
import GroupIcon from "../../components/Icon/Icons/components/Group";
import ItemIcon from "../../components/Icon/Icons/components/Item";
import StoryLine from "../../StoryBookComponents/StoryLink/StoryLine";

export const Focus = () => {
  return (
    <div>
      <DescriptionLabel>Navigate with the keyboard in order to show how keyboard focus looks like</DescriptionLabel>
      <div>
        <DescriptionLabel>Buttons</DescriptionLabel>
        <div className="components-container-large">
          <Button>Primary Button</Button>
          <Button kind={Button.kinds.SECONDARY}>Secondary Button</Button>
          <Button kind={Button.kinds.TERTIARY}>Tertiary Button</Button>
        </div>
        <DescriptionLabel>Split Buttons</DescriptionLabel>
        <div className="components-container-large">
          <SplitButton secondaryDialogContent={<div>Content</div>}>Split</SplitButton>
          <SplitButton kind={SplitButton.kinds.SECONDARY} secondaryDialogContent={<div>Content</div>}>
            Split
          </SplitButton>
        </div>
        <DescriptionLabel>Checkbox</DescriptionLabel>
        <div className="components-container">
          <Checkbox label="label 1" />
          <Checkbox label="label 2" />
          <Checkbox label="label 3" />
        </div>

        <DescriptionLabel>Radio buttons</DescriptionLabel>
        <div className="components-container">
          <RadioButton text="label 1" name="focus" />
          <RadioButton text="label 2" name="focus" />
          <RadioButton text="label 3" name="focus" />
        </div>
        <DescriptionLabel>Fields</DescriptionLabel>
        <div className="components-container-large">
          <TextField placeholder="tab for focus" />
          <Search
            wrapperClassName="small-margin"
            inputAriaLabel="Search content"
            iconName={SearchIcon}
            secondaryIconName={CloseSmall}
            id="size_1"
            placeholder="Search Content"
            size={Search.sizes.SMALL}
            value=""
          />
        </div>
        <DescriptionLabel>Breadcrumbs</DescriptionLabel>
        <div className="components-container-large">
          <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
            <BreadcrumbItem text="Workspace" icon={WorkspaceIcon} link="https://www.google.com" />
            <BreadcrumbItem text="Board" icon={BoardIcon} link="https://www.google.com" />
            <BreadcrumbItem text="Group" icon={GroupIcon} link="https://www.google.com" />
            <BreadcrumbItem text="Item" icon={ItemIcon} link="https://www.google.com" />
          </BreadcrumbsBar>
        </div>
      </div>
    </div>
  );
};

export default {
  title: "Foundations|Focus"
};

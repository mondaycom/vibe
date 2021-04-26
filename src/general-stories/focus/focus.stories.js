import "./focus.scss";
import DescriptionLabel from "../../components/storybook-helpers/description-label/description-label";
import { Button, Checkbox, Menu, MenuItem, MenuTitle, RadioButton, TextField } from "../../components";
import Search from "../../components/Search/Search";
import SearchIcon from "../../components/Icon/Icons/components/Search";
import { CloseSmall, Moon, Sun } from "../../components/Icon/Icons";
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
import { number } from "@storybook/addon-knobs";
import ExpandCollapse from "../../components/ExpandCollapse/ExpandCollapse";
import Icon from "../../components/Icon/Icon";
import Robot from "../../components/Icon/Icons/components/Robot";
import MenuButton from "../../components/MenuButton/MenuButton";
import MoveArrowUp from "../../components/Icon/Icons/components/MoveArrowUp";
import MoveArrowDown from "../../components/Icon/Icons/components/MoveArrowDown";
import MoveArrowLeft from "../../components/Icon/Icons/components/MoveArrowLeft";
import MoveArrowRight from "../../components/Icon/Icons/components/MoveArrowRight";
import Bolt from "../../components/Icon/Icons/components/Bolt";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";

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
        <DescriptionLabel>Button Group</DescriptionLabel>
        <ButtonGroup
          name="test1"
          groupAriaLabel="focus button group"
          onSelect={value => console.log("Selected: ", value)}
          size={ButtonGroup.sizes.MEDIUM}
          options={[
            { value: 1, text: "Option 1", icon: Robot },
            { value: 2, text: "Option 2" },
            { value: 3, text: "Option 3", leftIcon: Bolt }
          ]}
        />
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
        <DescriptionLabel>Menu Button component</DescriptionLabel>
        <MenuButton ariaLabel="opens a menu with sub menu">
          <Menu id="menu-in-menu-button" ariaDescribedBy="title-id">
            <MenuTitle caption="My awesome menu" id="title-id" />
            <MenuItem title="First" icon={Moon} />
            <MenuItem title="Second" icon={Sun}>
              <Menu id="sub-menu-directions">
                <MenuItem title="Up" icon={MoveArrowUp} />
                <MenuItem title="Down" icon={MoveArrowDown} />
                <MenuItem title="Left" icon={MoveArrowLeft} />
                <MenuItem title="Right" icon={MoveArrowRight} />
              </Menu>
            </MenuItem>
            <MenuItem title="Third" icon={Bolt} />
          </Menu>
        </MenuButton>
        <DescriptionLabel>Expandable component</DescriptionLabel>
        <div style={{ width: "300px", height: "300px" }}>
          <ExpandCollapse headerComponentRenderer={() => <span>I can be anything</span>}>
            <h2>insert any component you want</h2>
            <p>here is a robot for you</p>
            <Icon
              iconType={Icon.type.SVG}
              icon={Robot}
              iconSize={"52px"}
              tabindex="-1"
              clickable={true}
              iconLabel="Robot"
            />
          </ExpandCollapse>
        </div>
      </div>
    </div>
  );
};

export default {
  title: "Foundations|Focus"
};

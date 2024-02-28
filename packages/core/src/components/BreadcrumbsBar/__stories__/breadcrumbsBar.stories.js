import BreadcrumbsBar from "../BreadcrumbsBar";
import BreadcrumbItem from "../BreadcrumbItem/BreadcrumbItem.tsx";
import Avatar from "../../Avatar/Avatar";
import { Board, Folder, Group, Workspace } from "../../Icon/Icons";
import person3 from "./assets/person3.png";
import { createStoryMetaSettingsDecorator } from "../../../storybook/functions/createStoryMetaSettingsDecorator";
import "./breadcrumbsBar.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: BreadcrumbsBar,
  enumPropNamesArray: ["type"]
});

const breadcrumbsBarTemplate = args => {
  return (
    <BreadcrumbsBar {...args}>
      {args.items && args.items.map(item => <BreadcrumbItem key={item.text} text={item.text} icon={item.icon} />)}
    </BreadcrumbsBar>
  );
};

export default {
  title: "Navigation/BreadcrumbsBar/BreadcrumbsBar",
  component: BreadcrumbsBar,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: breadcrumbsBarTemplate.bind({}),
  name: "Overview",

  args: {
    items: [
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
  }
};

export const TextOnly = {
  render: () => (
    <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION}>
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
    <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
      <BreadcrumbItem text="Workspace" icon={Workspace} isCurrent />
      <BreadcrumbItem text="Folder" icon={Folder} />
      <BreadcrumbItem text="Board" icon={Board} />
      <BreadcrumbItem text="Group" icon={Group} />
    </BreadcrumbsBar>
  ),

  name: "With icons"
};

export const NavigatableBreadcrumbs = {
  render: () => (
    <div className="monday-storybook-breadcrumbs-bar_inline-wrapper">
      <Avatar size={Avatar.sizes.MEDIUM} src={person3} type={Avatar.types.IMG} />
      <div className="monday-storybook-breadcrumbs-bar_column-wrapper">
        <span className="monday-storybook-breadcrumbs-bar_title">Rotem Dekel</span>
        <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
          <BreadcrumbItem text="User research" icon={Board} />
          <BreadcrumbItem text="Video sessions" icon={Group} />
        </BreadcrumbsBar>
      </div>
    </div>
  ),

  name: "Navigatable breadcrumbs"
};

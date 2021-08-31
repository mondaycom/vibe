import React, { useState } from "react";
import { withPerformance } from "storybook-addon-performance";
import ResponsiveList from "../ResponsiveList";
import "./responsiveListStory.scss";
import Button from "../../Button/Button";
import Search from "../../Search/Search";
import SplitButton from "../../SplitButton/SplitButton";
import Icon from "../../Icon/Icon";
import {
  Group,
  API,
  Moon,
  Sun,
  Bolt,
  Activity,
  Alert,
  Broom,
  Search as SearchIcon,
  CloseSmall,
  MoreActions
} from "../../Icon/Icons";
import { MenuItem } from "../../index";
import Menu from "../../Menu/Menu/Menu";
import DescriptionLabel from "../../storybook-helpers/description-label/description-label";
import { boolean, number } from "@storybook/addon-knobs";

function SecondaryContentComponent() {
  return (
    <Menu>
      <MenuItem icon={Alert} title="Watch out" />
      <MenuItem icon={Activity} title="History" />
    </Menu>
  );
}

const DefaultExampleTemplate = (responseListProps) => {
  const { lessItems } = responseListProps;
  return <ResponsiveList id="Knobs" className="responsive-story" menuButtonSize={ResponsiveList.menuButtonSizes.MEDIUM} {...responseListProps}>
    <SplitButton size={SplitButton.sizes.MAIN} marginRight secondaryDialogContent={<SecondaryContentComponent />}>
      Add Item
    </SplitButton>
    <div className="responsive-lst-search" responsiveListPlaceholder={<Search
      id={"search-icon-inside"}
      size={Search.sizes.MEDIUM}
      placeholder="search for content"
      iconName={() => <SearchIcon />}
      secondaryIconName={() => <CloseSmall />}
    />}>
      <Search
        size={Search.sizes.MEDIUM}
        placeholder="search for content"
        iconName={() => <SearchIcon />}
        secondaryIconName={() => <CloseSmall />}
      />
    </div>
    {!lessItems && <Button kind={Button.kinds.TERTIARY} marginLeft>
      <Icon icon={Broom} ignoreFocusStyle className="responsive-icon-margin" />
      Clean
    </Button>}
    {!lessItems && <Button kind={Button.kinds.TERTIARY} marginLeft>
      <Icon icon={Group} ignoreFocusStyle />
    </Button>}
    {!lessItems && <Button kind={Button.kinds.TERTIARY} marginLeft>
      <Icon icon={Moon} ignoreFocusStyle />
    </Button>}
    {!lessItems && <Button kind={Button.kinds.TERTIARY} marginLeft>
      <Icon icon={API} ignoreFocusStyle />
    </Button>}
    <Button kind={Button.kinds.TERTIARY} marginLeft>
      <Icon icon={Sun} ignoreFocusStyle />
    </Button>
    <Button kind={Button.kinds.TERTIARY} marginLeft>
      <Icon icon={Bolt} ignoreFocusStyle />
    </Button>
  </ResponsiveList>
}

export const Sandbox = () => {
  const lessItems = boolean("Less iitems", false);

  return <div style={{ width: "100%" }}>
    <DescriptionLabel>
      Use this component when you want to collapse elements into a menu button which appends to the end of the row. The
      list wraps the element with <code>display: flex;</code> property in order to
      calculate the
    </DescriptionLabel>
    <br />
    <div style={{ width: "80%" }}>
      <DefaultExampleTemplate lessItems={lessItems} />
    </div>
  </div>
};

export const SandboxWithDifferentIcon = () => {
  return <div style={{ width: "100%" }}>
    <DescriptionLabel>
      You can also override the MenuButton props. Here's an example of how to use it with MoreActions icon
    </DescriptionLabel>
    <br />
    <div style={{ width: "80%" }}>
      <DefaultExampleTemplate menuButtonProps={{component: MoreActions}} />
    </div>
  </div>
}


export const ChangeChildrenCheck = () => {
  const width = number("width", 300)
  const knobLessItems = boolean("less items", false);
  const [lessItems, setLessItems] = useState(true);
  setTimeout(() => {
    setLessItems(false);
  }, 100);
  return <div style={{ width: "100%" }}>
    <DescriptionLabel>
      This is a story to reproduce a case where the items in the list are changed,
      it should still be able to recalculate their size.
      It adds some items at the beginning of the story, and it should be able to calculate the new items size although they weren't drawn yet.
    </DescriptionLabel>
    <br />
    <div style={{ width: width }}>
      <DefaultExampleTemplate menuButtonProps={{component: MoreActions}} lessItems={lessItems || knobLessItems} />
    </div>
  </div>
}

export default {
  title: "Components|ResponsiveList",
  component: ResponsiveList,
  decorators: [withPerformance]
};

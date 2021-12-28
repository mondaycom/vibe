/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ResizableBox } from "react-resizable";
import Menu from "../../Menu/Menu/Menu";
import { MenuItem } from "../../index";
import {
  Activity,
  Alert,
  API,
  Bolt,
  Broom,
  CloseSmall,
  Group,
  Moon,
  Search as SearchIcon,
  Sun
} from "../../Icon/Icons";
import ResponsiveList from "../ResponsiveList";
import SplitButton from "../../SplitButton/SplitButton";
import Search from "../../Search/Search";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import "./ResponsiveList.stories.scss";
import Open from "../../Icon/Icons/components/Open";

function SecondaryContentComponent() {
  return (
    <Menu>
      <MenuItem icon={Alert} title="Watch out" />
      <MenuItem icon={Activity} title="History" />
    </Menu>
  );
}

const DefaultExampleTemplate = responseListProps => {
  return (
    <ResizableBox
      height={48}
      width={700}
      handle={
        <span className="custom-handle custom-handle-se">
          <Icon icon={Open} iconSize={20} clickable={false} className="icon-resizer" />
        </span>
      }
      handleSize={[12, 12]}
      className="resizable-container"
      minConstraints={[200, 48]}
      maxConstraints={[850, 48]}
    >
      <ResponsiveList
        id="Knobs"
        className="responsive-story"
        menuButtonSize={ResponsiveList.menuButtonSizes.MEDIUM}
        {...responseListProps}
      >
        <SplitButton size={SplitButton.sizes.MAIN} marginRight secondaryDialogContent={<SecondaryContentComponent />}>
          Add Item
        </SplitButton>
        <div
          className="responsive-lst-search"
          responsiveListPlaceholder={
            <Search
              id="search-icon-inside"
              size={Search.sizes.MEDIUM}
              placeholder="search for content"
              iconName={SearchIcon}
              secondaryIconName={CloseSmall}
            />
          }
        >
          <Search
            size={Search.sizes.MEDIUM}
            placeholder="search for content"
            iconName={SearchIcon}
            secondaryIconName={CloseSmall}
          />
        </div>
        <Button kind={Button.kinds.TERTIARY} marginLeft>
          <Icon icon={Broom} ignoreFocusStyle className="responsive-icon-margin" />
          Clean
        </Button>
        <Button kind={Button.kinds.TERTIARY} marginLeft>
          <Icon icon={Group} ignoreFocusStyle />
        </Button>
        <Button kind={Button.kinds.TERTIARY} marginLeft>
          <Icon icon={Moon} ignoreFocusStyle />
        </Button>
        <Button kind={Button.kinds.TERTIARY} marginLeft>
          <Icon icon={API} ignoreFocusStyle />
        </Button>
        <Button kind={Button.kinds.TERTIARY} marginLeft>
          <Icon icon={Sun} ignoreFocusStyle />
        </Button>
        <Button kind={Button.kinds.TERTIARY} marginLeft>
          <Icon icon={Bolt} ignoreFocusStyle />
        </Button>
      </ResponsiveList>
    </ResizableBox>
  );
};

export const Sandbox = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "80%" }}>
        <DefaultExampleTemplate />
      </div>
    </div>
  );
};

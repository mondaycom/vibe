import React from "react";
import { ResizableBox } from "react-resizable";
import { Activity, Alert, API, Bolt, Broom, Group, Moon, Sun, Open } from "../../Icon/Icons";
import ResponsiveList from "../ResponsiveList";
import Menu from "../../Menu/Menu/Menu";
import MenuItem from "../../Menu/MenuItem/MenuItem";
import SplitButton from "../../SplitButton/SplitButton";
import Search from "../../Search/Search";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import "./ResponsiveList.stories.scss";

export default {
  title: "Layout/ResponsiveList",
  component: ResponsiveList
};

const ContainerForDemonstration = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "80%" }}>
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
          {children}
        </ResizableBox>
      </div>
    </div>
  );
};

const componentTemplate = responseListProps => {
  const secondaryContent = (
    <Menu>
      <MenuItem icon={Alert} title="Watch out" />
      <MenuItem icon={Activity} title="History" />
    </Menu>
  );
  return (
    <ContainerForDemonstration>
      <ResponsiveList id="Knobs" className="responsive-story" menuButtonSize="40" {...responseListProps}>
        <SplitButton size={SplitButton.sizes.MAIN} marginRight secondaryDialogContent={secondaryContent}>
          Add Item
        </SplitButton>
        <div
          className="responsive-lst-search"
          // eslint-disable-next-line
          responsiveListPlaceholder={<Search id="search-icon-inside" size="medium" placeholder="search for content" />}
        >
          <Search size="medium" placeholder="search for content" />
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
    </ContainerForDemonstration>
  );
};

export const Overview = {
  render: componentTemplate.bind({}),
  name: "Overview",
  args: {}
};

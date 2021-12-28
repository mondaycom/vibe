import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import MenuButton from "../../../../components/MenuButton/MenuButton";
import MenuTitle from "../../../../components/Menu/MenuTitle/MenuTitle";
import Menu from "../../../../components/Menu/Menu/Menu";
import MenuItem from "../../../../components/Menu/MenuItem/MenuItem";
import Sun from "../../../../components/Icon/Icons/components/Sun";
import Moon from "../../../../components/Icon/Icons/components/Moon";
import Favorite from "../../../../components/Icon/Icons/components/Favorite";

export const MenuButtonDescription = () => {
  const component = useMemo(
    () => (
      <MenuButton>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuTitle caption="Look up, you might see" captionPosition={MenuTitle.positions.TOP} />
          <MenuItem icon={Sun} iconType={MenuItem.iconType.SVG} title="The sun" />
          <MenuItem icon={Moon} iconType={MenuItem.iconType.SVG} title="The moon" />
          <MenuItem icon={Favorite} iconType={MenuItem.iconType.SVG} title="And the stars" />
        </Menu>
      </MenuButton>
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="MenuButton"
      description="A component to open content next to another component"
    />
  );
};

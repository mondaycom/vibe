import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Divider from "../../../../components/Divider/Divider";
import Menu from "../../../../components/Menu/Menu/Menu";
import MenuItem from "../../../../components/Menu/MenuItem/MenuItem";
import Icon from "../../../../components/Icon/Icon";
import { Settings, Bolt } from "../../../../components/Icon/Icons";

export const DividerDescription = () => {
  const component = useMemo(() => {
    return (
      <div style={{ width: "220px" }}>
        <Menu>
          <MenuItem
            title="My Item (stuck red)"
            icon={Settings}
            iconType={Icon.type.SVG}
            iconBackgroundColor="var(--color-stuck-red)"
          />
        </Menu>
        <Divider />
        <Menu>
          <MenuItem
            title="My Item (indigo)"
            icon={Bolt}
            iconType={Icon.type.SVG}
            iconBackgroundColor="var(--color-indigo)"
          />
        </Menu>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Divider"
      description="Divider create separation between two UI elements"
    />
  );
};

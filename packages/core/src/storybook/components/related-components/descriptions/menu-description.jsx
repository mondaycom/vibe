import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import DialogContentContainer from "../../../../components/DialogContentContainer/DialogContentContainer";
import MenuItem from "../../../../components/Menu/MenuItem/MenuItem";
import { Email, Delete, Info } from "../../../../components/Icon/Icons";
import { Menu } from "../../../../components";

export const MenuDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <DialogContentContainer>
          <Menu size={Menu.sizes.SMALL}>
            <MenuItem title="Send" icon={Email} />
            <MenuItem title="Delete" icon={Delete} />
            <MenuItem title="More info" icon={Info} />
          </Menu>
        </DialogContentContainer>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Menu"
      href="/?path=/docs/navigation-menu-menu--docs"
      description="Displays information related to an element over it."
    />
  );
};

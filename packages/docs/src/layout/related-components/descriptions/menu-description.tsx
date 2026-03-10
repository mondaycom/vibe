import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { DialogContentContainer, Menu, MenuItem } from "@ezds/core";
import { Email, Delete, Info } from "@ezds/icons";

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
      href="/?path=/docs/components-menu-menu--docs"
      description="Displays information related to an element over it."
    />
  );
};

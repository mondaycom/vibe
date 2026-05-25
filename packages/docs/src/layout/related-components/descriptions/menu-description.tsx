import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { DialogContentContainer, Menu, MenuItem } from "@vibe/core";
import { Email, Delete, Info } from "@vibe/icons";

export const MenuDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <DialogContentContainer>
          <Menu size="small">
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

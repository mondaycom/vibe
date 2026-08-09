import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Divider, Menu, MenuItem } from "@vibe/core";
import { Settings, Bolt } from "@vibe/icons";

export const DividerDescription = () => {
  const component = useMemo(() => {
    return (
      <div style={{ width: "220px" }}>
        <Menu>
          <MenuItem title="My Item" icon={Settings} type="svg" iconBackgroundColor="var(--sb-negative-color)" />
        </Menu>
        <Divider />
        <Menu>
          <MenuItem title="My Item" icon={Bolt} type="svg" iconBackgroundColor="var(--sb-color-purple)" />
        </Menu>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Divider"
      href="/?path=/docs/components-divider--docs"
      description="Divider create separation between two UI elements"
    />
  );
};

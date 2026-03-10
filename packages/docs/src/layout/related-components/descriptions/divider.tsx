import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Divider, Menu, MenuItem } from "@ezds/core";
import { Settings, Bolt } from "@ezds/icons";

export const DividerDescription = () => {
  const component = useMemo(() => {
    return (
      <div style={{ width: "220px" }}>
        <Menu>
          <MenuItem title="My Item" icon={Settings} iconType="svg" iconBackgroundColor="var(--sb-negative-color)" />
        </Menu>
        <Divider />
        <Menu>
          <MenuItem title="My Item" icon={Bolt} iconType="svg" iconBackgroundColor="var(--sb-color-purple)" />
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

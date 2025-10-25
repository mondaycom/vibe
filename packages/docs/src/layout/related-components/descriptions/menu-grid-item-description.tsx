import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
// import { DummyNavigableGrid } from "../../../../components/GridKeyboardNavigationContext/__stories__/useGridKeyboardNavigationContext.stories.helpers";
import { MenuGridItem } from "@vibe/core";

export const MenuGridItemDescription = () => {
  const component = useMemo(() => {
    return (
      <></>
      // <MenuGridItem><DummyNavigableGrid itemsCount={8} numberOfItemsInLine={3} withoutBorder /></MenuGridItem>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="MenuGridItem"
      href="/?path=/docs/components-menu-menugriditem--docs"
      description="MenuGridItem can be used to place a grid-like, keyboard navigable container, inside a Menu."
    />
  );
};

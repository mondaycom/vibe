import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import VirtualizedGrid from "../../../../../components/VirtualizedGrid/VirtualizedGrid";
import {
  generateItems,
  itemRenderer
} from "../../../../../components/VirtualizedGrid/__stories__/VirtualizedGrid.stories.helpers";
import styles from "./virtualizedGrid.module.scss";

export const VirtualizedGridDescription = () => {
  const component = useMemo(() => {
    return (
      <div className={styles.virtualizedGridItem}>
        <div className={styles.virtualizedGridItemChild}>
          <VirtualizedGrid id={"id"} items={generateItems(50, 100, 50)} itemRenderer={itemRenderer} />
        </div>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="VirtualizedGrid"
      href="/?path=/docs/navigation-virtualizedgrid--docs"
      description="VirtualizedGrid is a component which only renders visible grid items, it is a logic component and doesn't change and look and feel."
    />
  );
};

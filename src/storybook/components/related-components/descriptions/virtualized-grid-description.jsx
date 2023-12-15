import { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import VirtualizedGrid from "../../../../components/VirtualizedGrid/VirtualizedGrid";
import {
  generateItems,
  itemRenderer
} from "../../../../components/VirtualizedGrid/__stories__/VirtualizedGrid.stories.helpers";
export const VirtualizedGridDescription = () => {
  const getColumnWidth = () => 100;
  const getRowHeight = () => 50;

  const items = useMemo(() => {
    return generateItems(50, 100, 2);
  }, []);

  const component = useMemo(() => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          width: 100,
          height: 100
        }}
      >
        <div style={{ width: "100px", height: "100px" }}>
          <VirtualizedGrid
            id={"id"}
            items={items}
            itemRenderer={itemRenderer}
            getColumnWidth={getColumnWidth}
            getRowHeight={getRowHeight}
          />
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

import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Tooltip from "../../../../components/Tooltip/Tooltip";

export const TooltipDescription = () => {
  const component = useMemo(() => {
    const style = {
      marginTop: "40px"
    };
    return (
      <div style={style}>
        <Tooltip shouldShowOnMount content="Text">
          <div />
        </Tooltip>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Tooltip"
      href="/?path=/docs/popover-tooltip--docs"
      description="Displays information related to an element over it."
    />
  );
};

import { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import TooltipLineWrapper from "../../../../components/Tooltip/__stories__/TooltipLineWrapper";

export const TooltipDescription = () => {
  const component = useMemo(() => {
    const style = {
      marginTop: "40px"
    };
    return (
      <div style={style}>
        <TooltipLineWrapper justify="end" />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Tooltip"
      href="/?path=/docs/popover-tooltip--overview"
      description="Displays information related to an element over it."
    />
  );
};

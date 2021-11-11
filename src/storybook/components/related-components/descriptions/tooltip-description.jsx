import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import TooltipLineWrapper from "../../../../components/Tooltip/__stories__/TooltipLineWrapper";

export const TooltipDescription = () => {
  const style = {
    marginTop: "40px"
  };
  const component = useMemo(
    () => (
      <div style={style}>
        <TooltipLineWrapper justify="end" />
      </div>
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="Tooltip"
      description="Displays information related to an element over it."
    />
  );
};

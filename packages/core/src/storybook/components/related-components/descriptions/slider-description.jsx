import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Slider from "../../../../components/Slider/Slider";
export const SliderDescription = () => {
  const component = useMemo(() => <Slider />, []);

  return (
    <RelatedComponent
      component={component}
      title="Slider"
      href="/?path=/docs/inputs-slider--docs"
      description="Displays a slider bar with range selection"
    />
  );
};

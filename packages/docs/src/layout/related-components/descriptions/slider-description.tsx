import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Slider } from "@ezds/core";

export const SliderDescription = () => {
  const component = useMemo(() => <Slider />, []);

  return (
    <RelatedComponent
      component={component}
      title="Slider"
      href="/?path=/docs/components-slider--docs"
      description="Displays a slider bar with range selection"
    />
  );
};

import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import MultiStepIndicator from "../../../../components/MultiStepIndicator/MultiStepIndicator";

export const MultiStepIndicatorDescription = () => {
  const component = useMemo(() => {
    const style = {
      marginLeft: "-40px"
    };
    const steps = [
      {
        status: "active",
        titleText: "1st",
        subtitleText: ""
      },
      {
        status: "pending",
        titleText: "2nd",
        subtitleText: ""
      },
      {
        status: "pending",
        titleText: "3rd",
        subtitleText: ""
      }
    ];
    return (
      <div style={style}>
        <MultiStepIndicator textPlacement="vertical" steps={steps} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="MultiStepIndicator"
      href="/?path=/docs/navigation-multistepindicator--docs"
      description="Shows information related to a component when a user hovers over it."
    />
  );
};

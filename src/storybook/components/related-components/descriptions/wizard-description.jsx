import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import MultiStepIndicator from "../../../../components/MultiStepIndicator/MultiStepIndicator";

export const WizardDescription = () => {
  const component = useMemo(() => {
    const style = {
      marginLeft: "-40px"
    };
    const steps = [
      {
        status: MultiStepIndicator.stepStatuses.ACTIVE,
        titleText: "1st",
        subtitleText: ""
      },
      {
        status: MultiStepIndicator.stepStatuses.PENDING,
        titleText: "2nd",
        subtitleText: ""
      },
      {
        status: MultiStepIndicator.stepStatuses.PENDING,
        titleText: "3rd",
        subtitleText: ""
      }
    ];
    return (
      <div style={style}>
        <MultiStepIndicator textPlacement={MultiStepIndicator.textPlacements.VERTICAL} steps={steps} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Wizard"
      description="Shows information related to a compontent when a user hovers over it."
    />
  );
};

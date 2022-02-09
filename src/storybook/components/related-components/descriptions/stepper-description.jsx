import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Steps from "../../../../components/Steps/Steps";

export const StepperDescription = () => {
  const component = useMemo(() => {
    const style = {
      marginLeft: "-10px"
    };
    const steps = [
      <div key="step-1" />,
      <div key="step-2" />,
      <div key="step-3" />,
      <div key="step-4" />,
      <div key="step-5" />
    ];
    return (
      <div style={style}>
        <Steps steps={steps} activeStepIndex={2} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Stepper"
      description="Compact elements that represent an input, attribute, or action."
    />
  );
};

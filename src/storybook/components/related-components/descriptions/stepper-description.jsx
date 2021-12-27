import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Steps from "../../../../components/Steps/Steps";

export const StepperDescription = () => {
  const component = useMemo(() => {
    const style = {
      marginLeft: "-10px"
    };
    const steps = [<div />, <div />, <div />, <div />, <div />];
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

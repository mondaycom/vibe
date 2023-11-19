import { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Steps from "../../../../components/Steps/Steps";

export const StepsDescription = () => {
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
      title="Steps"
      href="/?path=/docs/data-display-steps--overview"
      description="Steps display progress through a sequence of logical and numbered steps. They may also be used for navigation."
    />
  );
};

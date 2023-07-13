import { useMemo } from "react";
import { RelatedComponent } from "monday-ui-storybook-blocks";
import Loader from "../../../../components/Loader/Loader";

export const SpinnerDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "10%",
      height: "10%"
    };
    return (
      <div style={style}>
        <Loader />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Spinner"
      href="/?path=/docs/feedback-loader--overview"
      description="Displays information related to an element over it."
    />
  );
};

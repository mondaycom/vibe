import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Loader } from "@ezds/core";

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
      href="/?path=/docs/components-loader--docs"
      description="Displays information related to an element over it."
    />
  );
};

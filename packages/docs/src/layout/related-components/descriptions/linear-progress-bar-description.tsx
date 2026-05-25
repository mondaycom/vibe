import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { ProgressBar } from "@vibe/core";

export const ProgressBarDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "80%"
    };
    return (
      <div style={style}>
        <ProgressBar value={50} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="ProgressBar"
      href="/?path=/docs/components-linearprogressbar--docs"
      description="Progress bars show continuous progress through a process, such as a percentage value."
    />
  );
};

import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import LinearProgressBar from "../../../../components/ProgressBars/LinearProgressBar/LinearProgressBar";

export const LinearProgressBarDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "80%"
    };
    return (
      <div style={style}>
        <LinearProgressBar value={50} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="LinearProgressBar"
      href="/?path=/docs/feedback-linearprogressbar--docs"
      description="Progress bars show continuous progress through a process, such as a percentage value."
    />
  );
};

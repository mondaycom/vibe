import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { LinearProgressBar } from "@ezds/core";

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
      href="/?path=/docs/components-linearprogressbar--docs"
      description="Progress bars show continuous progress through a process, such as a percentage value."
    />
  );
};

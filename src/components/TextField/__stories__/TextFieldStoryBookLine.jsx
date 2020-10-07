import React from "react";
import { ComponentStateDescription, FlexLayout } from "../../storybook-helpers";

const TextFieldStoryBookLine = ({ title, children }) => {
  return (
    <FlexLayout>
      <ComponentStateDescription title={title} />
      <div className="width-35">{children}</div>
    </FlexLayout>
  );
};

export default TextFieldStoryBookLine;

import React from "react";

export function createComponentTemplate(ComponentClass) {
  // eslint-disable-next-line react/display-name
  return args => <ComponentClass {...args} />;
}

export default createComponentTemplate;

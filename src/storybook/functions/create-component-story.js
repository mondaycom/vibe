import React from "react";

export function createComponentTemplate(ComponentClass) {
  return args => <ComponentClass {...args} />;
}

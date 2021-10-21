import React from "react";

export function createComponentStoryWithControlsCreator(ComponentClass) {
  const componentTemplate = args => <ComponentClass {...args} />;
  return function createComponentStory(props) {
    const template = componentTemplate.bind({});
    template.args = props;
    return template;
  };
}

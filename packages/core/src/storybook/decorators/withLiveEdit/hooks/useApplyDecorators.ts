import React, { useMemo } from "react";
import { StoryContext, Decorator } from "@storybook/react";

const useApplyDecorators = (decorators: Decorator[], component: React.ReactElement, context: StoryContext) => {
  return useMemo(() => {
    let decoratedComponent = () => component;

    // recursively apply decorators to the component
    decorators.forEach(decorator => {
      const currentComponent = decoratedComponent;
      decoratedComponent = () => decorator(currentComponent, context);
    });

    return decoratedComponent();
  }, [decorators, component, context]);
};

export default useApplyDecorators;

import { useMemo } from "react";
import { RelatedComponent } from "monday-ui-storybook-blocks";
import SplitButton from "../../../../components/SplitButton/SplitButton";

export const SplitButtonDescription = () => {
  const component = useMemo(() => <SplitButton>Button</SplitButton>, []);
  return (
    <RelatedComponent
      component={component}
      title="Split button"
      href="/?path=/docs/buttons-split-button--overview"
      description="Dual-function menu button offers a default action and a secondary action"
    />
  );
};

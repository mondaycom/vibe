import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import SplitButton from "../../../../components/SplitButton/SplitButton";

export const SplitButtonDescription = () => {
  const component = useMemo(() => <SplitButton>Button</SplitButton>, []);
  return (
    <RelatedComponent
      component={component}
      title="Split button"
      description="Dual-function menu button offers a default action and a secondary action"
    />
  );
};

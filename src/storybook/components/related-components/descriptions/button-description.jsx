import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Button from "../../../../components/Button/Button";

export const ButtonDescription = () => {
  const component = useMemo(() => <Button size={Button.sizes.LARGE}>Get started</Button>, []);
  return (
    <RelatedComponent
      component={component}
      title="Button"
      description="Allow users take actions with a single click."
    />
  );
};

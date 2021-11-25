import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Toggle from "../../../../components/Toggle/Toggle";

export const ToggleDescription = () => {
  const component = useMemo(() => <Toggle />, []);
  return (
    <RelatedComponent
      component={component}
      title="Toggle"
      description="Allow users to turn an individual option on or off."
    />
  );
};

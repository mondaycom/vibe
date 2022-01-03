import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import HiddenText from "../../../../components/HiddenText/HiddenText";

export const HiddenTextDescription = () => {
  const component = useMemo(() => {
    return <HiddenText text="Secret text" />;
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Hidden text"
      description="Hidden text helps us to create a text which is accessible to screen reader users but not to users who see the screen."
    />
  );
};

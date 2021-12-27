import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Heading from "../../../../components/Heading/Heading";

export const HeadingDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <Heading value="Hello world" type={Heading.types.h3} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Heading"
      description="Heading components are used to title any page sections or sub-sections in top-level page sections."
    />
  );
};

import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Heading from "../../../../components/Heading/Heading";

export const HeadingDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <Heading type={Heading.types.H2}>Hello world</Heading>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Heading"
      href="/?path=/docs/text-heading--docs"
      description="Heading components are used to title any page sections or sub-sections in top-level page sections."
    />
  );
};

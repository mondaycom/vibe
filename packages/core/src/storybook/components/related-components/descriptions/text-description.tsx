import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Text from "../../../../components/Text/Text";

export const TextDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <Text>lorem ipsum dolor sit amet</Text>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Text"
      href="/?path=/docs/text-text--docs"
      description="The text component serves as a wrapper for applying typography styles to the text it contains."
    />
  );
};

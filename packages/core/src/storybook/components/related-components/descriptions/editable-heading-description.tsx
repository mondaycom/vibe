import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import EditableHeading from "../../../../components/EditableHeading/EditableHeading";
import Flex from "../../../../components/Flex/Flex";

export const EditableHeadingDescription = () => {
  const component = useMemo(() => {
    return (
      <Flex justify="center" style={{ width: "100%" }}>
        <EditableHeading value="Hello world" />
      </Flex>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="EditableHeading"
      href="/?path=/docs/components-editableheading--docs"
      description="An extension of Heading component, it allows built in editing capabilities."
    />
  );
};

import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { EditableHeading } from "@ezds/core";
import { Flex } from "@ezds/core";

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

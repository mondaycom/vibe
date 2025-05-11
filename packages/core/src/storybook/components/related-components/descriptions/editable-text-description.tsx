import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import EditableText from "../../../../components/EditableText/EditableText";
import Flex from "../../../../components/Flex/Flex";

export const EditableTextDescription = () => {
  const component = useMemo(() => {
    return (
      <Flex justify="center" style={{ width: "100%" }}>
        <EditableText value="Hello world" type={EditableText.types.TEXT1} />
      </Flex>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="EditableText"
      href="/?path=/docs/components-EditableText--docs"
      description="An extension of the Text component with built in editing capabilities."
    />
  );
};

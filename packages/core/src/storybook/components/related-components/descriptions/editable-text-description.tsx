import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import EditableText from "../../../../components/EditableText/EditableText";

export const EditableTextDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <EditableText value="Hello world" type={EditableText.types.TEXT1} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="EditableText"
      href="/?path=/docs/inputs-EditableText--docs"
      description="An extension of the Text component with built in editing capabilities."
    />
  );
};

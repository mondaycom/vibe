import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import EditableHeading from "../../../../components/EditableHeading/EditableHeading";

export const EditableHeadingDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <EditableHeading value="Hello world" type={EditableHeading.types.h3} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Editable heading"
      description="An extension of Heading component, it allows built in editing capabilities."
    />
  );
};

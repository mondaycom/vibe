import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import TextField from "../../../../components/TextField/TextField";

export const TextFieldDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "80%"
    };
    return (
      <div style={style}>
        <TextField placeholder="Placeholder text here" size={TextField.sizes.LARGE} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Input field"
      description="Allows users take actions with a single click."
    />
  );
};

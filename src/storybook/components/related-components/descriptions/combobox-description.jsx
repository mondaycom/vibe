import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import DialogContentContainer from "../../../../components/DialogContentContainer/DialogContentContainer";
import Combobox from "../../../../components/Combobox/Combobox";

export const ComboboxDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "80%",
      height: "150px"
    };
    const option = [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
      { id: "3", label: "Option 3" }
    ];
    return (
      <DialogContentContainer style={style}>
        <Combobox
          placeholder="Placeholder text here"
          options={option}
          size={Combobox.sizes.SMALL}
          optionLineHeight={28}
        />
      </DialogContentContainer>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Combobox"
      description="Compact elements that represent an input, attribute, or action."
    />
  );
};

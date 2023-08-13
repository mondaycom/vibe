import { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import DialogContentContainer from "../../../../components/DialogContentContainer/DialogContentContainer";

export const DialogDescription = () => {
  const component = useMemo(() => {
    return (
      <div style={{ width: "200px" }}>
        <DialogContentContainer />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Dialog"
      href="/?path=/docs/components-dialog-dialog--overview"
      description="The dialog component's purpose is to position a popup component nearby another element, such as any kind of a button."
    />
  );
};

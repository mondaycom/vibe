import { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import DialogContentContainer from "../../../../components/DialogContentContainer/DialogContentContainer";

export const DialogContentContainerDescription = () => {
  const component = useMemo(() => {
    return (
      <div style={{ width: "200px" }}>
        <DialogContentContainer>
          <p>A content section within an elevated dialog content container</p>
        </DialogContentContainer>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Dialog Content Container"
      href="/?path=/docs/popover-dialogcontentcontainer--overview"
      description="An Elevation container, use to elevate content section"
    />
  );
};

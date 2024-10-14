import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import DialogContentContainer from "../../../../components/DialogContentContainer/DialogContentContainer";
import Text from "../../../../components/Text/Text";

export const DialogContentContainerDescription = () => {
  const component = useMemo(() => {
    return (
      <div style={{ width: "200px" }}>
        <DialogContentContainer>
          <Text ellipsis={false}>A content section within an elevated dialog content container</Text>
        </DialogContentContainer>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="DialogContentContainer"
      href="/?path=/docs/popover-dialogcontentcontainer--docs"
      description="An Elevation container, use to elevate content section"
    />
  );
};

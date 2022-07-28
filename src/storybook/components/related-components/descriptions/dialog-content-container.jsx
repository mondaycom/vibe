import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
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
      description="An Elevation container, use to elavate content section"
    />
  );
};

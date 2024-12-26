import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import relatedComponentImage from "./assets/related-component.png";

export const ModalMediaLayoutRelatedComponent = () => {
  const component = useMemo(() => {
    return (
      <img
        src={relatedComponentImage}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        alt="modal with media layout variation"
      />
    );
  }, []);

  return (
    <RelatedComponent
      component={component}
      title="Media modal"
      href="/?path=/docs/feedback-modal-new-media-modal"
      description="Modal with highlighted media section, for catching the user’s attention."
    />
  );
};

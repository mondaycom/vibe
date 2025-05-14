import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import relatedComponentImage from "./assets/related-component.png";

export const ModalSideBySideLayoutRelatedComponent = () => {
  const component = useMemo(() => {
    return (
      <img
        src={relatedComponentImage}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        alt="modal with side by side layout variation"
      />
    );
  }, []);

  return (
    <RelatedComponent
      component={component}
      title="Side by side modal"
      href="/?path=/docs/components-modal-new-side-by-side-modal"
      description="Two-section modal layout, ideal for referencing visuals alongside text."
    />
  );
};

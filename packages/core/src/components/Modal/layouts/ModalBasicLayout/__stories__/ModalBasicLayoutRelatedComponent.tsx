import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import relatedComponentImage from "./assets/related-component.png";

export const ModalBasicLayoutRelatedComponent = () => {
  const component = useMemo(() => {
    return (
      <img
        src={relatedComponentImage}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        alt="modal with basic layout variation"
      />
    );
  }, []);

  return (
    <RelatedComponent
      component={component}
      title="Basic modal"
      href="/?path=/docs/components-modal-new-basic-modal"
      description="Modal for straightforward tasks, helps users focus on a single task without distractions."
    />
  );
};

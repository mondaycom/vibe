import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { AttentionBox } from "@vibe/core/next";

export const AttentionBoxDescription = () => {
  const component = useMemo(() => {
    return (
      <div style={{ width: "90%" }}>
        <AttentionBox
          title="Attention box title"
          text="Studies show that 100% of people who celebrate birthdays, will die."
        />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="AttentionBox"
      href="/?path=/docs/components-attentionbox-new--docs"
      description="Displays content classification."
    />
  );
};

import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import AttentionBox from "../../../../components/AttentionBox/AttentionBox";

export const AttentionBoxDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "90%"
    };
    return (
      <div style={style}>
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
      href="/?path=/docs/feedback-attentionbox--docs"
      description="Displays content classification."
    />
  );
};

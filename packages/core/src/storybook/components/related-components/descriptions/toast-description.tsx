import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Toast from "../../../../components/Toast/Toast";

export const ToastDescription = () => {
  const component = useMemo(() => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "40px",
          position: "static",
          transform: "translate(0, 0)",
          marginRight: "auto",
          marginLeft: "auto"
        }}
      >
        <Toast open actions={[{ type: "button", content: "Button" }]}>
          Message
        </Toast>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Toast"
      href="/?path=/docs/components-toast--docs"
      description="A message object that presents timely information or feedback for the user."
    />
  );
};

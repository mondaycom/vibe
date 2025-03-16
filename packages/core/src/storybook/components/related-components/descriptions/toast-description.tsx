import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import ToastLineWrapper from "../../../../components/Toast/__stories__/ToastLineWrapper";

export const ToastDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    };
    return (
      <div style={style}>
        <ToastLineWrapper
          actions={[{ type: "button", content: "Button" }]}
          className=""
          type="positive"
          hideIcon={false}
          closeable={false}
        >
          Message
        </ToastLineWrapper>
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

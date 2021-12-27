import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import ToastLineWrapper from "../../../../components/Toast/__stories__/ToastLineWrapper";
import Toast from "../../../../components/Toast/Toast";

export const ToastDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "90%",
      display: "flex"
    };
    return (
      <div style={style}>
        <ToastLineWrapper text="General Message" actions={[{ type: Toast.actionTypes.BUTTON, content: "Button" }]} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Toast"
      description="A message object that presents timely information or feedback for the user."
    />
  );
};

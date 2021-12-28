import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Loader from "../../../../components/Loader/Loader";

export const SpinnerDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "10%",
      height: "10%"
    };
    return (
      <div style={style}>
        <Loader />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Spinner"
      description="Displays information related to an element over it."
    />
  );
};

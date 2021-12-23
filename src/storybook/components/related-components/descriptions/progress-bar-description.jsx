import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import LinearProgressBar from "../../../../components/ProgressBars/LinearProgressBar/LinearProgressBar";

export const ProgressBarDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "80%"
    };
    return (
      <div style={style}>
        <LinearProgressBar value={50} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Progress Bar"
      description="Progress bars show continuous progress through a process, such as a percentage value."
    />
  );
};

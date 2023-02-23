import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Counter from "../../../../components/Counter/Counter";

export const CounterDescription = () => {
  const component = useMemo(() => <Counter count={5} />, []);
  return (
    <RelatedComponent
      component={component}
      title="Counter"
      href="/?path=/docs/feedback-counter--overview"
      description="Show the count of some adjacent data. "
    />
  );
};

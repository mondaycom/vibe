import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import { Flex, Button } from "../../../../components";

export const FlexDescription = () => {
  const component = useMemo(() => {
    return (
      <Flex gap={Flex.gaps.SMALL}>
        <Button>Primary</Button>
        <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
      </Flex>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Flex"
      description="Position group of sub-elements in one dimension, horizontal or vertical"
    />
  );
};

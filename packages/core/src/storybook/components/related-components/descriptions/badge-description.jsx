import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Badge from "../../../../components/Badge/Badge";
import Button from "../../../../components/Button/Button";

export const BadgeDescription = () => {
  const component = useMemo(
    () => (
      <Badge>
        <Button>{"What's new"}</Button>
      </Badge>
    ),
    []
  );

  return (
    <RelatedComponent
      component={component}
      title="Badge"
      href="/?path=/docs/feedback-badge--docs"
      description="Used to place an indicator / counter on a child component"
    />
  );
};

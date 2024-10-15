import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Clickable from "../../../../../components/Clickable/Clickable";
import classes from "./clickable-description.stories.module.scss";
import { Text } from "../../../../../components";

export const ClickableDescription = () => {
  const component = useMemo(() => {
    return (
      <Clickable className={classes["clickable-description"]} onClick={() => alert("clicked")}>
        <Text ellipsis={false}>Button with custom appearance</Text>
      </Clickable>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Clickable"
      href="/?path=/docs/accessibility-clickable--docs"
      description="An accessibility helper component which simulates a button behaviour on non button elements."
    />
  );
};

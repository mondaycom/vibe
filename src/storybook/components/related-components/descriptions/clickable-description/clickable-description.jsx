/* eslint-disable no-alert */
import { useMemo } from "react";
import { RelatedComponent } from "../../../related-component/related-component";
import Clickable from "../../../../../components/Clickable/Clickable";
import classes from "./clickable-description.stories.module.scss";

export const ClickableDescription = () => {
  const component = useMemo(() => {
    return (
      <Clickable className={classes["clickable-description"]} onClick={() => alert("clicked")}>
        <div>Button with custom appearance</div>
      </Clickable>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Clickable"
      description="An accessibility helper component which simulates a button behaviour on non button elements."
    />
  );
};

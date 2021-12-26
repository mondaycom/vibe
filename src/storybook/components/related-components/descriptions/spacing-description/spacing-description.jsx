import { useMemo } from "react";
import { RelatedComponent } from "../../../related-component/related-component";
import classes from "./spacing-description.module.scss";

export const SpacingDescription = () => {
  const component = useMemo(
    () => (
      <div className={classes["spacing-description-visual-element"]}>
        <div className={classes["small-spacing-visual-element"]} />
        <div className={classes["medium-spacing-visual-element"]} />
        <div className={classes["large-spacing-visual-element"]} />
      </div>
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="Spacing"
      description="Spacing creates relationships and hierarchy withing the visual controls."
    />
  );
};

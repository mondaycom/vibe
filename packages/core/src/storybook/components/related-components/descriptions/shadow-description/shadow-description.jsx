import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import classes from "./shadow-description.module.scss";

export const ShadowDescription = () => {
  const component = useMemo(() => {
    return [
      <div key="small" className={classes["small-shadow"]} />,
      <div key="md" className={classes["medium-shadow"]} />,
      <div key="large" className={classes["large-shadow"]} />
    ];
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Shadow"
      href="/?path=/docs/foundations-shadow--docs"
      description="Shadows used to create the scenes of hierarchy and elevation withing the UI and layout."
    />
  );
};

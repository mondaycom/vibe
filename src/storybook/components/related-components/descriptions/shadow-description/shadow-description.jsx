import { useMemo } from "react";
import { RelatedComponent } from "../../../related-component/related-component";
import classes from "./shadow-description.module.scss";

export const ShadowDescription = () => {
  const component = useMemo(() => {
    return [
      <div className={classes["small-shadow"]} />,
      <div className={classes["medium-shadow"]} />,
      <div className={classes["large-shadow"]} />
    ];
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Shadow"
      description="Shadows used to create the scenes of hierarchy and elevation withing the UI and layout."
    />
  );
};

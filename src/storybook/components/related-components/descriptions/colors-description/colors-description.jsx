import { useMemo } from "react";
import { RelatedComponent } from "../../../related-component/related-component";
import "./colors-description.scss";

export const ColorsDescription = () => {
  const component = useMemo(
    () => (
      <div className="monday-storybook-colors-description">
        <div className="monday-storybook-colors-description_color-block" />
        <div className="monday-storybook-colors-description_color-block" />
        <div className="monday-storybook-colors-description_color-block" />
      </div>
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="Colors"
      description="Ensure accessible text, and distinguish UI elements and surfaces from one another."
    />
  );
};

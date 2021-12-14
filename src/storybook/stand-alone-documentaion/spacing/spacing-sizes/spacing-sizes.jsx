import SpacingComponent from "./spacing-component/spacing-component";
import "./spacing-sizes.scss";

export const SpacingSizes = () => (
  <div className="monday-storybook-spacing-sizes">
    <SpacingComponent title="XS" sizeInPx="4px" spacingClass="spacing-xs" />
    <SpacingComponent title="S" sizeInPx="8px" spacingClass="spacing-small" />
    <SpacingComponent title="MD" sizeInPx="16px" spacingClass="spacing-medium" />
    <SpacingComponent title="L" sizeInPx="24px" spacingClass="spacing-large" />
    <SpacingComponent title="XL" sizeInPx="32px" spacingClass="spacing-xl" />
    <SpacingComponent title="XXL" sizeInPx="48px" spacingClass="spacing-xxl" />
    <SpacingComponent title="XXXL" sizeInPx="64px" spacingClass="spacing-xxxl" />
  </div>
);

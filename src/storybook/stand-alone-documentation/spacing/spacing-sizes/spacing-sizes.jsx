import { Frame } from "../../../components";
import SpacingComponent from "./spacing-component/spacing-component";
import "./spacing-sizes.scss";

export const SpacingSizes = () => (
  <Frame className="monday-storybook-spacing-sizes">
    <SpacingComponent title="XS" sizeInPx="4px" spacingVariableName="spacing-xs" />
    <SpacingComponent title="S" sizeInPx="8px" spacingVariableName="spacing-small" />
    <SpacingComponent title="MD" sizeInPx="16px" spacingVariableName="spacing-medium" />
    <SpacingComponent title="L" sizeInPx="24px" spacingVariableName="spacing-large" />
    <SpacingComponent title="XL" sizeInPx="32px" spacingVariableName="spacing-xl" />
    <SpacingComponent title="XXL" sizeInPx="48px" spacingVariableName="spacing-xxl" />
    <SpacingComponent title="XXXL" sizeInPx="64px" spacingVariableName="spacing-xxxl" />
  </Frame>
);

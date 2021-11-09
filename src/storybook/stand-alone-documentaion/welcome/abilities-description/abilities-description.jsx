import { AbilityDescription } from "../ability-description/ability-description";
import "./abilities-description.scss";

export const AbilitiesDescription = () => (
  <div className="monday-storybook-abilities-description">
    <AbilityDescription title="Getting started">
      Instructions and welcome to the monday.com OS design system
    </AbilityDescription>
    <AbilityDescription title="Foundations">
      All information about colors, typography, spacing, and icons
    </AbilityDescription>
    <AbilityDescription title="Components">
      All the information and guidelines you’ll ever need on each component
    </AbilityDescription>
  </div>
);

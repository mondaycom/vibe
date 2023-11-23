import { AbilityDescription } from "../ability-description/ability-description";
import { components, foundations, gettingStarted } from "../assets";
import "./abilities-description.scss";

export const AbilitiesDescription = () => (
  <div className="monday-storybook-abilities-description">
    <AbilityDescription
      title="Getting started"
      imageSrc={gettingStarted}
      linkHref="https://github.com/mondaycom/monday-ui-react-core#readme"
    >
      Instructions and welcome to the monday.com OS design system
    </AbilityDescription>
    <AbilityDescription title="Foundations" imageSrc={foundations} linkHref="/?path=/docs/foundations-colors--page">
      All information about colors, typography, spacing, and icons
    </AbilityDescription>
    <AbilityDescription title="Components" imageSrc={components} linkHref="/?path=/docs/buttons">
      All the information and guidelines you’ll ever need on each component
    </AbilityDescription>
  </div>
);

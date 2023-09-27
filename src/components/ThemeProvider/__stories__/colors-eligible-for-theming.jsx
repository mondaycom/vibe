import ColorsDescription from "../../../storybook/stand-alone-documentaion/colors/colors-description/colors-description";
import { Color } from "../ThemeProviderConstants";

export const ColorsEligibleForTheming = () => <ColorsDescription colorNames={Object.values(Color)} />;

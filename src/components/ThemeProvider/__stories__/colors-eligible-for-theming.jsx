import ColorsDescription from "../../../storybook/stand-alone-documentaion/colors/colors-description/colors-description";
import { ThemeColor } from "../ThemeProviderConstants";

export const ColorsEligibleForTheming = () => <ColorsDescription colorNames={Object.values(ThemeColor)} />;

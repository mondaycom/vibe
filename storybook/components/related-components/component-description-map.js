import { ColorsDescription } from "./descriptions/colors-description/colors-description";
import { SpacingDescription } from "./descriptions/spacing-description/spacing-description";

// General description names (not related to specific components)
export const COLORS = "colors";
export const SPACING = "spacing";

export const descriptionComponentsMap = new Map();

// General description (not related to specific components)
descriptionComponentsMap.set(COLORS, <ColorsDescription />);
descriptionComponentsMap.set(SPACING, <SpacingDescription />);

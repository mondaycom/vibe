import iconsMetaData from "./iconsMetaData";

/**
 * Union type of all available icon names in @vibe/icons
 */
export type IconName = (typeof iconsMetaData)[number]["name"];

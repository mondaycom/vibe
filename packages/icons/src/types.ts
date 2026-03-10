import iconsMetaData from "./iconsMetaData";

/**
 * Union type of all available icon names in @ezds/icons
 */
export type IconName = (typeof iconsMetaData)[number]["name"];

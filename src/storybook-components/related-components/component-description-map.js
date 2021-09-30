import { SplitButtonDescription } from "./descriptions/split-button-description";
import { ButtonGroupDescription } from "./descriptions/button-group-description";

export const SPLIT_BUTTON = "split-button";
export const BUTTON_GROUP = "button-group";

export const descriptionTypesMap = new Map();
descriptionTypesMap.set(SPLIT_BUTTON, <SplitButtonDescription />);
descriptionTypesMap.set(BUTTON_GROUP, <ButtonGroupDescription />);

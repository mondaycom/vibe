import { SubIcon, VibeComponent, VibeComponentProps } from "../../types";
import { ReactElement, FocusEvent, AriaAttributes } from "react";
import { InputSize } from "../BaseInput/BaseInput.types";
import IconButton from "../IconButton/IconButton";
import MenuButton from "../MenuButton/MenuButton";

type AdditionalActionRender = ReactElement<typeof IconButton | typeof MenuButton>;

export interface SearchProps extends VibeComponentProps {
  searchIconName?: SubIcon;
  clearIconName?: SubIcon;
  clearIconLabel?: string;
  additionalActionRender?: AdditionalActionRender;
  value?: HTMLInputElement["value"];
  placeholder?: HTMLInputElement["placeholder"];
  size?: InputSize;
  disabled?: HTMLInputElement["disabled"];
  loading?: boolean;
  autoFocus?: HTMLInputElement["autofocus"];
  autoComplete?: HTMLInputElement["autocomplete"];
  inputAriaLabel?: AriaAttributes["aria-label"];
  debounceRate?: number;
  searchResultsContainerId?: string;
  activeDescendant?: AriaAttributes["aria-activedescendant"];
  onChange?: (value: string) => void;
  onBlur?: (event: FocusEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  wrapperClassName?: string;
}

export type SearchComponent = VibeComponent<SearchProps, HTMLInputElement>;

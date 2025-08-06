import type React from "react";
import { type SubIcon, type VibeComponentProps } from "../../types";
import { type InputSize } from "../BaseInput";
import type IconButton from "../IconButton/IconButton";
import type MenuButton from "../MenuButton/MenuButton";

export interface SearchProps extends VibeComponentProps {
  /**
   * The icon used for the search button.
   */
  searchIconName?: SubIcon;
  /**
   * The icon used for the clear button.
   */
  clearIconName?: SubIcon;
  /**
   * The label for the clear button, for accessibility purposes.
   */
  clearIconLabel?: string;
  /**
   * Renders an additional action button in the search input.
   */
  renderAction?: React.ReactElement<typeof IconButton | typeof MenuButton>;
  /**
   * If true, hides the additional action button when input has text.
   */
  hideRenderActionOnInput?: boolean;
  /**
   * The current value of the search input.
   */
  value?: HTMLInputElement["value"];
  /**
   * The placeholder text displayed when the input is empty.
   */
  placeholder?: HTMLInputElement["placeholder"];
  /**
   * The size of the search input, affecting padding and font size.
   */
  size?: InputSize;
  /**
   * If true, disables the search input.
   */
  disabled?: HTMLInputElement["disabled"];
  /**
   * If true, displays a loading indicator inside the input.
   */
  loading?: boolean;
  /**
   * If true, automatically focuses the search input on mount.
   */
  autoFocus?: HTMLInputElement["autofocus"];
  /**
   * Configures the browser's autocomplete behavior.
   */
  autoComplete?: HTMLInputElement["autocomplete"];
  /**
   * The ARIA label for the search input.
   */
  inputAriaLabel?: React.AriaAttributes["aria-label"];
  /**
   * If true, indicates that a popup is open.
   */
  ariaExpanded?: React.AriaAttributes["aria-expanded"];
  /**
   * Specifies the type of popup associated with the search input.
   */
  ariaHasPopup?: React.AriaAttributes["aria-haspopup"];
  /**
   * The debounce rate for input value changes.
   */
  debounceRate?: number;
  /**
   * The ID of the container where search results are displayed.
   */
  searchResultsContainerId?: string;
  /**
   * ARIA property indicating the currently active search result.
   */
  currentAriaResultId?: React.AriaAttributes["aria-activedescendant"];
  /**
   * Callback fired when the search input value changes.
   */
  onChange?: (value: string) => void;
  /**
   * Callback fired when the search input loses focus.
   */
  onBlur?: (event: React.FocusEvent) => void;
  /**
   * Callback fired when the search input gains focus.
   */
  onFocus?: (event: React.FocusEvent) => void;
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear?: () => void;
  /**
   * Callback fired when a key is pressed inside the input.
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * If true, displays a clear button inside the search input.
   */
  showClearIcon?: boolean;
}

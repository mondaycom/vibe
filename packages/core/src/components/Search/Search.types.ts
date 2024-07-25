import React from "react";
import { SubIcon, VibeComponentProps } from "../../types";
import { InputSize } from "../BaseInput/BaseInput.types";
import IconButton from "../IconButton/IconButton";
import MenuButton from "../MenuButton/MenuButton";

export interface SearchProps extends VibeComponentProps {
  /**
   * Name of the icon used for the search button.
   */
  searchIconName?: SubIcon;
  /**
   * Name of the icon used for the clear button.
   */
  clearIconName?: SubIcon;
  /**
   * Label for the clear icon button, for accessibility purposes.
   */
  clearIconLabel?: string;
  /**
   * Render additional action within the right section of search component.
   */
  renderAction?: React.ReactElement<typeof IconButton | typeof MenuButton>;
  /**
   * If true, hides the additional action when the user types in the search input.
   */
  hideRenderActionOnInput?: boolean;
  /**
   * The value of the search input.
   */
  value?: HTMLInputElement["value"];
  /**
   * Placeholder text for the search input when it's empty.
   */
  placeholder?: HTMLInputElement["placeholder"];
  /**
   * Size of the input element. Will influence also padding and font size.
   */
  size?: InputSize;
  /**
   * If true, the search input is disabled and cannot be interacted with.
   */
  disabled?: HTMLInputElement["disabled"];
  /**
   * Shows a loading indicator in the search component, typically used while fetching results.
   */
  loading?: boolean;
  /**
   * If true, the search input is automatically focused when the component mounts.
   */
  autoFocus?: HTMLInputElement["autofocus"];
  /**
   * Configures the browser's autocomplete feature for the search input.
   */
  autoComplete?: HTMLInputElement["autocomplete"];
  /**
   * Aria-label for the search input, important for accessibility.
   */
  inputAriaLabel?: React.AriaAttributes["aria-label"];
  /**
   * aria to be set if the popup is open.
   */
  ariaExpanded?: React.AriaAttributes["aria-expanded"];
  /**
   * aria to be set the sarch result popup's type.
   */
  ariaHasPopup?: React.AriaAttributes["aria-haspopup"];
  /**
   * Rate at which search input changes are debounced.
   */
  debounceRate?: number;
  /**
   * The id of the container element where search results are to be displayed.
   */
  searchResultsContainerId?: string;
  /**
   * ARIA property that identifies the currently active item within the search results.
   */
  currentAriaResultId?: React.AriaAttributes["aria-activedescendant"];
  /**
   * Callback function that is called whenever the value of the search input changes.
   */
  onChange?: (value: string) => void;
  /**
   * Callback function that is called when the search input loses focus.
   */
  onBlur?: (event: React.FocusEvent) => void;
  /**
   * Callback function that is called when the search input gains focus.
   */
  onFocus?: (event: React.FocusEvent) => void;
  /**
   * Callback function that is called when the clear button is clicked.
   */
  onClear?: () => void;
}

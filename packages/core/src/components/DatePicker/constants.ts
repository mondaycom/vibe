export const YEAR_FORMAT = "YYYY";
export const MONTH_FORMAT = "MMMM";
export const DAY_SIZE = 40;
export const WEEK_FIRST_DAY = 1;

/**
 * Default phrases for DatePicker accessibility and internationalization.
 * This replaces the deprecated defaultProps usage from react-dates.
 */
export const DEFAULT_DATE_PICKER_PHRASES = {
  calendarLabel: "Calendar",
  roleDescription: "datepicker",
  closeDatePicker: "Close",
  focusStartDate: "Interact with the calendar and add the check-in date for your trip.",
  clearDate: "Clear Date",
  clearDates: "Clear Dates",
  jumpToPrevMonth: "Move backward to switch to the previous month.",
  jumpToNextMonth: "Move forward to switch to the next month.",
  keyboardShortcuts: "Keyboard Shortcuts",
  showKeyboardShortcutsPanel: "Open the keyboard shortcuts panel.",
  hideKeyboardShortcutsPanel: "Close the shortcuts panel.",
  openThisPanel: "Open this panel.",
  enterKey: "Enter key",
  leftArrowRightArrow: "Right and left arrow keys",
  upArrowDownArrow: "up and down arrow keys",
  pageUpPageDown: "page up and page down keys",
  homeEnd: "Home and end keys",
  escape: "Escape key",
  questionMark: "Question mark",
  selectFocusedDate: "Select the date in focus.",
  moveFocusToNextDay: "Move backward (left) and forward (right) by one day.",
  moveFocusToNextWeek: "Move backward (up) and forward (down) by one week.",
  moveFocusToStartAndEndOfWeek: "Go to the first or last day of a week.",
  returnFocusToInput: "Return to the date input field.",
  keyboardNavigationInstructions:
    "Press the down arrow key to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.",
  chooseAvailableStartDate: ({ date }: { date: string }) => `Choose ${date} as your start date.`,
  chooseAvailableEndDate: ({ date }: { date: string }) => `Choose ${date} as your end date.`,
  chooseAvailableDate: ({ date }: { date: string }) => `Choose ${date}.`,
  dateIsUnavailable: ({ date }: { date: string }) => `${date} is not selectable.`,
  dateIsSelected: ({ date }: { date: string }) => `${date} is selected.`,
  dateIsSelectedAsStartDate: ({ date }: { date: string }) => `${date} is selected as your start date.`,
  dateIsSelectedAsEndDate: ({ date }: { date: string }) => `${date} is selected as your end date.`
};

const ENTER_KEY_CODE = 13;
const ESCAPE_KEY_CODE = 27;
const BACKSPACE = 8;
const TAB = 9;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const ARROW_LEFT_KEY_CODE = 37;
const ARROW_UP_KEY_CODE = 38;
const ARROW_RIGHT_KEY_CODE = 39;
const ARROW_DOWN_KEY_CODE = 40;

const validateEvent = (event, keyCode, key) => {
  if (!event) return false;
  return event.keyCode === keyCode || event.which === keyCode || (key && event.key === key);
};

export const isEnterEvent = event => {
  return validateEvent(event, ENTER_KEY_CODE);
};

export const isShiftEnterEvent = event => {
  return event.shiftKey && isEnterEvent(event);
};

export const isEscapeEvent = event => {
  return validateEvent(event, ESCAPE_KEY_CODE);
};

export const isArrowUpEvent = event => {
  return validateEvent(event, ARROW_UP_KEY_CODE);
};

export const isArrowDownEvent = event => {
  return validateEvent(event, ARROW_DOWN_KEY_CODE);
};

export const isArrowRightEvent = event => {
  return validateEvent(event, ARROW_RIGHT_KEY_CODE);
};

export const isArrowLeftEvent = event => {
  return validateEvent(event, ARROW_LEFT_KEY_CODE);
};

export const isBackspaceEvent = event => {
  return validateEvent(event, BACKSPACE);
};

export const isSpaceEvent = event => {
  return validateEvent(event, SPACE);
};

export const isTabEvent = event => {
  return validateEvent(event, TAB);
};

export const isPageUpEvent = event => {
  return validateEvent(event, PAGE_UP);
};

export const isPageDownEvent = event => {
  return validateEvent(event, PAGE_DOWN);
};

export const isEndEvent = event => {
  return validateEvent(event, END);
};

export const isHomeEvent = event => {
  return validateEvent(event, HOME);
};

export const isShiftTabEvent = event => {
  return event.shiftKey && isTabEvent(event);
};

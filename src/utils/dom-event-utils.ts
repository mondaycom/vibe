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

function validateEvent(
  event: KeyboardEvent,
  keyCode: KeyboardEvent["keyCode"] | KeyboardEvent["which"],
  key?: KeyboardEvent["key"]
) {
  if (!event) return false;
  return event.keyCode === keyCode || event.which === keyCode || (key && event.key === key);
}

export function isEnterEvent(event: KeyboardEvent) {
  return validateEvent(event, ENTER_KEY_CODE);
}

export function isShiftEnterEvent(event: KeyboardEvent) {
  return event.shiftKey && isEnterEvent(event);
}

export function isEscapeEvent(event: KeyboardEvent) {
  return validateEvent(event, ESCAPE_KEY_CODE);
}

export function isArrowUpEvent(event: KeyboardEvent) {
  return validateEvent(event, ARROW_UP_KEY_CODE);
}

export function isArrowDownEvent(event: KeyboardEvent) {
  return validateEvent(event, ARROW_DOWN_KEY_CODE);
}

export function isArrowRightEvent(event: KeyboardEvent) {
  return validateEvent(event, ARROW_RIGHT_KEY_CODE);
}

export function isArrowLeftEvent(event: KeyboardEvent) {
  return validateEvent(event, ARROW_LEFT_KEY_CODE);
}

export function isBackspaceEvent(event: KeyboardEvent) {
  return validateEvent(event, BACKSPACE);
}

export function isSpaceEvent(event: KeyboardEvent) {
  return validateEvent(event, SPACE);
}

export function isTabEvent(event: KeyboardEvent) {
  return validateEvent(event, TAB);
}

export function isPageUpEvent(event: KeyboardEvent) {
  return validateEvent(event, PAGE_UP);
}

export function isPageDownEvent(event: KeyboardEvent) {
  return validateEvent(event, PAGE_DOWN);
}

export function isEndEvent(event: KeyboardEvent) {
  return validateEvent(event, END);
}

export function isHomeEvent(event: KeyboardEvent) {
  return validateEvent(event, HOME);
}

export function isShiftTabEvent(event: KeyboardEvent) {
  return event.shiftKey && isTabEvent(event);
}

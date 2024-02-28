import React from "react";

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
  event: React.KeyboardEvent,
  keyCode: React.KeyboardEvent["keyCode"] | React.KeyboardEvent["which"],
  key?: React.KeyboardEvent["key"]
) {
  if (!event) return false;
  return event.keyCode === keyCode || event.which === keyCode || (key && event.key === key);
}

export function isEnterEvent(event: React.KeyboardEvent) {
  return validateEvent(event, ENTER_KEY_CODE);
}

export function isShiftEnterEvent(event: React.KeyboardEvent) {
  return event.shiftKey && isEnterEvent(event);
}

export function isEscapeEvent(event: React.KeyboardEvent) {
  return validateEvent(event, ESCAPE_KEY_CODE);
}

export function isArrowUpEvent(event: React.KeyboardEvent) {
  return validateEvent(event, ARROW_UP_KEY_CODE);
}

export function isArrowDownEvent(event: React.KeyboardEvent) {
  return validateEvent(event, ARROW_DOWN_KEY_CODE);
}

export function isArrowRightEvent(event: React.KeyboardEvent) {
  return validateEvent(event, ARROW_RIGHT_KEY_CODE);
}

export function isArrowLeftEvent(event: React.KeyboardEvent) {
  return validateEvent(event, ARROW_LEFT_KEY_CODE);
}

export function isBackspaceEvent(event: React.KeyboardEvent) {
  return validateEvent(event, BACKSPACE);
}

export function isSpaceEvent(event: React.KeyboardEvent) {
  return validateEvent(event, SPACE);
}

export function isTabEvent(event: React.KeyboardEvent) {
  return validateEvent(event, TAB);
}

export function isPageUpEvent(event: React.KeyboardEvent) {
  return validateEvent(event, PAGE_UP);
}

export function isPageDownEvent(event: React.KeyboardEvent) {
  return validateEvent(event, PAGE_DOWN);
}

export function isEndEvent(event: React.KeyboardEvent) {
  return validateEvent(event, END);
}

export function isHomeEvent(event: React.KeyboardEvent) {
  return validateEvent(event, HOME);
}

export function isShiftTabEvent(event: React.KeyboardEvent) {
  return event.shiftKey && isTabEvent(event);
}

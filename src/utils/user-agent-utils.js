import { detect } from "detect-browser";

const browser = detect();

export function getBrowserName() {
  if (browser && browser.name && browser.name) {
    return browser.name;
  }
}

export function isFirefox() {
  return getBrowserName() === "firefox";
}

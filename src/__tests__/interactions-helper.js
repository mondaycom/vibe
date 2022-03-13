import { within, userEvent } from "@storybook/testing-library";
import { getTestId, ELEMENT_TYPES as types } from "../utils/test-utils";

export const ELEMENT_TYPES = types;

function getWithin(canvasOrValidTestElement) {
  if (canvasOrValidTestElement.getByRole) return canvasOrValidTestElement;
  return within(canvasOrValidTestElement);
}

export const testFunctionWrapper = testFunc => {
  return async ({ canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = getWithin(canvasElement);
    return testFunc(canvas);
  };
};

export const getByTestId = (rootElement, elementType, id = "") => {
  const dataTestId = getTestId(elementType, id);
  return getWithin(rootElement).getByTestId(dataTestId);
};

export const getByText = (rootElement, text) => {
  return getWithin(rootElement).getByText(text);
};

export const getByPlaceholderText = (rootElement, text) => {
  return getWithin(rootElement).getByPlaceholderText(text);
};

export const getByClassName = className => {
  return document.getElementsByClassName(className)[0];
};

export const getByRole = (rootElement, role) => {
  return getWithin(rootElement).getByRole(role);
};

export const getByLabelText = (rootElement, text) => {
  return getWithin(rootElement).getByLabelText(text);
};

export const clickElement = element => {
  return userEvent.click(element);
};

export const hoverElement = element => {
  return userEvent.hover(element);
};

export const typeText = async (element, text, waitForDebounceMs = 250) => {
  let promise = userEvent.type(element, text, {
    delay: 50
  });
  const result = await promise;
  await delay(waitForDebounceMs);
  return result;
};

export function delay(timeout) {
  return new Promise(resolve => {
    if (!timeout) return resolve();
    setTimeout(resolve, timeout);
  });
}

import { within, userEvent } from "@storybook/testing-library";
import * as story from "@storybook/testing-library";
import { waitFor } from "@testing-library/react";
import { getTestId, ELEMENT_TYPES as types } from "../utils/test-utils";
import { expect } from "@storybook/jest";

export const ELEMENT_TYPES = types;

function getWithin(canvasOrValidTestElement) {
  if (canvasOrValidTestElement.getByRole) return canvasOrValidTestElement;
  const result = within(canvasOrValidTestElement);
  if (result instanceof Error) {
    throw result;
  }
  return result;
}

export const interactionSuite =
  ({ beforeEach = null, afterEach = null, tests }) =>
  async ({ canvasElement, args }) => {
    for (const test of tests) {
      const fnName = test.name;
      if (beforeEach) {
        logFunctionStart(`Before: ${fnName}`);
        await testFunctionWrapper(beforeEach)({ canvasElement, args });
      }

      logFunctionStart(`Running : ${fnName}`);
      await testFunctionWrapper(test)({ canvasElement, args });

      if (afterEach) {
        logFunctionStart(`Running: ${fnName}`);
        await testFunctionWrapper(afterEach)({ canvasElement, args });
      }
    }
  };

export const testFunctionWrapper = testFunc => {
  return async ({ canvasElement, args }) => {
    // Starts querying the component from its root element
    const canvas = getWithin(canvasElement);
    return testFunc(canvas, args);
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

export const waitForElementVisible = getterFunc => {
  return new Promise(resolve => {
    let element;
    waitFor(() => {
      element = getterFunc();
      expect(element).toBeVisible();
    }).then(() => {
      resolve(element);
    });
  });
};

function logFunctionStart(name) {
  expect(` ➡️ ${name}`).toBeDefined();
}

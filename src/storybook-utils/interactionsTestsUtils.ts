import { within, userEvent, fireEvent, queries } from "@storybook/testing-library";
import { Screen, waitFor, BoundFunctions } from "@testing-library/react";
import { NavigationCommand } from "./testsConstants";
import { expect } from "@storybook/jest";
export type TestFunction = (canvas: BoundFunctions<typeof queries>, args: Record<string, any>) => unknown;
export type Coordinates = { x: number; y: number };

// Internal functions
const testFunctionWrapper = (testFunc: TestFunction) => {
  return async ({ canvasElement, args }: { canvasElement: Screen; args: Record<string, any> }) => {
    // Starts querying the component from its root element
    const canvas = getWithin(canvasElement);
    return testFunc(canvas, args);
  };
};

function logFunctionStart(name: string) {
  expect(` ➡️ ${name}`).toBeDefined();
}

function getElementClientCenter(element: HTMLElement) {
  const { left, top, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2
  };
}

const getCoords = ({
  toElm,
  toCoords,
  delta,
  from
}: {
  toElm: HTMLElement;
  toCoords: Coordinates;
  delta: Coordinates;
  from: Coordinates;
}) => {
  if (toCoords) {
    return { ...from, ...toCoords };
  }
  if (toElm) {
    return getElementClientCenter(toElm);
  }
  if (delta) {
    return {
      x: from.x + delta.x,
      y: from.y + delta.y
    };
  }
  return {
    x: from.x + 10,
    y: from.y + 0
  };
};

function getWithin(canvasOrValidTestElement: HTMLElement | BoundFunctions<typeof queries>) {
  if (canvasOrValidTestElement instanceof HTMLElement) {
    const result = within(canvasOrValidTestElement);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  } else if (canvasOrValidTestElement.getByRole) return canvasOrValidTestElement;
}

// External functions
export const interactionSuite =
  ({
    beforeEach = null,
    tests,
    afterEach = null
  }: {
    beforeEach?: TestFunction;
    tests: Array<TestFunction>;
    afterEach?: TestFunction;
  }): (({ canvasElement, args }: { canvasElement: Screen; args: Record<string, any> }) => Promise<void>) =>
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
        logFunctionStart(`After: ${fnName}`);
        await testFunctionWrapper(afterEach)({ canvasElement, args });
      }
    }
  };

export const getByTestId = (rootElement: HTMLElement, dataTestId: string) => {
  return getWithin(rootElement).getByTestId(dataTestId);
};

export const getByPlaceholderText = (rootElement: HTMLElement, text: string) => {
  return getWithin(rootElement).getByPlaceholderText(text);
};

export const getByClassName = (className: string) => {
  return document.getElementsByClassName(className);
};

export const getFirstByClassName = (className: string) => {
  return document.getElementsByClassName(className)[0];
};

export const getByRole = (rootElement: HTMLElement, role: string) => {
  return getWithin(rootElement).getByRole(role);
};

export const getByLabelText = (rootElement: HTMLElement, text: string) => {
  return getWithin(rootElement).getByLabelText(text);
};

export const getByText = (rootElement: HTMLElement, text: string) => {
  return getWithin(rootElement).getByText(text);
};

export const clickElement = (element: HTMLElement) => {
  return userEvent.click(element);
};

export const hoverElement = (element: HTMLElement) => {
  return userEvent.hover(element);
};

export const typeText = async (element: HTMLElement, text: string, waitForDebounceMs = 250) => {
  const promise = userEvent.type(element, text, {
    delay: 50
  });
  const result = await promise;
  await delay(waitForDebounceMs);
  return result;
};

export const expectActiveElementToHaveExactText = (text: string) => {
  expect(document.activeElement).toHaveTextContent(new RegExp(`^${text}$`));
};

export const expectActiveElementToHavePartialText = (text: string) => {
  expect(document.activeElement).toHaveTextContent(text);
};

export const pressNavigationKey = async (command = NavigationCommand.TAB, waitForDebounceMs = 0) => {
  const promise = command === NavigationCommand.TAB ? userEvent.tab() : userEvent.keyboard(command);
  const result = await promise;
  await delay(waitForDebounceMs);
  return result;
};

export function delay(timeout: number) {
  return new Promise((resolve: (value: unknown) => void) => {
    if (!timeout) return resolve(undefined);
    setTimeout(resolve, timeout);
  });
}

export const waitForElementVisible = (getterFunc: () => HTMLElement) => {
  return new Promise(resolve => {
    let element: HTMLElement;
    waitFor(async () => {
      element = await getterFunc();
      expect(element).toBeVisible();
    }).then(() => {
      resolve(element);
    });
  });
};

export const pressMultipleTimes = async (text: string, count: number, options = { delay: 70 }) => {
  text = text.repeat(count);
  await userEvent.keyboard(text, options);
};

export async function drag(
  element: HTMLElement,
  {
    delta = undefined,
    toCoords = undefined,
    toElm = undefined,
    steps = 20,
    duration = 100
  }: { delta: Coordinates; toCoords: Coordinates; toElm: HTMLElement; steps: number; duration: number }
) {
  const from = getElementClientCenter(element);
  const to = getCoords({ toElm, toCoords, delta, from });
  const step = {
    x: (to.x - from.x) / steps,
    y: (to.y - from.y) / steps
  };
  const current = {
    clientX: from.x,
    clientY: from.y
  };
  userEvent.hover(element);
  fireEvent.pointerEnter(element, current);
  fireEvent.pointerOver(element, current);
  fireEvent.pointerMove(element, current);
  fireEvent.pointerDown(element, current);
  for (let i = 0; i < steps; i++) {
    current.clientX += step.x;
    current.clientY += step.y;
    await delay(duration / steps);
    fireEvent.pointerMove(element, current);
  }
  fireEvent.pointerUp(element, current);
}

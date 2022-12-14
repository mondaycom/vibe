import { fireEvent, queries, userEvent, within } from "@storybook/testing-library";
import { BoundFunctions, Screen, waitFor } from "@testing-library/react";
import { NavigationCommand as NavigationCommandType } from "./constants";
import { expect } from "@storybook/jest";

export type TestFunction = (canvas: BoundFunctions<typeof queries>, args: Record<string, any>) => unknown;
export type Coordinates = { x: number; y: number };

// Internal functions
export const testFunctionWrapper = (testFunc: TestFunction) => {
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

// External constants
export const NavigationCommand = NavigationCommandType;

// External functions
export const interactionSuite =
  ({
    beforeEach = null,
    beforeAll = null,
    skip = false,
    tests,
    afterEach = null,
    afterAll = null
  }: {
    beforeEach?: TestFunction;
    beforeAll?: TestFunction;
    skip?: boolean;
    tests: Array<TestFunction>;
    afterAll?: TestFunction;
    afterEach?: TestFunction;
  }): (({ canvasElement, args }: { canvasElement: Screen; args: Record<string, any> }) => Promise<void>) =>
  async ({ canvasElement, args }) => {
    if (skip) return;

    if (beforeAll) {
      logFunctionStart("Before all:");
      await testFunctionWrapper(beforeAll)({ canvasElement, args });
    }

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

    if (afterAll) {
      logFunctionStart("After all:");
      await testFunctionWrapper(afterAll)({ canvasElement, args });
    }
  };

export const getByTestId = (rootElement: HTMLElement, dataTestId: string) => {
  return getWithin(rootElement).getByTestId(dataTestId);
};

export const getAllByTestId = (rootElement: HTMLElement, dataTestId: string) => {
  return getWithin(rootElement).getAllByTestId(dataTestId);
};

export const getByPlaceholderText = (rootElement: HTMLElement, text: string) => {
  return getWithin(rootElement).getByPlaceholderText(text);
};

export const getAllByPlaceholderText = (rootElement: HTMLElement, text: string) => {
  return getWithin(rootElement).getAllByPlaceholderText(text);
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

export const getAllByRole = (rootElement: HTMLElement, role: string) => {
  return getWithin(rootElement).getAllByRole(role);
};

export const getByLabelText = (rootElement: HTMLElement, text: string) => {
  return getWithin(rootElement).getByLabelText(text);
};

export const getAllByLabelText = (rootElement: HTMLElement, text: string) => {
  return getWithin(rootElement).getAllByLabelText(text);
};

export const getByText = (rootElement: HTMLElement, text: string) => {
  return getWithin(rootElement).getByText(text);
};

export const getAllByText = (rootElement: HTMLElement, text: string) => {
  return getWithin(rootElement).getAllByText(text);
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

export const pressNavigationKey = async (command = NavigationCommandType.TAB, waitForDebounceMs = 0) => {
  const promise = command === NavigationCommandType.TAB ? userEvent.tab() : userEvent.keyboard(command);
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

export const typeMultipleTimes = async (text: string, count: number, options = { delay: 70 }) => {
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

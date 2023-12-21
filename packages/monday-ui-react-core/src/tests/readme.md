# Implementing interactions tests using Storybook & Vibe
For implementing more complex e2e tests in the storybook environment, we recommend using storybook interaction tests combined with the tools exported by our repository.
For example, interaction tests can be a more straightforward tool for testing keyboard navigation support flow on your composites or pages, happy path flows, or reproducing error or empty complex scenarios.

## Implement interactions tests for stories by using interactions suites
Interactions tests are functions that can interact with your story elements.
You can see an example of connecting a test function to a story below:
````
// LoginForm.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { LoginForm } from './LoginForm';

export default {
  title: 'Form',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;
export const EmptyForm = Template.bind({});

/*
* See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
  
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};
````

We often separate our tests into different scenarios, which together make up a comprehensive test suite.
You can implement your own interactions suites by using vibe's interactionSuite function, as we can see in the example below:
````
// LoginForm.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
impot { interactionSuite } from "monday-ui-react-core/interaction-tests"
import { LoginForm } from './LoginForm';

export default {
  title: 'Form',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;
export const EmptyForm = Template.bind({});

const FilledFormSuccessTest = async async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};

const PartEmptyFormErrorMsgTest = async async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Please set a password in order to register successfully'
    )
  ).toBeInTheDocument();
};

export const FilledForm = Template.bind({});
FilledForm.play = interactionSuite({
    tests: [FilledFormSuccessTest, PartEmptyFormErrorMsgTest]
});
````

The interactionSuite functions received the following attributes:
- **skip** (`boolean`): If true, the test suite will not run.
- **beforeEach** (`(canvas: Canvas, args: Record<string, any>) => void`) Will run before each test in the suite.
- **beforeAll**:  (`(canvas: Canvas, args: Record<string, any>) => void`) Will run once before all the suite's tests.
- **tests**: `(Array<(canvas: Canvas, args: Record<string, any>) => void>`) The suite's tests.
- **afterEach**: (`(canvas: Canvas, args: Record<string, any>) => void`) Will run after each test in the suite.
- **afterAll**: (`canvas: Canvas, args: Record<string, any>) => void`) Will run once after all the suite's tests.

## Query elements by using vibe helpers
- **getByTestId**: Parameters: (`rootElement: HTMLElement, dataTestId: string`)
- **getByPlaceholderText**: Parameters:  (`rootElement: HTMLElement, text: string`)
- **getByClassName**: Return Array of elements with the given class name. Parameters: (`className: string`)
- **getFirstByClassName**: Return the first element which found with the given class name. Parameters: (`className: string`)
- **getByRole**: Parameters: (`rootElement: HTMLElement, role: string`)
- **getByText**: Search inside the root element for the first element with the given text. Parameters: (`rootElement: HTMLElement, text: string`)
- **getByLabelText**: Search inside the root element for the first element with the given text as aria label. Parameters: (rootElement: HTMLElement, text: string`)

## Interact elements by using storybook & vibe helpers
You can use the storybook's userEvent to interact with different elements. Read more about this here: https://github.com/storybookjs/storybook/blob/next/docs/writing-tests/interaction-testing.md
Vibe export more useful functions for a few scenarios:
- **clickElement**: click on a given element. (`element: HTMLElement`)
- **hoverElement**: hover on a given element. (`element: HTMLElement`)
- **typeText**: async function for typing given text. Parameters: (`element: HTMLElement, text: string, waitForDebounceMs = 250`)
- **typeMultipleTimes**:  async function, received the following parameters (`command = NavigationCommand.TAB, waitForDebounceMs = 0`)
- **drag**: async function, received the following parameters (`element: HTMLElement, options: {delta = undefined, toCoords = undefined, toElm = undefined, steps = 20, duration = 100}`)
- **pressNavigationKey**: async function, received the following parameters (`command = NavigationCommand.TAB, waitForDebounceMs = 0`)

## Basic example for usage:
```
onst selectAndClearTest = async canvas => {
  const dropdownElement = await getByRole(canvas, "textbox");
  // Open the dropdown
  await clickElement(dropdownElement);
  // Filter it
  await typeText(dropdownElement, "Option");
  // Select the option
  const optionToSelect = getByText(canvas, "Option 1");
  await clickElement(optionToSelect);
  // click the clear button
  const clearButton = getFirstByClassName("clear-indicator");
  await clickElement(clearButton);
  // Validate we see the placeholder again
  getByText(canvas, "Placeholder text here");
};
```

## Manipulate timing by using vibe helpers
- **delay**: async function, received the following parameters (`timeout: number`).
- **waitForElementVisible**: async function for cases of querying an element which takes time until it will appear. Receiving the following parameters: (`getterFunc: () => HTMLElement`)

## Accessibility tests using vibe helpers
- **expectActiveElementToHaveExactText**: Parameters (`text: string`).
- **expectActiveElementToHavePartialText**: Parameters (`text: string`). 

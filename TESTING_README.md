# Writing Components Tests

As this library is the base of all monday's ui and an open source library, its components should be very well tested. In order to do so we've chosen the following test stack.

##  Component tests types

We are using two approaches when regarding testing the first is the standard jest stack:
1. Jest as of our test runner and framework
2. [React testing library](https://testing-library.com/docs/react-testing-library/intro) as our components testing library
3. Storybook interaction tests for scenarios which require real browser instead of JSDom simulation. More information about this [here](./src/tests/readme.md).

## Snapshot tests
- Every component will contain a snapshot tests file according to the following name convention: *component-name*-snapshot-tests.jest.tsx.
- The snapshot tests file will be located under the component's __tests__ folder.
- This file will contain a snapshot test for the component with empty props and a snapshot test for each prop.
- Snapshot files will be implemented with Jest, as shown in the following example:

```tsx
import React from "react";
import renderer from "react-test-renderer";
import Chips from "../Chips";

describe("Chips renders correctly", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Chips />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

## Behaviour tests
- Every interactive component will contain a behaviour tests file according to the following name convention: *component-name*-tests.jest.tsx.
- The behaviour tests file will be located under the component's __tests__ folder.
- This tests file will contain all the non-snapshot unit tests. This file should contain a test for each possible user interaction with the component.
- Snapshot files will be implemented with Jest and React Testing library when needed, as shown in the following example:

```tsx
import { fireEvent, render } from "@testing-library/react";
import Tipseen from "../Tipseen";

describe("Tipseen tests", () => {
  it("call onClose function when click on close button", () => {
    const onClickMock = jest.fn();
    const { getByLabelText } = render(
            <Tipseen onClose={onClickMock}>
              <div />
            </Tipseen>
    );
    
    fireEvent.click(getByLabelText("Close"));
    expect(onClickMock.mock.calls.length).toBe(1);
  });
});
```

### Storybook interaction tests
- Every interactive component will contain a storybook interaction tests file according to the following name convention: *component-name*-interactions.tsx.
- The  storybook interaction tests file will be located under the component's __tests__ folder.
- This tests file will contain all tests which require real browser instead of JSDOM simulation.
- Snapshot files will be implemented with Jest and React Testing library when needed, as shown in the following example:
- Every storybook interaction test suite is linked to a specific component story.
- You can read more about storybook interaction tests and our recommended practices [here](./src/tests/readme.md).

### Testing best practices
1. **Always test the expected behavior and not implementation details**: Our first and most important guideline regarding tests implementation is
**always to test the expected component behavior rather than implementation details**. This approach helps us ensure test resilience, enabling easier refactoring and maintenance. It also enhances flexibility, improves communication, and future-proofs our tests. Overall, focusing on expected behavior leads to more robust test suites.

### Creating test files from scratch
Use our plop, which automatically generates the proper folder structure. Snapshot tests and jest behavior testes files should end with .test.tsx, and storybook interaction tests files with .interactions.tsx

### Running Vibe Tests
**Snapshot and Behavior Tests:**
To run all snapshot and behavior tests locally, use the command: `npm run test`.

**Local Storybook Interaction Tests:**
To check interaction tests for a specific story in Storybook:
1. Open the Sandbox section of Storybook.
2. Select the desired story.
3. Click on the "Interactions" tab in the story's footer tabs panel.

### React testing 101
#### Mounting components
In react testing library we "mount" the entire components and the tests are running against a fully rendered tree in order to simulate the most accurate user environment.
In order to render a component you need to import the following
```js
import { render } from "@testing-library/react";
```
in the test -
```js 
const component = render(/* Valid JSX */);
```

#### Firing Events
As we said before we want to simulate the user as much as possible, a user is interacting with the browser in event matters - ClickEvent, FocusEvent, KeyDownEvent.....
So in order to do so we will use the `fireEvent` helper method
`import { fireEvent } from "@testing-library/react";`

##### Click Example
```js
fireEvent.click(buttonElement);
``` 
this will trigger a click event on the button element (and all listeners will fire in turn)
##### Input mutation Example
```js
fireEvent.change(input, { target: { value: "Text to change to" } });
```
This will trigger the `onChange` callback on the input

[supported events list](https://github.com/testing-library/dom-testing-library/blob/master/src/event-map.js)


#### Queries
To allow us query the component to interact with different part of it (for example - click on an icon in a list)
React testing library gives us number of tools to interact with the DOM with an emphasis to do so like the user would do so.

There are number of ways to query they have the same suffix but the prefix will change
##### example
```js
const { queryByPlaceholderText } = render(<InputComponent />);
expect(queryByPlaceholderText("PlaceHolderText")).to.be.ok;
```
In this example we are looking for an element which has a placeholder with the text PlaceHolderText

#### [Queries Prefix](https://testing-library.com/docs/react-testing-library/cheatsheet)
|  |No Math  |1 Match  |1+ Match | Await |
|----------------|----------------|----------------|----------------|----------------|
|getBy  | throw |return  |throw |no |
|findBy  | throw |return  |throw |yes |
| queryBy |null  | return | throw| no |
| getAllBy | throw | array |array | no |
| findAllBy | throw | array |array |yes |
| queryAllBy | [] | array |array | no |

#### Queries of Suffix
-   [`ByLabelText`](https://testing-library.com/docs/dom-testing-library/api-queries#bylabeltext)
-   [`ByPlaceholderText`](https://testing-library.com/docs/dom-testing-library/api-queries#byplaceholdertext)
-   [`ByText`](https://testing-library.com/docs/dom-testing-library/api-queries#bytext)
-   [`ByAltText`](https://testing-library.com/docs/dom-testing-library/api-queries#byalttext)
-   [`ByTitle`](https://testing-library.com/docs/dom-testing-library/api-queries#bytitle)
-   [`ByDisplayValue`](https://testing-library.com/docs/dom-testing-library/api-queries#bydisplayvalue)
-   [`ByRole`](https://testing-library.com/docs/dom-testing-library/api-queries#byrole)
-   [`ByTestId`](https://testing-library.com/docs/dom-testing-library/api-queries#bytestid)

# Writing Components Tests

As this library is the base of all monday's ui and an open source library, its components should be very well tested. In order to do so we've chosen the following test stack.

We are using two approaches when regarding testing the first is the standard jest stack:
1. Jest as of our test runner and framework
2. [React testing library](https://testing-library.com/docs/react-testing-library/intro) as our components testing library
3. Storybook interaction tests for more complex scenarios (more information regarding this subject later. More information about this [here](./src/tests/readme.md).

#### Component tests file structure
Each component in the library will contain a __tests__ folder that should have three files:
- **Snapshot tests file**: *component-name*-snapshot-tests.jest.tsx, which will include all the component snapshot tests.
  This file will contain a snapshot test for the component with empty props and a snapshot test for each prop.
- **Behivor tests file**: *component-name*-tests.jest.tsx Tests file for all the tests which are not snapshot tests. This file should contain a test for each possible user interaction with the component. Any other tests for the component which are not snapshot tests also should be here.
- **Storybook interaction tests**: *component-name*-interactions.tsx For more complex tests that are difficult to implement in the other way described before, we can also implement tests using Storybook interaction tests abilities. Every storybook interaction test suite is linked to a specific component story. These tests can use us when we need to render our components in an actual DOM for checking particular scenarios.

### Always test the expected behavior and not implementation details
Our first and most important guideline regarding tests implementation is
always to test the expected component behavior rather than implementation details. This approach helps us ensure test resilience, enabling easier refactoring and maintenance. It also enhances flexibility, improves communication, and future-proofs our tests. Overall, focusing on expected behavior leads to more robust test suites.

#### Creating test files from scratch
Use our plop, which automatically generates the proper folder structure. Snapshot tests and jest behavior testes files should end with .test.tsx, and storybook interaction tests files with .interactions.tsx

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

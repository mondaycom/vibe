# Writing Components Tests

As this library is the base of all monday's ui and future open source library, its components should be very well tested. In order to do so we've chosen the following test stack. 

We are using two approaches when regarding testing the first is the standard jest stack:
1. Jest as of our test runner and framework
2. [React testing library](https://testing-library.com/docs/react-testing-library/intro) as our components testing library

## React testing library
This library forces us to test according to user behaviour and not implementation details (state keys for example) for example the library allows you to target elements according to text, aria labels, placeholders text and more. This approach ensure us that we test the component in the right way and allows us easier refactoring when needed.

#### Test File
#### Jest
Use our plop which automatically generates the proper folder structure, each file should end with .test.js

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


#### Component tests file structure
Each component in the library will contain a __tests__ folder that should contain two files:
- Snapshot tests file, which will include all the component snapshot tests.
  This file will contain a snapshot test for the component with empty props and a snapshot test for each prop that allows a significant state of the component.
- Tests file for all the tests which are not snapshot tests. This file should contain a test for each possible interaction of the user with the component. Any other tests for the component which are not snapshot tests also should be here.

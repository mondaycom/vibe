# Writing Components Tests

As this library is the base of all monday's ui and future open source library, its components should be very well tested. In order to do so we've chosen the following test stack. 

 1. Karna as our test runner
 2. Mocha as our framework library
 3. Sinon as our mocks/stubs library
 4. [React testing library](https://testing-library.com/docs/react-testing-library/intro) as our components testing frame work

## React testing library
This library forces us to test according to user behaviour and not implementation details (state keys for example) for example the library allows you to target elements according to text, aria labels, placeholders text and more. This approach ensure us that we test the component in the right way and allows us easier refactoring when needed.

#### Test File
The file should end with `-test.js` and be in the same folder as the component.

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


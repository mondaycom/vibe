# Writing Components Tests

As this library is the base of all monday's ui and an open source library, its components should be very well tested. In order to do so we've chosen the following test stack.

### Stack

1. Jest as of our test runner and framework
2. [React testing library](https://testing-library.com/docs/react-testing-library/intro) as our components testing library
3. Storybook interaction tests for scenarios which require real browser instead of JSDom simulation. More information about this [here](./src/tests/readme.md).

### Snapshot tests

- Each component will have a snapshot test file named according to the following convention: _component-name_-snapshot-tests.test.tsx.
- The snapshot tests file will be located under the component's `__tests__` folder.
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

### Behaviour tests

- Every interactive component will contain a behaviour tests file.
- The component behaviour tests file will named according to the following convention: _component-name_-tests.test.tsx.
- The behaviour tests file will be located under the component's `__tests__` folder.
- This tests file will contain all the non-snapshot unit tests. This file should contain a test for each possible user interaction with the component.
- Behaviour files will be implemented with Jest and [React Testing Library](<(https://testing-library.com/docs/react-testing-library/intro)>) when needed, as shown in the following example:

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

- Every interactive component will contain a storybook interaction tests file according to the following name convention: _component-name_-interactions.tsx.
- The storybook interaction tests file will be located under the component's `__tests__` folder.
- This tests file will contain all tests which require real browser instead of JSDOM simulation.
- Snapshot files will be implemented with Jest and React Testing library when needed, as shown in the following example:
- Every storybook interaction test suite is linked to a specific component story.
- You can read more about storybook interaction tests and our recommended practices [here](./src/tests/readme.md).

### Running Vibe tests

**Snapshot and Behavior Tests:**
To run all snapshot and behavior tests locally, use the command: `yarn test`.

**Local Storybook Interaction Tests:**
To check interaction tests for a specific story in Storybook:

1. Open the Sandbox section of Storybook.
2. Select the desired story.
3. Click on the "Interactions" tab in the story's footer tabs panel.

### Testing best practices

1. **Always test the expected behavior and not implementation details**. This approach helps us ensure test resilience, enabling easier refactoring and maintenance. It also enhances flexibility, improves communication, and future-proofs our tests. Overall, focusing on expected behavior leads to more robust test suites.
2. Whenever possible, in your unit tests, prefer to query a specific component using its data-testid instead of other methods.

### Creating test files from scratch

When implementing new tests for a component from scratch, please use our plop code generator.
Use our plop, which automatically generates the proper folder structure. Snapshot tests and jest behavior testes files should end with .test.tsx, and storybook interaction tests files with .interactions.tsx

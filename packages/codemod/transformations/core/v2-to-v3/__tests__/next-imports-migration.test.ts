import transform from "../next-imports-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("Rename type imports migration", () => {
  defineInlineTest(
    transform,
    {},
    `import { VibeComponentProps } from "monday-ui-react-core/next";`,
    `import { VibeComponentProps } from "monday-ui-react-core";`,
    "should rename 'monday-ui-react-core/next' to 'monday-ui-react-core'"
  );

  defineInlineTest(
    transform,
    {},
    `import { VibeComponentProps } from "monday-ui-react-core";`,
    `import { VibeComponentProps } from "monday-ui-react-core";`,
    "should not modify the import path if it's already 'monday-ui-react-core'"
  );

  defineInlineTest(
    transform,
    {},
    `import { SomeOtherType } from "another-library";`,
    `import { SomeOtherType } from "another-library";`,
    "should not change unrelated imports"
  );

  defineInlineTest(
    transform,
    {},
    `import { VibeComponentProps } from "monday-ui-react-core/next";
     import { AnotherType } from "monday-ui-react-core/next";`,
    `import { VibeComponentProps } from "monday-ui-react-core";
     import { AnotherType } from "monday-ui-react-core";`,
    "should change multiple imports from 'monday-ui-react-core/next' to 'monday-ui-react-core'"
  );

  defineInlineTest(
    transform,
    {},
    `import { VibeComponentProps } from "monday-ui-react-core/next";
     import { AnotherType } from "another-library";`,
    `import { VibeComponentProps } from "monday-ui-react-core";
     import { AnotherType } from "another-library";`,
    "should change the 'monday-ui-react-core/next' import and leave other imports unchanged"
  );
});

import transform from "../type-imports-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("Rename type imports migration", () => {
  defineInlineTest(
    transform,
    {},
    `import { VibeComponentProps } from "monday-ui-react-core/types";`,
    `import { VibeComponentProps } from "monday-ui-react-core";`,
    "should rename 'monday-ui-react-core/types' to 'monday-ui-react-core'"
  );

  defineInlineTest(
    transform,
    {},
    `import { VibeComponentProps } from "monday-ui-react-core";`,
    `import { VibeComponentProps } from "monday-ui-react-core";`,
    "should not modify the import path if it's already 'monday-ui-react-core'"
  );
});

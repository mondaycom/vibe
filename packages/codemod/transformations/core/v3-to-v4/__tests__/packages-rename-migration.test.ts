import transform from "../packages-rename-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("Packages rename migration", () => {
  defineInlineTest(
    transform,
    {},
    `import "monday-ui-style";`,
    `import "@vibe/style";`,
    "should rename 'monday-ui-style' to '@vibe/style'"
  );

  defineInlineTest(
    transform,
    {},
    `import "monday-ui-style/tokens";`,
    `import "@vibe/style/tokens";`,
    "should rename 'monday-ui-style/tokens' to '@vibe/style/tokens'"
  );

  defineInlineTest(
    transform,
    {},
    `import { spacingVar } from "monday-ui-style/dist/utils";`,
    `import { spacingVar } from "@vibe/style/dist/utils";`,
    "should rename deep import paths from 'monday-ui-style'"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "@vibe/core";`,
    `import { Button } from "@vibe/core";`,
    "should not change unrelated imports"
  );

  defineInlineTest(
    transform,
    {},
    `import "monday-ui-style";
     import { Button } from "@vibe/core";`,
    `import "@vibe/style";
     import { Button } from "@vibe/core";`,
    "should rename 'monday-ui-style' and leave other imports unchanged"
  );

  defineInlineTest(
    transform,
    {},
    `import "monday-ui-style/tokens";
     import "monday-ui-style/dist/mixins";`,
    `import "@vibe/style/tokens";
     import "@vibe/style/dist/mixins";`,
    "should rename multiple 'monday-ui-style' imports"
  );
});

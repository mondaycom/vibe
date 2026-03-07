import transform from "../next-imports-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("Next imports migration", () => {
  defineInlineTest(
    transform,
    {},
    `import { AttentionBox } from "@vibe/core/next";`,
    `import { AttentionBox } from "@vibe/core";`,
    "should rename '@vibe/core/next' to '@vibe/core'"
  );

  defineInlineTest(
    transform,
    {},
    `import { Dropdown, Modal } from "@vibe/core/next";`,
    `import { Dropdown, Modal } from "@vibe/core";`,
    "should rename '@vibe/core/next' with multiple imports"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "@vibe/core";`,
    `import { Button } from "@vibe/core";`,
    "should not modify imports already from '@vibe/core'"
  );

  defineInlineTest(
    transform,
    {},
    `import { SomeComponent } from "another-library";`,
    `import { SomeComponent } from "another-library";`,
    "should not change unrelated imports"
  );

  defineInlineTest(
    transform,
    {},
    `import { AttentionBox } from "@vibe/core/next";
     import { Button } from "@vibe/core";`,
    `import { AttentionBox } from "@vibe/core";
     import { Button } from "@vibe/core";`,
    "should rename '@vibe/core/next' and leave '@vibe/core' unchanged"
  );

  defineInlineTest(
    transform,
    {},
    `import { DatePicker } from "@vibe/core/next";
     import { SomeOther } from "another-library";`,
    `import { DatePicker } from "@vibe/core";
     import { SomeOther } from "another-library";`,
    "should rename '@vibe/core/next' and leave other imports unchanged"
  );
});

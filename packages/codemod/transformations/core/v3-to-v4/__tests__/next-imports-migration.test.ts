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

  defineInlineTest(
    transform,
    {},
    `import { List } from "@vibe/core/next";`,
    `import { List } from "@vibe/core/next";`,
    "should not move List — it remains in @vibe/core/next"
  );

  defineInlineTest(
    transform,
    {},
    `import { AttentionBox, List } from "@vibe/core/next";`,
    `import { AttentionBox } from "@vibe/core";
import { List } from "@vibe/core/next";`,
    "should split mixed imports — move promoted components, keep List in /next"
  );

  defineInlineTest(
    transform,
    {},
    `import { Dropdown, Modal, DatePicker } from "@vibe/core/next";`,
    `import { Dropdown, Modal, DatePicker } from "@vibe/core";`,
    "should move multiple promoted components together"
  );
});

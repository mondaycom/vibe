import transform from "../type-imports-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("type-imports-migration", () => {
  defineInlineTest(
    transform,
    {},
    `import { type VibeComponent } from "@vibe/core";`,
    ``,
    "should remove VibeComponent type import when it is the only specifier"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button, type VibeComponent } from "@vibe/core";`,
    `import { Button } from "@vibe/core";`,
    "should remove VibeComponent type import while keeping other imports"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "@vibe/core";`,
    `import { Button } from "@vibe/core";`,
    "should not modify imports that don't include VibeComponent"
  );

  defineInlineTest(
    transform,
    {},
    `import { type VibeComponent } from "some-other-package";`,
    `import { type VibeComponent } from "some-other-package";`,
    "should not modify VibeComponent imports from other packages"
  );
});

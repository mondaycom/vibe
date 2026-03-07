import transform from "../type-imports-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("Type imports migration", () => {
  defineInlineTest(
    transform,
    {},
    `import { VibeComponent } from "@vibe/core";`,
    ``,
    "should remove VibeComponent import from @vibe/core"
  );

  defineInlineTest(
    transform,
    {},
    `import { withStaticProps } from "@vibe/core";`,
    ``,
    "should remove withStaticProps import from @vibe/core"
  );

  defineInlineTest(
    transform,
    {},
    `import { withStaticPropsWithoutForwardRef } from "@vibe/core";`,
    ``,
    "should remove withStaticPropsWithoutForwardRef import from @vibe/core"
  );

  defineInlineTest(
    transform,
    {},
    `import { VibeComponent, Button } from "@vibe/core";`,
    `import { Button } from "@vibe/core";`,
    "should remove VibeComponent but keep other imports"
  );

  defineInlineTest(
    transform,
    {},
    `import { withStaticProps, VibeComponent, Button } from "@vibe/core";`,
    `import { Button } from "@vibe/core";`,
    "should remove multiple deprecated imports but keep others"
  );

  defineInlineTest(
    transform,
    {},
    `import { VibeComponent } from "@vibe/shared";`,
    ``,
    "should remove VibeComponent import from @vibe/shared"
  );

  defineInlineTest(
    transform,
    {},
    `import { withStaticProps, SomeUtil } from "@vibe/shared";`,
    `import { SomeUtil } from "@vibe/shared";`,
    "should remove withStaticProps but keep other imports from @vibe/shared"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "@vibe/core";`,
    `import { Button } from "@vibe/core";`,
    "should not modify imports that are not deprecated"
  );

  defineInlineTest(
    transform,
    {},
    `import { SomeType } from "another-library";`,
    `import { SomeType } from "another-library";`,
    "should not change unrelated imports"
  );

  defineInlineTest(
    transform,
    {},
    `import { VibeComponent } from "@vibe/core";
import { withStaticProps } from "@vibe/shared";
import { Button } from "@vibe/core";`,
    `import { Button } from "@vibe/core";`,
    "should remove deprecated imports from both @vibe/core and @vibe/shared"
  );
});

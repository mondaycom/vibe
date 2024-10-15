import transform from "../packages-rename-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("Packages rename migration", () => {
  defineInlineTest(
    transform,
    {},
    `import { Button, Label } from "monday-ui-react-core";`,
    `import { Button, Label } from "@vibe/core";`,
    "should rename 'monday-ui-react-core' to '@vibe/core'"
  );

  defineInlineTest(
    transform,
    {},
    `import { BUTTON_TEST_ID } from "monday-ui-react-core/testIds";`,
    `import { BUTTON_TEST_ID } from "@vibe/core/testIds";`,
    "should rename 'monday-ui-react-core/testIds' to '@vibe/core/testIds'"
  );

  defineInlineTest(
    transform,
    {},
    `import { getWithin } from "monday-ui-react-core/interactionsTests";`,
    `import { getWithin } from "@vibe/core/interactionsTests";`,
    "should rename 'monday-ui-react-core/interactionsTests' to '@vibe/core/interactionsTests'"
  );

  defineInlineTest(
    transform,
    {},
    `import "monday-ui-react-core/tokens";`,
    `import "@vibe/core/tokens";`,
    "should rename 'monday-ui-react-core/tokens' to '@vibe/core/tokens'"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "monday-ui-react-core";
    import { Heart } from "monday-ui-react-core/icons";`,
    `import { Button } from "@vibe/core";
    import { Heart } from "@vibe/icons";`,
    "should rename both 'monday-ui-react-core' and /icons to '@vibe/core' and '@vibe/icons'"
  );

  defineInlineTest(
    transform,
    {},
    `import { getByLabelText } from "another-library";`,
    `import { getByLabelText } from "another-library";`,
    "should not change unrelated imports"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button, Label } from "monday-ui-react-core";
     import { getByLabelText } from "another-library";`,
    `import { Button, Label } from "@vibe/core";
     import { getByLabelText } from "another-library";`,
    "should rename 'monday-ui-react-core' to '@vibe/core' but leave unrelated imports unchanged"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "monday-ui-react-core";
     import { Heart } from "monday-ui-react-core/icons";
     import { BUTTON_TEST_ID } from "monday-ui-react-core/testIds";`,
    `import { Button } from "@vibe/core";
     import { Heart } from "@vibe/icons";
     import { BUTTON_TEST_ID } from "@vibe/core/testIds";`,
    "should rename all imports from 'monday-ui-react-core' and related paths correctly"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "monday-ui-react-core";`,
    `import { Button } from "@vibe/core";`,
    "should only change the import path from 'monday-ui-react-core' to '@vibe/core' if no other paths are present"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "monday-ui-react-core";
     import { SomeOtherComponent } from "another-library";
     import { Icon } from "monday-ui-react-core/icons";`,
    `import { Button } from "@vibe/core";
     import { SomeOtherComponent } from "another-library";
     import { Icon } from "@vibe/icons";`,
    "should only rename 'monday-ui-react-core' and 'monday-ui-react-core/icons' while leaving other imports unchanged"
  );
});

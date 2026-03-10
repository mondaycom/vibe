import transform from "../packages-rename-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("Packages rename migration", () => {
  defineInlineTest(
    transform,
    {},
    `import { Button, Label } from "monday-ui-react-core";`,
    `import { Button, Label } from "@ezds/core";`,
    "should rename 'monday-ui-react-core' to '@ezds/core'"
  );

  defineInlineTest(
    transform,
    {},
    `import { BUTTON_TEST_ID } from "monday-ui-react-core/testIds";`,
    `import { BUTTON_TEST_ID } from "@ezds/core/testIds";`,
    "should rename 'monday-ui-react-core/testIds' to '@ezds/core/testIds'"
  );

  defineInlineTest(
    transform,
    {},
    `import { getWithin } from "monday-ui-react-core/interactionsTests";`,
    `import { getWithin } from "@ezds/core/interactionsTests";`,
    "should rename 'monday-ui-react-core/interactionsTests' to '@ezds/core/interactionsTests'"
  );

  defineInlineTest(
    transform,
    {},
    `import "monday-ui-react-core/tokens";`,
    `import "@ezds/core/tokens";`,
    "should rename 'monday-ui-react-core/tokens' to '@ezds/core/tokens'"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "monday-ui-react-core";
    import { Heart } from "monday-ui-react-core/icons";`,
    `import { Button } from "@ezds/core";
    import { Heart } from "@ezds/icons";`,
    "should rename both 'monday-ui-react-core' and /icons to '@ezds/core' and '@ezds/icons'"
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
    `import { Button, Label } from "@ezds/core";
     import { getByLabelText } from "another-library";`,
    "should rename 'monday-ui-react-core' to '@ezds/core' but leave unrelated imports unchanged"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "monday-ui-react-core";
     import { Heart } from "monday-ui-react-core/icons";
     import { BUTTON_TEST_ID } from "monday-ui-react-core/testIds";`,
    `import { Button } from "@ezds/core";
     import { Heart } from "@ezds/icons";
     import { BUTTON_TEST_ID } from "@ezds/core/testIds";`,
    "should rename all imports from 'monday-ui-react-core' and related paths correctly"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "monday-ui-react-core";`,
    `import { Button } from "@ezds/core";`,
    "should only change the import path from 'monday-ui-react-core' to '@ezds/core' if no other paths are present"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "monday-ui-react-core";
     import { SomeOtherComponent } from "another-library";
     import { Icon } from "monday-ui-react-core/icons";`,
    `import { Button } from "@ezds/core";
     import { SomeOtherComponent } from "another-library";
     import { Icon } from "@ezds/icons";`,
    "should only rename 'monday-ui-react-core' and 'monday-ui-react-core/icons' while leaving other imports unchanged"
  );
});

import transform from "../packages-rename-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("Packages rename migration", () => {
  defineInlineTest(
    transform,
    {},
    `import { Button } from "monday-ui-react-core";`,
    `import { Button } from "@vibe/core";`,
    "should rename 'monday-ui-react-core' to '@vibe/core'"
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
});

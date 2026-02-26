import { defineInlineTest } from "jscodeshift/dist/testUtils";
import transform from "../TextWithHighlight-component-migration";

describe("TextWithHighlight component migration", () => {
  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { TextWithHighlight } from "@vibe/core";
<TextWithHighlight tooltipPosition="top" text="hello" highlightTerm="he" />
    `,
    `
import { TextWithHighlight } from "@vibe/core";
<TextWithHighlight text="hello" highlightTerm="he" />
    `,
    "should remove tooltipPosition prop"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { TextWithHighlight } from "@vibe/core";
<TextWithHighlight text="hello" highlightTerm="he" tooltipProps={{ position: "top" }} />
    `,
    `
import { TextWithHighlight } from "@vibe/core";
<TextWithHighlight text="hello" highlightTerm="he" tooltipProps={{ position: "top" }} />
    `,
    "should not change TextWithHighlight without tooltipPosition prop"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { TextWithHighlight as TWH } from "@vibe/core";
<TWH tooltipPosition="bottom" text="hello" highlightTerm="he" />
    `,
    `
import { TextWithHighlight as TWH } from "@vibe/core";
<TWH text="hello" highlightTerm="he" />
    `,
    "should handle aliased imports"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Button } from "@vibe/core";
<Button tooltipPosition="top">Click</Button>
    `,
    `
import { Button } from "@vibe/core";
<Button tooltipPosition="top">Click</Button>
    `,
    "should not affect non-TextWithHighlight components"
  );
});

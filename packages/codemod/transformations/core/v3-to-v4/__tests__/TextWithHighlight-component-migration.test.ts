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
<TextWithHighlight text="hello" highlightTerm="he" tooltipProps={{
  position: "top"
}} />
    `,
    "should migrate tooltipPosition to tooltipProps"
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
<TWH text="hello" highlightTerm="he" tooltipProps={{
  position: "bottom"
}} />
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

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { TextWithHighlight } from "@vibe/core";
<TextWithHighlight tooltipPosition="left" text="hello" />
    `,
    `
import { TextWithHighlight } from "@vibe/core";
<TextWithHighlight text="hello" tooltipProps={{
  position: "left"
}} />
    `,
    "should handle different position values"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { TextWithHighlight } from "@vibe/core";
const pos = "right";
<TextWithHighlight tooltipPosition={pos} text="hello" />
    `,
    `
import { TextWithHighlight } from "@vibe/core";
const pos = "right";
<TextWithHighlight text="hello" tooltipProps={{
  position: pos
}} />
    `,
    "should handle expression values"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { TextWithHighlight } from "@vibe/core";
<TextWithHighlight tooltipPosition="top" tooltipProps={{content: "test"}} text="hello" />
    `,
    `
import { TextWithHighlight } from "@vibe/core";
<TextWithHighlight tooltipProps={{content: "test"}} text="hello" />
    `,
    "should warn and remove tooltipPosition when tooltipProps exists (user must manually merge to: tooltipProps={{content: 'test', position: 'top'}})"
  );
});

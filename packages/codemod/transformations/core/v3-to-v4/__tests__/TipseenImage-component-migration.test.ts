import { defineInlineTest } from "jscodeshift/dist/testUtils";
import transform from "../TipseenImage-component-migration";

describe("TipseenImage component migration", () => {
  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { TipseenImage } from "@vibe/core";
<TipseenImage src="image.png" alt="description" />
    `,
    `
import { TipseenMedia } from "@vibe/core";
<TipseenMedia>
  <img
    src="image.png"
    alt="description"
    style={{
      objectFit: "cover",
      width: "100%"
    }} />
</TipseenMedia>
    `,
    "should migrate basic TipseenImage to TipseenMedia with img"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { TipseenImage } from "@vibe/core";
<TipseenImage src={picture} alt="description" className="custom" tipseenMediaClassName="mediaClass" />
    `,
    `
import { TipseenMedia } from "@vibe/core";
<TipseenMedia className="mediaClass">
  <img
    src={picture}
    alt="description"
    className="custom"
    style={{
      objectFit: "cover",
      width: "100%"
    }} />
</TipseenMedia>
    `,
    "should handle all props including tipseenMediaClassName"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { TipseenImage, TipseenMedia } from "@vibe/core";
<TipseenImage src="image.png" />
    `,
    `
import { TipseenMedia } from "@vibe/core";
<TipseenMedia>
  <img
    src="image.png"
    style={{
      objectFit: "cover",
      width: "100%"
    }} />
</TipseenMedia>
    `,
    "should not duplicate TipseenMedia import when already imported"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { TipseenImage as MyImage } from "@vibe/core";
<MyImage src="image.png" alt="test" />
    `,
    `
import { TipseenMedia } from "@vibe/core";
<TipseenMedia>
  <img
    src="image.png"
    alt="test"
    style={{
      objectFit: "cover",
      width: "100%"
    }} />
</TipseenMedia>
    `,
    "should handle aliased imports"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Button } from "@vibe/core";
<Button>Click</Button>
    `,
    `
import { Button } from "@vibe/core";
<Button>Click</Button>
    `,
    "should not affect files without TipseenImage"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { TipseenImage } from "@vibe/core";
<TipseenImage src={picture} />
    `,
    `
import { TipseenMedia } from "@vibe/core";
<TipseenMedia>
  <img
    src={picture}
    style={{
      objectFit: "cover",
      width: "100%"
    }} />
</TipseenMedia>
    `,
    "should handle expression values for src"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Tipseen, TipseenImage, TipseenContent } from "@vibe/core";
<Tipseen content={<><TipseenImage src={picture} /><TipseenContent title="Title">Text</TipseenContent></>}>
  <div />
</Tipseen>
    `,
    `
import { Tipseen, TipseenContent, TipseenMedia } from "@vibe/core";
<Tipseen content={<><TipseenMedia>
  <img
    src={picture}
    style={{
      objectFit: "cover",
      width: "100%"
    }} />
</TipseenMedia><TipseenContent title="Title">Text</TipseenContent></>}>
  <div />
</Tipseen>
    `,
    "should work within Tipseen content prop and update imports"
  );
});

import transform from "../AttentionBox-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { AttentionBox } from "@vibe/core";\n${source}`;
}

describe("AttentionBox component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport('const element = <AttentionBox text="Hello" iconType="svg" />;'),
    prependImport('const element = <AttentionBox text="Hello" />;'),
    "should remove iconType prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <AttentionBox text="Hello" icon={Info} iconType="font" />;'),
    prependImport('const element = <AttentionBox text="Hello" icon={Info} />;'),
    "should remove iconType while keeping icon prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <AttentionBox text="Hello" />;'),
    prependImport('const element = <AttentionBox text="Hello" />;'),
    "should not change AttentionBox without deprecated props"
  );

  defineInlineTest(
    transform,
    {},
    'const element = <AttentionBox text="Hello" iconType="svg" />;',
    'const element = <AttentionBox text="Hello" iconType="svg" />;',
    "should not transform AttentionBox without import from @vibe/core"
  );
});

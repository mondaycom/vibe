import transform from "../Chips-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { Chips } from "@vibe/core";\n${source}`;
}

describe("Chips component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Chips label="Tag" disableClickableBehavior />;'),
    prependImport('const element = <Chips label="Tag" />;'),
    "should remove disableClickableBehavior boolean prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Chips label="Tag" disableClickableBehavior={true} />;'),
    prependImport('const element = <Chips label="Tag" />;'),
    "should remove disableClickableBehavior with explicit true value"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Chips label="Tag" disableClickableBehavior={false} onClick={fn} />;'),
    prependImport('const element = <Chips label="Tag" onClick={fn} />;'),
    "should remove disableClickableBehavior with false value"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Chips label="Tag" onClick={fn} />;'),
    prependImport('const element = <Chips label="Tag" onClick={fn} />;'),
    "should not modify Chips without disableClickableBehavior prop"
  );
});

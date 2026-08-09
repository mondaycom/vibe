import transform from "../Toggle-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { Toggle } from "@vibe/core";\n${source}`;
}

describe("Toggle component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Toggle ariaLabel="My Toggle" noSpacing />;'),
    prependImport('const element = <Toggle ariaLabel="My Toggle" />;'),
    "should remove noSpacing boolean prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Toggle ariaLabel="My Toggle" noSpacing={true} />;'),
    prependImport('const element = <Toggle ariaLabel="My Toggle" />;'),
    "should remove noSpacing with explicit true value"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Toggle ariaLabel="My Toggle" noSpacing={false} areLabelsHidden />;'),
    prependImport('const element = <Toggle ariaLabel="My Toggle" areLabelsHidden />;'),
    "should remove noSpacing with false value"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Toggle ariaLabel="My Toggle" areLabelsHidden />;'),
    prependImport('const element = <Toggle ariaLabel="My Toggle" areLabelsHidden />;'),
    "should not modify Toggle without noSpacing prop"
  );
});

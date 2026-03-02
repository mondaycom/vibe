import transform from "../Toggle-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { Toggle } from "@vibe/core";\n${source}`;
}

describe("Toggle component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport('<Toggle ariaLabel="Toggle" noSpacing />'),
    prependImport('<Toggle ariaLabel="Toggle" />'),
    "should remove noSpacing boolean prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('<Toggle ariaLabel="Toggle" noSpacing={true} />'),
    prependImport('<Toggle ariaLabel="Toggle" />'),
    "should remove noSpacing with explicit true value"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('<Toggle ariaLabel="Toggle" noSpacing={false} areLabelsHidden />'),
    prependImport('<Toggle ariaLabel="Toggle" areLabelsHidden />'),
    "should remove noSpacing with false value"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('<Toggle ariaLabel="Toggle" areLabelsHidden noSpacing />'),
    prependImport('<Toggle ariaLabel="Toggle" areLabelsHidden />'),
    "should remove noSpacing when used alongside areLabelsHidden"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('<Toggle ariaLabel="Toggle" />'),
    prependImport('<Toggle ariaLabel="Toggle" />'),
    "should not modify Toggle without noSpacing prop"
  );
});

import transform from "../MultiStepIndicator-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { MultiStepIndicator } from "@vibe/core";\n${source}`;
}

describe("MultiStepIndicator component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport('const element = <MultiStepIndicator steps={steps} fulfilledStepIconType="svg" />;'),
    prependImport("const element = <MultiStepIndicator steps={steps} />;"),
    "should remove fulfilledStepIconType prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <MultiStepIndicator steps={steps} fulfilledStepIcon={Check} fulfilledStepIconType="font" />;'),
    prependImport("const element = <MultiStepIndicator steps={steps} fulfilledStepIcon={Check} />;"),
    "should remove fulfilledStepIconType while keeping fulfilledStepIcon"
  );

  defineInlineTest(
    transform,
    {},
    prependImport("const element = <MultiStepIndicator steps={steps} />;"),
    prependImport("const element = <MultiStepIndicator steps={steps} />;"),
    "should not change MultiStepIndicator without deprecated props"
  );

  defineInlineTest(
    transform,
    {},
    'const element = <MultiStepIndicator steps={steps} fulfilledStepIconType="svg" />;',
    'const element = <MultiStepIndicator steps={steps} fulfilledStepIconType="svg" />;',
    "should not transform MultiStepIndicator without import from @vibe/core"
  );
});

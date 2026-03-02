import transform from "../Icon-type-removal";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { Icon } from "@vibe/core";\n${source}`;
}

describe("Icon type removal migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Icon icon={Home} type="svg" size={24} />;'),
    prependImport("const element = <Icon icon={Home} size={24} />;"),
    "should remove type prop from Icon"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Icon icon={Home} type="font" />;'),
    prependImport("const element = <Icon icon={Home} />;"),
    "should remove type='font' prop from Icon"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      'const element = <Icon icon="https://example.com/icon.svg" type="src" useCurrentColor customColor="red" />;'
    ),
    prependImport('const element = <Icon icon="https://example.com/icon.svg" />;'),
    "should remove type, useCurrentColor, and customColor props from Icon"
  );

  defineInlineTest(
    transform,
    {},
    prependImport("const element = <Icon icon={MyIcon} size={16} />;"),
    prependImport("const element = <Icon icon={MyIcon} size={16} />;"),
    "should not change Icon without removed props"
  );

  defineInlineTest(
    transform,
    {},
    `import { AttentionBox } from "@vibe/core";\nconst element = <AttentionBox icon={Info} iconType="svg" type="primary" />;`,
    `import { AttentionBox } from "@vibe/core";\nconst element = <AttentionBox icon={Info} type="primary" />;`,
    "should remove iconType prop from AttentionBox"
  );

  defineInlineTest(
    transform,
    {},
    `import { Tab } from "@vibe/core";\nconst element = <Tab icon={Email} iconType="svg" iconSide="left" />;`,
    `import { Tab } from "@vibe/core";\nconst element = <Tab icon={Email} iconSide="left" />;`,
    "should remove iconType prop from Tab"
  );

  defineInlineTest(
    transform,
    {},
    `import { MenuItem } from "@vibe/core";\nconst element = <MenuItem icon={Activity} iconType="svg" rightIcon={Close} rightIconType="svg" title="Item" />;`,
    `import { MenuItem } from "@vibe/core";\nconst element = <MenuItem icon={Activity} rightIcon={Close} title="Item" />;`,
    "should remove iconType and rightIconType props from MenuItem"
  );

  defineInlineTest(
    transform,
    {},
    `import { MultiStepIndicator } from "@vibe/core";\nconst element = <MultiStepIndicator fulfilledStepIconType="svg" />;`,
    `import { MultiStepIndicator } from "@vibe/core";\nconst element = <MultiStepIndicator />;`,
    "should remove fulfilledStepIconType prop from MultiStepIndicator"
  );

  defineInlineTest(
    transform,
    {},
    `import { Icon as VibeIcon } from "@vibe/core";\nconst element = <VibeIcon icon={Home} type="svg" />;`,
    `import { Icon as VibeIcon } from "@vibe/core";\nconst element = <VibeIcon icon={Home} />;`,
    "should work with aliased Icon imports"
  );

  defineInlineTest(
    transform,
    {},
    'const element = <Icon icon={Home} type="svg" />;',
    'const element = <Icon icon={Home} type="svg" />;',
    "should not transform Icon without import from @vibe/core"
  );
});

import transform from "../MenuItem-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { MenuItem } from "@vibe/core";\n${source}`;
}

describe("MenuItem component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport('const element = <MenuItem icon={Home} iconType="svg" title="Home" />;'),
    prependImport('const element = <MenuItem icon={Home} title="Home" />;'),
    "should remove iconType prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <MenuItem icon={Home} iconType="font" rightIcon={Settings} rightIconType="svg" />;'),
    prependImport('const element = <MenuItem icon={Home} rightIcon={Settings} />;'),
    "should remove both iconType and rightIconType props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <MenuItem icon={Home} title="Home" />;'),
    prependImport('const element = <MenuItem icon={Home} title="Home" />;'),
    "should not change MenuItem without deprecated props"
  );

  defineInlineTest(
    transform,
    {},
    'const element = <MenuItem icon={Home} iconType="svg" />;',
    'const element = <MenuItem icon={Home} iconType="svg" />;',
    "should not transform MenuItem without import from @vibe/core"
  );
});

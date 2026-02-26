import transform from "../TextField-iconName-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { TextField } from "@vibe/core";\n${source}`;
}

describe("TextField iconName migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport('const element = <TextField iconName={Search} placeholder="Search" />;'),
    prependImport('const element = <TextField icon={Search} placeholder="Search" />;'),
    "should rename iconName to icon"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <TextField placeholder="Search" />;'),
    prependImport('const element = <TextField placeholder="Search" />;'),
    "should not modify TextField without iconName prop"
  );

  defineInlineTest(
    transform,
    {},
    `import { TextField as MyField } from "@vibe/core";
const element = <MyField iconName={Search} />;`,
    `import { TextField as MyField } from "@vibe/core";
const element = <MyField icon={Search} />;`,
    "should work with aliased imports"
  );
});

import transform from "../TextField-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { TextField } from "@vibe/core";\n${source}`;
}

describe("TextField component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport('const element = <TextField iconsNames={{ primary: "Search", secondary: "Clear" }} />;'),
    prependImport('const element = <TextField iconLabel="Search" secondaryIconLabel="Clear" />;'),
    "should replace iconsNames with both iconLabel and secondaryIconLabel"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <TextField iconsNames={{ primary: "Search" }} />;'),
    prependImport('const element = <TextField iconLabel="Search" />;'),
    "should replace iconsNames with only iconLabel when secondary is not present"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <TextField iconsNames={{ secondary: "Clear" }} />;'),
    prependImport('const element = <TextField secondaryIconLabel="Clear" />;'),
    "should replace iconsNames with only secondaryIconLabel when primary is not present"
  );

  defineInlineTest(
    transform,
    {},
    prependImport("const element = <TextField iconsNames={{ primary: dynamicLabel, secondary: tooltipText }} />;"),
    prependImport("const element = <TextField iconLabel={dynamicLabel} secondaryIconLabel={tooltipText} />;"),
    "should handle dynamic expression values"
  );

  defineInlineTest(
    transform,
    {},
    `import { TextField as MyTextField } from "@vibe/core";
const element = <MyTextField iconsNames={{ primary: "Search" }} />;`,
    `import { TextField as MyTextField } from "@vibe/core";
const element = <MyTextField iconLabel="Search" />;`,
    "should work with aliased imports"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <TextField placeholder="Search..." />;'),
    prependImport('const element = <TextField placeholder="Search..." />;'),
    "should not modify TextField without iconsNames prop"
  );
});

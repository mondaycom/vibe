import transform from "../Dropdown-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { Dropdown } from "@vibe/core";\n${source}`;
}

describe("Dropdown withMandatoryDefaultOptions migration", () => {
  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    prependImport("const element = <Dropdown multi withMandatoryDefaultOptions options={options} />;"),
    prependImport("const element = <Dropdown multi options={options} />;"),
    "should remove the withMandatoryDefaultOptions prop"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    prependImport("const element = <Dropdown multi options={options} />;"),
    prependImport("const element = <Dropdown multi options={options} />;"),
    "should not modify a Dropdown without withMandatoryDefaultOptions"
  );
});

describe("Dropdown isMandatory -> removable migration", () => {
  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    prependImport('const element = <Dropdown multi options={[{ value: "1", label: "Owner", isMandatory: true }]} />;'),
    prependImport('const element = <Dropdown multi options={[{ value: "1", label: "Owner", removable: false }]} />;'),
    "should convert isMandatory: true to removable: false in options"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    prependImport('const element = <Dropdown multi options={[{ value: "1", label: "Owner", isMandatory: false }]} />;'),
    prependImport('const element = <Dropdown multi options={[{ value: "1", label: "Owner", removable: true }]} />;'),
    "should convert isMandatory: false to removable: true"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    prependImport('const element = <Dropdown multi options={[{ value: "1", label: "Owner", isMandatory }]} />;'),
    prependImport('const element = <Dropdown multi options={[{ value: "1", label: "Owner", removable: false }]} />;'),
    "should convert shorthand isMandatory to removable: false"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    prependImport(
      'const element = <Dropdown multi options={[{ value: "1", label: "Owner", isMandatory: locked }]} />;'
    ),
    prependImport('const element = <Dropdown multi options={[{ value: "1", label: "Owner", removable: !locked }]} />;'),
    "should invert a dynamic isMandatory value"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    prependImport(
      'const element = <Dropdown multi defaultValue={[{ value: "1", label: "Owner", isMandatory: true }]} />;'
    ),
    prependImport(
      'const element = <Dropdown multi defaultValue={[{ value: "1", label: "Owner", removable: false }]} />;'
    ),
    "should convert isMandatory inside defaultValue"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    prependImport(
      'const element = <Dropdown withMandatoryDefaultOptions options={[{ value: "1", isMandatory: true }]} />;'
    ),
    prependImport('const element = <Dropdown options={[{ value: "1", removable: false }]} />;'),
    "should remove the prop and convert isMandatory together"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `import { Dropdown as MyDropdown } from "@vibe/core";
const element = <MyDropdown multi options={[{ value: "1", label: "Owner", isMandatory: true }]} />;`,
    `import { Dropdown as MyDropdown } from "@vibe/core";
const element = <MyDropdown multi options={[{ value: "1", label: "Owner", removable: false }]} />;`,
    "should work with aliased imports"
  );
});

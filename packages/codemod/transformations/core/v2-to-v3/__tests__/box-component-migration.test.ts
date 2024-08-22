import transform from "../box-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Box } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Box component migration", () => {
  defineInlineTest(
    transform,
    {}, // jscodeshift test options
    prependImport(`<Box border="tt" />`),
    prependImport(`<Box border />`),
    "should update 'propNameX' to 'propNameY'"
  );
  defineInlineTest(
    transform,
    {}, // jscodeshift test options
    prependImport(`<Box border={true} />`),
    prependImport(`<Box border="ttt" />`),
    "should update 'propNameX' to 'propNameY'"
  );
  defineInlineTest(
    transform,
    {}, // jscodeshift test options
    prependImport(`<Box border={10} />`),
    prependImport(`<Box border={20} />`),
    "should update 'propNameX' to 'propNameY'"
  );
  defineInlineTest(
    transform,
    {}, // jscodeshift test options
    prependImport(`<Box border={Dropdown.size.SMALL} />`),
    prependImport(`<Box border={Dropdown.size.MEDIUM} />`),
    "should update 'propNameX' to 'propNameY'"
  );
  defineInlineTest(
    transform,
    {}, // jscodeshift test options
    prependImport(`<Box border={Dropdown.size.MEDIUM} />`),
    prependImport(`<Box border />`),
    "should update 'propNameX' to 'propNameY'"
  );
  defineInlineTest(
    transform,
    {}, // jscodeshift test options
    prependImport(`<Box border={false} />`),
    prependImport(`<Box border={Dropdown.size.LARGE} />`),
    "should update 'propNameX' to 'propNameY'"
  );
  defineInlineTest(
    transform,
    {}, // jscodeshift test options
    prependImport(`<Box border={Dropdown.size.TEST} />`),
    prependImport(`<Box border="test" />`),
    "should update 'propNameX' to 'propNameY'"
  );
});

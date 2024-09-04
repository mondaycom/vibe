import transform from "../Icon-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";
import { describe } from "vitest";

function prependImport(source: string): string {
  return `
    import { Icon } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Icon component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Icon clickable={false} />`),
    prependImport(`<Icon />`),
    "should remove 'clickable' if exists and is false"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Icon clickable={true} />`),
    prependImport(`<Icon clickable={true} />`),
    "should not remove 'clickable' if exists and is true"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Icon clickable />`),
    prependImport(`<Icon clickable />`),
    "should not remove 'clickable' if exists and is true"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`
        <>
          <Icon clickable={false} />
          <Icon clickable={true} />
        </>
      `),
    prependImport(`
        <>
          <Icon />
          <Icon clickable={true} />
        </>
      `),
    "with multiple elements"
  );

  defineInlineTest(
    transform,
    {},
    `<Icon clickable={false} />`,
    `<Icon clickable={false} />`,
    "should not remove when no import even if 'clickable={false}' exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Icon icon={Email} clickable={false} />`),
    prependImport(`<Icon icon={Email} />`),
    "should remove 'clickable={false}' when exists with multiple other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent clickable={false} />`),
    prependImport(`<OtherComponent clickable={false} />`),
    "should not change other components with 'clickable={false}'"
  );
});

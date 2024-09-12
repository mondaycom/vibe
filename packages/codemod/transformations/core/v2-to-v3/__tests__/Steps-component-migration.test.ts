import transform from "../Steps-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";
import { describe } from "vitest";

function prependImport(source: string): string {
  return `
    import { Steps } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Steps component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Steps isOnPrimary />`),
    prependImport(`<Steps color={Steps.colors.PRIMARY} />`),
    "should remove 'isOnPrimary' if exists and add color={Steps.colors.PRIMARY}"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Steps isOnPrimary color={Steps.colors.ON_PRIMARY_COLOR}/>`),
    prependImport(`<Steps color={Steps.colors.ON_PRIMARY_COLOR} />`),
    "should remove 'isOnPrimary' if exists and not add color={Steps.colors.PRIMARY} since color already exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Steps isOnPrimary={false} />`),
    prependImport(`<Steps isOnPrimary={false} />`),
    "should not remove 'isOnPrimary' if exists and is false"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Steps color={Steps.colors.ON_PRIMARY_COLOR} />`),
    prependImport(`<Steps color={Steps.colors.ON_PRIMARY_COLOR} />`),
    "should not change if 'isOnPrimary' doesn't exist"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`
        <>
          <Steps isOnPrimary />
          <Steps color={Steps.colors.ON_PRIMARY_COLOR} />
        </>
      `),
    prependImport(`
        <>
          <Steps color={Steps.colors.PRIMARY} />
          <Steps color={Steps.colors.ON_PRIMARY_COLOR} />
        </>
      `),
    "with multiple elements"
  );

  defineInlineTest(
    transform,
    {},
    `<Steps isOnPrimary />`,
    `<Steps isOnPrimary />`,
    "should not remove when no import even if 'isOnPrimary' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Steps activeStepIndex={10} isOnPrimary />`),
    prependImport(`<Steps activeStepIndex={10} color={Steps.colors.PRIMARY} />`),
    "should remove 'isOnPrimary' when exists with multiple other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent isOnPrimary />`),
    prependImport(`<OtherComponent isOnPrimary />`),
    "should not change other components with 'isOnPrimary'"
  );
});

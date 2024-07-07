import transform from "../chips-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";
import { describe } from "vitest";

function prependImport(source: string): string {
  return `
    import { Chips } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Chips component migration", () => {
  describe("clickable and isClickable removal", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Chips clickable onClick={handleClick} />`),
      prependImport(`<Chips onClick={handleClick} />`),
      "should remove 'clickable' prop when 'onClick' prop exists"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Chips isClickable onClick={handleClick} />`),
      prependImport(`<Chips onClick={handleClick} />`),
      "should remove 'isClickable' prop when 'onClick' prop exists"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Chips clickable isClickable onClick={handleClick} />`),
      prependImport(`<Chips onClick={handleClick} />`),
      "should remove both 'clickable' and 'isClickable' when both are present with 'onClick'"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`
        <>
          <Chips clickable />
          <Chips isClickable />
        </>
      `),
      prependImport(`
        <>
          <Chips clickable />
          <Chips isClickable />
        </>
      `),
      "should not remove 'clickable' or 'isClickable' when 'onClick' prop does not exist"
    );

    defineInlineTest(
      transform,
      {},
      `<Chips clickable onClick={handleClick} />`,
      `<Chips clickable onClick={handleClick} />`,
      "should not remove when no import even if 'onClick' prop exists"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Chips clickable onClick={handleClick} disabled iconSize={10} />`),
      prependImport(`<Chips onClick={handleClick} disabled iconSize={10} />`),
      "should remove 'clickable' when 'onClick' exists with multiple other props"
    );
  });

  describe("dataTestId update", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Chips dataTestId="unique-id" />`),
      prependImport(`<Chips data-testid="unique-id" />`),
      "should change 'dataTestId' to 'data-testid'"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`
        <div>
          <Chips dataTestId="first-id" />
          <Chips dataTestId="second-id" />
        </div>
      `),
      prependImport(`
        <div>
          <Chips data-testid="first-id" />
          <Chips data-testid="second-id" />
        </div>
      `),
      "should handle multiple Chips instances each with a 'dataTestId'"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<OtherComponent dataTestId="other-id" />`),
      prependImport(`<OtherComponent dataTestId="other-id" />`),
      "should not change other components with 'dataTestId'"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Chips dataTestId="test-id" data-testid="other-test-id" />`),
      prependImport(`<Chips dataTestId="test-id" data-testid="other-test-id" />`),
      "should not change when when both 'dataTestId' and 'data-testid' props exist and have different values"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Chips dataTestId="test-id" data-testid="test-id" />`),
      prependImport(`<Chips dataTestId="test-id" data-testid="test-id" />`),
      "should not change when when both 'dataTestId' and 'data-testid' props exist and have same values"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Chips dataTestId="mixed-id" disabled />`),
      prependImport(`<Chips data-testid="mixed-id" disabled />`),
      "should correctly update 'dataTestId' when mixed with other props"
    );
  });
});

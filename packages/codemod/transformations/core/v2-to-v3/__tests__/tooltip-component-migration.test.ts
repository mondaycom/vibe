import transform from "../tooltip-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Tooltip } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Tooltip component migration", () => {
  describe("withMaxWidth prop", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Tooltip withMaxWidth />`),
      prependImport(`<Tooltip />`),
      "should remove 'withMaxWidth' prop"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Tooltip withMaxWidth={true} />`),
      prependImport(`<Tooltip />`),
      "should remove 'withMaxWidth' prop"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(
        `
      <>
        <Tooltip withMaxWidth data-testid="tab1" />
        <Tooltip withMaxWidth data-testid="tab2" />
      </>`
      ),
      prependImport(`
      <>
        <Tooltip data-testid="tab1" />
        <Tooltip data-testid="tab2" />
      </>`),
      "should handle multiple instances of Tooltip each with 'withMaxWidth'"
    );

    defineInlineTest(
      transform,
      {},
      `<Tooltip withMaxWidth />`,
      `<Tooltip withMaxWidth />`,
      "should not change when no import even if 'withMaxWidth' prop exists"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<OtherComponent withMaxWidth />`),
      prependImport(`<OtherComponent withMaxWidth />`),
      "should not affect other components with 'withMaxWidth'"
    );

    defineInlineTest(
      transform,
      {},
      `
      import { Tooltip } from "other-library";
      <Tooltip withMaxWidth />
    `,
      `
      import { Tooltip } from "other-library";
      <Tooltip withMaxWidth />
    `,
      "should not change when 'Tooltip' is not imported from vibe"
    );

    defineInlineTest(
      transform,
      {},
      `
      import { OtherComponent as Tooltip } from "other-library";
      <Tooltip withMaxWidth />
    `,
      `
      import { OtherComponent as Tooltip } from "other-library";
      <Tooltip withMaxWidth />
    `,
      "should not change when 'Tooltip' is an alias for another component that is not from vibe"
    );

    defineInlineTest(
      transform,
      {},
      `
      import { OtherComponent as Tooltip } from "monday-ui-react-core";
      <Tooltip withMaxWidth />
    `,
      `
      import { OtherComponent as Tooltip } from "monday-ui-react-core";
      <Tooltip withMaxWidth />
    `,
      "should not change when 'Tooltip' is an alias for another component from vibe"
    );

    defineInlineTest(
      transform,
      {},
      `
      import { Tooltip as VibeComponent } from "monday-ui-react-core";
      <VibeComponent withMaxWidth />
    `,
      `
      import { Tooltip as VibeComponent } from "monday-ui-react-core";
      <VibeComponent />
    `,
      "should change when 'Tooltip' is imported with alias from vibe"
    );
  });

  describe("showTooltipOnlyOnTriggerElement prop", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Tooltip showTooltipOnlyOnTriggerElement />`),
      prependImport(`<Tooltip />`),
      "should remove 'showTooltipOnlyOnTriggerElement' prop"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Tooltip showTooltipOnlyOnTriggerElement={true} />`),
      prependImport(`<Tooltip />`),
      "should remove 'showTooltipOnlyOnTriggerElement' prop"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(
        `
      <>
        <Tooltip showTooltipOnlyOnTriggerElement data-testid="tab1" />
        <Tooltip showTooltipOnlyOnTriggerElement data-testid="tab2" />
      </>`
      ),
      prependImport(`
      <>
        <Tooltip data-testid="tab1" />
        <Tooltip data-testid="tab2" />
      </>`),
      "should handle multiple instances of Tooltip each with 'showTooltipOnlyOnTriggerElement'"
    );

    defineInlineTest(
      transform,
      {},
      `<Tooltip showTooltipOnlyOnTriggerElement />`,
      `<Tooltip showTooltipOnlyOnTriggerElement />`,
      "should not change when no import even if 'showTooltipOnlyOnTriggerElement' prop exists"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<OtherComponent showTooltipOnlyOnTriggerElement />`),
      prependImport(`<OtherComponent showTooltipOnlyOnTriggerElement />`),
      "should not affect other components with 'showTooltipOnlyOnTriggerElement'"
    );

    defineInlineTest(
      transform,
      {},
      `
      import { Tooltip } from "other-library";
      <Tooltip showTooltipOnlyOnTriggerElement />
    `,
      `
      import { Tooltip } from "other-library";
      <Tooltip showTooltipOnlyOnTriggerElement />
    `,
      "should not change when 'Tooltip' is not imported from vibe"
    );

    defineInlineTest(
      transform,
      {},
      `
      import { OtherComponent as Tooltip } from "other-library";
      <Tooltip showTooltipOnlyOnTriggerElement />
    `,
      `
      import { OtherComponent as Tooltip } from "other-library";
      <Tooltip showTooltipOnlyOnTriggerElement />
    `,
      "should not change when 'Tooltip' is an alias for another component that is not from vibe"
    );

    defineInlineTest(
      transform,
      {},
      `
      import { OtherComponent as Tooltip } from "monday-ui-react-core";
      <Tooltip showTooltipOnlyOnTriggerElement />
    `,
      `
      import { OtherComponent as Tooltip } from "monday-ui-react-core";
      <Tooltip showTooltipOnlyOnTriggerElement />
    `,
      "should not change when 'Tooltip' is an alias for another component from vibe"
    );

    defineInlineTest(
      transform,
      {},
      `
      import { Tooltip as VibeComponent } from "monday-ui-react-core";
      <VibeComponent showTooltipOnlyOnTriggerElement />
    `,
      `
      import { Tooltip as VibeComponent } from "monday-ui-react-core";
      <VibeComponent />
    `,
      "should change when 'Tooltip' is imported with alias from vibe"
    );
  });
});

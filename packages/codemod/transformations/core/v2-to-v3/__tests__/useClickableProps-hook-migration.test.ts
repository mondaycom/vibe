import transform from "../useClickableProps-hook-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { useClickableProps } from "monday-ui-react-core";
    ${source}
  `;
}

describe("useClickableProps prop migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`
      useClickableProps({
        onClick: onClickCallback,
        onMouseDown,
        disabled,
        id,
        dataTestId: componentDataTestId,
        ariaLabel: overrideAriaLabel,
        ariaHidden: false,
        ariaHasPopup: false,
        ariaExpanded: false
      });
    `),
    prependImport(`
      useClickableProps({
        onClick: onClickCallback,
        onMouseDown,
        disabled,
        id,
        "data-testid": componentDataTestId,
        ariaLabel: overrideAriaLabel,
        ariaHidden: false,
        ariaHasPopup: false,
        ariaExpanded: false
      });
    `),
    "should rename 'dataTestId' to 'data-testid'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`
      useClickableProps({
        dataTestId: componentDataTestId,
        onClick: onClickCallback
      });
    `),
    prependImport(`
      useClickableProps({
        "data-testid": componentDataTestId,
        onClick: onClickCallback
      });
    `),
    "should rename 'dataTestId' to 'data-testid' when it's the first property"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`
      useClickableProps({
        dataTestId: componentDataTestId,
        onClick: onClickCallback
      });
    `),
    prependImport(`
      useClickableProps({
        "data-testid": componentDataTestId,
        onClick: onClickCallback
      });
    `),
    "should rename 'dataTestId' to 'data-testid' when it's the first property"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`
      useClickableProps({
        onClick: onClickCallback
      });
    `),
    prependImport(`
      useClickableProps({
        onClick: onClickCallback
      });
    `),
    "should not change anything when 'dataTestId' is not present"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { useClickableProps } from "other-library";
      useClickableProps({
        dataTestId: componentDataTestId,
        onClick: onClickCallback
      });
    `,
    `
      import { useClickableProps } from "other-library";
      useClickableProps({
        dataTestId: componentDataTestId,
        onClick: onClickCallback
      });
    `,
    "should not rename 'dataTestId' to 'data-testid' when not a vibe component"
  );
});

import transform from "../IconButton-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { IconButton } from "monday-ui-react-core";
    ${source}
  `;
}

describe("IconButton component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<IconButton dataTestId="unique-id" />`),
    prependImport(`<IconButton data-testid="unique-id" />`),
    "should update 'dataTestId' to 'data-testid'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><IconButton dataTestId="unique-id" /></div>`),
    prependImport(`<div><IconButton data-testid="unique-id" /></div>`),
    "should update 'dataTestId' to 'data-testid' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<IconButton dataTestId="unique-id" name="Test IconButton" />`),
    prependImport(`<IconButton data-testid="unique-id" name="Test IconButton" />`),
    "should update 'dataTestId' to 'data-testid' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <IconButton dataTestId="first-unique-id" />
        <IconButton dataTestId="second-unique-id" />
      </>`
    ),
    prependImport(`
      <>
        <IconButton data-testid="first-unique-id" />
        <IconButton data-testid="second-unique-id" />
      </>`),
    "should handle multiple instances of IconButton each with 'dataTestId'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<IconButton dataTestId="test-id" data-testid="other-test-id" />`),
    prependImport(`<IconButton dataTestId="test-id" data-testid="other-test-id" />`),
    "should not change when when both 'dataTestId' and 'data-testid' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<IconButton dataTestId="test-id" data-testid="test-id" />`),
    prependImport(`<IconButton data-testid="test-id" />`),
    "should remove 'dataTestId' when both 'dataTestId' and 'data-testid' props exist and have same values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<IconButton dataTestId="testId" data-testid={testId} />`),
    prependImport(`<IconButton dataTestId="testId" data-testid={testId} />`),
    "should not change when when both 'dataTestId' and 'data-testid' props exist and have different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<IconButton dataTestId={"testId"} data-testid="testId" />`),
    prependImport(`<IconButton data-testid="testId" />`),
    "should remove 'dataTestId' when when both 'dataTestId' and 'data-testid' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<IconButton dataTestId="unique-id" />`,
    `<IconButton dataTestId="unique-id" />`,
    "should not change when no import even if 'dataTestId' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent dataTestId="unique-id" />`),
    prependImport(`<OtherComponent dataTestId="unique-id" />`),
    "should not affect other components with 'dataTestId'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { IconButton } from "other-library";
      <IconButton dataTestId="unique-id" />
    `,
    `
      import { IconButton } from "other-library";
      <IconButton dataTestId="unique-id" />
    `,
    "should not change when 'IconButton' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as IconButton } from "other-library";
      <IconButton dataTestId="unique-id" />
    `,
    `
      import { OtherComponent as IconButton } from "other-library";
      <IconButton dataTestId="unique-id" />
    `,
    "should not change when 'IconButton' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as IconButton } from "monday-ui-react-core";
      <IconButton dataTestId="unique-id" />
    `,
    `
      import { OtherComponent as IconButton } from "monday-ui-react-core";
      <IconButton dataTestId="unique-id" />
    `,
    "should not change when 'IconButton' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { IconButton as VibeComponent } from "monday-ui-react-core";
      <VibeComponent dataTestId="unique-id" />
    `,
    `
      import { IconButton as VibeComponent } from "monday-ui-react-core";
      <VibeComponent data-testid="unique-id" />
    `,
    "should change when 'IconButton' is imported with alias from vibe"
  );
});

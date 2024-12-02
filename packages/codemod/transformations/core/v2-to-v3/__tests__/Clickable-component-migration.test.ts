import transform from "../Clickable-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Clickable } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Clickable component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Clickable dataTestId="unique-id" />`),
    prependImport(`<Clickable data-testid="unique-id" />`),
    "should update 'dataTestId' to 'data-testid'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Clickable dataTestId="unique-id" /></div>`),
    prependImport(`<div><Clickable data-testid="unique-id" /></div>`),
    "should update 'dataTestId' to 'data-testid' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Clickable dataTestId="unique-id" name="Test Clickable" />`),
    prependImport(`<Clickable data-testid="unique-id" name="Test Clickable" />`),
    "should update 'dataTestId' to 'data-testid' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Clickable dataTestId="first-unique-id" />
        <Clickable dataTestId="second-unique-id" />
      </>`
    ),
    prependImport(`
      <>
        <Clickable data-testid="first-unique-id" />
        <Clickable data-testid="second-unique-id" />
      </>`),
    "should handle multiple instances of Clickable each with 'dataTestId'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Clickable dataTestId="test-id" data-testid="other-test-id" />`),
    prependImport(`<Clickable dataTestId="test-id" data-testid="other-test-id" />`),
    "should not change when when both 'dataTestId' and 'data-testid' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Clickable dataTestId="test-id" data-testid="test-id" />`),
    prependImport(`<Clickable data-testid="test-id" />`),
    "should remove 'dataTestId' when both 'dataTestId' and 'data-testid' props exist and have same values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Clickable dataTestId="testId" data-testid={testId} />`),
    prependImport(`<Clickable dataTestId="testId" data-testid={testId} />`),
    "should not change when when both 'dataTestId' and 'data-testid' props exist and have different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Clickable dataTestId={"testId"} data-testid="testId" />`),
    prependImport(`<Clickable data-testid="testId" />`),
    "should remove 'dataTestId' when when both 'dataTestId' and 'data-testid' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<Clickable dataTestId="unique-id" />`,
    `<Clickable dataTestId="unique-id" />`,
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
      import { Clickable } from "other-library";
      <Clickable dataTestId="unique-id" />
    `,
    `
      import { Clickable } from "other-library";
      <Clickable dataTestId="unique-id" />
    `,
    "should not change when 'Clickable' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Clickable } from "other-library";
      <Clickable dataTestId="unique-id" />
    `,
    `
      import { OtherComponent as Clickable } from "other-library";
      <Clickable dataTestId="unique-id" />
    `,
    "should not change when 'Clickable' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Clickable } from "monday-ui-react-core";
      <Clickable dataTestId="unique-id" />
    `,
    `
      import { OtherComponent as Clickable } from "monday-ui-react-core";
      <Clickable dataTestId="unique-id" />
    `,
    "should not change when 'Clickable' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Clickable as VibeComponent } from "monday-ui-react-core";
      <VibeComponent dataTestId="unique-id" />
    `,
    `
      import { Clickable as VibeComponent } from "monday-ui-react-core";
      <VibeComponent data-testid="unique-id" />
    `,
    "should change when 'Clickable' is imported with alias from vibe"
  );
});

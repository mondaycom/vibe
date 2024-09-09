import transform from "../Button-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Button } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Button component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Button dataTestId="unique-id">test</Button>`),
    prependImport(`<Button data-testid="unique-id">test</Button>`),
    "should update 'dataTestId' to 'data-testid'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Button dataTestId="unique-id">test</Button></div>`),
    prependImport(`<div><Button data-testid="unique-id">test</Button></div>`),
    "should update 'dataTestId' to 'data-testid' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Button dataTestId="unique-id" name="Test Button">test</Button>`),
    prependImport(`<Button data-testid="unique-id" name="Test Button">test</Button>`),
    "should update 'dataTestId' to 'data-testid' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Button dataTestId="first-unique-id">test</Button>
        <Button dataTestId="second-unique-id">test</Button>
      </>`
    ),
    prependImport(`
      <>
        <Button data-testid="first-unique-id">test</Button>
        <Button data-testid="second-unique-id">test</Button>
      </>`),
    "should handle multiple instances of Button each with 'dataTestId'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Button dataTestId="test-id" data-testid="other-test-id">test</Button>`),
    prependImport(`<Button dataTestId="test-id" data-testid="other-test-id">test</Button>`),
    "should not change when when both 'dataTestId' and 'data-testid' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Button dataTestId="test-id" data-testid="test-id">test</Button>`),
    prependImport(`<Button data-testid="test-id">test</Button>`),
    "should remove 'dataTestId' when both 'dataTestId' and 'data-testid' props exist and have same values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Button dataTestId="testId" data-testid={testId}>test</Button>`),
    prependImport(`<Button dataTestId="testId" data-testid={testId}>test</Button>`),
    "should not change when when both 'dataTestId' and 'data-testid' props exist and have different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Button dataTestId={"testId"} data-testid="testId">test</Button>`),
    prependImport(`<Button data-testid="testId">test</Button>`),
    "should remove 'dataTestId' when when both 'dataTestId' and 'data-testid' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<Button dataTestId="unique-id">test</Button>`,
    `<Button dataTestId="unique-id">test</Button>`,
    "should not change when no import even if 'dataTestId' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent dataTestId="unique-id">test</OtherComponent>`),
    prependImport(`<OtherComponent dataTestId="unique-id">test</OtherComponent>`),
    "should not affect other components with 'dataTestId'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Button } from "other-library";
      <Button dataTestId="unique-id">test</Button>
    `,
    `
      import { Button } from "other-library";
      <Button dataTestId="unique-id">test</Button>
    `,
    "should not change when 'Button' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Button } from "other-library";
      <Button dataTestId="unique-id">test</Button>
    `,
    `
      import { OtherComponent as Button } from "other-library";
      <Button dataTestId="unique-id">test</Button>
    `,
    "should not change when 'Button' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Button } from "monday-ui-react-core";
      <Button dataTestId="unique-id">test</Button>
    `,
    `
      import { OtherComponent as Button } from "monday-ui-react-core";
      <Button dataTestId="unique-id">test</Button>
    `,
    "should not change when 'Button' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Button as VibeComponent } from "monday-ui-react-core";
      <VibeComponent dataTestId="unique-id">test</VibeComponent>
    `,
    `
      import { Button as VibeComponent } from "monday-ui-react-core";
      <VibeComponent data-testid="unique-id">test</VibeComponent>
    `,
    "should change when 'Button' is imported with alias from vibe"
  );
});

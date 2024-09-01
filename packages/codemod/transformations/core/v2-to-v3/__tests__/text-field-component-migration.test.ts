import transform from "../text-field-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { TextField } from "monday-ui-react-core";
    ${source}
  `;
}

describe("TextField component migration", () => {
  describe("dataTestId to data-testId", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<TextField dataTestId="unique-id" />`),
      prependImport(`<TextField data-testid="unique-id" />`),
      "should update 'dataTestId' to 'data-testid'"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<div><TextField dataTestId="unique-id" /></div>`),
      prependImport(`<div><TextField data-testid="unique-id" /></div>`),
      "should update 'dataTestId' to 'data-testid' in a nested structure"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<TextField dataTestId="unique-id" name="Test TextField" />`),
      prependImport(`<TextField data-testid="unique-id" name="Test TextField" />`),
      "should update 'dataTestId' to 'data-testid' while maintaining other props"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(
        `
        <>
          <TextField dataTestId="first-unique-id" />
          <TextField dataTestId="second-unique-id" />
        </>`
      ),
      prependImport(`
        <>
          <TextField data-testid="first-unique-id" />
          <TextField data-testid="second-unique-id" />
        </>`),
      "should handle multiple instances of TextField each with 'dataTestId'"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<TextField dataTestId="test-id" data-testid="other-test-id" />`),
      prependImport(`<TextField dataTestId="test-id" data-testid="other-test-id" />`),
      "should not change when when both 'dataTestId' and 'data-testid' props exist with different literal values"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<TextField dataTestId="test-id" data-testid="test-id" />`),
      prependImport(`<TextField data-testid="test-id" />`),
      "should remove 'dataTestId' when both 'dataTestId' and 'data-testid' props exist and have same values"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<TextField dataTestId="testId" data-testid={testId} />`),
      prependImport(`<TextField dataTestId="testId" data-testid={testId} />`),
      "should not change when when both 'dataTestId' and 'data-testid' props exist and have different complex values"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<TextField dataTestId={"testId"} data-testid="testId" />`),
      prependImport(`<TextField data-testid="testId" />`),
      "should remove 'dataTestId' when when both 'dataTestId' and 'data-testid' props exist with same literal values while one is inside an expression"
    );

    defineInlineTest(
      transform,
      {},
      `<TextField dataTestId="unique-id" />`,
      `<TextField dataTestId="unique-id" />`,
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
        import { TextField } from "other-library";
        <TextField dataTestId="unique-id" />
      `,
      `
        import { TextField } from "other-library";
        <TextField dataTestId="unique-id" />
      `,
      "should not change when 'TextField' is not imported from vibe"
    );

    defineInlineTest(
      transform,
      {},
      `
        import { OtherComponent as TextField } from "other-library";
        <TextField dataTestId="unique-id" />
      `,
      `
        import { OtherComponent as TextField } from "other-library";
        <TextField dataTestId="unique-id" />
      `,
      "should not change when 'TextField' is an alias for another component that is not from vibe"
    );

    defineInlineTest(
      transform,
      {},
      `
        import { OtherComponent as TextField } from "monday-ui-react-core";
        <TextField dataTestId="unique-id" />
      `,
      `
        import { OtherComponent as TextField } from "monday-ui-react-core";
        <TextField dataTestId="unique-id" />
      `,
      "should not change when 'TextField' is an alias for another component from vibe"
    );

    defineInlineTest(
      transform,
      {},
      `
        import { TextField as VibeComponent } from "monday-ui-react-core";
        <VibeComponent dataTestId="unique-id" />
      `,
      `
        import { TextField as VibeComponent } from "monday-ui-react-core";
        <VibeComponent data-testid="unique-id" />
      `,
      "should change when 'TextField' is imported with alias from vibe"
    );
  });

  describe('remove "withReadOnlyStyle" prop', () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<TextField withReadOnlyStyle />`),
      prependImport(`<TextField />`),
      "should remove 'withReadOnlyStyle' prop"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<TextField withReadOnlyStyle={true} />`),
      prependImport(`<TextField />`),
      "should remove 'withReadOnlyStyle' prop if given with a value"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(
        `
        <>
          <TextField withReadOnlyStyle data-testid="t1" />
          <TextField withReadOnlyStyle data-testid="t2" />
        </>`
      ),
      prependImport(`
        <>
          <TextField data-testid="t1" />
          <TextField data-testid="t2" />
        </>`),
      "should handle multiple instances of TextField each with 'withReadOnlyStyle'"
    );

    defineInlineTest(
      transform,
      {},
      `<TextField withReadOnlyStyle />`,
      `<TextField withReadOnlyStyle />`,
      "should not change when no import even if 'withReadOnlyStyle' prop exists"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<OtherComponent withReadOnlyStyle />`),
      prependImport(`<OtherComponent withReadOnlyStyle />`),
      "should not affect other components with 'withReadOnlyStyle'"
    );

    defineInlineTest(
      transform,
      {},
      `
        import { TextField } from "other-library";
        <TextField withReadOnlyStyle />
      `,
      `
        import { TextField } from "other-library";
        <TextField withReadOnlyStyle />
      `,
      "should not change when 'TextField' is not imported from vibe"
    );

    defineInlineTest(
      transform,
      {},
      `
        import { OtherComponent as TextField } from "other-library";
        <TextField withReadOnlyStyle />
      `,
      `
        import { OtherComponent as TextField } from "other-library";
        <TextField withReadOnlyStyle />
      `,
      "should not change when 'TextField' is an alias for another component that is not from vibe"
    );

    defineInlineTest(
      transform,
      {},
      `
        import { OtherComponent as TextField } from "monday-ui-react-core";
        <TextField withReadOnlyStyle />
      `,
      `
        import { OtherComponent as TextField } from "monday-ui-react-core";
        <TextField withReadOnlyStyle />
      `,
      "should not change when 'TextField' is an alias for another component from vibe"
    );

    defineInlineTest(
      transform,
      {},
      `
        import { TextField as VibeComponent } from "monday-ui-react-core";
        <VibeComponent withReadOnlyStyle />
      `,
      `
        import { TextField as VibeComponent } from "monday-ui-react-core";
        <VibeComponent />
      `,
      "should change when 'TextField' is imported with alias from vibe"
    );
  });

  describe('remove "requiredAsterisk" if "required" prop is given', () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<TextField required requiredAsterisk />`),
      prependImport(`<TextField required />`),
      "should remove 'requiredAsterisk' prop when 'required' prop exists"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<TextField requiredAsterisk />`),
      prependImport(`<TextField requiredAsterisk />`),
      "should not remove 'requiredAsterisk' when 'required' prop does not exist"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`
          <>
            <TextField required />
            <TextField requiredAsterisk />
          </>
        `),
      prependImport(`
          <>
            <TextField required />
            <TextField requiredAsterisk />
          </>
        `),
      "should not remove 'requiredAsterisk' when 'required' prop is not present in the same component"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<TextField required requiredAsterisk label="Name" />`),
      prependImport(`<TextField required label="Name" />`),
      "should remove 'requiredAsterisk' when 'required' exists with multiple other props"
    );

    defineInlineTest(
      transform,
      {},
      `<TextField requiredAsterisk />`,
      `<TextField requiredAsterisk />`,
      "should not remove 'requiredAsterisk' when no import even if 'required' prop exists"
    );
  });
});

import transform from "../Box-component-migration";
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
    {},
    prependImport(`<Box border={Box.borders.DEFAULT} />`),
    prependImport(`<Box border />`),
    "should update 'Box.borders.DEFAULT' to 'true'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Box border={Box.borders.DEFAULT} /></div>`),
    prependImport(`<div><Box border /></div>`),
    "should update 'Box.borders.DEFAULT' to 'true' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Box border={Box.borders.DEFAULT} disabled />`),
    prependImport(`<Box border disabled />`),
    "should update 'Box.borders.DEFAULT' to 'true' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Box border={Box.borders.DEFAULT} />
        <Box />
      </>`
    ),
    prependImport(`
      <>
        <Box border />
        <Box />
      </>`),
    "should handle multiple instances of Box"
  );

  defineInlineTest(
    transform,
    {},
    `<Box border={Box.borders.DEFAULT} />`,
    `<Box border={Box.borders.DEFAULT} />`,
    "should not change when no import even if 'border' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent border={Box.borders.DEFAULT} />`),
    prependImport(`<OtherComponent border={Box.borders.DEFAULT} />`),
    "should not affect other components with border={Box.borders.DEFAULT}"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Counter } from "other-library";
      <Box border={Box.borders.DEFAULT} />
    `,
    `
      import { Counter } from "other-library";
      <Box border={Box.borders.DEFAULT} />
    `,
    "should not change when 'Box' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Box } from "other-library";
       <Box border={Box.borders.DEFAULT} />
    `,
    `
      import { OtherComponent as Box } from "other-library";
       <Box border={Box.borders.DEFAULT} />
    `,
    "should not change when 'Box' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Box } from "monday-ui-react-core";
      <Box border={Box.borders.DEFAULT} />
    `,
    `
      import { OtherComponent as Box } from "monday-ui-react-core";
      <Box border={Box.borders.DEFAULT} />
    `,
    "should not change when 'Box' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Box as VibeComponent } from "monday-ui-react-core";
      <VibeComponent border={Box.borders.DEFAULT} />
    `,
    `
      import { Box as VibeComponent } from "monday-ui-react-core";
      <VibeComponent border />
    `,
    "should change when 'Box' is imported with alias from vibe"
  );
});

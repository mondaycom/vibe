import transform from "../attention-box-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { AttentionBox } from "monday-ui-react-core";
    ${source}
  `;
}

describe("AttentionBox component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName="old-class" />`),
    prependImport(`<AttentionBox className="old-class" />`),
    "should update 'componentClassName' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><AttentionBox componentClassName="old-class" /></div>`),
    prependImport(`<div><AttentionBox className="old-class" /></div>`),
    "should update 'componentClassName' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName="old-class" type="info" />`),
    prependImport(`<AttentionBox className="old-class" type="info" />`),
    "should update 'componentClassName' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <AttentionBox componentClassName="old-class" />
        <AttentionBox componentClassName="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <AttentionBox className="old-class" />
        <AttentionBox className="another-class" />
      </>`),
    "should handle multiple instances of AttentionBox each with 'componentClassName'"
  );

  defineInlineTest(
    transform,
    {},
    `<AttentionBox componentClassName="old-class" />`, // No import for AttentionBox
    `<AttentionBox componentClassName="old-class" />`,
    "should not change when no import even if 'componentClassName' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent componentClassName="old-class" />`),
    prependImport(`<OtherComponent componentClassName="old-class" />`),
    "should not affect other components with 'componentClassName'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent } from "monday-ui-react-core";
      <AttentionBox componentClassName="old-class" />
    `,
    `
      import { OtherComponent } from "monday-ui-react-core";
      <AttentionBox componentClassName="old-class" />
    `,
    "should not change when 'AttentionBox' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as AttentionBox } from "monday-ui-react-core";
      <AttentionBox componentClassName="old-class" />
    `,
    `
      import { OtherComponent as AttentionBox } from "monday-ui-react-core";
      <AttentionBox componentClassName="old-class" />
    `,
    "should not change when 'AttentionBox' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { AttentionBox as VibeComponent } from "monday-ui-react-core";
      <VibeComponent componentClassName="old-class" />
    `,
    `
      import { AttentionBox as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'AttentionBox' is imported with alias from vibe"
  );
});
